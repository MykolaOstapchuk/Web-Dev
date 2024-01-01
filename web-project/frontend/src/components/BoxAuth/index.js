import React, { Component } from "react";
import { Card, Container } from "reactstrap";

import LoginForm from "./elements/LoginForm";
import login from "../../media/images/login.png";
import RegistrationForm from "./elements/RegistrationForm";

import "./BoxAuth.css";

class BoxAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegistrationModal: false,
    };
  }

  toggleRegistrationModal = () => {
    this.setState({
      showRegistrationModal: !this.state.showRegistrationModal,
    });
  };

  render() {
    return (
      <Container className="box-auth__wrapper">
        <div className="col-md-8 col-sm-10 mx-auto p-0">
          <Card className="box-auth">
            <div className="row">
              <div className="col">
                <img className="img-fluid" src={login}></img>
              </div>
              <div className="col">
                <LoginForm
                  toggleRegistrationModal={this.toggleRegistrationModal}
                />
              </div>
            </div>
          </Card>
        </div>
        <RegistrationForm
          show={this.state.showRegistrationModal}
          toggle={this.toggleRegistrationModal}
        />
      </Container>
    );
  }
}

export default BoxAuth;
