import React from "react";
import instagram from "../assets/instagram-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import whatsapp from "../assets/whatsapp-icon.svg";
import snapchat from "../assets/snapchat-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import others from "../assets/web-icon.svg";
import "./style.css";
export default class Media extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;
    let image = "";
    return (
      <>
        <div className="accountMedia">
          {items.map((item, index) => {
            {
              if (item.map === "instagram") {
                image = instagram;
              } else if (item.map === "twitter") {
                image = twitter;
              } else if (item.map === "whatsapp") {
                image = whatsapp;
              } else if (item.map === "facebook") {
                image = facebook;
              } else if (item.map === "snapchat") {
                image = snapchat;
              } else if (item.map === "others") {
                image = others;
              }
            }
            return (
              <a key={index} href={item.url}>
                <img className="accountImg" src={image} alt={item.map} />
              </a>
            );
          })}
        </div>
      </>
    );
  }
}
