import { connect } from "react-redux";
import {changeSearch} from '../actionCreators';
import SearchForm from "../components/SearchForm";

function mapStateToProps(state){
    const {searchForm} = state;
    return {searchForm};
}

function mapDispatchToProps(dispatch){
    return{
        changeSearch: (value) => dispatch(changeSearch(value))
    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(SearchForm);