import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './first.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as firstActions from "../../store/first/actions";
export default class First extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <Button variant="contained" color="primary">
          Welcome Material UI
        </Button>
      );
    }
  }
// export default connect(
//     ({ first }) => ({ ...first }),
//     dispatch => bindActionCreators({ ...firstActions }, dispatch)
//   )( first );