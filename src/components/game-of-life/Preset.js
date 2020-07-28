import React from "react";
import Grid from "./Grid";

export default function Preset(props) {
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
