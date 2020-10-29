import React, { useState } from "react"
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'
import Footer from './Footer'
import SettingsMiddle from './SettingsMiddle'
import SettingsRight from './SettingsRight'
import styles from './Settings.css'


import Button from '@material-ui/core/Button';


export default function SettingsHomePage() {
  return (
<div className='settingsHomepage'>


<div className="settings-row1"><Navbar></Navbar></div>


<div className='settings-row2'>

  <div className='settings-col1'><Leftcolumn></Leftcolumn></div>
  <div className='settings-col2'><SettingsMiddle></SettingsMiddle></div>
  <div className='settings-col3'><SettingsRight></SettingsRight></div>


</div>

<div className="row3"><Footer></Footer></div>


</div>
  )
}