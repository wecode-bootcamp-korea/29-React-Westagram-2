import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/common.scss";
import "./Login.scss";

function Login() {
  const [accountValid, setAccountValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [accountData, setAccountData] = useState();
  const [passwordData, setPasswordData] = useState();

  const handleAccountChange = (e) => {
    setAccountValid(e.target.value.includes("@"));
    setAccountData(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValid(e.target.value.length >= 5);
    setPasswordData(e.target.value);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    window.localStorage.setItem("userName", JSON.stringify(accountData));
    window.localStorage.setItem("userPassword", JSON.stringify(passwordData));
    navigate("/main");
  };

  return (
    <div className="login-viewport">
      <div className="login">
        <h1 className="westagram-logo">Westagram</h1>
        <form method="post" className="login-form">
          <input
            id="inputAccount"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={(e) => handleAccountChange(e)}
            onKeyUp={(e) => (e.key === "Enter" ? goToMain() : null)}
          />
          <input
            id="inputPassword"
            type="password"
            placeholder="비밀번호"
            onChange={(e) => handlePasswordChange(e)}
            onKeyUp={(e) => (e.key === "Enter" ? goToMain() : null)}
          />
          <button
            id="btnLogin"
            type="button"
            disabled={!accountValid || !passwordValid}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default Login;
