import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { app } from '../firabaseConfig';
const ViewMsg = () => {
  const navigate = useNavigate();
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        if (userInfo) {
          const userDoc = await getDoc(doc(db, 'users'));
          if (userDoc.exists()) {
            setMsg(userDoc.data().text);
          } else {
            console.log('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };
  
    const userInfoData = JSON.parse(sessionStorage.getItem('user-info'));
    if (!userInfoData) {
      navigate('/login');
    } else {
      setUserInfo(userInfoData);
    }
  
    fetchMsg();
  }, [db, navigate, userInfo]);
  

  if (!userInfo) {
    return null;
  }

  return (
    <div className="container-fluid hero login">
      <div className="mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold fs-2 fText">Write {userInfo.username}</h2>
          <p className="mb-5 fw-semibold">
            Send anonymous compliments to your friends for free.
          </p>
        </div>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ViewMsg;
