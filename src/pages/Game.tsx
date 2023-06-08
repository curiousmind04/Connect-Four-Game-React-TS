import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import classes from "./Game.module.css";

type Move = {
  position: number;
  played: boolean;
  counter: string;
};

type Result = {
  winningMoves: number[] | null;
  winner: string;
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
  const [moves, setMoves] = useState<Move[]>(initialMoves);
  const [remainingMoves, setRemainingMoves] = useState<Move[]>(initialMoves);
  const [round, setRound] = useState<number>(1);
  const [turn, setTurn] = useState<string>("red");
  const [winner, setWinner] = useState<boolean | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [p1Score, setP1Score] = useState<number>(0);
  const [p2Score, setP2Score] = useState<number>(0);
  const [time, setTime] = useState<number>(30);
  const [pause, setPause] = useState({ paused: false, pausedAt: 30 });
  const [compNum, setCompNum] = useState(Math.floor(Math.random() * 42));
  const gameMode =
    window.location.pathname === "/game-vs-computer" ? "pvc" : "pvp";

  useEffect(() => {
    const countTo = new Date().getTime() + 30000;
    // console.log(countTo);

    const pausedTime = pause.pausedAt * 1000;
    // console.log(pausedTime);

    const resumedTime = countTo - (30000 - pausedTime);
    // console.log(resumedTime);

    if (pause.paused) {
      setMenu(true);
    }

    if (!winner) {
      const interval = setInterval(() => {
        const now = new Date().getTime();

        const remainingTime = !pause.paused ? resumedTime - now : pausedTime;

        // console.log(remainingTime);

        if (remainingTime < 1) {
          console.log("time done");
          turn === "red"
            ? setP2Score((prevState) => prevState + 1)
            : setP1Score((prevState) => prevState + 1);
          setWinner(true);
          setRound((prevState) => prevState + 1);
          setResult({
            winningMoves: null,
            winner: turn === "red" ? "yellow" : "red",
          });
          setPause({ paused: false, pausedAt: 30 });
          clearInterval(interval);
          return;
        }

        if (!pause.paused) {
          timeHandler(remainingTime);
        }
      }, 250);

      return () => clearInterval(interval);
    }
  }, [turn, winner, pause]);

  const timeHandler = (remainingTime: number) => {
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    // console.log(seconds);
    setTime((prevState) => (prevState > seconds ? seconds : prevState));
  };

  // console.log(time);

  // useEffect(() => {
  //   const countTo = new Date().getTime() + 10000;
  //   if (!winner) {
  //     const interval = setInterval(() => {
  //       const now = new Date().getTime();

  //       const remainingTime = countTo - now;

  //       if (remainingTime < 1) {
  //         console.log("time done");
  //         turn === "red"
  //           ? setP2Score((prevState) => prevState + 1)
  //           : setP1Score((prevState) => prevState + 1);
  //         setWinner(true);
  //         setRound((prevState) => prevState + 1);
  //         setResult({
  //           winningMoves: null,
  //           winner: turn === "red" ? "yellow" : "red",
  //         });
  //         clearInterval(interval);
  //         return;
  //       }

  //       timeHandler(remainingTime);
  //     }, 250);

  //     return () => clearInterval(interval);
  //   }
  // }, [turn, winner]);

  // const timeHandler = (remainingTime: number) => {
  //   const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  //   // console.log(seconds);
  //   setTime(seconds);
  // };

  const checkForWinner = useCallback(
    (moves: Move[], player: string) => {
      let winner = false;

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
            setResult({
              winningMoves: [
                rows[i][j].position,
                rows[i][j + 1].position,
                rows[i][j + 2].position,
                rows[i][j + 3].position,
              ],
              winner: player,
            });
            winner = true;
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
            setResult({
              winningMoves: [
                rows[i][j].position,
                rows[i + 1][j].position,
                rows[i + 2][j].position,
                rows[i + 3][j].position,
              ],
              winner: player,
            });
            winner = true;
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
            setResult({
              winningMoves: [
                rows[i][j].position,
                rows[i - 1][j - 1].position,
                rows[i - 2][j - 2].position,
                rows[i - 3][j - 3].position,
              ],
              winner: player,
            });
            winner = true;
          }
        }
      }

      //check for winner on ascending diagonal
      for (let j = 0; j < 4; j++) {
        for (let i = 3; i < 6; i++) {
          if (
            rows[i][j].counter === player &&
            rows[i - 1][j + 1].counter === player &&
            rows[i - 2][j + 2].counter === player &&
            rows[i - 3][j + 3].counter === player
          ) {
            setResult({
              winningMoves: [
                rows[i][j].position,
                rows[i - 1][j + 1].position,
                rows[i - 2][j + 2].position,
                rows[i - 3][j + 3].position,
              ],
              winner: player,
            });
            winner = true;
          }
        }
      }

      //check for stalemate
      let totalMoves = 0;
      moves.forEach((move) => {
        if (move.played) {
          totalMoves++;
        }
      });

      if (totalMoves == 42 && winner === false) {
        console.log("winner");
        setRound((prevState) => prevState + 1);
        setWinner(true);
        setResult({
          winningMoves: null,
          winner: "stalemate",
        });
        winner = true;
        return;
      }

      if (!winner) {
        setPause({ paused: false, pausedAt: 30 });
        setTurn(turn === "red" ? "yellow" : "red");
        setTime(30);
      } else {
        console.log("winner");
        setPause({ paused: false, pausedAt: 30 });
        setRound((prevState) => prevState + 1);
        turn === "red"
          ? setP1Score((prevState) => prevState + 1)
          : setP2Score((prevState) => prevState + 1);
        setWinner(true);
      }
    },
    [turn]
  );

  const placementHandler = useCallback(
    (num: number) => {
      // console.log(num);

      if (winner) {
        return;
      }

      const newMoves = moves;
      let arr;
      let spot: boolean | number = false;
      const row1 = [35, 28, 21, 14, 7, 0];
      const row2 = [36, 29, 22, 15, 8, 1];
      const row3 = [37, 30, 23, 16, 9, 2];
      const row4 = [38, 31, 24, 17, 10, 3];
      const row5 = [39, 32, 25, 18, 11, 4];
      const row6 = [40, 33, 26, 19, 12, 5];
      const row7 = [41, 34, 27, 20, 13, 6];

      if (row1.includes(num)) {
        arr = row1;
      }
      if (row2.includes(num)) {
        arr = row2;
      }
      if (row3.includes(num)) {
        arr = row3;
      }
      if (row4.includes(num)) {
        arr = row4;
      }
      if (row5.includes(num)) {
        arr = row5;
      }
      if (row6.includes(num)) {
        arr = row6;
      }
      if (row7.includes(num)) {
        arr = row7;
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

      if (typeof spot === "number") {
        newMoves[spot] = { position: spot + 1, played: true, counter: turn };
        setMoves(newMoves);
        setRemainingMoves((prevState) =>
          prevState.filter(
            (move) =>
              typeof spot === "number" && move.position !== moves[spot].position
          )
        );
        checkForWinner(newMoves, turn);
      }
    },
    [moves, turn, winner, checkForWinner]
  );

  // console.log(remainingMoves);
  // console.log(compNum);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (gameMode === "pvc" && turn === "yellow") {
        console.log(compNum);
        placementHandler(compNum);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [turn, gameMode, placementHandler, winner, moves, compNum]);

  useEffect(() => {
    if (remainingMoves.length > 0) {
      setCompNum(
        remainingMoves[Math.floor(Math.random() * remainingMoves.length)]
          .position - 1
      );
    } else {
      return;
    }
  }, [remainingMoves]);

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
          className={classes.counter}
        />
      </picture>
    );
  };

  return (
    <div className={classes.game}>
      <div className={classes.top}>
        <button
          onClick={() => {
            // setMenu(true);
            setPause({ paused: true, pausedAt: time });
          }}
        >
          Menu
        </button>
        <img src="/assets/images/logo.svg" alt="logo" />
        <button
          onClick={() => {
            setTurn("red");
            setRound(1);
            setTime(30);
            setWinner(winner === true || winner === false ? null : false);
            setResult(null);
            setMoves(initialMoves);
            setP1Score(0);
            setP2Score(0);
            setPause({ paused: false, pausedAt: 30 });
            setRemainingMoves(initialMoves);
          }}
        >
          Restart
        </button>
      </div>

      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.player1}>
            <h2>{gameMode === "pvp" ? "Player 1" : "You"}</h2>
            <span className={classes.score1}>{p1Score}</span>
            {gameMode !== "pvc" ? (
              <img src="/assets/images/player-one.svg" alt="player one icon" />
            ) : (
              <img src="/assets/images/you.svg" alt="you icon" />
            )}
          </div>
          <div className={classes.player2}>
            <h2>{gameMode === "pvp" ? "Player 2" : "Cpu"}</h2>
            <span className={classes.score2}>{p2Score}</span>
            {gameMode !== "pvc" ? (
              <img src="/assets/images/player-two.svg" alt="player two icon" />
            ) : (
              <img src="/assets/images/cpu.svg" alt="cpu icon" />
            )}
          </div>

          <div className={classes.board}>
            <div className={classes.boardGrid}>
              {moves.map((move) => (
                <div
                  key={moves.indexOf(move)}
                  data-stage={
                    moves[moves.indexOf(move)].played ? "drop" : "top"
                  }
                  onClick={() => {
                    if (gameMode === "pvc" && turn === "yellow") {
                      return;
                    } else {
                      placementHandler(moves.indexOf(move));
                      // placementHandler.bind(null, moves.indexOf(move));
                    }
                  }}
                >
                  {[0, 1, 2, 3, 4, 5, 6].includes(moves.indexOf(move)) &&
                    gameMode !== "pvc" && (
                      <img
                        className={classes.marker}
                        src={`/assets/images/marker-${turn}.svg`}
                        alt={`${turn} marker`}
                      />
                    )}
                  {[0, 1, 2, 3, 4, 5, 6].includes(moves.indexOf(move)) &&
                    gameMode === "pvc" &&
                    turn === "red" && (
                      <img
                        className={classes.marker}
                        src={`/assets/images/marker-${turn}.svg`}
                        alt={`${turn} marker`}
                      />
                    )}
                  {moves[moves.indexOf(move)].counter !== "unplayed" &&
                    counterChooser(moves[moves.indexOf(move)].counter)}
                  {result &&
                    result.winningMoves &&
                    result.winningMoves.includes(moves.indexOf(move) + 1) && (
                      <div className={classes.winningCounter}></div>
                    )}
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

        {!winner && (
          <div
            className={turn === "red" ? classes.redTurn : classes.yellowTurn}
          >
            <div>
              <img
                src={`/assets/images/turn-background-${turn}.svg`}
                alt="turn block background"
              />
              <div className={classes.detail}>
                <span className={classes.indicator}>
                  {turn === "red" && gameMode === "pvp" && "Player 1's Turn"}
                  {turn === "red" && gameMode === "pvc" && "Your Turn"}
                  {turn === "yellow" && gameMode === "pvp" && "Player 2's Turn"}
                  {turn === "yellow" && gameMode === "pvc" && "Cpu's Turn"}
                </span>
                <span className={classes.time}>{`${time}s`}</span>
              </div>
            </div>
          </div>
        )}
        {winner && (
          <div className={classes.win}>
            <span className={classes.indicator}>
              {result &&
                result.winner === "red" &&
                gameMode === "pvp" &&
                "Player 1"}
              {result &&
                result.winner === "yellow" &&
                gameMode === "pvp" &&
                "Player 2"}
              {result && result.winner === "red" && gameMode === "pvc" && "You"}
              {result &&
                result.winner === "yellow" &&
                gameMode === "pvc" &&
                "Cpu"}
              {result && result.winner === "stalemate" && "Stalemate"}
            </span>
            <span className={classes.wins}>
              {result &&
                result.winner === "red" &&
                gameMode === "pvp" &&
                "Wins"}
              {result &&
                result.winner === "yellow" &&
                gameMode === "pvp" &&
                "Wins"}
              {result && result.winner === "stalemate" && "Tie Game"}
              {result && result.winner === "red" && gameMode === "pvc" && "Win"}
              {result &&
                result.winner === "yellow" &&
                gameMode === "pvc" &&
                "Wins"}
            </span>
            <button
              onClick={() => {
                setWinner(false);
                setMoves(initialMoves);
                setResult(null);
                setTurn(round % 2 == 0 ? "yellow" : "red");
                setTime(30);
                setRemainingMoves(initialMoves);
              }}
            >
              Play Again
            </button>
          </div>
        )}

        {menu && (
          <div className={classes.menu}>
            <h3>Pause</h3>
            <button
              className={classes.btn1}
              onClick={() => {
                setMenu(false);
                setPause({ paused: false, pausedAt: time });
              }}
            >
              <h4>Continue Game</h4>
            </button>
            <button
              className={classes.btn2}
              onClick={() => {
                setMenu(false);
                setTurn("red");
                setMoves(initialMoves);
                setP1Score(0);
                setP2Score(0);
                setRound(1);
                setTime(30);
                setWinner(winner === true || winner === false ? null : false);
                setResult(null);
                setPause({ paused: false, pausedAt: 30 });
                setRemainingMoves(initialMoves);
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

      {!winner && <div className={classes.patternPlaying}></div>}
      {result && result.winner === "red" && (
        <div className={classes.patternPlayer1Wins}></div>
      )}
      {result && result.winner === "yellow" && (
        <div className={classes.patternPlayer2Wins}></div>
      )}
      {menu && <div className={classes.backdrop}></div>}
    </div>
  );
};

export default GamePage;
