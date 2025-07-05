import React from "react";
import "../components/players.css";

const Players = ({name= "",winCount= 0,Val="",curr=false,status=""}) => {
    return (
    <div className="player-wrapper" style={{width:"200px",height:"200px",border:"1px solid grey",transition:"all 3s ease-in-out"}}>
        {status === "" && (<div className="player fl-class" style={{flexDirection:"column-reverse",height:"100%"}}>
            <div style={{fontSize:"24px"}}><b>{name} : {winCount}</b></div>
            <div className="fl-class" style={{height:"150px",width:"150px",borderRadius:"150px",border:"1px ridge black",margin:"auto",fontSize:"80px",color:Val=="O"?"green":"red",backgroundColor:curr?"lightblue":"white"}}>{Val}</div>
        </div>)}
        {status === "winner" && (<><div className="fl-class normal" style={{backgroundColor:"lightgreen"}}>Winner</div><div style={{fontSize:"24px"}}><b>{name} : {winCount}</b></div>
            </>)}
        {status === "loser" && (<><div className="fl-class normal" style={{backgroundColor:"lightpink"}}>Loser</div><div style={{fontSize:"24px"}}><b>{name} : {winCount}</b></div>
            </>)}
        {status === "draw" && (<><div className="fl-class normal" style={{backgroundColor:"skyblue"}}>Draw</div><div style={{fontSize:"24px"}}><b>{name} : {winCount}</b></div>
            </>)}
    </div>
    )
};

export default Players;