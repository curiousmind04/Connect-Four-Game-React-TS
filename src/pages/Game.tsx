import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./Game.module.css";

const GamePage = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [test, setTest] = useState<boolean>(true);
  // const gameMode =
  //   window.location.pathname === "/game-vs-computer" ? "pvc" : "pvp";

  const column1Handler = () => {
    setTest(false);
  };
  const column2Handler = () => {};
  const column3Handler = () => {};
  const column4Handler = () => {};
  const column5Handler = () => {};
  const column6Handler = () => {};
  const column7Handler = () => {};

  return (
    <div className={classes.game}>
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
            <div className={classes.boardGrid}>
              <div className={classes.action1} onClick={column1Handler}></div>
              <div className={classes.action2} onClick={column2Handler}></div>
              <div className={classes.action3} onClick={column3Handler}></div>
              <div className={classes.action4} onClick={column4Handler}></div>
              <div className={classes.action5} onClick={column5Handler}></div>
              <div className={classes.action6} onClick={column6Handler}></div>
              <div className={classes.action7} onClick={column7Handler}></div>
              <div className={classes.column1}></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className={classes.column1}></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className={classes.column1}></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className={classes.column1}></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div
                className={classes.column1}
                // hidden={test ? true : false}
                data-theme={test ? "top" : "drop"}
                onClick={column1Handler}
              >
                <picture>
                  <source
                    media="(min-width: 48rem)"
                    srcSet="/assets/images/counter-red-large.svg"
                  />
                  <img
                    src="/assets/images/counter-red-small.svg"
                    alt="red counter"
                  />
                </picture>
                {/* <picture>
                  <source
                    media="(min-width: 48rem)"
                    srcSet="/assets/images/counter-yellow-large.svg"
                  />
                  <img
                    src="/assets/images/counter-yellow-small.svg"
                    alt="yellow counter"
                  />
                </picture> */}
              </div>
              <div>
                <img
                  src="/assets/images/counter-red-small.svg"
                  alt="red counter"
                />
              </div>
              <div>
                <img
                  src="/assets/images/counter-red-small.svg"
                  alt="red counter"
                />
              </div>
              <div>
                <img
                  src="/assets/images/counter-red-small.svg"
                  alt="red counter"
                />
              </div>
              <div>
                <img
                  src="/assets/images/counter-red-small.svg"
                  alt="red counter"
                />
              </div>
              <div>
                <img
                  src="/assets/images/counter-red-small.svg"
                  alt="red counter"
                />
              </div>
              <div>
                <img
                  src="/assets/images/counter-red-small.svg"
                  alt="red counter"
                />
              </div>
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
    </div>
  );
};

export default GamePage;
