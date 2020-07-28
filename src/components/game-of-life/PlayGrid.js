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
      stepInterval: 1,
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
        this.setState({
          generation: this.state.generation + this.state.stepInterval,
        });
      }, 1000 / this.state.speed);
      this.setState({ intervalCode });
    }
  };
  progressGame = () => {
    this.setState({
      generation: this.state.generation + this.state.stepInterval,
    });
    this.props.progressGame(this.state.stepInterval);
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
        this.setState({
          generation: this.state.generation + this.state.stepInterval,
        });
      }, 1000 / this.state.speed);
      this.setState({ intervalCode });
    }
    this.setState({ speed: value });
  };
  setInterval = ({ target: { value } }) => {
    this.setState({ stepInterval: Number(value) });
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
              {this.state.isPlaying ? "Stop" : "Play"}
            </button>
            <button style={{ paddingRight: "1px" }} onClick={this.progressGame}>
              Step forward by
            </button>
            <input
              type='number'
              size='1'
              value={this.state.stepInterval}
              onChange={this.setInterval}
            ></input>
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
