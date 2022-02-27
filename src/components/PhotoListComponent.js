import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdHeart, IoMdText } from "react-icons/io";

export default function PhotoList({ username }) {
  const [data, setData] = useState([]); //state สำหรับเก็บข้อมูลจาก API
  const url = `${process.env.REACT_APP_PHOTO_LIST}/${username}/photos?${process.env.REACT_APP_PER_PAGE}&client_id=${process.env.REACT_APP_CLIENT_ID}`;

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
                <a
                  className="gallery-item"
                  tabIndex={0}
                  href={item.urls.regular}
                  target="_blank"
                >
                  <img
                    key={item.id}
                    src={item.urls.regular}
                    className="gallery-image"
                    alt={item.alt_description}
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" />{" "}
                        <IoMdHeart />{" "}
                        {item.likes.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </li>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true" />{" "}
                        <IoMdText /> 0
                      </li>
                    </ul>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
