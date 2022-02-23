import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "../css/SearchComponent.css";
import "../css/font.css";
import PostComponent from "./PostComponent";
// import dotenv from "dotenv";
function SearchComponent() {
  const [clientId, setClientId] = useState(
    "FwljzQEvxnR6bIbxaLGzVo10O6ukTGug8efjV7fi_eo"
  );
  const [post, setPost] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPost(event.target.value);
  }

  function handleSubmit(event) {
    console.log(post);
    const url =
      "https://api.unsplash.com/search/photos?query=" +
      post +
      "&client_id=" +
      clientId;

    axios.get(url).then((respond) => {
      console.log(respond);
      setResult(respond.data.results);
    });
  }
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <div className="layout">
        <input
          onChange={handleChange}
          type="text"
          name="post"
          placeholder="Search Image"
        ></input>
        <Button onClick={handleSubmit} type="submit">
          Search
        </Button>
      </div>

      <PostComponent result={result} />
    </div>
  );
}

export default SearchComponent;
