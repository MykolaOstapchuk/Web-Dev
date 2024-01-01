import React, { Component } from "react";

import "./Main.css";

class Main extends Component {
  render() {
    const { params } = this.props;
    const Box = this.props.mainPage;

    return (
      <div className="main">
        <Box params={params} />
      </div>
    );
  }
}

export default Main;
