import React, {Component} from 'react';
import './demo.scss'
import Square from '../square/square';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as demoActions from "../../store/demo/actions";
export default class Demo extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
    render() {
      const status = 'Next player: X';

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );  
    }
  }
// export default connect(
//     ({ demo }) => ({ ...demo }),
//     dispatch => bindActionCreators({ ...demoActions }, dispatch)
//   )( demo );