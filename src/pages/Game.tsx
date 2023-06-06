import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./Game.module.css";

type Move = {
  position: number;
  played: boolean;
  counter: string;
};

const GamePage = () => {
  const initialMoves = [
    { position: 1, played: false, counter: "unplayed" },
    { position: 2, played: false, counter: "unplayed" },
    { position: 3, played: false, counter: "unplayed" },
    { position: 4, played: false, counter: "unplayed" },
    { position: 5, played: false, counter: "unplayed" },
    { position: 6, played: false, counter: "unplayed" },
    { position: 7, played: false, counter: "unplayed" },
    { position: 8, played: false, counter: "unplayed" },
    { position: 9, played: false, counter: "unplayed" },
    { position: 10, played: false, counter: "unplayed" },
    { position: 11, played: false, counter: "unplayed" },
    { position: 12, played: false, counter: "unplayed" },
    { position: 13, played: false, counter: "unplayed" },
    { position: 14, played: false, counter: "unplayed" },
    { position: 15, played: false, counter: "unplayed" },
    { position: 16, played: false, counter: "unplayed" },
    { position: 17, played: false, counter: "unplayed" },
    { position: 18, played: false, counter: "unplayed" },
    { position: 19, played: false, counter: "unplayed" },
    { position: 20, played: false, counter: "unplayed" },
    { position: 21, played: false, counter: "unplayed" },
    { position: 22, played: false, counter: "unplayed" },
    { position: 23, played: false, counter: "unplayed" },
    { position: 24, played: false, counter: "unplayed" },
    { position: 25, played: false, counter: "unplayed" },
    { position: 26, played: false, counter: "unplayed" },
    { position: 27, played: false, counter: "unplayed" },
    { position: 28, played: false, counter: "unplayed" },
    { position: 29, played: false, counter: "unplayed" },
    { position: 30, played: false, counter: "unplayed" },
    { position: 31, played: false, counter: "unplayed" },
    { position: 32, played: false, counter: "unplayed" },
    { position: 33, played: false, counter: "unplayed" },
    { position: 34, played: false, counter: "unplayed" },
    { position: 35, played: false, counter: "unplayed" },
    { position: 36, played: false, counter: "unplayed" },
    { position: 37, played: false, counter: "unplayed" },
    { position: 38, played: false, counter: "unplayed" },
    { position: 39, played: false, counter: "unplayed" },
    { position: 40, played: false, counter: "unplayed" },
    { position: 41, played: false, counter: "unplayed" },
    { position: 42, played: false, counter: "unplayed" },
  ];

  const [menu, setMenu] = useState<boolean>(false);
  const [turn, setTurn] = useState<string>("red");
  const [moves, setMoves] = useState<Move[]>(initialMoves);
  // const gameMode =
  //   window.location.pathname === "/game-vs-computer" ? "pvc" : "pvp";

  const placementHandler = (num: number) => {
    const newMoves = moves;
    let arr;
    let spot;

    if ([35, 28, 21, 14, 7, 0].includes(num)) {
      arr = [35, 28, 21, 14, 7, 0];
    }
    if ([36, 29, 22, 15, 8, 1].includes(num)) {
      arr = [36, 29, 22, 15, 8, 1];
    }
    if ([37, 30, 23, 16, 9, 2].includes(num)) {
      arr = [37, 30, 23, 16, 9, 2];
    }
    if ([38, 31, 24, 17, 10, 3].includes(num)) {
      arr = [38, 31, 24, 17, 10, 3];
    }
    if ([39, 32, 25, 18, 11, 4].includes(num)) {
      arr = [39, 32, 25, 18, 11, 4];
    }
    if ([40, 33, 26, 19, 12, 5].includes(num)) {
      arr = [40, 33, 26, 19, 12, 5];
    }
    if ([41, 34, 27, 20, 13, 6].includes(num)) {
      arr = [41, 34, 27, 20, 13, 6];
    }

    if (arr) {
      if (moves[arr[0]].played === false) {
        spot = arr[0];
      } else if (moves[arr[1]].played === false) {
        spot = arr[1];
      } else if (moves[arr[2]].played === false) {
        spot = arr[2];
      } else if (moves[arr[3]].played === false) {
        spot = arr[3];
      } else if (moves[arr[4]].played === false) {
        spot = arr[4];
      } else if (moves[arr[5]].played === false) {
        spot = arr[5];
      } else {
        return;
      }
    }

    if (spot) {
      newMoves[spot].played = true;
      setMoves(newMoves);
      const result = checkForWinner(newMoves, turn);

      // if (result === false) {
      //   setTurn(turn === "red" ? "yellow" : "red");
      // } else {

      // }

      return;
    }
  };

  const checkForWinner = (moves: Move[], player: string) => {
    const rows = [
      moves.slice(0, 7),
      moves.slice(7, 14),
      moves.slice(14, 21),
      moves.slice(21, 28),
      moves.slice(28, 35),
      moves.slice(35, 42),
    ];

    // console.log(rows);

    //check for winner on rows
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 6; i++) {
        if (
          rows[i][j].counter === player &&
          rows[i][j + 1].counter === player &&
          rows[i][j + 2].counter === player &&
          rows[i][j + 3].counter === player
        ) {
          console.log("winner");
          return {
            one: rows[i][j].position,
            two: rows[i][j + 1].position,
            three: rows[i][j + 2].position,
            four: rows[i][j + 3].position,
          };
        }
      }
    }

    //check for winner on columns
    for (let j = 0; j < 7; j++) {
      for (let i = 0; i < 3; i++) {
        if (
          rows[i][j].counter === player &&
          rows[i + 1][j].counter === player &&
          rows[i + 2][j].counter === player &&
          rows[i + 3][j].counter === player
        ) {
          console.log("winner");
          return true;
        }
      }
    }

    //check for winner on descending diagonal
    for (let j = 3; j < 7; j++) {
      for (let i = 3; i < 6; i++) {
        if (
          rows[i][j].counter === player &&
          rows[i - 1][j - 1].counter === player &&
          rows[i - 2][j - 2].counter === player &&
          rows[i - 3][j - 3].counter === player
        ) {
          console.log("winner");
          return true;
        }
      }
    }

    //check for winner on ascending diagonal
    for (let j = 3; j > 0; j--) {
      for (let i = 5; i > 2; i--) {
        if (
          rows[i][j].counter === player &&
          rows[i - 1][j + 1].counter === player &&
          rows[i - 2][j + 2].counter === player &&
          rows[i - 3][j + 3].counter === player
        ) {
          console.log("winner");
          return true;
        }
      }
    }

    return false;
  };

  // console.log(moves);
  // console.log(turn);

  const counterChooser = (color: string) => {
    return (
      <picture>
        <source
          media="(min-width: 48rem)"
          srcSet={`/assets/images/counter-${color}-large.svg`}
        />
        <img
          src={`/assets/images/counter-${color}-small.svg`}
          alt={`${color} counter`}
        />
      </picture>
    );
  };

  return (
    <div className={classes.game}>
      <div className={classes.top}>
        <button onClick={() => setMenu(true)}>Menu</button>
        <img src="/assets/images/logo.svg" alt="logo" />
        <button
          onClick={() => {
            setTurn("red");
            setMoves(initialMoves);
          }}
        >
          Restart
        </button>
      </div>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.player1}>
            <h2>Player 1</h2>
            <span className={classes.score1}>0</span>
            <img src="/assets/images/player-one.svg" alt="player one icon" />
          </div>
          <div className={classes.player2}>
            <h2>Player 2</h2>
            <span className={classes.score2}>0</span>
            <img src="/assets/images/player-two.svg" alt="player two icon" />
          </div>
          <div className={classes.board}>
            <div className={classes.boardGrid}>
              {moves.map((move) => (
                <div
                  key={moves.indexOf(move)}
                  data-stage={
                    moves[moves.indexOf(move)].played ? "drop" : "top"
                  }
                  onClick={placementHandler.bind(null, moves.indexOf(move))}
                >
                  {moves[moves.indexOf(move)].counter !== "unplayed" &&
                    counterChooser(moves[moves.indexOf(move)].counter)}
                </div>
              ))}
            </div>
            <picture className={classes.black}>
              <source
                media="(min-width: 48rem)"
                srcSet="/assets/images/board-layer-black-large.svg"
              />
              <img
                src="/assets/images/board-layer-black-small.svg"
                alt="black board layer"
              />
            </picture>

            <picture className={classes.white}>
              <source
                media="(min-width: 48rem)"
                srcSet="/assets/images/board-layer-white-large.svg"
              />
              <img
                src="/assets/images/board-layer-white-small.svg"
                alt="white board layer"
              />
            </picture>
          </div>
        </div>
        <div className={classes.turn}>
          <div>
            <img
              src={`/assets/images/turn-background-${turn}.svg`}
              alt="turn block background"
            />
            <div className={classes.detail}>
              <span className={classes.indicator}>
                {turn === "red" ? "Player 1's Turn" : "Player 2's Turn"}
              </span>
              <span className={classes.time}>0s</span>
            </div>
          </div>
        </div>

        {menu && (
          <div className={classes.menu}>
            <h3>Pause</h3>
            <button className={classes.btn1} onClick={() => setMenu(false)}>
              <h4>Continue Game</h4>
            </button>
            <button
              className={classes.btn2}
              onClick={() => {
                setMenu(false);
                setTurn("red");
                setMoves(initialMoves);
              }}
            >
              <h4>Restart</h4>
            </button>
            <Link to="/" className={classes.btn3}>
              <h4>Quit Game</h4>
            </Link>
          </div>
        )}
      </div>

      <div className={classes.patternPlaying}></div>
      {/* <div className={classes.patternPlayer1Wins}></div>
      <div className={classes.patternPlayer2Wins}></div> */}
      {menu && <div className={classes.backdrop}></div>}
    </div>
  );
};

export default GamePage;
