import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        2023 © Web Project{" "}
        <div
          className="footer-test-app"
          onClick={() => this.props.navigation("/todo")}
        >
          Test application
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <Footer {...props} navigation={navigation} />;
}
