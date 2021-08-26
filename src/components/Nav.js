import React from "react";
//把所有 <a>改成 Link，href 改成 to
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
