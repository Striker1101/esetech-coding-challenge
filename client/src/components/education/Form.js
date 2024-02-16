import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, startDate, endDate, desc, submit, list, value } = this.props;
    let nameLog = "";
    if (value === "Experience") {
      nameLog = "Establishment";
    } else {
      nameLog = "Institite";
    }
    return (
      <>
        <div className="formCover">
          <form className="form">
            <label htmlFor="name">Name of {nameLog}</label>
            <input
              type="text"
              required
              onChange={name}
              id="name"
              defaultValue={list.name}
            />
            <label htmlFor="dateStart">start date</label>
            <input type="date" required onChange={startDate} />
            <label htmlFor="dateEnd"> end date </label>
            <input type="date" required onChange={endDate} />
            <label htmlFor="desc"> Description</label>
            <textarea
              id="text"
              row="10"
              column="10"
              onChange={desc}
              defaultValue={list.desc}
            ></textarea>
            <button type="submit" id="submit" onClick={submit}>
              submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
