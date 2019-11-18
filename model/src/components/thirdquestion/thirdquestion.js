import React, {Component} from 'react';
import './thirdquestion.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as thirdquestionActions from "../../store/thirdquestion/actions";
export default class ThirdQuestion extends Component {
      
  summary = () => {
    //alert(this.state.companyName);
    //alert(this.state.instructor);
    localStorage.setItem("company",this.state.companyName);
    localStorage.setItem("instructor",this.state.instructor);
    this.props.history.push('/summary')  
  }

  nextButton = () => {
    this.props.history.push('/secondq')
  }

  constructor(props) {  
    super(props);  
    this.state = {  
        companyName: '',
        instructor : '',
    };  
}  

changeText(event) {  
    this.setState({  
        companyName: event.target.value
    });  
}
changeInstructor(event) {  
  this.setState({  
      instructor: event.target.value
  });  
}  

render() {  
    return (  
        <div>  
            <h2>Simple Event Example</h2>  
            <label htmlFor="name">Enter company name: </label>  
            <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
            <br/>
            <label htmlFor="instructor">Enter instructor Name</label>
            <input type="text" id="instructorName" onChange={this.changeInstructor.bind(this)} />
            <p>
            <input type="button" onClick={this.nextButton} value="Prev Question" />
            </p>
            <p>
            <input type="button" onClick={this.summary} value="Summary" />
            </p>

        </div>  
    );  
}  

  }
// export default connect(
//     ({ thirdquestion }) => ({ ...thirdquestion }),
//     dispatch => bindActionCreators({ ...thirdquestionActions }, dispatch)
//   )( thirdquestion );