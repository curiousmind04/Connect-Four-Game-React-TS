import { Link } from "react-router-dom";

import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <div className={classes.container}>
        <h1 className="sr-only">Connect Four Game</h1>
        <img src="/assets/images/logo.svg" alt="logo" />
        <Link to="/game-vs-computer" className={classes.btn1}>
          <h2>Play Vs Cpu</h2>
          <img src="/assets/images/player-vs-cpu.svg" alt="game mode icon" />
        </Link>
        <Link to="/game-players" className={classes.btn2}>
          <h2>Play Vs Player</h2>
          <img src="/assets/images/player-vs-player.svg" alt="game mode icon" />
        </Link>
        <Link to="/rules" className={classes.btn3}>
          <h2>Game Rules</h2>
        </Link>
      </div>
      <div className={classes.background}></div>
    </>
  );
};

export default HomePage;
