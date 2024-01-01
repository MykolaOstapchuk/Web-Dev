import axios from "axios";
import React, { Component } from "react";
import Wallpaper from "./elements/Wallpaper";

import "./BoxWallpapersList.css";

class BoxWallpapersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallpapers: [],
    };
  }

  componentDidMount() {
    this.getWallpapers();
  }

  getWallpapers = () => {
    axios
      .get("/wallpapers/")
      .then((res) => this.setState({ wallpapers: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { wallpapers } = this.state;

    console.log(wallpapers);

    return (
      <div className="box-wallpapers-list">
        {wallpapers &&
          wallpapers.map((wallpaper, key) => (
            <Wallpaper key={key} wallpaper={wallpaper} />
          ))}
      </div>
    );
  }
}

export default BoxWallpapersList;
