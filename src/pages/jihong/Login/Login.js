import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const isLoginValid = idInput.includes('@') && pwInput.length > 4;
  const navigate = useNavigate();

  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  const isPassedLogin = () => {
    return isLoginValid;
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      goToMain();
    }
  };

  const goToMain = () => {
    navigate('/main-jihong');
  };

  const onClick = () => {
    goToMain();
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h1 className="formTitle">Westagram</h1>

        <form className="loginIdPwBtn">
          <input
            id="inputId"
            type="text"
            placeholder="Phone number, username or email"
            onChange={handleIdInput}
            onKeyUp={isPassedLogin}
            onKeyPress={isLoginValid ? handleKeyPress : null}
          />

          <input
            id="inputPw"
            type="password"
            placeholder="Password"
            onChange={handlePwInput}
            onKeyUp={isPassedLogin}
            onKeyPress={isLoginValid ? handleKeyPress : null}
          />

          <button
            id={isLoginValid ? 'loginBtnActive' : 'loginBtnDisable'}
            onClick={onClick}
            disabled={!isLoginValid}
            type="button"
          >
            Log In
          </button>
        </form>

        <div className="formOr">
          <h4 className="orText">OR</h4>
        </div>

        <div className="formLinkBtn">
          <a href="https://google.com/">
            <i className="fab fa-facebook-square" />
          </a>
          <a className="linkBtn1" href="https://www.facebook.com/">
            Log in with Facebook
          </a>
        </div>

        <a className="formForgotPw" href="https://www.facebook.com/">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Login;
