import React from 'react'
import mainLogo from '../assets/mainLogo.png'
import ideas from '../assets/ideas.png'
import more from '../assets/more.png'
import pie from '../assets/pie-chart.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <header>
        <img src={mainLogo} alt="" />
      </header>
      <section>
        <button className='quizBtn'>
          <img src={more} alt="" />
           <span>Nouveau quize</span></button>
        <ul>
          <li className='active'> 
            <img src={pie} alt="" />
            <span>Dashboard</span>
          </li>
          <li> 
            <img src={ideas} alt="" />
            <span>Quize</span>
          </li>
          
        </ul>
      </section>
      <footer>
        <div className="container">
          <div className="cloud">
            <h4>algorithme cloud</h4>
          </div>
        </div>
      </footer>
    </div>
  )
}
