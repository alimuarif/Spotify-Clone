import React from 'react'
import "./SidebarOptions.css"

function SidebarOptions({title,Icons}) {
  return (
    <div className='SidebarOptions'>
     {Icons && <Icons className='SidebarOptions_icons'/>}
      {Icons?<h4>{title}</h4>:<p>{title}</p>}
    </div>
  )
}

export default SidebarOptions