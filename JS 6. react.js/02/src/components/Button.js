import './Button.css';
import { Component } from 'react'

// const Button = function (props){

//     const {onClickHandler, value} = props;

//     return <button className='btn' onClick={onClickHandler}>
//         {value}
//     </button>
// }

class Button extends Component {
  render(){
    const {onClickHandler, value} = this.props;
    return <button className='btn' onClick={onClickHandler}>
         {value}
    </button>
  }
}

export default Button