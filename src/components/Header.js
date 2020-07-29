import React from "react";
import { connect } from "react-redux";
import { updateColor } from "../actions";

function Header({color, updateColor}) {

  const extractAndUpdateColor = ({ target: { value } }) => updateColor(value);

  console.log(color);
  return (
    <h1 style={{ color }}>
      Conway's Game of Life
      <input type='color' value={color} onChange={extractAndUpdateColor} />
    </h1>
  );
}

const mapStateToProps = ({ color: { color } }, props) => ({ ...props, color });
const mapActionsToProps = { updateColor };
export default connect(mapStateToProps, mapActionsToProps)(Header);
