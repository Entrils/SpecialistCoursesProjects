import { connect } from "react-redux";
import Basket from "../components/Basket";
import {removeBookFromBasket} from '../actionCreators';

function mapStateToProps(state){
    const {items, dataBook} = state;
    return {items, dataBook};
}

function mapDispatchToProps(dispatch){
    return{
        removeBookFromBasket: (id) => dispatch(removeBookFromBasket(id))
    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(Basket);