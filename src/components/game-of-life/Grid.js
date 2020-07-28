import React from "react";
import GridCell from "./GridCell";
export default function Grid(props) {
  let { grid, color = "#000000", toggleCell = () => {} } = props;
  if (grid.length === 0) return <div />;
  return (
    <table className='Grid'>
      <tbody>
        {grid.map((row, x) => (
          <tr key={x}>
            {row.map((state, y) => {
              return (
                <GridCell
                  key={x + "," + y}
                  x={x}
                  y={y}
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
