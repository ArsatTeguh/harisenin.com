import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

const ListChoice = ({next, handleScore, score, themaQuis}) => {
  const [quetions, setquestion] = useState();
  const [random, setRandom] = useState();
  const [corect, setCorrect] = useState('')

  const dataHistory = async () => {
    try {
      if(themaQuis === 'history') {
        const response = await axios.get(
          "https://the-trivia-api.com/api/questions?categories=history&limit=5&region=ID&difficulty=easy"
        );
        const incorrectAnswers = response.data[next].incorrectAnswers;
        const correctAnswer = response.data[next].correctAnswer;
        const quetionsList = response.data[next].question;
        let listdata = [...incorrectAnswers, correctAnswer]
        setquestion(quetionsList);
        randomInt(listdata)
        setCorrect(correctAnswer)
      }else {
        const response = await axios.get(
          "https://the-trivia-api.com/api/questions?categories=music&limit=5&difficulty=easy"
        );
        const incorrectAnswers = response.data[next].incorrectAnswers;
        const correctAnswer = response.data[next].correctAnswer;
        const quetionsList = response.data[next].question;
        let listdata = [...incorrectAnswers, correctAnswer]
        setquestion(quetionsList);
        randomInt(listdata)
        setCorrect(correctAnswer)
      }
     
    } catch (error) {
      return error;
    }
  };

  const randomInt = (arr) => {
    let shuffleArray = [];
    let indexArray = [];

    let i = 0;
    while (i < arr?.length) {
      let randomNum = Math.floor(Math.random() * arr?.length);
      if (!indexArray.includes(randomNum)) {
        shuffleArray.push(arr[randomNum]);
        indexArray.push(randomNum);
        i++;
      }
    }
    setRandom(shuffleArray);
  };

  const handleScores = (answer) => {
   answer === corect && handleScore(score + 25)
  }

  useEffect(() => {
    dataHistory();
  },[next]);

  return (
    <Fragment>
      <div className="listChoice">
        <h1 className="w-1/2 mx-auto mb-4 text-slate-200 font-semibold border-b py-2">{quetions}</h1>

        <div className="list">
         {
          random !== undefined && (
           <div className="btn-list w-3/4 mx-auto grid grid-rows-2 grid-flow-col gap-4 ">
             <button className="border-2 hover:scale-105  py-1 rounded text-slate-200 active:bg-green-700 focus:outline-none focus:ring focus:bg-green-500 focus:ring-sky-300 focus:font-semibold transition duration-50 ease-out hover:ease-in" onClick={() => handleScores(random[0])}>A.  {random[0]}</button>
            <button  className="border-2 hover:scale-105  py-1 rounded text-slate-200 active:bg-green-700 focus:outline-none focus:ring focus:bg-green-500 focus:ring-sky-300 focus:font-semibold transition duration-50 ease-out hover:ease-in" onClick={() => handleScores(random[1])}>B.  {random[1]}</button>
            <button className="border-2 hover:scale-105  py-1 rounded text-slate-200 active:bg-green-700 focus:outline-none focus:ring focus:bg-green-500 focus:ring-sky-300 focus:font-semibold transition duration-50 ease-out hover:ease-in" onClick={() => handleScores(random[2])}>C. {random[2]}</button>
            <button  className="border-2 hover:scale-105  py-1 rounded text-slate-200 active:bg-green-700 focus:outline-none focus:ring focus:bg-green-500 focus:ring-sky-300 focus:font-semibold transition duration-50 ease-out hover:ease-in" onClick={() => handleScores(random[3])}>D.  {random[3]}</button>
           </div>
          )
         }
        </div>
      </div>
    </Fragment>
  );
};

export default ListChoice;
