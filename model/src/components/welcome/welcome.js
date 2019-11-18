import React, {Component} from 'react';
import './welcome.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as welcomeActions from "../../store/welcome/actions";
export default class welcome extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-welcome">Hello! component welcome</div>;
    }
  }
// export default connect(
//     ({ welcome }) => ({ ...welcome }),
//     dispatch => bindActionCreators({ ...welcomeActions }, dispatch)
//   )( welcome );