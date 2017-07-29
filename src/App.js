import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      nextVal: "X"
    };
  }

  onClick(e) {
    const clickedEleVal = e.target.innerText;
    if (!clickedEleVal) {
      const clickedEleClass = e.target.className;
      let valueToFill = this.state.nextVal;
      let nextVal = (valueToFill === "X") ? "0" : "X";

      this.setState({
        [clickedEleClass]: valueToFill,
        nextVal
      });
    }
  }

  render() {
    const {
      box_1,
      box_2,
      box_3,
      box_4,
      box_5,
      box_6,
      box_7,
      box_8,
      box_9,
    } = this.state;

    return (
      <table onClick={this.onClick} className="tic_tac_toe">
        <tbody>
          <tr>
            <td className="box_1">{box_1}</td>
            <td className="box_2">{box_2}</td>
            <td className="box_3">{box_3}</td>
          </tr>
          <tr>
            <td className="box_4">{box_4}</td>
            <td className="box_5">{box_5}</td>
            <td className="box_6">{box_6}</td>
          </tr>
          <tr>
            <td className="box_7">{box_7}</td>
            <td className="box_8">{box_8}</td>
            <td className="box_9">{box_9}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
