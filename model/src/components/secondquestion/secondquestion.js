import React, {Component} from 'react';
import './secondquestion.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as secondquestionActions from "../../store/secondquestion/actions";
export default class SecondQuestion extends Component {
  constructor(props) {  
    super(props);  
    if(localStorage.getItem("qual") !=undefined) {
      this.state = {  
        qualification: localStorage.getItem("qual"),
        city : localStorage.getItem("city"),
        state : localStorage.getItem("st")
      };  
    } else {
      this.state = {  
        qualification: '',
        city : '',
        state : ''
      };    
    }
    
}  
nextButton = () => {
  // alert(this.state.firstName);
 // alert(this.state.qualification);
   localStorage.setItem("qual",this.state.qualification);
   localStorage.setItem("city",this.state.city);
   localStorage.setItem("st",this.state.state);
   this.props.history.push('/thirdq')
 }

 prevButton = () => {
  this.props.history.push('/firstq')
}
changeQualification(event) {  
    this.setState({  
        qualification: event.target.value
    });  
}
changeCity(event) {  
  this.setState({  
      city: event.target.value
  });  
}  


changeState(event) {  
  this.setState({  
      state: event.target.value
  });  
}  

render() {  
    return (  
        <div>  
            <h2>Simple Event Example</h2>  
            <label htmlFor="Qualification">Enter Qualification </label>  
            <input type="text" id="qualification" value={this.state.qualification} onChange={this.changeQualification.bind(this)}/>  
            <br/>
            <label htmlFor="City">Enter City</label>
            <input type="text" id="city" value={this.state.city} onChange={this.changeCity.bind(this)} />
            <br/>
            <label htmlFor="mi">Enter State</label>
            <input type="text" id="state" value={this.state.state} onChange={this.changeState.bind(this)} />            
           
        <p>
            <input type="button" onClick={this.nextButton} value="Next Question" />
            </p>
            <p>
            <input type="button" onClick={this.prevButton} value="Previous Question" />
            </p>

        </div>  
    );
  }
  }
// export default connect(
//     ({ secondquestion }) => ({ ...secondquestion }),
//     dispatch => bindActionCreators({ ...secondquestionActions }, dispatch)
//   )( secondquestion );