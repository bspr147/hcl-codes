import React, {Component} from 'react';
import './square.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as squareActions from "../../store/square/actions";
export default class Square extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
// export default connect(
//     ({ square }) => ({ ...square }),
//     dispatch => bindActionCreators({ ...squareActions }, dispatch)
//   )( square );