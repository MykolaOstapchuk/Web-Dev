import React, { Component } from "react";
import { Form, FormGroup, Input, Button, NavLink } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../../../containers/pages/CustomPage";
import { getCookies } from "../../../../utils/cookies";

import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  handleLogin = () => {
    axios
      .post("/auth/login/", {
        username: this.state.login,
        password: this.state.password,
      })
      .then((res) => {
        getCookies().set("access", res.data.access, {
          path: "/",
          maxAge: 86400,
        });
        getCookies().set("refresh", res.data.refresh, { path: "/" });
        this.props.user.fetch();
        this.props.navigation("/");
      })
      .catch((res) => console.log(res));
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box-login">
        <h1>Logowanie</h1>
        <Form>
          <FormGroup>
            <Input
              type="text"
              id="login"
              name="login"
              value={this.state.login}
              onChange={this.handleChange}
              placeholder="Podaj login"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Podaj hasło"
            />
          </FormGroup>
        </Form>
        <Button block color="success" onClick={this.handleLogin}>
          Zaloguj
        </Button>
        <NavLink disabled href="#" className="p-0">
          Przypomnij haslo
        </NavLink>
        <NavLink
          active
          onClick={this.props.toggleRegistrationModal}
          className="create_account_link"
        >
          Stwórz konto
        </NavLink>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();
  const user = React.useContext(UserContext);

  return <LoginForm {...props} navigation={navigation} user={user} />;
}
