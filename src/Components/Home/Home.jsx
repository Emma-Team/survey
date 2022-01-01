import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Link to = "/secondpage">
        <button className="button">Discover Now!</button>
      </Link>
    </div>
  );
}

export default Home;
