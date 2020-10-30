import React, { useState } from "react"
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'
import Footer from './Footer'
import Button from '@material-ui/core/Button';


export default function ProfileBio() {
  return (

<div className='ProfileBio'>


<div>
<div><img className='profileAvi' src ='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/rg3jlxdofwrsth70u7v3/drake-announces-summer-2020-album-release'></img></div>
</div>

<div>
<div>Drake</div>
<div>Genres: Hip Hop </div>
<div>Contact Info: (281)330-8004</div>
<div>Next Show: Life is Beautiful 2021</div>

<div>
  <i class="fab fa-twitter"></i> 
  <i class="fab fa-soundcloud"></i>
  <i class="fab fa-instagram"></i>
  <i class="fab fa-apple"></i>
  <i class="fab fa-spotify"></i>
</div>
</div>


</div>









  )
}