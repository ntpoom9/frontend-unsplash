import React, { useState } from "react";
import axios from "axios";
import "../css/Google.css";
export default function SignWithGoogle() {
  const [user, setUser] = useState([]);
  const url = `https://www.se-bistro.online/api/v1/auth/google`;
  // const popUp = axios.get(url).then((respond) => {
  //   // console.log(respond);
  //   setUser(respond.data);
  // });
  return (
    <button
      type="button"
      className="login-with-google-btn"
      onClick={() => {
        window.open(`https://www.se-bistro.online/api/v1/auth/google`, "_self");
      }}
    >
      Sign in with Google
    </button>
  );
}
