import React from "react";
import Grid from "./Grid";
export default class PlayGrid extends React.Component {
  constructor(props) {
    super(props);
    let { color } = props;
    this.state = { color, generation: 0, isPlaying: false };
  }
  render() {
    return (
      <div className='PlayGrid'>
        <h3>Generation {this.state.generation}</h3>
        <Grid grid={this.props.grid} color={this.state.color} />
        <div>
          <button>{this.state.isPlaying ? "Pause" : "Play"}</button>
          <button>Step Forward</button>
          <button onClick={this.props.resetGrid}>Reset</button>
        </div>
      </div>
    );
  }
}
