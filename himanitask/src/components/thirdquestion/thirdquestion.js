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

  prevButton = () => {
    this.props.history.push('/secondq')
  }

  constructor(props) {  
    super(props);  
   // alert(localStorage.getItem("company"));
    if(localStorage.getItem("company")!==undefined) {
      this.state = {  
        companyName: localStorage.getItem("company"),
        instructor : localStorage.getItem("instructor"),
    };  
    } else {
      this.state = {  
        companyName: '',
        instructor : '',
    };    
    }
    
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
            <h2>Work History</h2>
            <table border="3">
              <tr>
                <th>
                <label htmlFor="name">Previous company : </label>  
                </th>
                <td>
                <input type="text" id="companyName" value={this.state.companyName} onChange={this.changeText.bind(this)}/>
                </td>
              </tr>
              <tr>
                <th>
                <label htmlFor="instructor">Manager Name</label>
                </th>
                <td>
                <input type="text" id="instructorName" value={this.state.instructor} onChange={this.changeInstructor.bind(this)} />
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                <input type="button" onClick={this.prevButton} value="Prev Question" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" onClick={this.summary} value="Summary" />
                </th>
                </tr>
              </table>  
        </div>  
    );  
}  

  }
// export default connect(
//     ({ thirdquestion }) => ({ ...thirdquestion }),
//     dispatch => bindActionCreators({ ...thirdquestionActions }, dispatch)
//   )( thirdquestion );