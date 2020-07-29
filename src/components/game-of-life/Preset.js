import React from "react";
import Grid from "./Grid";

import { connect } from "react-redux";
import { loadPreset } from "../../actions";

function Preset(props) {
  const { name, grid, loadPreset, color, size = 7 } = props;
  return (
    <div className='Preset'>
      <h5>
        <button onClick={() => loadPreset(grid)}>{name}</button>
      </h5>
      <Grid grid={grid} size={size} color={color} />
    </div>
  );
}

export default connect(({ color: { color } }, props) => ({ ...props, color }), {
  loadPreset,
})(Preset);
