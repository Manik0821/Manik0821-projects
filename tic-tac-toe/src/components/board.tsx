import { useState } from "react";
import Tile from "./tile";
import Players from "./players";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { playerWins } from "../state/counter/players";
import { Winner } from "../state/counter/winCheck";

type place = {
    num: number,
    Val: "O" | "X" | "",
    filled: boolean
}
const Pattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const initialBoard: place[] = Array.from({ length: 9 }, (_, i) => ({
    num: i,
    Val: "",
    filled: false
}));

const Board = () => {
    const players = useSelector((state: RootState) => state.players);
    const winStatus = useSelector((state: RootState) => state.winCheck);
    const Dispatch = useDispatch<AppDispatch>();

    const WinCount = () => {
        console.log("winStatus", winStatus);
        return (
            <div className="player-section" style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
                {players.map((pl, index) => (
                    <Players name={pl.name} winCount={pl.winCount} Val={pl.Val} curr={currPlayer === index ? true : false} status={winStatus[index].status} />
                ))}
            </div>
        );
    }

    const [board, updateBoard] = useState<place[]>(initialBoard);
    const [currPlayer, changePlayer] = useState<number>(0);
    const [playCounter, updateCounter] = useState<number>(0);
    const [gameEnd, endGame] = useState(false);

    const checkWin = () => {
        if (playCounter < 4) return "cont";
        for (let i = 0; i < 8; i++) {
            let p = Pattern[i]
            let sign = players[currPlayer].Val;
            if (board[p[0]].Val === sign && board[p[1]].Val === sign && board[p[2]].Val === sign) {
                return "win";
            }
        }
        if (playCounter === 8) return "draw";
        return "cont";
    }
    const resetBoard = () => {
        endGame(game => false);
        updateBoard(initialBoard);
        for (let i = 0; i < 9; i++) { board[i].Val = ""; board[i].filled = false; }
    }

    const play = (tileNum: number) => {
        if (gameEnd) return;
        console.log(playCounter)
        let curr = board[tileNum];
        if (curr.filled) return;
        curr.Val = players[currPlayer].Val;
        curr.filled = true;
        updateCounter(curr => curr + 1);

        if (checkWin() === "win") {
            endGame(game => true);
            console.log("winner is :", players[currPlayer].name);
            Dispatch(playerWins(currPlayer));
            Dispatch(Winner(currPlayer));
            setTimeout(() => {
                Dispatch(Winner(2));
                updateCounter(0);
                resetBoard();
            }, 3000);
            return;
        } else if (checkWin() === "draw") {
            endGame(game => true);
            changePlayer(cp => (cp + 1) % 2);
            Dispatch(Winner(3));
            updateCounter(0);
            setTimeout(() => {
                Dispatch(Winner(2));
                resetBoard();
            }, 3000);

            return;
        }
        changePlayer(curr => {
            return curr = (curr + 1) % 2;
        })
    }
    return (<>
        <WinCount />
        <div className="board-wrapper" style={{ position: "fixed", top: "40%", left: "50%", border: "2px solid black", transform: "translateX(-50%)" }}>
            <div className="board" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                {board.map((spot) => (
                    <div onClick={() => play(spot.num)}>
                        <Tile num={spot.num} Val={spot.Val} filled={spot.filled} />
                    </div>
                ))}
            </div>
        </div>

        {gameEnd === false && (<div className="buttonSection" style={{ position: "absolute", left: "50%", bottom: "10%", transform: "translateX(-50%" }}>
            <button style={{ fontSize: "20px", border: "1px ridge skyBlue", color: "blue", width: "200px", cursor: "pointer" }} onClick={resetBoard}>Reset Board</button>
        </div>)}
    </>
    )
}

export default Board;