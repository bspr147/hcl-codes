import React, {Component} from 'react';
import './summary.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as summaryActions from "../../store/summary/actions";
export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.firstName=localStorage.getItem("fname");
        this.lastName=localStorage.getItem("lname");
        this.mi=localStorage.getItem("mi");
        this.qual=localStorage.getItem("qual");
        this.city=localStorage.getItem("city"); 
        this.st=localStorage.getItem("st");
      //  alert(localStorage.getItem("company"));
        this.company=localStorage.getItem("company");
        this.instructor=localStorage.getItem("instructor");
        //alert(this.qual);
        this.state = {};
    }

    prevButton = () => {
      this.props.history.push('/thirdq')
    }
    
    submitButton = () => {
      this.props.history.push('/finalSummary')
    }
    render() {
      return <div className="component-summary">Hello! component summary
      <p>
      FirstName : {this.firstName}
      </p>
      <p>
        LastName : {this.lastName}
        </p>
      <p>
        Mi : {this.mi}
        </p>
        <p>
          Qualification : {this.qual}
        </p>
        <p>
          City : {this.city}
        </p>
        <p>
          State : {this.st}
        </p>
        <p>
          Company : {this.company}
        </p>
        <p>
          Instructor : {this.instructor}
        </p>
        <p>
            <input type="button" onClick={this.submitButton} value="Final Submit" />
            </p>
            <p>
            <input type="button" onClick={this.prevButton} value="Previous Question" />
            </p>

      </div>;
    }
  }
// export default connect(
//     ({ summary }) => ({ ...summary }),
//     dispatch => bindActionCreators({ ...summaryActions }, dispatch)
//   )( summary );