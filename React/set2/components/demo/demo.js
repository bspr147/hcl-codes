import React, {Component} from 'react';
import './demo.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as demoActions from "../../store/demo/actions";
export default class Demo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render(){ 
      return( 

              <div> 
                  {/*accessing information from props */} 
                  <h2>Hello {this.props.user}</h2> 
                  <h3>Welcome to GeeksforGeeks</h3> 
              </div> 
          ); 
  } 
  }
// export default connect(
//     ({ demo }) => ({ ...demo }),
//     dispatch => bindActionCreators({ ...demoActions }, dispatch)
//   )( demo );