import { Fragment } from "react";
import "./App.css";
import Quiz from "./component/quiz";
import { DataContext } from "./context";

const App = () => {
  return (
    <Fragment>
      <DataContext>
        <Quiz />
      </DataContext>
    </Fragment>
  );
};

export default App;
