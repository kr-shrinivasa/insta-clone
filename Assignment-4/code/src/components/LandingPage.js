import React from 'react'
import './LandingPage.css';
import { NavLink } from "react-router-dom";

export default function LandingPage() {

    return (
       
                <div className='container'>
                 <h2>Sign-Up or Login</h2>  
                <div className='content'>
                    <label htmlFor="idnum">Email or Phone or UserID</label>
                    <input id="idnum" type="text" placeholder='Phone number, username or email' required/>
                    <label htmlFor="password"> Password</label>
                    <input id="password" type="text" placeholder='Password' required/>
                  
                    <NavLink to={'/postview'} className='Nav_link' activeClassName='activeRoute'>Login</NavLink>
                </div>

                </div>
       
    )

}
