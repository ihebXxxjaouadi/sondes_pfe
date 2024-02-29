import React from 'react'
import avatar from '../assets/avatar.jpg'
import down from '../assets/down.png'
import logout from '../assets/logout.png'
import star from '../assets/star.png'
import level from '../assets/level-up.png'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="title">
        <h1>
          Dashboard
        </h1>
      </div>
      <div className="levelScore">
        <span> <img src={star} alt="" /> 364</span>
      </div>
      <button className="profilecon">
        <img src={avatar} alt="" />
        <span className='userName'>Aymen</span>
        <img src={down} alt="" />
        <div className="popUp">
            <img style={{marginLeft: 0, marginRight: 10}} src={logout} alt="" />
            Deconnexion
        </div>
      </button>
    </div>
  )
}
