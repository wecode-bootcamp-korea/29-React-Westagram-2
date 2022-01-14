import './Login.scss';
import '../../../reset.scss';
import '../../../common.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const onInputUserId = e => setUserId(e.target.value);
  const onInputUserPw = e => setUserPw(e.target.value);

  const goToMain = () => {
    if (userId.indexOf('@') > -1 && userPw.length >= 5) {
      navigate('/main-kiman');
    } else {
      alert('확인점요');
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
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userId}
            onInput={onInputUserId}
          />
          <input
            id="loginpw"
            type="password"
            placeholder="비밀번호"
            value={userPw}
            onInput={onInputUserPw}
            onKeyUp={onKeyUp}
          />
        </div>
        <div id="loginBtn">
          <button
            className="nonwork"
            onClick={goToMain}
            style={{
              opacity:
                userId.length >= 1 && userPw.length >= 1 ? '100%' : '30%',
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
