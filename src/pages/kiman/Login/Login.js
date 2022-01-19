import './Login.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate('');

  const [inputValues, setInputValues] = useState({
    id: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const goToMain = () => {
    //회원가입용 : 'http://10.58.3.42:8000/users/signup'
    //로그인용 : 'http://10.58.3.42:8000/users/signin'    창현님꺼 : 'http://172.28.131.163:8003/singup'
    //백엔드 통신용
    // fetch('http://10.58.3.42:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: '김기만',
    //     email: inputValues.id,
    //     password: inputValues.password,
    //     phone_number: '010-8840-6505',
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.Message === 'Success') {
    //       localStorage.setItem('JWT', result.JWT);
    //       navigate('/main-kiman');
    //     } else {
    //       alert('아이디 및 비밀번호를 확인해주세요');
    //     }
    //   });
    //이전에 쓰던거
    if (inputValues.id.indexOf('@') > -1 && inputValues.password.length >= 5) {
      navigate('/main-kiman');
    } else {
      alert('아이디 및 비밀번호를 확인해주세요');
    }
  };

  const onKeyUp = e => {
    if (e.key === 'Enter') {
      goToMain();
    }
  };
  return (
    <div id="mainbox">
      <div id="logo">westagram</div>
      <div id="loginbox">
        <div id="inputbox">
          <input
            id="loginid"
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onInput={handleInput}
          />
          <input
            id="loginpw"
            name="password"
            type="password"
            placeholder="비밀번호"
            onInput={handleInput}
            onKeyUp={onKeyUp}
          />
        </div>
        <div id="loginBtn">
          <button
            className="nonwork"
            onClick={goToMain}
            style={{
              opacity:
                inputValues.id.length >= 1 && inputValues.password.length >= 1
                  ? '100%'
                  : '30%',
            }}
          >
            로그인
          </button>
        </div>
      </div>
      <div id="information">
        <Link to="/main-kiman">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
};

export default Login;
