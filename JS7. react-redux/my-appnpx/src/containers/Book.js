import { connect } from "react-redux";
import App from "../App";
import {addBookToBasket} from '../actionCreators';

function mapStateToProps(state){
    const {dataBook} = state;
    return {dataBook};
}
function mapDispatchToProps(dispatch){
    return{
        addBookToBasket: (id) => dispatch(addBookToBasket(id))
    }
}


export  default connect(mapStateToProps, mapDispatchToProps)(App);