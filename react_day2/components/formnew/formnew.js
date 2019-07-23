import React, {Component} from 'react';
import './formnew.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as formnewActions from "../../store/formnew/actions";
export default class FormNew extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  }
// export default connect(
//     ({ formnew }) => ({ ...formnew }),
//     dispatch => bindActionCreators({ ...formnewActions }, dispatch)
//   )( formnew );