import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../../../src/reset.scss';
import { useState } from 'react';

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  const [isActive, setIsActive] = useState(false);

  const isPassedLogin = () => {
    return idInput.includes('@') && pwInput.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  /*const handleKeyPress = e => {
    if(e.key ==='Enter'){
      goToMain()
    };      
  };*/

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-jihong');
  };

  const onClick = () => {
    goToMain();
  };

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <h1 className="formTitle">Westagram</h1>

        <form className="loginIdPwBtn">
          <input
            id="inputId"
            type="text"
            placeholder="Phone number, username or email"
            onChange={handleIdInput}
            onKeyUp={isPassedLogin}
          />

          <input
            id="inputPw"
            type="password"
            placeholder="Password"
            onChange={handlePwInput}
            onKeyUp={isPassedLogin}
          />

          <button
            id={isActive ? 'loginBtnActive' : 'loginBtnDisable'}
            onClick={onClick}
            disabled={
              !idInput.includes('@') || pwInput.length < 4 ? true : false
            }
          >
            Log In
          </button>
        </form>

        <div className="formOr">
          <h4 className="orText">OR</h4>
        </div>

        <div className="formLinkBtn">
          <a href="https://google.com/">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a className="linkBtn1" href="https://www.facebook.com/">
            Log in with Facebook
          </a>
        </div>

        <a className="formForgotPw" href="https://www.facebook.com/">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default Login;
