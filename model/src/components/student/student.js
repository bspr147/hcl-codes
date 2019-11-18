import React, {Component} from 'react';
import './student.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as studentActions from "../../store/student/actions";
export default class Student extends Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
          firstName:'Himani',
          lastName:'Tomar',
          mi:'V'
        };
       // alert(this.state.firstName);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
     }
    nextButton = () => {
     // alert(this.state.firstName);
      localStorage.setItem("fname",this.state.firstName);
      localStorage.setItem("lname",this.state.lastName);
      localStorage.setItem("mi",this.state.mi);
      this.props.history.push('/nameex')
    }
    render() {
      return <div className="component-student">
          <p>First Name 
            <input type="text" name="firstName" onChange={this.handleChange}
              value={this.state.firstName} />
          </p> 
          <p>Mi : 
            <input type="text" name="mi" value={this.state.mi} onChange={this.handleChange} />
          </p>
          <p>Last Name 
            <input type="text" name="lastName" onChange={this.handleChange}
              value={this.state.lastName}
            />
          </p>
          <p>
            <input type="button" onClick={this.nextButton} 
              value="Next Question" />
            </p>
        </div>;
    }
  }
// export default connect(
//     ({ student }) => ({ ...student }),
//     dispatch => bindActionCreators({ ...studentActions }, dispatch)
//   )( student ); 