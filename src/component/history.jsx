import React, { Fragment, useEffect, useState } from "react";
import ListChoice from "./choice/listChoice";

const History = ({ handleProps, handleScore, score, themaQuis, setPage }) => {
  const [next, setNext] = useState(0);
  const [tminutes, setTminutes] = useState();
  const [tseconds, setTseconds] = useState();

  const handleTime = () => {
    let startTimeminutes = 1;
    let time = startTimeminutes * 60;
    let setTime = setInterval(() => {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      setTminutes(minutes);
      setTseconds(seconds);
      if (time <= 0) {
        setPage("hasil");
        clearInterval(setTime);
      }
      time--;
    }, 1000);
  };

  const handleNextQetions = (e) => {
    if (next >= 4) {
      handleProps(e, "hasil");
      setNext(0);
    } else {
      setNext(next + 1);
    }
  };

  useEffect(() => {
    handleTime();
  }, [setTminutes, setTseconds]);

  return (
    <Fragment>
      <div className="history p-2 relative">
        <h1
          className={`text-slate-200 text-shadow font-semibold text-xl ${
            tseconds < 50 ? "text-red-600" : ""
          }`}
        >
          {tminutes} : {tseconds}
        </h1>
        <div className="content-history">
          <span className="absolute top-0 right-5 font-semibold text-slate-300 text-2xl uppercase ">
            {themaQuis}
          </span>
          <div className="mb-5">
            <ListChoice
              next={next}
              handleScore={handleScore}
              score={score}
              themaQuis={themaQuis}
            />
          </div>
        </div>
        <button
          className="shadow-md font-semibold text-slate-100 px-3 py-2 bg-green-500 rounded transition duration-100 ease-out hover:ease-in hover:scale-105"
          onClick={(e) => handleNextQetions(e)}
        >
          Next question
        </button>
      </div>
    </Fragment>
  );
};

export default History;
