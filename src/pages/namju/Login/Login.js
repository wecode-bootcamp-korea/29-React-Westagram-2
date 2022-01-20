import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function Login() {
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

  let validInput =
    inputValues.userName.includes('@') && inputValues.password.length >= 5;

  const ERRORS = {
    USERS_DOES_NOT_EXIST: '잘못 입력',
    INVALID_PASSWORD: '비밀번호 확인',
  };

  const navigate = useNavigate();
  const goToMain = () => {
    fetch('http://10.58.2.159/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.userName,
        password: inputValues.password,
        // account: inputValues.userName,
        // name: inputValues.userName,
        // phone: '010-2937-1623',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          alert('냠냠굿~');
          navigate('/main-namju');
          return;
        }
        alert(ERRORS[result.message]);
      });
  };

  const handleInputEnterPress = e => {
    e.key === 'Enter' && goToMain();
  };

  return (
    <div className="login-namju-viewport">
      <div className="login-namju">
        <h1 className="westagram-logo">Westagram</h1>
        <form method="post" className="login-form" onSubmit={goToMain}>
          <input
            id="input-account"
            name="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
            onKeyPress={e => handleInputEnterPress(e)}
          />
          <input
            id="input-password"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
            onKeyPress={e => handleInputEnterPress(e)}
          />
          <button
            id="btnLogin"
            type="button"
            onClick={goToMain}
            disabled={!validInput}
          >
            로그인
          </button>
        </form>
        <Link to="#">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
}

export default Login;
