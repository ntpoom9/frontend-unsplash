import React from "react";
import { useParams } from "react-router-dom";
import "../css/Post.css";
import "../css/font.css";
function PostComponent({ result }) {
  return (
    <div>
      <ul className="grid">
        {result.map((post) => {
          return (
            <li>
              {/* <figure className="grid__figure"> */}
              <div className="instagram-card">
                <div className="instagram-card-header">
                  <img key={post.id} src={post.user.profile_image.small} />
                  <a
                    class="instagram-card-user-name"
                    href={"/" + post.user.username}
                  >
                    {post.user.instagram_username === null
                      ? post.user.username
                      : post.user.instagram_username}
                  </a>
                </div>

                <div className="intagram-card-image">
                  <img
                    className="image_post"
                    key={post.id}
                    src={post.urls.regular}
                  />
                </div>

                <div className="instagram-card-content">
                  <p className="content_des">
                    <p className="content_likes">
                      {post.user.total_likes} likes
                    </p>
                    <a
                      class="instagram-card-content-user"
                      href={"/" + post.user.username}
                    >
                      {post.user.instagram_username}
                    </a>{" "}
                    {post.description}
                  </p>
                </div>
              </div>
              {/* </figure> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostComponent;
