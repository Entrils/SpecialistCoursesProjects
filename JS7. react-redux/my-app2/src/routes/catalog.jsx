import {Outlet, NavLink, useSearchParams} from  'react-router-dom';
import dataBook from '../data';

export default function Catalog(){

    let  [searchParams, setSearchParams] = useSearchParams();

    return(
        <section>
            <h2>Каталог</h2>
        <input
            value={searchParams.get("filter") || ""}
            onChange={ ev =>{
                let filter = ev.target.value;
                if (filter){ 
                    setSearchParams({filter})
                } else {
                    setSearchParams({});
                }
            }}
        />

            <nav>
                {dataBook.filter( book =>{
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let title = book.title.toLocaleLowerCase();
                    return title.startsWith(filter.toLocaleLowerCase());
}).map( book =>(
                    <NavLink
                    to={`/catalog/${book.id}`}
                    style={({isActive}) => {
                        return{
                            color: isActive ? '#336699' : '',
                            fontWeight: isActive ? 'bold' : 'normal',
                        }
                    }}
                    >
                        {book.title}
                    </NavLink>
                ))}
            </nav>
            <Outlet></Outlet>
        </section>
    )
}