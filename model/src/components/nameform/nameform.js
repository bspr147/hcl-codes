import React, {Component} from 'react';
import './nameform.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as nameformActions from "../../store/nameform/actions";
export default class Nameform extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <form>
        <label>
          First Name:
          <input type="text" />
        </label>  <br/>
        <label>
          Last Name :
          <input type="text" /> 
        </label> <br/>
        <label>
          Pick your favorite flavor:
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label> <br/>
        <label>
          Select Your Student
          <select>
            <option value="Himani">Tomar</option>
            <option value="Chetan">Chetan</option>
            <option value="Ram">Chandran</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
    }
  }
// export default connect(
//     ({ nameform }) => ({ ...nameform }),
//     dispatch => bindActionCreators({ ...nameformActions }, dispatch)
//   )( nameform );