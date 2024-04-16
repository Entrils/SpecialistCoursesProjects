import { connect } from "react-redux";
import AddBookForm from "../components/AddBookForm";
import {addBook, changeAuthor, changePrice,changeTitle} from '../actionCreators';

function mapStateToProps(state){
    const {addBookForm} = state;
    return {...addBookForm};
}

function mapDispatchToProps(dispatch){
    return{
        addBook: (book) => dispatch(addBook(book)),
        changeAuthor: (value) => dispatch(changeAuthor(value)),
        changePrice: (value) => dispatch(changePrice(value)),
        changeTitle: (value) => dispatch(changeTitle(value)),
    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(AddBookForm);