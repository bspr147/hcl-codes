import React, {Component} from 'react';
import './dropdownc.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as dropdowncActions from "../../store/dropdownc/actions";
export default class dropdownc extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-dropdownc">Hello! component dropdownc</div>;
    }
  }
// export default connect(
//     ({ dropdownc }) => ({ ...dropdownc }),
//     dispatch => bindActionCreators({ ...dropdowncActions }, dispatch)
//   )( dropdownc );