import s from './Navbar.module.css'
import React from "react";

const Navbar = () => {
    return (
      <nav className={s.nav}>
      <div className={s.title}>
        Navigation
      </div>
      <div className={s.container}>
      <div className={s.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={s.item}>
        <a href='/news'>News</a>
      </div>
      <div className={s.item}>
        <a href='/dialogs'>Messenger</a>
      </div>
      <div className={s.item}>
        <a href='/friends'>Friends</a>
      </div>
      <div className={s.item}>
        <a href='/settings'>Settings</a>
      </div>
      </div>
    </nav>
    )
}

export default Navbar;