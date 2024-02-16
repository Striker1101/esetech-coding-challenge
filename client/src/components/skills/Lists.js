import React from "react";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;
    const edit = this.props.edit;
    return (
      <div className="skillHolder">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="skillHold"
              count={index}
              onDoubleClick={edit}
            >
              <h3> {item.name}</h3>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={item.value}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
