import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { submit, name, value, list } = this.props;
    return (
      <>
        <div className="formCover">
          <form className="form">
            <label htmlFor="name">input skill</label>
            <input
              required
              type="text"
              className="skillName"
              onChange={name}
              defaultValue={list.name}
            />
            <label> Percentage</label>
            <input
              type="number"
              required
              onChange={value}
              min="0"
              max="100"
              defaultValue={list.value}
            />
            <button type="submit" onClick={submit}>
              submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
