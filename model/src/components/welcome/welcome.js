import React, {Component} from 'react';
import './welcome.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as welcomeActions from "../../store/welcome/actions";
export default class Welcome extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    startTest = () => {
      // alert(this.state.firstName);
      localStorage.removeItem("fname");
      localStorage.removeItem("lname");
      localStorage.removeItem("mi");
      localStorage.removeItem("qual");
      localStorage.removeItem("city");
      localStorage.removeItem("st");
      localStorage.removeItem("company");
      localStorage.removeItem("instructor");
      this.props.history.push('/firstq')
     }
    
    render() {
      return <div className="component-welcome">Hello! component welcome
      Please Start test 
      <input type="button" onClick={this.startTest} value="Start Test" />
      </div>;
    }
  }
// export default connect(
//     ({ welcome }) => ({ ...welcome }),
//     dispatch => bindActionCreators({ ...welcomeActions }, dispatch)
//   )( welcome );