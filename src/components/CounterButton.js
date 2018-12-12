import React, { Component } from "react";
import { css } from "emotion";

export default class CounterButton extends Component {
  render() {
    const counterButtonStyle = css`
      background: aliceblue;
      font-size: 1.3em;
      font-weight: 700;
      border: 1px solid black;
      border-radius: 5px;
      color: #412551;
      width: 95%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    `;
    const smallButtonLeft = css`
      background: white;
      border: 1px solid red;
      box-shadow: 0.4px 0.2px grey;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: 7px;
    `;
    const smallButtonRight = css`
      background: rgba(0, 200, 100, 1);
      border-radius: 50%;
      box-shadow: 0.4px 0.2px grey;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 7px;
    `;
    const minusSize = css`
      border: 2px solid red;
      border-shadow: 10px 10px grey;
      width: 10px;
      color: white;
    `;
    const plusSize = css`
      color: white;
      font-weight: 900;
    `;
    const TetxStyle = css`
      display: flex;
      justify-content: space-around;
      align-items: center;
    `;
    return (
      <div className={counterButtonStyle}>
        <div className={smallButtonLeft} onClick={this.props.onDecrease}>
          <div className={minusSize} />
        </div>
        <span className={TetxStyle}>
          {this.props.count} {this.props.text}
        </span>
        <div className={smallButtonRight} onClick={this.props.onIncrease}>
          <div className={plusSize}> + </div>
        </div>
      </div>
    );
  }
}
