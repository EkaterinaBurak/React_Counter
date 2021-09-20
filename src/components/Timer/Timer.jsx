import React from "react";
import styles from "./Timer.module.css";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { second: 0 };
  }

  onClickStart = () => {
    this.time = setInterval(
      () => this.setState({ value: ++this.state.second }),
      1000
    );
  };

  onClickStop = () => {
    clearInterval(this.time);
  };

  onClickReset = () => {
    this.setState({ second: 0 });
  };

  render() {
    return (
      <div className={styles.timer}>
        <p className={styles.count}>{this.state.second}</p>
        <button className={styles.button_start} onClick={this.onClickStart}>
          Start
        </button>
        <button className={styles.button_stop} onClick={this.onClickStop}>
          Stop
        </button>
        <button className={styles.button_reset} onClick={this.onClickReset}>
          Reset
        </button>
      </div>
    );
  }
}
