import React from "react";
import "./style.css";
import Lists from "./Lists";
import Form from "./Form";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      list: {
        address: "",
        email: "",
        web: "",
        numOne: "",
        numTwo: "",
      },
    };
    this.display = this.display.bind(this);
    this.handlechangeAddress = this.handlechangeAddress.bind(this);
    this.handlechangeEmail = this.handlechangeEmail.bind(this);
    this.handlechangeWebsite = this.handlechangeWebsite.bind(this);
    this.handlechangeNumOne = this.handlechangeNumOne.bind(this);
    this.handlechangeNumTwo = this.handlechangeNumTwo.bind(this);
  }
  display() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  handlechangeAddress(e) {
    this.setState({
      list: {
        address: e.target.value,
        email: this.state.list.email,
        website: this.state.list.website,
        numOne: this.state.list.numOne,
        numTwo: this.state.list.numTwo,
      },
    });
  }
  handlechangeEmail(e) {
    this.setState({
      list: {
        email: e.target.value,
        address: this.state.list.address,
        website: this.state.list.website,
        numOne: this.state.list.numOne,
        numTwo: this.state.list.numTwo,
      },
    });
  }
  handlechangeWebsite(e) {
    this.setState({
      list: {
        website: e.target.value,
        address: this.state.list.address,
        email: this.state.list.email,
        numOne: this.state.list.numOne,
        numTwo: this.state.list.numTwo,
      },
    });
  }
  handlechangeNumOne(e) {
    this.setState({
      list: {
        numOne: e.target.value,
        address: this.state.list.address,
        email: this.state.list.email,
        website: this.state.list.website,

        numTwo: this.state.list.numTwo,
      },
    });
  }
  handlechangeNumTwo(e) {
    this.setState({
      list: {
        numTwo: e.target.value,
        address: this.state.list.address,
        email: this.state.list.email,
        website: this.state.list.website,
        numOne: this.state.list.numOne,
      },
    });
  }

  render() {
    return (
      <>
        <div className="contact">
          <h3 onClick={this.display}>Contact</h3>
          <Lists list={this.state.list} />
          {this.state.toggle && (
            <Form
              list={this.state.list}
              address={this.handlechangeAddress}
              email={this.handlechangeEmail}
              website={this.handlechangeWebsite}
              numOne={this.handlechangeNumOne}
              numTwo={this.handlechangeNumTwo}
            />
          )}
        </div>
      </>
    );
  }
}
