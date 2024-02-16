import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list, address, email, website, numOne, numTwo } = this.props;
    console.log(list);
    return (
      <>
        <div className="formCover">
          <form className="form">
            <label htmlFor="address"> Address</label>
            <input type="text" onChange={address} defaultValue={list.address} />
            <label htmlFor="email">Email</label>
            <input type="email" onChange={email} defaultValue={list.email} />
            <label htmlFor="website">Website</label>
            <input type="url" onChange={website} defaultValue={list.website} />
            <label htmlFor="numberOne">Number</label>
            <input type="tel" onChange={numOne} defaultValue={list.numOne} />
            <label htmlFor="numberTwo">Number two</label>
            <input type="tel" onChange={numTwo} defaultValue={list.numTwo} />
          </form>
        </div>
      </>
    );
  }
}
