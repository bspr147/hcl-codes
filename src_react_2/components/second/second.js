import React, {Component} from 'react';
import './second.scss'
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
          <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </div>
        );
      }
  }
// export default connect(
//     ({ second }) => ({ ...second }),
//     dispatch => bindActionCreators({ ...secondActions }, dispatch)
//   )( second );