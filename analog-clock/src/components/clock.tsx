import React, { useState } from "react";
import ClockHand from "./clock-hand";
import './hand.css'
import Hours from "./ClockBackground";

const Btn = ({text="",col="grey"}) => {
    return (
        <button className="btn" style={{["--color1"]:`${col}`} as React.CSSProperties}>
            {text}
        </button>
    )
}

const Clock = () => {
    const [paused, setPaused] = useState(false);
    const [Speed, setSpeed] = useState(1);
    return(
        <div className="clock-wrapper" style={{cursor:"pointer"}}>
            <ClockHand duration={Number(60/Speed)} pause={paused}/>
            <ClockHand duration={Number(720/Speed)} pause={paused}/>
            <Hours />
            <div className="dot pos-fix" style={{fontSize:"120px",fontWeight:"bolder",color:"red",marginTop:"-127px",height:"0"}}>.</div>
            
            <div className="btn-wrapper" style={{display:"flex",justifyContent:"space-around",width:"50%",margin:"100px auto"}}>
            <div onClick={()=>setPaused(true)}>
                <Btn text={"STOP"} col={"red"}/>
            </div>
            <div onClick={()=>setPaused(false)}>
                <Btn text={"START"} col={"green"}/>
            </div>
            </div>

            {/* <input type="Number" onChange={(e)=>setSpeed(Number(e.target.value))} placeholder="Increase speed"/> */}
        </div>
    )

}

export default Clock;