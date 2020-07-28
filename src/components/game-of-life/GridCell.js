import React from "react";

export default function GridCell(props) {
  return (
    <td
      style={{
        border: "1px solid black",
        backgroundColor: props.alive ? props.color : "white",
        padding: "5px",
      }}
    />
  );
}
