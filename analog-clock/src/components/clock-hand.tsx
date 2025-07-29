import React, { useState } from "react";
import './hand.css'

const ClockHand = ({ duration = 0,pause= false}) => {
    return (
      <div
        className="clock-hand-wrapper pos-fix"
        style={{width:"300px",height:"300px"}}
      >
        <div
          className="hand-container rot layout"
          style={
            {
              ["--duration"]: `${duration}s`,
              animationPlayState: pause ? "paused" : "running",
            } as React.CSSProperties
          }
        >
          <div
            className="hand-content pos"
            style={{
              fontSize: "120px",
              fontWeight: "bolder",
              transform: "translate(-50%, 0) scale(0.75, 1.2)",
              marginTop: "-60px",
            }}
          >
            |
          </div>
        </div>
      </div>
    );
  };

export default ClockHand;