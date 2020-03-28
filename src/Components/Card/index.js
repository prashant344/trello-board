import React from "react";

import crossIcon from "./icon/cross-icon.png";
import "./index.css";

const CardRaw = ({
  item,
  onDragStart,
  handleKeyDown,
  onTextChange,
  removeTile
}) => (
  <div className={"cardContainer"}>
    <textarea
      key={item.id}
      id={item.id}
      draggable
      onDragStart={e => onDragStart(e, item.id)}
      onKeyDown={handleKeyDown}
      className={"card"}
      defaultValue={item.name}
      onChange={onTextChange}
    />
    <button className={"crossIconBtn"} onClick={() => removeTile(item.id)}>
      <img alt={"cross icon"} className={"crossIcon"} src={crossIcon} />
    </button>
  </div>
);

export default CardRaw;
