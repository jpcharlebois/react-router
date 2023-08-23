import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div id="navbar">
        <Link to={"/"}>home</Link>
        <Link to={"/blue"}>blue</Link>
        <Link to={"/red"}>red</Link>
        <Link to={"/green"}>green</Link>
      </div>
    );
  }