import React from 'react'

import Home from "./assets/home(3).png"
import Logout from "./assets/user-logout.png"
import avatar from "./assets/avatar.jpg"
import bell from "./assets/bell.png"
import search from "./assets/magnifying-glass.png"


export default function DashboardT() {
  return (
    <div className='dashboard2'>
      <div className="container">
        <div className="navbar">
          <ul>
            <li className='active'> <img src={Home} alt="" /> Dashboard</li>
            <li>Quiz</li>
            <li>Overview</li>
            <li>Account</li>
            <li>Setting</li>
          </ul>
          <div className="bottomNav">
            <div className="BtnlogoutCon">
              <button><img src={Logout} alt="" />Log out</button>
            </div>
          </div>
        </div>
        <main className='leftview'>
          <div className="topbar">
            <div className="titleCon">
              <h3>Dashboard</h3>
              <p>Statistiques updates</p>
            </div>
            <div className="rightTopbar">
              <div className="searchCon">
                <input type="text" placeholder='Search' />
                <div className="searchImgCon">
                  <img src={search} alt=""  />

                </div>
              </div>
              <div className="notificationCon">
                <img src={bell} alt="" />
              </div>
              <div className="profileCon">
              <div className="imgProfileCon">
                <img src={avatar} alt="" />
              </div>
              </div>

            </div>
          </div>
          <div className="mainview">
            <div className="leftCon">
              <div className="quizeStatusCon">
              </div>
            </div>
            <div className="rightCon">

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
