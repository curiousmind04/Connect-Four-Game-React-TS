import { Link } from "react-router-dom";

import classes from "./Rules.module.css";

const RulesPage = () => {
  return (
    <>
      <div className={classes.container}>
        <h2>Rules</h2>
        <h3>Objective</h3>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h3>How To Play</h3>
        <div className={classes.numlist}>
          <div className={classes.num}>1</div>
          <p>Red goes first in the first game.</p>
        </div>
        <div className={classes.numlist}>
          <div className={classes.num}>2</div>
          <p>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </p>
        </div>
        <div className={classes.numlist}>
          <div className={classes.num}>3</div>
          <p>The game ends when there is a 4-in-a-row or a stalemate.</p>
        </div>
        <div className={classes.numlist}>
          <div className={classes.num}>4</div>
          <p>The starter of the previous game goes second on the next game.</p>
        </div>
        <Link to="/">
          {/* <img src="/assets/images/icon-check.svg" alt="check icon" /> */}
          <svg
            width="70px"
            height="75px"
            viewBox="0 0 70 75"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>icon-check</title>
            <g
              id="Designs"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon-check">
                <circle
                  className={classes.outline}
                  id="Oval-Copy-37"
                  fill="#000000"
                  cx="35"
                  cy="35"
                  r="35"
                ></circle>
                <circle
                  className={classes.outline}
                  id="Oval-Copy-38"
                  fill="#000000"
                  cx="35"
                  cy="40"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-39"
                  fill="#FD6687"
                  cx="35"
                  cy="35"
                  r="32"
                ></circle>
                <polyline
                  id="Path"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
                ></polyline>
              </g>
            </g>
          </svg>
          <span className="sr-only">Home Page</span>
        </Link>
      </div>
    </>
  );
};

export default RulesPage;
