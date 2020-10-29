import React, { useState } from "react"
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'
import Footer from './Footer'
import styles from './Notifications.css'
import NotificationsMiddle from './NotificationsMiddle'

export default function Notifications() {
  return (
    <div className='wholeNotifications'>


<div className="notifications-row1"><Navbar></Navbar></div>


<div className='notifications-row2'>
<div className='notifications-col1'><Leftcolumn></Leftcolumn></div>


<div className='notifications-col2'> <NotificationsMiddle ></NotificationsMiddle></div>


<div className='notifications-col3'><Rightcolumn ></Rightcolumn></div>
</div>

<div className="row3"><Footer></Footer></div>


</div>
  )
}
