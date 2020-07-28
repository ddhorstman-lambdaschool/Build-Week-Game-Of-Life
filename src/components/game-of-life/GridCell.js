import React from "react";

export default function GridCell(props) {
  let { x, y, color, alive, size = 8 } = props;
  return (
    <td
      data-x={x}
      data-y={y}
      style={{
        backgroundColor: alive ? color : "white",
        padding: size + "px",
      }}
    />
    // >{alive}</td>
  );
}
