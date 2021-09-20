import React from "react";

export class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }
  render() {
    const { time } = this.state;
    return <div style={{ fontSize: 150 }}>{time}</div>;
  }
}
