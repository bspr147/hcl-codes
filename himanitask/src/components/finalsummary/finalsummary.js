import React, {Component} from 'react';
import './finalsummary.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as finalsummaryActions from "../../store/finalsummary/actions";
export default class FinalSummary extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-finalsummary">
        Hello! component finalsummary...You successfully submitted exam.
        We will announce results soon...
        </div>;
    }
  }
// export default connect(
//     ({ finalsummary }) => ({ ...finalsummary }),
//     dispatch => bindActionCreators({ ...finalsummaryActions }, dispatch)
//   )( finalsummary );