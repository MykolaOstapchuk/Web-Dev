import React, { Component } from "react";

import { UserContext } from "../../../containers/pages/CustomPage";

import avatar from "../../../media/images/avatar.png";

import "./ProfileInfo.css";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info">
        <img
          className="profile-info__image img-fluid rounded-circle mr-2"
          alt="avatar"
          src={avatar}
        />
        <div className="profile-info__name">
          {" "}
          {(this.props?.user?.user?.first_name ?? "") +
            " " +
            (this.props?.user?.user?.last_name ?? "")}
        </div>
      </div>
    );
  }
}

export default function (props) {
  const user = React.useContext(UserContext);

  return <ProfileInfo {...props} user={user} />;
}
