import React from "react";

export default class Formprofile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, text, obj, putImage } = this.props;
    return (
      <div className="formCover">
        <form className="form ">
          <label htmlFor="avatar">choose your avatar</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            capture
            onChange={putImage}
            accept="image/png, image/jpeg"
          />
          <label htmlFor="profilename">input your name</label>
          <input
            type="text"
            onChange={text}
            id="profilename"
            title="input your name"
            defaultValue={item.name}
          />
          <label htmlFor="profileObj"> input any objective</label>
          <input
            type="text"
            onChange={obj}
            id="profileObj"
            title="input your objective"
            defaultValue={item.obj}
          />
        </form>
      </div>
    );
  }
}
