import React, { useState } from "react"
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import ProfileBio from './ProfileBio'
import ProfileMusic from './ProfileMusic'
import styles from './Profile.css'



export default function Profile() {
  return (


<div className='ProfilePage'>


<div className="profile-row1"><Navbar></Navbar></div>


<div className='profile-row2'> <ProfileBio ></ProfileBio> </div>

<div className='row3'><ProfileMusic></ProfileMusic> </div>


</div>

  )
}