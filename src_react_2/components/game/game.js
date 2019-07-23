import React, {Component} from 'react';
import Board from '../board/board';

import './game.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as gameActions from "../../store/game/actions";
export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
  }
// export default connect(
//     ({ game }) => ({ ...game }),
//     dispatch => bindActionCreators({ ...gameActions }, dispatch)
//   )( game );