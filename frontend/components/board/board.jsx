import React from 'react';
import TabContainer from './tab_container';

// Components

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedTab: "drumkit"};
  }

  changeTab(tab) {
    return (e) => {
      e.preventDefault();
      this.setState({selectedTab: tab});
    };
  }

  isActive (tab) {
    return ((tab === this.state.selectedTab) ? "active" : "default" );
  }

  render() {
    return(
      <div className="board-container">
        <div className="tab-buttons">
          <div className={`btn-drumkit ${this.isActive("drumkit")}`}
               onClick={this.changeTab("drumkit")}>
            DRUMS
          </div>
          <div className={`btn-melody ${this.isActive("melody")}`}
               onClick={this.changeTab("melody")}>
            MELODY
          </div>
        </div>

        <TabContainer tab={this.state.selectedTab} />
      </div>
    );
  }
}

export default Board;
