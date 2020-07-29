import React from "react";

import { connect } from "react-redux";

function GridCell(props) {
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

export default connect(
  ({ color: { color } }, props) => ({ ...props, color }),
  null
)(GridCell);
