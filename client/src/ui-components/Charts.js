import React, { useState } from "react"
import Navbar from './Navbar'
import ProfileMusic from './ProfileMusic'
import ChartsHeader from './ChartsHeader'
import ChartsTop from './ChartsTop'

import styles from './Charts.css'



export default function Charts() {
  return (


<div className='chartsPage'>


<div className="charts-row1"><Navbar></Navbar></div>
 

<div className='charts-row2'> <ChartsHeader ></ChartsHeader></div>

<div className='row3'> <ChartsTop></ChartsTop> </div>


</div>

  )
}