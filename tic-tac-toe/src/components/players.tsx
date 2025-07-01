import React from "react";

type player = {
    name : string,
    Val: "O" | "X",
    turn: boolean,
    winCont:number

}
const Players = ({name= "",winCont= 0,Val=""}) => {
    return (
        <div className="player-wrapper" style={{width:"200px",height:"200px",border:"1px solid grey"}}>
        <div className="player" style={{display:"flex",flexDirection:"column-reverse",alignItems:"center",justifyContent:"center",height:"100%"}}>
            <div style={{fontSize:"24px"}}><b>{name} : {winCont}</b></div>
            <div style={{height:"150px",width:"150px",borderRadius:"150px",border:"1px ridge black",margin:"auto",fontSize:"80px",alignItems:"center",display:"flex",justifyContent:"center", color:Val=="O"?"green":"red"}}>{Val}</div>
        </div>
    </div>
    )
};

export default Players;