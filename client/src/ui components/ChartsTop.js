import React, { useState } from "react"
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import ProfileBio from './ProfileBio'
import styles from './Charts.css'

export default function ChartsTop() {
  return (
    <div className='ChartsTop'>
<ol className='topSongs'>

<li><div> <iframe width="100%" height="95" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https://soundcloud.com/octobersveryown/drake-charged-up?//api.soundcloud.com/tracks/293&amp">
</iframe></div></li>

<li>
<div> <iframe width="100%" height="95" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https://soundcloud.com/octobersveryown/drake-back-to-back-freestyle?//api.soundcloud.com/tracks/293&amp">
</iframe></div>
</li>

<li>
<div> <iframe width="100%" height="95" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https://soundcloud.com/octobersveryown/duppy-freestyle?//api.soundcloud.com/tracks/293&amp">
</iframe></div>
</li>
</ol>

</div>





  )
}