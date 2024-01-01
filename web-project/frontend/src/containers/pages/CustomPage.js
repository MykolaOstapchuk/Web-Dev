import React, { Component } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { getCookies } from "../../utils/cookies";

import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Main from "./elements/Main";

import "./CustomPage.css";

export const UserContext = React.createContext();
class CustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    if (getCookies().get("access") !== undefined) {
      this.fetchUserData();
    }

    console.log(this.props);
  }

  fetchUserData = () => {
    axios
      .get("/auth/me/")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { params, mainPage } = this.props;

    const user = this.state.user;
    const fetch = this.fetchUserData;

    return (
      <div className="custom-page">
        <UserContext.Provider value={{ user, fetch }}>
          <Header />
          <Main mainPage={mainPage} params={params} />
          <Footer />
        </UserContext.Provider>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <CustomPage {...props} navigation={navigation} params={useParams()} />;
}
