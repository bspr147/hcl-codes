import React, {Component} from 'react';
import './firstquestion.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as firstquestionActions from "../../store/firstquestion/actions";
export default class FirstQuestion extends Component {
  constructor(props) {  
    super(props);  
  //  alert(localStorage.getItem("fname"));
    if(localStorage.getItem("fname")!==undefined) {
      //alert("Setting State Upd");
      this.state = {  
        firstName: localStorage.getItem("fname") ,
        lastName : localStorage.getItem("lname") ,
        mi : localStorage.getItem("mi")
      };    
    } else {
      this.state = {  
        firstName: '',
        lastName : '',
        mi : ''
      };  
    }
    
}  
nextButton = () => {
  // alert(this.state.firstName);
   localStorage.setItem("fname",this.state.firstName);
   localStorage.setItem("lname",this.state.lastName);
   localStorage.setItem("mi",this.state.mi);
   this.props.history.push('/secondq')
 }


changeFirstName(event) {  
    this.setState({  
        firstName: event.target.value
    });  
}
changeLastName(event) {  
  this.setState({  
      lastName: event.target.value
  });  
}  


changeMi(event) {  
  this.setState({  
      mi: event.target.value
  });  
}  

render() {  
    return (  
        <div>  
            <h2>Personal Information</h2> 
            <table border="3">
              <tr>
                <th>
                <label htmlFor="firstName">First name: </label>        
                </th>
                <td>
                <input type="text" id="firstName" value={this.state.firstName} onChange={this.changeFirstName.bind(this)}/>                    
                  </td>
              </tr>
              <tr>
                <th>
                <label htmlFor="lastName">Last Name</label>
                </th>
                <td>
                <input type="text" id="lastName" value={this.state.lastName} onChange={this.changeLastName.bind(this)} />
                </td>
              </tr>
              <tr>
                <th>
                <label htmlFor="mi">MI</label>      
                </th>
                <td>
                <input type="text" id="mi" value={this.state.mi} onChange={this.changeMi.bind(this)} />            
                </td>
              </tr>
              <tr>
                <th colspan="2">
                <input type="button" onClick={this.nextButton} 
              value="Next Question" />                  
                </th>
              </tr>
              </table>  

        </div>  
    );
  }
}