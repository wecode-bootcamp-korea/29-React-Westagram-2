import React, { useState, useRef } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const loginBtnColor = useRef(0);
  const idValidation = useRef(0);
  const navigate = useNavigate();

  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const [inputs, setInputs] = useState({
    id: '',
    pwd: '',
  });

  const { id, password } = inputs;

  const handleCheck = e => {
    if (!regEmail.test(inputs.id)) {
      idValidation.current.style.borderColor = '#e23636';
    } else {
      idValidation.current.style.borderColor = '#e6e6e6';
    }
  };

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const clickHandler = e => {
    e.preventDefault();

    if (!loginBtnColor.current.disabled) {
      fetch('http://10.58.2.108:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: inputs.id,
          password: inputs.pwd,
        }),
      })
        .then(res => res.json())
        .then(result => navigate('/main-jeongdo'))
        .catch(err => console.log(err));
    }
  };

  const handleKeyUp = e => {
    if (regEmail.test(inputs.id) && inputs.pwd.length > 4) {
      loginBtnColor.current.style.backgroundColor = '#0095f6';
      loginBtnColor.current.disabled = false;
    } else {
      loginBtnColor.current.style.backgroundColor = '#c4e1fb';
    }
  };

  return (
    <div className="container">
      <div className="loginLayout">
        <h1>Westagram</h1>
        <div className="inputInfo">
          <form onClick={clickHandler}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onBlur={handleCheck}
              ref={idValidation}
              value={id}
            />
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="비밀번호"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              value={password}
            />
            <button className="loginBtn" ref={loginBtnColor} disabled>
              로그인
            </button>
          </form>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
