import React from "react";
import "./style.css";
import Lists from "./Lists.js";
import Form from "./Form.js";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      count: "",
      edited: false,
      list: { name: "", StartDate: "", EndDate: "", desc: "" },
      items: [],
    };
    this.display = this.display.bind(this);
    this.edit = this.edit.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  display() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  edit(e) {
    let _items = this.state.items;
    let i = e.target.parentElement.parentElement.getAttribute("count");
    this.setState({
      toggle: true,
      count: i,
      edited: true,
      list: {
        name: _items[i].name,
        desc: _items[i].desc,
        StartDate: _items[i].StartDate,
        EndDate: _items[i].EndDate,
      },
    });
    _items.splice(i, 1);
    this.setState({
      items: _items,
    });
  }
  handleChangeName = (e) => {
    this.setState({
      list: {
        name: e.target.value,
        desc: this.state.list.desc,
        StartDate: this.state.list.StartDate,
        EndDate: this.state.list.EndDate,
      },
    });
  };
  handleChangeStartDate = (e) => {
    this.setState({
      list: {
        name: this.state.list.name,
        desc: this.state.list.desc,
        StartDate: e.target.value,
        EndDate: this.state.list.EndDate,
      },
    });
  };
  handleChangeEndDate = (e) => {
    this.setState({
      list: {
        name: this.state.list.name,
        desc: this.state.list.desc,
        EndDate: e.target.value,
        StartDate: this.state.list.StartDate,
      },
    });
  };
  handleChangeDesc = (e) => {
    this.setState({
      list: {
        name: this.state.list.name,
        desc: e.target.value,
        StartDate: this.state.list.StartDate,
        EndDate: this.state.list.EndDate,
      },
    });
  };
  onSubmit(e) {
    e.preventDefault();
    let name = document.querySelector("#name");
    document.querySelector(".form").reset();
    this.display();
    if (name.value === "") {
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
          StartDate: "",
          EndDate: "",
          desc: "",
        },
      });
    }
    return this.setState({
      items: this.state.items.concat(this.state.list),
      list: {
        name: "",
        StartDate: "",
        EndDate: "",
        desc: "",
      },
    });
  }
  render() {
    const value = this.props.value;
    return (
      <>
        <div className="education">
          <h3 onClick={this.display}>{value}</h3>
          <Lists lists={this.state.items} edit={this.edit} />
          {this.state.toggle && (
            <Form
              name={this.handleChangeName}
              startDate={this.handleChangeStartDate}
              endDate={this.handleChangeEndDate}
              desc={this.handleChangeDesc}
              submit={this.onSubmit}
              list={this.state.list}
              value={this.props.value}
            />
          )}
        </div>
      </>
    );
  }
}
