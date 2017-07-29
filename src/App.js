import React, { Component } from 'react';
import './App.css';
import cloneDeep from "lodash/cloneDeep";

class App extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      valueToFill: "X", // "X" or "0"
      gameState: -1, //not started: -1, stated: 0, over: 1
      valuesArray:[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      winner: "" // "X" or "0"
    };
  }

  onClick(e) {
    const clickedEleVal = e.target.innerText;
    if (!clickedEleVal) {
      const clickedEleDataSetId = e.target.dataset.id;
      const [
        indexX,
        indexY
      ] = clickedEleDataSetId.split("_");

      const valuesArray = cloneDeep(this.state.valuesArray);
      let valueToFill = this.state.valueToFill;
      valuesArray[indexX][indexY] = valueToFill;

      const winner = this.findWinner(valueToFill, valuesArray);
      valueToFill = (valueToFill === "X") ? "0" : "X";

      this.setState({
        valuesArray,
        valueToFill,
        gameState: winner ? 1 : 0,
        winner
      });
    }
  }

  findWinner(currentVal, valuesArray) {
    const matchVal = currentVal.repeat(3);

    // Check the winner in the rows
    for (let i = 0; i < valuesArray.length; i++) {
      const rowInString = valuesArray[i].join("");
      if (rowInString === matchVal) {
        return currentVal;
      }
    }

    // Check the winner in the columns
    for (let i = 0; i < valuesArray.length; i++) {
      const rowInString = valuesArray[0][i].concat(valuesArray[1][i], valuesArray[2][i]);
      if (rowInString === matchVal) {
        return currentVal;
      }
    }

    // Check the winner in diagonals
    let rowInString = valuesArray[0][0].concat(valuesArray[1][1], valuesArray[2][2]);
    if (rowInString === matchVal) {
      return currentVal;
    }
    rowInString = valuesArray[0][2].concat(valuesArray[1][1], valuesArray[2][0]);
    if (rowInString === matchVal) {
      return currentVal;
    }

    return "";
  }

  render() {
    const valuesArray = this.state.valuesArray;
    return (
      <div>
        <table onClick={this.onClick} className="tic_tac_toe">
          <tbody>
            <tr>
              <td data-id="0_0">{valuesArray[0][0]}</td>
              <td data-id="0_1">{valuesArray[0][1]}</td>
              <td data-id="0_2">{valuesArray[0][2]}</td>
            </tr>
            <tr>
              <td data-id="1_0">{valuesArray[1][0]}</td>
              <td data-id="1_1">{valuesArray[1][1]}</td>
              <td data-id="1_2">{valuesArray[1][2]}</td>
            </tr>
            <tr>
              <td data-id="2_0">{valuesArray[2][0]}</td>
              <td data-id="2_1">{valuesArray[2][1]}</td>
              <td data-id="2_2">{valuesArray[2][2]}</td>
            </tr>
          </tbody>
        </table>

        {this.state.winner ?
          <div>Winner: {this.state.winner}</div>
        : "" }

        <div>Game state: {this.state.gameState}</div>
      </div>
    );
  }
}

export default App;
