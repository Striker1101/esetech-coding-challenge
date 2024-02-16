import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { media, submit, handle } = this.props;
    return (
      <>
        <div className="formCover">
          <form className="form">
            <label htmlFor="media"> media link url</label>
            <input type="text" onChange={handle} defaultValue={media} />
            <button type="submit" onClick={submit}>
              submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
