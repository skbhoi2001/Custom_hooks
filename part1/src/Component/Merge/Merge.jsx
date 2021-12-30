import React,{ useState } from "react";
import useMergeState from "./useMerge";

export default function Merge() {
  const initialState = {
    username: "",
    email: "",
    password: ""
  };
  const [state, setState] = useMergeState(initialState);
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue([...value, state]);
  };

  return (
    <div className="App">
      <h1>React with Custom Hook useMergeState</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input name="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div>
          <input
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        {value.map((item) => {
          return (
            <div key={item.username}>
              <div>{item.username}</div>
              <div>{item.email}</div>
              <div>{item.password}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
