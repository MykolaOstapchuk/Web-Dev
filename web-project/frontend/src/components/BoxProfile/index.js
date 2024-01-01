import React, { Component } from "react";
import { Card } from "reactstrap";

import { UserContext } from "../../containers/pages/CustomPage";

import ProfileInfo from "./elements/ProfileInfo";
import Wallpaper from "../BoxWallpapersList/elements/Wallpaper";
import BoxAddWallpaper from "../BoxAddWallpaper";

import "./BoxProfile.css";

class BoxProfile extends Component {
  render() {
    return (
      <div className="box-profile">
        <div className="box-profile__column">
          <Card className="box-profile__card">
            <ProfileInfo />
          </Card>
          <Card className="box-profile__card">
            <div className="box-profile__card-title">Dodaj tapetę</div>
            <BoxAddWallpaper />
          </Card>
        </div>
        <div className="box-profile__column">
          <Card className="box-profile__card">
            <div className="box-profile__card-title">Twoje tapety</div>
            <div className="box-profile__card-wallpapers">
              {this.props?.user?.user?.wallpapers &&
                this.props?.user?.user?.wallpapers.map((wallpaper, key) => (
                  <Wallpaper key={key} wallpaper={wallpaper} />
                ))}
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const user = React.useContext(UserContext);

  return <BoxProfile {...props} user={user} />;
}
