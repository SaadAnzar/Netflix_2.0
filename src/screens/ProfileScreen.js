import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
          />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans ( Current Plan: Premium )</h3>

              <h5>Renewal date: 26/12/2040</h5>

              <div className='profileScreen__planList'>
                <div>
                  <h5>Netflix Premium</h5>
                  <h6>4k + HDR</h6>
                </div>
                <button className='current__package'>Current Package</button>
              </div>

              <div className='profileScreen__planList'>
                <div>
                  <h5>Netflix Standard</h5>
                  <h6>1080p</h6>
                </div>
                <button className='subscribe__button'>Subscribe</button>
              </div>

              <div className='profileScreen__planList'>
                <div>
                  <h5>Netflix Basic</h5>
                  <h6>720p</h6>
                </div>
                <button className='subscribe__button'>Subscribe</button>
              </div>

              <button
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
                className='profileScreen__signOut'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
