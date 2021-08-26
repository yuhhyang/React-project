import React from "react";
import Search from "../components/Search";
const Homepage = () => {
  const auth = "563492ad6f91700001000001a6302b3004b54911be85dfca7876986b";
  return (
    //使 footer 置底
    <div style={{ minHeight: "100vh" }}>
      <Search />
    </div>
  );
};
export default Homepage;
