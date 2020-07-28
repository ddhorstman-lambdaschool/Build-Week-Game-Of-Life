import React from "react";
import GridCell from "./GridCell";
export default function Grid(props) {
  let { grid, color = "#000000", toggleCell = () => {}, size = 8 } = props;
  if (grid.length === 0) return <div />;
  function toggleCurrentCell(e){
    e.preventDefault();
    e.stopPropagation();
    const x = e.target.attributes["data-x"]?.nodeValue;
    const y = e.target.attributes["data-y"]?.nodeValue;
    if (x && y) toggleCell(x, y);
  };
  return (
    <table className='Grid' onClick={toggleCurrentCell}>
      <tbody>
        {grid.map((row, x) => (
          <tr key={x}>
            {row.map((state, y) => {
              return (
                <GridCell
                  key={x + "," + y}
                  x={x}
                  y={y}
                  size={size}
                  alive={state}
                  color={color}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
