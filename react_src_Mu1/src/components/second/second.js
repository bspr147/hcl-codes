import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Third from '../third/third';
import Bookmarks from '@material-ui/icons/Bookmarks';
import TextField from '@material-ui/core/TextField';
import './second.scss'
import Cardnew from '../cardnew/cardnew';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as secondActions from "../../store/second/actions";
export default class Second extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
       <div>
        <Button variant="outlined" color="primary">
          <Bookmarks></Bookmarks>
            Chaper 2
        </Button>
        <Third/> 
      <Cardnew/>
        <TextField
         placeholder="Placeholder here"
         label="Basic TextField" />
        </div>
      );
    }
  }
// export default connect(
//     ({ second }) => ({ ...second }),
//     dispatch => bindActionCreators({ ...secondActions }, dispatch)
//   )( second );