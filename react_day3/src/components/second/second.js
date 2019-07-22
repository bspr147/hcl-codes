import React, {Component} from 'react';
import './second.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as secondActions from "../../store/second/actions";
export default class Second extends Component {
  render() {
    const greeting = 'Prasanna taking React Training...';

    return <h1>{greeting}</h1>;
  }
  }
// export default connect(
//     ({ second }) => ({ ...second }),
//     dispatch => bindActionCreators({ ...secondActions }, dispatch)
//   )( second );