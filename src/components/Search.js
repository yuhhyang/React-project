import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = e => {
    setInput(e.target.value);//抓輸入欄位的值來執行 setInput()
  };
  return (
    <div className="search">
      <input onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
