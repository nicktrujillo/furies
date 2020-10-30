import React, { useState } from "react"
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'
import Footer from './Footer'
import MessageMiddle from './MessageMiddle'
import MessageRight from './MessageRight'
import styles from './Messages.css'
import Button from '@material-ui/core/Button';


export default function Messages() {
  return (
<div className='messageHomepage'>


<div className="message-row1"><Navbar></Navbar></div>


<div className='message-row2'>

  <div className='messages-col1'><Leftcolumn></Leftcolumn></div>


  <div className='messages-col2'><MessageMiddle></MessageMiddle></div>


  <div className='messages-col3'><MessageRight ></MessageRight></div>

</div>

<div className="row3"><Footer></Footer></div>


</div>
  )
}
