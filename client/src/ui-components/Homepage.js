import React, { useState } from "react"
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import styles from './Homepage.css'


export default function Homepage() {
  return (
    <div className='wholeHomepage'>


<div className="homepage-row1"><Navbar></Navbar></div>


<div className='homepage-row2'>
<div className='homepage-col1'><Leftcolumn></Leftcolumn></div>


<div className='homepage-col2'> Time Line</div>


<div className='homepage-col3'><Rightcolumn ></Rightcolumn></div>
</div>

<div className="row3"><Footer></Footer></div>


</div>
  )
}

