import React from "react";
import List from "./Lists";
import Form from "./Form";
import "./style.css";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      count: "",
      edited: false,
      list: {
        name: "",
        value: ""
      },
      items: []
    };
    this.display = this.display.bind(this);
    this.edit = this.edit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }
  display() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  handleChangeName = (e) => {
    this.setState({
      list: {
        value: this.state.list.value,
        name: e.target.value
      }
    });
  };
  handleChangeValue(e) {
    this.setState({
      list: {
        value: e.target.value,
        name: this.state.list.name
      }
    });
  }
  onSubmit(e) {
    e.preventDefault();
    document.querySelector(".form").reset();
    let name = document.querySelector(".skillName").value;
    if (name === "") {
      return "";
    }
    if (this.state.edited) {
      let _items = this.state.items;
      _items.splice(this.state.count, 0, this.state.list);
      return this.setState({
        items: _items,
        edited: false,
        toggle: !this.state.toggle,
        list: {
          name: "",
          value: ""
        }
      });
    }
    return this.setState({
      items: this.state.items.concat(this.state.list),
      list: {
        name: "",
        value: ""
      }
    });
  }
  edit(e) {
    let _items = this.state.items;
    let i = e.target.parentElement.getAttribute("count");
    this.setState({
      list: {
        name: _items[i].name,
        value: _items[i].value
      },
      toggle: true,
      count: i,
      edited: true
    });
    _items.splice(i, 1);
    this.setState({
      items: _items
    });
  }
  render() {
    return (
      <>
        <div className="skill">
          <h3 onClick={this.display}>Skills</h3>
          <List items={this.state.items} edit={this.edit} />
          {this.state.toggle && (
            <Form
              submit={this.onSubmit}
              name={this.handleChangeName}
              value={this.handleChangeValue}
              list={this.state.list}
            />
          )}
        </div>
      </>
    );
  }
}
