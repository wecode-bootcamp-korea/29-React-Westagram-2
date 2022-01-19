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
        if (result.message === 'USER_DOES_NOT_EXIST') {
          alert('잘못입력했으니 확인 부탁');
        } else if (result.message === 'INVALID_PASSWORD') {
          alert('비번 확인해라!!!');
        } else {
          alert('냠냠굿~');
          navigate('/main-namju');
        }
      });
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
            onKeyPress={e => (e.key === 'Enter' ? goToMain() : null)}
          />
          <input
            id="inputPassword"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
            onKeyPress={e => (e.key === 'Enter' ? goToMain() : null)}
          />
          <button
            id="btnLogin"
            type="button"
            onClick={goToMain}
            disabled={!inputValid}
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
