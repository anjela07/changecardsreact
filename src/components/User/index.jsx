import React from 'react'
import "./User.css"

export const User=({color,el})=>{
    return(
        <div className="user-card">
             <img className="img"  src={el.img} alt="" />

        <div className="avatar" style={color && {backgroundColor : color}}> </div>
        <b>{el.full_name}</b>
        <b>{el.age}</b>
      
        <b>{el.country}</b>
        </div>
    )
}