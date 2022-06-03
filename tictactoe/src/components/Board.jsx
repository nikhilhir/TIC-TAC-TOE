import React, { useState } from 'react';
import Square from './Square';
 import './Board.css';

function Board() {

    const [square, setSquare] = useState(Array(9).fill(null));

    const [X, setX] = useState(true);
     //const[box,setBox] = useState(false)
    const winner = findWinner(square);
    let status;
    if (winner) {
        status =Visiblebox(winner);
    } else {
        status = 'Player Turn: ' + (X ? 'X' : 'O');
    }

    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClick={() => handleClick(i)} />
        )
    }

    const handleClick = (i) => {
        const squares = square.slice();
        if (squares[i] === null) {
            squares[i] = X ? 'X' : 'O';
            setSquare(squares);
            setX(!X);
        } else {
            alert("Ruls :  Can't Change Your Move")
        }

    }

    function findWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
            // else{
            //     alert("Tie")
            // }
        }

        return null;
    }

    return (
       
        <div className="boardgame">
         <h1>TIC-TAC-TOE</h1>
            <div className="bRow">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="bRow">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="bRow">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <h3>{status}</h3>
        </div>
    )
}

const Visiblebox=(winner)=>{
    //https://thumbs.dreamstime.com/b/hand-holding-winner-trophy-sky-background-127107081.jpg
    return(
        <>
       
        <div className="visiblediv" style={{marginTop:"-390px"}}>
       
        <img className="imgclass" src="https://thumbs.dreamstime.com/b/hand-holding-winner-trophy-sky-background-127107081.jpg" alt='img'/>
         <h1>Winner is {winner}</h1>
         {/* <button onClick={() =>setBox(!box)}>Reset</button> */}
        </div>
        </>
    )
}
export default Board;