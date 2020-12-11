import React from "react";
import Education from "./components/Education";
import General from "./components/General";
import Practical from "./components/Practical";

const App = () => {
  return (
    <div className="col-6 mx-auto mt-5">
      <header className="App-header">
        <h1 className="text-center">CV Application</h1>
      </header>
      <General />
      <hr />
      <Education />
      <hr />
      <Practical />
    </div>
  );
};

export default App;
