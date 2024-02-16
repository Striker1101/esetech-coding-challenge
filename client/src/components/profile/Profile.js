import React from "react";
import "./style.css";
import picture from "../assets/picture.jpeg";
import Formprofile from "./Formprofile";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {
        img: picture,
        name: "Kelly White",
        obj: "Any objectives",
      },
      toggle: false,
      display: false,
      _class: "uploadFile",
    };
    this.display = this.display.bind(this);
    this.handleChangeObj = this.handleChangeObj.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.dragNdrop = this.dragNdrop.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }
  display() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  handleChangeText = (e) => {
    this.setState({
      item: {
        img: this.state.item.img,
        name: e.target.value,
        obj: this.state.item.obj,
      },
    });
  };
  handleChangeObj = (e) => {
    this.setState({
      item: {
        img: this.state.item.img,
        name: this.state.item.name,
        obj: e.target.value,
      },
    });
  };
  dragNdrop = (event) => {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var previewImg = document.getElementById("profileImage");
    previewImg.setAttribute("src", fileName);
  };
  handlePreview = () => {
    document.getElementById("preview").style.cssText = "display:none; ";
    document.getElementById("preview").children[2].remove();
    document.getElementById("dragbox").style.display = "flex";
  };


  render() {
    return (
      <>
        <div className="profile" onClick={this.display}>
          <img id="profileImage" src={picture} alt="profile" />
          <div className="profileCover">
            <div className="profileText">
              <h2> {this.state.item.name}</h2>
              <p>{this.state.item.obj}</p>
            </div>
          </div>
        </div>
        {this.state.toggle && (
          <Formprofile
            item={this.state.item}
            text={this.handleChangeText}
            obj={this.handleChangeObj}
            putImage={this.dragNdrop}
          />
        )}
      </>
    );
  }
}
