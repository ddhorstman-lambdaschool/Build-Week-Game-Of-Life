import React from "react";
import { connect } from "react-redux";
import { resizeGrid, changeCellSize, updateColor } from "../../actions";

function DisplaySettings(props) {
  const {
    color,
    cellSize,
    side,
    resizeGrid,
    changeCellSize,
    updateColor,
  } = props;

  const extractAndUpdateColor = ({ target: { value } }) => updateColor(value);
  const extractAndUpdateCellSize = ({ target: { value } }) => {
    if (value < 1) value = 1;
    changeCellSize(value);
  };
  const extractAndUpdateGridSide = ({ target: { value } }) => {
    if (value < 25) value = 25;
    resizeGrid(value);
  };
  return (
    <div className='DisplaySettings'>
      <label>
        {"Color: "}
        <input type='color' value={color} onChange={extractAndUpdateColor} />
      </label>
      <label>
        {"Grid Dimensions: "}
        <input
          type='number'
          size='2'
          value={side}
          onChange={extractAndUpdateGridSide}
        />
        x{side}
      </label>
      <label>
        {"Cell Size "}
        <input
          type='number'
          size='1'
          value={cellSize}
          onChange={extractAndUpdateCellSize}
        />
        px
      </label>
    </div>
  );
}
const mapPropsToState = (
  { display: { color, cellSize }, grid: { side } },
  props
) => ({ ...props, color, cellSize, side });
export default connect(mapPropsToState, {
  resizeGrid,
  changeCellSize,
  updateColor,
})(DisplaySettings);
