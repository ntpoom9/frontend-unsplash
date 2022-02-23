import React, { useState, useEffect } from "react";
import "../css/PhotoListComponent.css";
import axios from "axios";
import { IoMdHeart, IoMdText } from "react-icons/io";
export default function PhotoList({ username }) {
  const clientId = "FwljzQEvxnR6bIbxaLGzVo10O6ukTGug8efjV7fi_eo";
  const [data, setData] = useState([]);
  const url =
    "https://api.unsplash.com/users/" +
    username +
    "/photos?client_id=" +
    clientId;

  useEffect(() => {
    axios.get(url).then((respond) => {
      console.log(respond);
      setData(respond.data);
    });
  }, [username]);

  return (
    <div>
      <main>
        <div className="container">
          <div className="gallery">
            {data.map((item) => {
              return (
                <div className="gallery-item" tabIndex={0}>
                  <img
                    key={item.id}
                    src={item.urls.full}
                    className="gallery-image"
                    alt=""
                  />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" />{" "}
                        <IoMdHeart /> {item.likes}
                      </li>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" />{" "}
                        <IoMdText /> 0
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}