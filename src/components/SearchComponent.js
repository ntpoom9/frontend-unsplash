import axios from "axios";
import React, { useState } from "react";
import PostComponent from "./PostComponent";
import "../css/SearchComponent.css";

export default function SearchComponent() {
  const [post, setPost] = useState(""); //state เก็บ keyword search
  const [result, setResult] = useState([]); //state เก็บ data API

  function handleChange(event) {
    //state เปลี่ยนตาม  keyword
    setPost(event.target.value);
  }
  function handleKeyPress(e) {
    // เมื่อ Enter จะเป็นการค้นหาข้อมูล ใช้แทนการกดค้นหา
    if (e.key === "Enter") {
      const url = `${process.env.REACT_APP_SEARCH_PHOTOS}?query=${post}&${process.env.REACT_APP_PER_PAGE}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
      axios.get(url).then((respond) => {
        console.log(respond);
        setResult(respond.data.results);
      });
    }
  }

  return (
    <div>
      <div className="layout">
        <input
          name="post"
          placeholder="Search"
          type="search"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>

      <PostComponent result={result} />
    </div>
  );
}
