import React, { Component } from "react";
import { Button, Card } from "reactstrap";
import axios from "axios";

import "./BoxWallpaper.css";

class BoxWallpaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallpaper: {},
      comment: "",
    };
  }

  componentDidMount() {
    this.getWallpapers();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addComment = () => {
    axios
      .post("/wallpapers/comments/", {
        body: this.state.comment,
        wallpaper: this.props.params.id,
      })
      .then((res) => {})
      .catch((res) => console.log(res));
  };

  getWallpapers = () => {
    axios
      .get(`/wallpapers/${this.props.params.id}`)
      .then((res) => this.setState({ wallpaper: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { wallpaper } = this.state;

    return (
      <div className="box-wallpaper">
        <div className="box-wallpaper__name">{wallpaper.name}</div>
        <div className="box-wallpaper__body">
          <div className="box-wallpaper__image-wrapper">
            <img
              className="box-wallpaper__image"
              alt={wallpaper.name}
              src={wallpaper.image}
            />
          </div>
          <Card className="box-wallpaper__card">
            <form className="box-wallpaper__form" onSubmit={this.addComment}>
              <input
                type="text"
                className="box-wallpaper__input-comment"
                placeholder="Komentarz"
                id="comment"
                value={this.state.comment}
                onChange={this.handleChange}
                required
              />
              <Button
                className="box-wallpaper__button-add-comment"
                color="warning"
                type="submit"
              >
                Dodaj komentarz
              </Button>
            </form>
            {wallpaper?.comments &&
              wallpaper?.comments.map((comment, key) => (
                <div className="box-wallpaper__comment" key={key}>
                  <Card className="box-wallpaper__card-comment">
                    <div className="box-wallpaper__card-comment--owner">
                      {comment.owner}
                    </div>
                    <div>{comment.body}</div>
                  </Card>
                </div>
              ))}
          </Card>
        </div>
      </div>
    );
  }
}

export default BoxWallpaper;
