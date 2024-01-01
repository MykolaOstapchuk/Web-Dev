import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

import "./BoxAddWallpaper.css";

class BoxAddWallpaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      image: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("image", this.state.image, this.state.image.name);
    form_data.append("name", this.state.name);
    form_data.append("description", this.state.description);

    axios
      .post("/wallpapers/", form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="box-add-wallpaper">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Nazwa"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Opis"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          <Button color="warning" type="submit">
            Prześlij
          </Button>
        </form>
      </div>
    );
  }
}

export default BoxAddWallpaper;
