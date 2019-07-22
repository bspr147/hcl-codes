import React, {Component} from 'react';
import './areaform.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as areaformActions from "../../store/areaform/actions";
export default class AreaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  }
// export default connect(
//     ({ areaform }) => ({ ...areaform }),
//     dispatch => bindActionCreators({ ...areaformActions }, dispatch)
//   )( areaform );