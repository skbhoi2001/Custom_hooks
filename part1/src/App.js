import React from "react";
import "./styles.css";
import Button from "./Component/Button/Button";

import GithubSearchHooks from "./Component/Github/GithubSearchHooks";
import Hooks from "./Component/TimeOut/Hooks";
import Merge from "./Component/Merge/Merge";
import Timer from "./Component/Timer/Timer";

export default function App() {
  return (
    <div className="App">
      <h1>useContext Hooks</h1>
      <br />

      <Button label="button" />
      <hr />
      <Hooks />
      <hr />
      <GithubSearchHooks />
      <hr/>
      <Merge/>
      <hr/>
      <Timer/>
    </div>
  );
}
