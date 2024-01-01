import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "reactstrap";

import "./Wallpaper.css";

class Wallpaper extends Component {
  constructor(props) {
    super(props);
  }

  openWallpaperPage = () => {
    const { wallpaper } = this.props;

    this.props.navigation(`wallpapers/${wallpaper.id}`);
  };

  render() {
    const { wallpaper } = this.props;

    return (
      <Card className="wallpaper" onClick={this.openWallpaperPage}>
        <div className="wallpaper__image-wrapper">
          <img
            className="wallpaper__image"
            alt={wallpaper.name}
            src={wallpaper.image}
          />
        </div>
        <div className="wallpaper__title">{wallpaper.name}</div>
      </Card>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <Wallpaper {...props} navigation={navigation} />;
}
