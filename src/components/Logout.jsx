import React from 'react'

function Logout() {
    axios
      .get('http://localhost:8080/logout', {
        headers,
      })
      .then((returnData) => {
        if (returnData.data.message) {
          $.removeCookie('login_id');
          alert('로그아웃 되었습니다.');
          window.location.href = '/';
        }
      });
  };


export default Logout