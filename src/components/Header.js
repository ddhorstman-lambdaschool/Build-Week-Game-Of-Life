import React from "react";

export default function Header(props) {
  const { color, updateColor } = props;
  return (
    <h1 style={{ color }}>
      Conway's Game of Life
      <input type='color' value={color} onChange={updateColor} />
    </h1>
  );
}
