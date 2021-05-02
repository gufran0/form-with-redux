import React from 'react'
import "./Logout.css"
import {useDispatch} from "react-redux"
import { logout } from '../features/userSlice'

const Logout = () => {
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault();
       
           dispatch(logout())
       
    }

    return (
        <div className = "logout">
        <h1>Welcome <span className = "user_name">gufran</span>
        

        </h1> <br></br>
        <button className = "logout_button" onClick = {(e) => handleLogout(e)}>Logout</button>
            
        </div>
    )
}

export default Logout
