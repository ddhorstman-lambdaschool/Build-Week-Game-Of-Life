import React from "react";
import Grid from "./Grid";
export default class PlayGrid extends React.Component {
  constructor(props) {
    super(props);
    let { color } = props;
    this.state = {
      color,
      generation: 0,
      isPlaying: false,
      speed: 1,
      intervalCode: null,
    };
  }
  togglePlaying = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
    if (this.state.intervalCode) {
      window.clearInterval(this.state.intervalCode);
      this.setState({ intervalCode: null });
    } else {
      const intervalCode = window.setInterval(() => {
        this.props.progressGame();
        this.setState({ generation: this.state.generation + 1 });
      }, 1000 / this.state.speed);
      this.setState({ intervalCode });
    }
  };
  progressGame = (n = 1) => {
    this.setState({ generation: this.state.generation + 1 });
    this.props.progressGame(n);
  };
  resetGame = () => {
    this.props.resetGrid();
    this.setState({ generation: 0, isPlaying: false });
    if (this.state.intervalCode) {
      window.clearInterval(this.state.intervalCode);
      this.setState({ intervalCode: null });
    }
  };
  setSpeed = ({ target: { value } }) => {
    if (this.state.intervalCode) {
      window.clearInterval(this.state.intervalCode);
      const intervalCode = window.setInterval(() => {
        this.props.progressGame();
        this.setState({ generation: this.state.generation + 1 });
      }, 1000 / this.state.speed);
      this.setState({ intervalCode });
    }
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
        <div className='ButtonBar'>
          <div>
            <button onClick={this.togglePlaying}>
              {this.state.isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={this.progressGame}>Step Forward</button>
            <button onClick={this.resetGame}>Reset</button>
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
