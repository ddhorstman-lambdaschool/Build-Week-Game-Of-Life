import React from "react";
import Grid from "./Grid";
export default class PlayGrid extends React.Component {
  constructor(props) {
    super(props);
    let { color } = props;
    this.state = { color, generation: 0, isPlaying: false, speed: 1 };
  }
  togglePlaying = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
  };
  setSpeed = ({ target: { value } }) => {
    this.setState({ speed: value });
  };
  render() {
    return (
      <div className='PlayGrid'>
        <h3>Generation {this.state.generation}</h3>
        <Grid
          grid={this.props.grid}
          color={this.state.color}
          toggleCell={this.state.isPlaying ? () => {} : this.props.toggleCell}
        />
        <div className="ButtonBar">
          <div>
          <button onClick={this.togglePlaying}>
            {this.state.isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={this.props.progressGame}>Step Forward</button>
          <button onClick={this.props.resetGrid}>Reset</button>
          </div>
          <label>
            {`${this.state.speed}x`}
            <input
              type='range'
              min={1}
              max={10}
              value={this.state.speed}
              onInput={this.setSpeed}
              onChange={() => {}}
            />
          </label>
        </div>
      </div>
    );
  }
}
