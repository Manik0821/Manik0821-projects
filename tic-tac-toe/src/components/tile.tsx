import React from 'react'
import './tile.css';

export const Tile = ({num = 0,Val = "",filled=false}) => {
  return (
    <div className="tile-wrapper" style={{width:'100px',height:"100px",background:"rgba(75, 75, 75, 0.6)",border:"1px ridge black"}}>
        <div className="tile" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100px",fontSize:"36px",cursor:"pointer",color:Val=="O"?"green":"red"}}>
            {Val}
        </div>
    </div>
  )
}

export default Tile;