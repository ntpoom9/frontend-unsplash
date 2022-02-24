import React, { useState, useEffect } from "react";
import "../css/PhotoListComponent.css";
// import "../css/font.css";
import axios from "axios";
import { IoMdHeart, IoMdText } from "react-icons/io";
export default function PhotoList({ username }) {
  const [data, setData] = useState([]);

  const url = `${process.env.REACT_APP_PHOTO_LIST}/${username}/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`;

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
                    src={item.urls.regular}
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
