import React, { Fragment } from "react";

const Choice = ({ handleProps, handleThema }) => {
  const handleChoice = (e, teks, thema) => {
    handleProps(e, teks);
    handleThema(thema);
  };
  return (
    <Fragment>
      <div className="choice flex justify-center gap-5 p-3 ">
        <div
          onClick={(e) => handleChoice(e, "history", "history")}
          className="history text-start p-3 bg-indigo-800 rounded shadow-md hover:scale-105 cursor-pointer transition duration-50 ease-out hover:ease-in"
        >
          <div className="flex gap-2">
            <p className="text-slate-200 font-semibold">Question about</p>{" "}
            <span className="font-semibold text-slate-100">History</span>
          </div>
          <p className="font-semibold text-slate-100">5 Quetions test</p>
          <div className="flex  gap-2 text-slate-300 font-semibold mt-3">
            <p className="align-center">Easy</p>{" "}
            <span className="w-3 h-3 bg-green-500 rounded-full my-auto "></span>
          </div>
        </div>

        <div
          onClick={(e) => handleChoice(e, "history", "music")}
          className="history text-start p-3 bg-indigo-800 rounded shadow-md hover:scale-105 cursor-pointer transition duration-150 ease-out hover:ease-in"
        >
          <div className="flex gap-2">
            <p className="text-slate-200 font-semibold">Question about</p>{" "}
            <span className="font-semibold text-slate-100">Music</span>
          </div>
          <p className="font-semibold text-slate-100">5 Quetions test</p>
          <div className="flex  gap-2 text-slate-300 font-semibold mt-3">
            <p className="align-center">Easy</p>{" "}
            <span className="w-3 h-3 bg-green-500 rounded-full my-auto "></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Choice;
