import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/UserProfileComponent.css";
import "../css/styles.css";
// import "../css/font.css";
import { IoMdLocate, IoMdGlobe } from "react-icons/io";

export default function UserProfileComponent({ username }) {
  const [data, setData] = useState([]);
  const url = `${process.env.REACT_APP_SEARCH_USER}?query=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
  useEffect(() => {
    axios.get(url).then((respond) => {
      console.log(respond);
      setData(respond.data.results);
    });
  }, [username]);

  return (
    <div className="navMargin">
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            {data.map((d) => {
              return (
                <img
                  className="imgProfile "
                  key={d.id}
                  src={d.profile_image.large}
                />
              );
            })}
          </div>
          <div className="profile-user-settings">
            {data.map((d) => {
              return <h2 className="profile-user-name">{d.username}</h2>;
            })}
          </div>
          <div className="profile-stats">
            {data.map((d) => {
              return (
                <ul className="ulProfile">
                  <li>
                    <span className="profile-stat-count">
                      {d.total_photos.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>{" "}
                    photos
                  </li>
                  <li>
                    <span className="profile-stat-count">
                      {d.total_likes.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>{" "}
                    likes
                  </li>
                  <li>
                    <span className="profile-stat-count">
                      {d.total_collections.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>{" "}
                    collections
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="profile-bio">
            {data.map((d) => {
              return (
                <>
                  <p className="bioProfile">{d.bio}</p>
                  <p>
                    <IoMdLocate /> {d.location === null ? "-" : d.location}
                  </p>
                  <p>
                    <IoMdGlobe />{" "}
                    <a href={d.portfolio_url === null ? "#" : d.portfolio_url}>
                      {d.portfolio_url === null ? "-" : d.portfolio_url}
                    </a>
                  </p>
                </>
              );
            })}
          </div>
        </div>
        {/* เส้นแบ่ง */}
        <hr />
        {/* End of profile section */}
      </div>
      {/* End of container */}
    </div>
  );
}
