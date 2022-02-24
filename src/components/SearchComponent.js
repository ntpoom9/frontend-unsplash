import axios from "axios";
import React, { useEffect, useState } from "react";
// import dotenv from "dotenv";
import PostComponent from "./PostComponent";
import { IoMdSearch } from "react-icons/io";
import "../css/SearchComponent.css";

function SearchComponent() {
  const [post, setPost] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPost(event.target.value);
  }
  function handleKeyPress(e) {
    // We pass the new value of the text when calling onAccept
    if (e.key === "Enter") {
      const url = `${process.env.REACT_APP_SEARCH_PHOTOS}?query=${post}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
      axios.get(url).then((respond) => {
        console.log(respond);
        setResult(respond.data.results);
      });
    }
  }
  useEffect(() => {
    // handleSubmit();
    // handleKeyPress();
  }, []);

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

export default SearchComponent;
