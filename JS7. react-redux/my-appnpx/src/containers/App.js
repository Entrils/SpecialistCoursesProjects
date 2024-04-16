import { connect } from "react-redux";
import App from "../App";
import {addBookToBasket} from '../actionCreators';

function mapStateToProps(state){
    const {dataBook, seaerchForm} = state;
    return {dataBook, seaerchForm};
}
function mapDispatchToProps(dispatch){
    return{
        addBookToBasket: (id) => dispatch(addBookToBasket(id))
    }
}


export  default connect(mapStateToProps, mapDispatchToProps)(App);