import React, { useState } from "react"
import logo from '../../logo.png';
import styles from './Navbar.css'
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
<div className='navBar'>
    
<div className='logoHp'> <Link to='/homepage'><img className='ovo' src={logo}></img></Link></div>

<div className='middleNav'>
<Link to='/homepage'><div><button  className='navbarBtn'><i class="fas fa-home"></i> Home</button></div></Link>
<Link to='/charts'><div><button className='navbarBtn'><i class="far fa-chart-bar"></i> Charts</button></div></Link>
<div><button className='navbarBtn'>Services</button></div>
</div>

<div className='rightNav'>
<div><button className='navbarBtn'>avi</button></div>
<div><button className='navbarBtn'><i class="fas fa-sign-out-alt"></i> logout</button></div>
</div>



    </div>
  )
}

