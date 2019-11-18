import React, {Component} from 'react';
import './calc.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as calcActions from "../../store/calc/actions";
export default class Calc extends Component {
  
  constructor(props) {  
    super(props);  
    this.state = {  
        companyName: '',
        firstName : 'welcome',
        secondName : 'bye'
    };  
    this.handleClick=this.handleClick.bind(this);
}  
changeText(event) {  
    this.setState({  
        companyName: event.target.value
        // firstName:event.target.value,
        // lastName:event.target.value
    });  
}  
handleClick(event) {
  alert("welcome to events...");
  alert(this.state.companyName);
}
render() {  
    return (  
        <div>  
            <h2>Simple Event Example</h2>  
            <label htmlFor="name">Enter company name: </label>  
            <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
            {/* <h4>You entered: { this.state.companyName }</h4>   */}
          
            <input type="button" value="Show" onClick={this.handleClick} />
        </div>  
    );  
}  
}  