import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './third.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as thirdActions from "../../store/third/actions";
export default class Third extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return(
        <div>
        <AppBar position="static">
            <Toolbar>
                React Material UI Example
            </Toolbar>
        </AppBar>
        </div>
    )
    }
  }
// export default connect(
//     ({ third }) => ({ ...third }),
//     dispatch => bindActionCreators({ ...thirdActions }, dispatch)
//   )( third );