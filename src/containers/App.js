import React, { Fragment } from "react";
import AddNewTask from "../components/task/AddNewTask";
import Todos from "../components/task/Todos";
function App() {
  return (
    <div>
      <Fragment>
        <AddNewTask />
        <Todos />
      </Fragment>
    </div>
  );
}

export default App;
