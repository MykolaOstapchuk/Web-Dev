import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import axios from "axios";

import "./RegistrationForm.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      email: "",
      firstName: "",
      surname: "",
      password: "",
      password2: "",
      valid: [],
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleRegister = (e) => {
    axios
      .post("/auth/register/", {
        username: this.state.login,
        password: this.state.password,
        password2: this.state.password2,
        email: this.state.email,
        first_name: this.state.firstName,
        last_name: this.state.surname,
      })
      .then((res) => {
        this.props.toggle();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  handleCancel = (e) => {
    this.props.toggle();
  };

  render() {
    const { toggle, show } = this.props;

    return (
      <Modal isOpen={show} toggle={toggle}>
        <ModalHeader toggle={toggle}>Rejestracja</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="login"
                value={this.state.login}
                onChange={this.handleChange}
                placeholder="Podaj login"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Podaj adres e-mail"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="firstName"
                value={this.state.first_name}
                onChange={this.handleChange}
                placeholder="Podaj imię"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="surname"
                value={this.state.surname}
                onChange={this.handleChange}
                placeholder="Podaj nazwisko"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Podaj hasło"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                placeholder="Powtórz hasło"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.handleCancel}>
            Anuluj
          </Button>
          <Button color="success" onClick={this.handleRegister}>
            Zarejestruj
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default RegistrationForm;
