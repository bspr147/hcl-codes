import React, {Component} from 'react';
import Child from '../child/child';
import './parent.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as parentActions from "../../store/parent/actions";
export default class Parent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render(){ 
      return( 
              <div> 
                  <h2>You are inside Parent Component</h2> 
                  <Child name="Prasanna" userId = "1234"/> 
              </div> 
          ); 
  } 
  }
// export default connect(
//     ({ parent }) => ({ ...parent }),
//     dispatch => bindActionCreators({ ...parentActions }, dispatch)
//   )( parent );