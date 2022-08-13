import { Fragment, useState } from "react";
import React from "react";
import Home from "./home";
import Choice from "./choice/choice";
import History from "./history";
import Hasil from "./hasil/hasil";
import Peringkat from "./peringkat/peringkat";

const Quiz = () => {
  const [page, setPage] = useState("home");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [themaQuis, setThemaQuis] = useState("");

  const handlePage = (e, nextPage) => {
    e.preventDefault();
    setPage(nextPage);
  };

  return (
    <Fragment>
      <div className="Home container mx-auto grid grid-cols-3 gap-1 p-4  text-center">
        <div className="content-home col-span-2 bg-blue-500 rounded p-2 ">
          {page === "home" && (
            <Home
              handleProps={handlePage}
              handleName={setUsername}
              username={username}
            />
          )}
          {page === "choice" && (
            <Choice handleProps={handlePage} handleThema={setThemaQuis} />
          )}
          {page === "history" && (
            <History
              handleProps={handlePage}
              handleScore={setScore}
              score={score}
              themaQuis={themaQuis}
              setPage={setPage}
            />
          )}
          {page === "hasil" && (
            <Hasil
              handleProps={handlePage}
              username={username}
              score={score}
              themaQuis={themaQuis}
              setScore={setScore}
              setUsername={setUsername}
            />
          )}
        </div>

        <div className="Peringkat bg-blue-500 rounded relative">
          <Peringkat />
        </div>
      </div>
    </Fragment>
  );
};

export default Quiz;
