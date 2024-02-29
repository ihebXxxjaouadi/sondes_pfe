import React from 'react'
import Navbar from './Navbar'
import Topbar from './Topbar'
import MainView from './MainView';

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <Navbar />
        <div className="rightcon">
            <Topbar />
            <MainView />
        </div>
    </div>
  )
}
