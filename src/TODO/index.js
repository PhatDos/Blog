import { useState, useEffect, useRef, useReducer, useContext } from "react";
import reducer, { init } from "./reducer";
import { addJob, setJob, deleteJob, Content } from "./actions";
import { StoreContext } from "../store";

function TodoApp() {
  const input = useRef();
  const [state, dispatch] = useReducer(reducer, init);
  const { job, jobs } = state;

  const [stateGlobal, dispatchGlobal] = useContext(StoreContext);
  console.log(stateGlobal);

  return (
    <div className="App">
      <input
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
        ref={input}
      ></input>
      <button
        onClick={() => {
          dispatch(addJob(job));
          input.current.focus();
        }}
      >
        Add
      </button>
      <ul>
        {jobs.map((value, i) => (
          <div key={i} style={{ display: "flex" }}>
            <li>{value}</li>
            <button onClick={() => dispatch(deleteJob(i))}>DELETE</button>
          </div>
        ))}
      </ul>
      <div>
        <Content></Content>
      </div>
    </div>
  );
}

export default TodoApp;
