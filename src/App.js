import { useSelector } from "react-redux";
import "./App.scss";
import { getUser } from "./features/authSlice";
import Home from "./views/Home";
import Login from "./views/Login";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const user = useSelector(getUser);

  useEffect(() => {
    axios("https://randomuser.me/api/0.8/?results=20").then((response) =>
      localStorage.setItem(
        "users",
        JSON.stringify(response.data.results.slice(0, 5))
      )
    );
  }, []);

  return <div className="App">{user ? <Home /> : <Login />}</div>;
}

export default App;
