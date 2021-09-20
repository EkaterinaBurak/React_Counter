import React from "react";
import styles from "./Counter.module.css";

export class Counter extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      count: 0,
    };
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickMinus = () => {
    this.setState({
      count: --this.state.count,
    });
  };

  onClickReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.counter}>
          <p className={styles.counter__count}>{count}</p>
          <div className={styles.button}>
            <button
              className={styles.button__buttonPlus}
              onClick={this.onClickPlus}
            >
              +
            </button>
            <button
              className={styles.button__buttonReset}
              onClick={this.onClickReset}
            >
              &#128472;
            </button>
            <button
              className={styles.button__buttonMinus}
              onClick={this.onClickMinus}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
