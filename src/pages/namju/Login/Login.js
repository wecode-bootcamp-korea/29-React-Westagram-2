import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [inputValid, setInputValid] = useState(false);
  const [inputValues, setInputValues] = useState({
    userName: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    setInputValid(
      inputValues.userName.includes('@') && inputValues.password.length >= 5
    );
  }, [inputValues]);

  const navigate = useNavigate();
  const goToMain = () => {
    window.localStorage.setItem('userName', inputValues.userName);
    window.localStorage.setItem('userPassword', inputValues.password);
    navigate('/main-namju');
  };

  return (
    <div className="login-namju-viewport">
      <div className="login-namju">
        <h1 className="westagram-logo">Westagram</h1>
        <form method="post" className="login-form" onSubmit={goToMain}>
          <input
            id="inputAccount"
            name="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input
            id="inputPassword"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
          />
          <button id="btnLogin" type="submit" disabled={!inputValid}>
            로그인
          </button>
        </form>
        <Link to="#">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
}

export default Login;
