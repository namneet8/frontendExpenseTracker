import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"
import { LoginContext } from '../context/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom"
import logo from "../logo.jpeg"

const Header = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutuser = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 201) {
            console.log("use logout");
            localStorage.removeItem("usersdatatoken");
            setLoginData(false)
            history("/");
        } else {
            console.log("error");
        }
    }

    const goDash = () => {
        history("/dash")
    }

    const goError = () => {
        history("*")
    }
    const goRegister = () => {
        history("/register")
    }
    const goLogin = () => {
        history("/login")
    }

    return (
        <>
            <header>
                <nav>
                    
                <NavLink to="/"><img src= {logo} alt = "logo"/><span className="expense-tracker">Expense Tracker</span></NavLink>
                <div className="avtar">
                {logindata.ValidUserOne ? (
                    <>
                    {/* Render links only when user is logged in */}
                    <div className='navLoggedin'><NavLink to="/dash">Dashboard</NavLink>
                        <NavLink to="/income">Incomes</NavLink>
                        <NavLink to="/expenses">Expenses</NavLink>
                        </div>
                        <Avatar
                            style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }}
                            onClick={handleClick}
                        >
                            {logindata.ValidUserOne.fname[0].toUpperCase()}
                        </Avatar>
                        
                    </>
                ) : (
                    <>
                       
                        {/* Render links for non-logged-in users */}
                        <div className="notLoggedIn">
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        </div>
                    </>
                )}
            </div>

                    <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
        'aria-labelledby': 'basic-button',
    }}
>  
    {
        logindata.ValidUserOne ? [
            <MenuItem key="profile" onClick={() => {
                goDash()
                handleClose()
            }}>Profile</MenuItem>,
            <MenuItem key="logout" onClick={() => {
                logoutuser()
                handleClose()
            }}>Logout</MenuItem>
        ] : [
            <MenuItem key="register" onClick={() => {
                goRegister()
                handleClose()
            }}>Register</MenuItem>,
            
        <MenuItem key="login" onClick={() => {
            goLogin()
            handleClose()
        }}>Login</MenuItem>]
    }
</Menu>

                </nav>
            </header>
        </>
    )
}

export default Header