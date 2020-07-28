import React from "react";

export default function GridCell(props) {
  let { x, y, color, alive } = props;
  return (
    <td
      data-x={x}
      data-y={y}
      style={{
        border: "1px solid black",
        backgroundColor: alive ? color : "white",
        padding: "5px",
      }}
      />
    // >{alive}</td>
  );
}
