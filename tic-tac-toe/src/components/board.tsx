import {useState} from "react";
import Tile from "./tile";
import Players from "./players";

type place = {
    num : number,
    Val : "O" | "X" | "",
    filled : boolean
}
type player = {
    name : string,
    Val: "O" | "X",
    turn: boolean,
    winCont:number

}
const Pattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const initialBoard :place[] = Array.from({length : 9},(_,i)=> ({
    num : i,
    Val : "",
    filled: false
}));

const players:player[] = [{
    name:"Manik",
    Val: "O",
    turn : true,
    winCont:0
},{
    name:"jain",
    Val:"X",
    turn:false,
    winCont:0
}];


const Board = () => {

const [board, updateBoard] = useState<place[]>(initialBoard);
const [currPlayer,changePlayer]=useState<number>(0);
const [playCounter,updateCounter]=useState<number>(0);
const [gameEnd,endGame]=useState(false);

const checkWin=()=>{
    if(playCounter<4)return "cont";
    if(playCounter===8)return "draw";
    for(let i=0;i<8;i++){
        let p =Pattern[i]
        let sign = players[currPlayer].Val;
        if(board[p[0]].Val===sign && board[p[1]].Val===sign && board[p[2]].Val===sign){
            return "win";
        }
    }
    return "cont";
}
const resetBoard = () => {
    endGame(game => false);
    updateBoard(initialBoard);
    for(let i=0;i<9;i++){board[i].Val="";board[i].filled=false;}
}

const play = (tileNum:number) => {
        if(gameEnd)return ;
        console.log(playCounter) 
        let curr = board[tileNum];
        if(curr.filled)return;
        curr.Val= players[currPlayer].Val;
        curr.filled = true;
        updateCounter(curr => curr+1);

    if(checkWin()==="win"){
        endGame(game=> true);
        console.log( "winner is :",players[currPlayer].name);
        players[currPlayer].winCont++;
        updateCounter(0);
        return ;
    }else if(checkWin()==="draw"){
        endGame(true);
        console.log("Game is Draw");
        changePlayer(cp => (cp+1)%2);
        updateCounter(0);
        return ;
    }
     changePlayer(curr => {
        return curr = (curr + 1)%2;
     })
}
    return (<>
        <div className="player-section" style={{display:"flex",justifyContent:"center",padding:"40px 0"}}>
            {players.map((pl)=>(
                <Players name={pl.name} winCont={pl.winCont} Val={pl.Val}/>
            ))}
        </div>
            
        <div className="board-wrapper" style={{position:"fixed",top:"40%",left:"50%",border:"2px solid black",transform:"translateX(-50%)"}}>
            <div className="board" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
                {board.map((spot)=>(
                    <div onClick={()=>play(spot.num)}>
            <Tile num={spot.num} Val={spot.Val} filled={spot.filled} />
                    </div>
                ))}
            </div>
        </div>    

        {gameEnd===true&&(<div className="buttonSection" style={{position:"absolute",left:"50%",bottom: "10%",transform:"translateX(-50%"}}>
            <button style={{fontSize:"20px",border:"1px ridge skyBlue",color:"blue",width:"200px",cursor:"pointer"}} onClick={resetBoard}>Reset Board</button>
        </div>)}
        </>
    )
}

export default Board;