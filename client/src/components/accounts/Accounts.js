import React from "react";
import Media from "./Media";
import Form from "./Form";

export default class Accounts extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      media: {
        url: "",
        map: "",
      },
      items: [],
    };
    this.display = this.display.bind(this);
    this.handleChangeMedia = this.handleChangeMedia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  display() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  handleChangeMedia(e) {
    let _map = "";
    if (this.state.media.url.includes("instagram")) {
      _map = "instagram";
    } else if (this.state.media.url.includes("facebook")) {
      _map = "facebook";
    } else if (this.state.media.url.includes("snapchat")) {
      _map = "snapchat";
    } else if (this.state.media.url.includes("whatsapp")) {
      _map = "whatsapp";
    } else if (this.state.media.url.includes("twitter")) {
      _map = "twitter";
    } else {
      _map = "others";
    }
    this.setState({
      media: {
        url: e.target.value,
        map: _map,
      },
    });
  }
  onSubmit(e) {
    e.preventDefault();
    document.querySelector(".form").reset();

    this.setState({
      items: this.state.items.concat(this.state.media),
      media: {
        url: "",
        map: "",
      },
    });
  }
  render() {
    return (
      <div className="accounts">
        <hr onClick={this.display}></hr>
        <Media items={this.state.items} />
        {this.state.toggle && (
          <Form
            media={this.state.media.url}
            submit={this.onSubmit}
            handle={this.handleChangeMedia}
          />
        )}
      </div>
    );
  }
}
