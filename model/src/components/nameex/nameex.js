import React, {Component} from 'react';
import './nameex.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as nameexActions from "../../store/nameex/actions";
export default class Nameex extends Component {
  nextButton = () => {
    this.props.history.push('/first')
  }
  prevButton = () => {
    this.props.history.push('/student')
  }
     constructor(props) {
         super(props);
         this.state = {value: ''};
         this.handleChange=this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
     }
     handleChange(event) {
      this.setState({value: event.target.value});
     }
     handleSubmit(event) {
       localStorage.setItem("name",this.state.value);
      alert('A name was submitted: ' + this.state.value);
      alert(localStorage.getItem("name"));
     }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          Name:
          <input type="text" onChange={this.handleChange} 
            value={this.state.value} />
        </label>
        <input type="submit" value="Submit" />
        <br/>
        <p>
            <input type="button" onClick={this.nextButton} value="Next Question" />
            </p>
            <p>
            <input type="button" onClick={this.prevButton} value="Previous Question" />
            </p>
        </form>
      );
    }
  }
// export default connect(
//     ({ nameex }) => ({ ...nameex }),
//     dispatch => bindActionCreators({ ...nameexActions }, dispatch)
//   )( nameex );