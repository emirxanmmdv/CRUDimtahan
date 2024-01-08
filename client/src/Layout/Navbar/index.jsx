import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/add"}>ADD</NavLink>
            
        </div>
    )
}

export default Navbar
