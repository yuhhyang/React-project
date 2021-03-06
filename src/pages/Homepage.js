import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Pictures from "../components/Pictures";
const Homepage = () => {
  // set State
  const [input, setInput] = useState("");
  let [photos, setPhotos] = useState(null);
  // API key
  const auth = "563492ad6f91700001000001a6302b3004b54911be85dfca7876986b";
  // 精選照片 api
  const hotUrl = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  // 搜尋照片 api，input是一個state
  const searchUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  // 取得 pexel api 資料
  const search = async url => {
    // 獲得的資訊放進 dataFetch
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth, //獲取 key 來 fetch data
      },
    });
    let parseData = await dataFetch.json();
    console.log(parseData);
    setPhotos(parseData.photos);
  };
  // 使頁面開啟時就自動載入精選相片
  useEffect(() => {
    search(hotUrl);
  }, []);
  return (
    //使 footer 置底
    //搜尋圖片時，使用搜尋圖片的 api
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchUrl);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {photos?.map(img => {
          return <Pictures photos={img} />;
        })}
      </div>
    </div>
  );
};
export default Homepage;
