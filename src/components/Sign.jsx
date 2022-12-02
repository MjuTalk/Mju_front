import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/index.css';

const API_END_POINT = 'http://43.200.116.196:8080';

const Signup = () => {
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [stNum, setStNum] = useState('');
  const [re_pw, setRe_pw] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_END_POINT}/api/sign-up`, {
        username: id,
        password: pw,
        name: name,
        subject: major,
        studentId: stNum,
      })
      .then(function (response) {
        if (response.code === 201) {
          console.log(response);
          alert('회원가입이 완료되었습니다.');
        }
        if (response.code === 409) {
          console.log(response);
          alert(response.result.message);
        } else {
          alert('회원가입이 완료되었습니다.');
        }
      })
      .catch(function (error) {
        alert('회원가입 실패. 다시 입력해 주세요.');
        console.log(error);
      });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeNum = (e) => {
    setStNum(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setRe_pw(e.target.value);
  };

  /**추가**/
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };
  /**추가**/

  return (
    <div>
      <div id="container" className="main_container">
        <article>
          <div className="login_wrapper">
            <form onSubmit={onSubmit} className="login_form">
              <input
                id="LOGIN_NAME"
                value={name}
                required
                onChange={onChangeName}
                className="login_text"
                type="text"
                name="id"
                placeholder="이름"
              />

              <input
                id="LOGIN_NAME"
                value={major}
                required
                onChange={onChangeMajor}
                className="login_text"
                type="text"
                name="id"
                placeholder="학과"
              />
              <input
                id="LOGIN_NAME"
                value={id}
                required
                onChange={onChangeId}
                className="login_text"
                type="text"
                name="id"
                placeholder="아이디"
              />
              <input
                id="LOGIN_PW"
                value={pw}
                required
                onChange={onChangePw}
                className="login_text"
                type="password"
                name="id"
                placeholder="비밀번호"
              />
              <input
                id="LOGIN_NAME"
                value={stNum}
                required
                onChange={onChangeNum}
                className="login_text"
                type="text"
                name="id"
                placeholder="힉번"
              />

              <button
                id="LOGIN_BTN"
                className="login_btn"
                type="primary"
                htmlType="submit"
              >
                회원가입
              </button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Signup;