import React from "react";
import { useParams } from "react-router-dom";
import PhotoListComponent from "../components/PhotoListComponent";
import UserProfileComponent from "../components/UserProfileComponent";

export default function UserProfile() {
  const param = useParams();
  const username = param.username;

  return (
    <div>
      <UserProfileComponent username={username} />
      <PhotoListComponent username={username} />
    </div>
  );
}
