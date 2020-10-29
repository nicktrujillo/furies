import React, { useState } from "react"
import { Link } from "react-router-dom";


export default function Leftcolumn() {
  return (
    <div className='leftColumn'>




<Link to='/profile'><div><button className='leftColumnBtn'><i class="far fa-user-circle"></i>   Profile</button></div></Link>
<Link to='/notifications'><div><button className='leftColumnBtn'><i class="far fa-bell"></i>    Notifications</button></div></Link>
<Link to='/messages'><div><button className='leftColumnBtn'><i class="far fa-inbox"></i>   Messages</button></div></Link>
<Link to='/settings'><div><button className='leftColumnBtn'><i class="far fa-users-cog"></i>   Settings</button></div></Link>





    </div>
  )
}
