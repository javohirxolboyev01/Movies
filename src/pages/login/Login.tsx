import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  return (
    <GoogleOAuthProvider clientId="487629782199-i8tq7c7ufv666c2nthl3nnks8fr62l1d.apps.googleusercontent.com">
      <h2>Login</h2>
      <div className="w-[300px]">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            localStorage.setItem(
              "credential",
              credentialResponse.credential || ""
            );
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default React.memo(Login);
