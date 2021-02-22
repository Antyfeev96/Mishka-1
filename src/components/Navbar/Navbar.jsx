import s from './Navbar.module.scss'
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.title}>
                Navigation
            </div>
            <div className={s.container}>
                <div className={s.item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs'>Messenger</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/friends'>Friends</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;