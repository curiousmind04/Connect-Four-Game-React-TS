import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./Game.module.css";

const GamePage = () => {
  const [menu, setMenu] = useState<boolean>(false);
  // const gameMode =
  //   window.location.pathname === "/game-vs-computer" ? "pvc" : "pvp";

  return (
    <>
      <div className={classes.top}>
        <button onClick={() => setMenu(true)}>Menu</button>
        <img src="/assets/images/logo.svg" alt="logo" />
        <button>Restart</button>
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
              src="/assets/images/turn-background-red.svg"
              alt="turn block background"
            />
            <div className={classes.detail}>
              <span className={classes.indicator}>Player 1's Turn</span>
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
            <Link
              to="/game-players"
              className={classes.btn2}
              onClick={() => setMenu(false)}
            >
              <h4>Restart</h4>
            </Link>
            <Link
              to="/"
              className={classes.btn3}
              onClick={() => setMenu(false)}
            >
              <h4>Quit Game</h4>
            </Link>
          </div>
        )}
      </div>
      <div className={classes.patternPlaying}></div>
      {/* <div className={classes.patternPlayer1Wins}></div>
      <div className={classes.patternPlayer2Wins}></div> */}
      {menu && <div className={classes.backdrop}></div>}
    </>
  );
};

export default GamePage;
