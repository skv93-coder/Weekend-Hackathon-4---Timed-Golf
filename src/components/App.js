import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: 0, x: 0, y: 0, timer: 0, start: false, date: 0 };
    this.startTimer = this.startTimer.bind(this);
    this.myTimer = this.myTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    if (this.state.x === 250 && this.state.y === 250) {
      return;
    }
    if (ev.keyCode === 37 && this.state.start === true) {
      let z = this.state.x - 5;
      let w = this.state.y;
      this.setState({ x: z });
    } else if (ev.keyCode === 38 && this.state.start === true) {
      let z = this.state.x;
      let w = this.state.y - 5;
      this.setState({ y: w });
    } else if (ev.keyCode === 39 && this.state.start === true) {
      let z = this.state.x;
      let w = this.state.y;
      this.setState({ x: z + 5 });
    } else if (ev.keyCode === 40 && this.state.start === true) {
      let z = this.state.x;
      let w = this.state.y;
      this.setState({ y: w + 5 });
    }
  }
  myTimer() {
    if (this.state.x === 250 && this.state.y === 250) {
      return;
    }
    let v = this.state.date;
    this.setState({ date: v + 1 });
    /*if (this.state.date === 0) {
      this.setState({ timer: Date.now() });
      this.set
    } else {
      let d = Date.now();
      d = d / 1000 - this.state.timer / 1000;
      this.setState({ date: d });
    }*/

    //let time = d.toLocaleTimeString();
  }
  startTimer() {
    this.setState({ start: true });

    setInterval(this.myTimer, 1000);
  }
  componentDidMount() {
    document.addEventListener("keydown", (ev) => this.handleClick(ev));
  }

  componentWillUnmount() {
    clearInterval();
    document.removeEventListener();
  }

  render() {
    return (
      <>
        {this.state.start ? (
          <>
            <span
              className="ball"
              style={{ left: `${this.state.x}px`, top: `${this.state.y}px` }}
            ></span>
            <span className="hole"></span>
            <span className="timer">{this.state.date}</span>
          </>
        ) : (
          <button className="start" onClick={this.startTimer}>
            start
          </button>
        )}
      </>
    );
  }
}

export default Timer;
