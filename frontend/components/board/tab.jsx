import React from 'react';

// Components

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  drumkit() {
    const tracks = {
      1: "kick1",
      2: "kick2",
      3: "snare1",
      4: "snare2",
      5: "snare3",
      6: "hi-hat1",
      7: "hi-hat2",
      8: "clap"
    };

    let drumkitListItems = [];

    for (let row = 1; row < 9; row++) {
      drumkitListItems.push(this.renderRow(row,tracks[row]));
    }

    return(
      <ul className="drumkit-tracks">
        {drumkitListItems}
      </ul>
    );
  }

  melody() {
    const tracks = {
      9: "C",
      10: "D",
      11: "Eb",
      12: "F",
      13: "G",
      14: "Ab",
      15: "Bb",
      16: "C2"
    };

    let melodyListItems = [];

    for (let row = 9; row < 17; row++) {
      melodyListItems.push(this.renderRow(row,tracks[row]));
    }

    return(
      <ul className="melody-tracks">
        {melodyListItems}
      </ul>
    );
  }

  renderRow(row,track) {
    let cells = [];

    for (let col = 1; col < 17; col++) {
      cells.push(<li className={`cell-row${row}-col${col}`} key={`cell-${row}-${col}`}></li>);
    }

    return(
      <li className={`row-${track}`} key={`row-${track}`}>
        <div className={`label-${track}`}>{track}</div>
        <div className="cell-container">
          <ul className={`cells-${track}`}>
            {cells}
          </ul>
        </div>
      </li>
    );
  }

  render() {
    let tabName = "tab-" + this.props.tab;

    if (this.props.tab === "drumkit") {
      return(
        <div className="drumkit-tracks-container">
          {this.drumkit()}
        </div>
      );
    } else {
      return(
        <div className="melody-tracks-container">
          {this.melody()}
        </div>
      );
    }
  }
}

export default Tab;
