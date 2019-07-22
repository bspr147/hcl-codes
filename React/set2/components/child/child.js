import React, {Component} from 'react';
import './child.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as childActions from "../../store/child/actions";
export default class Child extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render(){ 
      return( 
              <div> 
                  <h2>Hello, {this.props.name}</h2> 
                  <h3>You are inside Child Component</h3> 
                  <h3>Your user id is: {this.props.userId}</h3> 
              </div> 
          ); 
  } 
  }
// export default connect(
//     ({ child }) => ({ ...child }),
//     dispatch => bindActionCreators({ ...childActions }, dispatch)
//   )( child );