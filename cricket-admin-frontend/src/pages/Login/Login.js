import React, { useEffect } from "react";
import LoginField from "../../components/Login/LoginField";

function Login() {
  useEffect(() => {
    console.log("red");
  }, []);
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <LoginField />
    </div>
  );
}

export default Login;
