import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function User() {
    const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfoData = JSON.parse(sessionStorage.getItem('user-info'));
    if (!userInfoData) {
      navigate('/login');
    } else {
      setUserInfo(userInfoData);
    }
  }, [navigate]);

  if (!userInfo) {
    return null; 
  }

  return (
    <div className="container-fluid hero login">
    <div className=" mx-auto formBody">
      <div className="text-center">
      <h2 className="fw-bold  fs-2 fText">{userInfo.username} Profile</h2>
      <Link className='mb-3 shareLink'>https://robonymous.netlify.app/{userInfo.id}</Link>
      <p className="mb-5 fw-semibold">
      Share your profile link ❤️ to get responses from your friend. Go to "View Messages" to check out the responses. 👌
      </p>
      </div>
      <button className="formBtn hero text-white mb-3 px-5 py-2 rounded-pill w-100"><Link to='/user/msg' style={{color: 'inherit'}}>View Message</Link></button>
      <button className="formBtn text-white mb-3 px-4 fs-5 rounded-pill w-100" style={{backgroundColor:"#25D366"}}>Share on Whatsapp</button>
      <button className="formBtn bg-primary text-white mb-3 px-5 fs-5 rounded-pill w-100">Share on Facebook</button>
      <button className="formBtn text-white mb-3 px-5  fs-5 rounded-pill w-100" style={{backgroundColor:" #1DA1F2"}}>Share on Twitter</button>
    </div>
  </div>
  )
}

export default User