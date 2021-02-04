import s from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={s.nav}>
      Navigation
      <div className={`${s.item} ${s.active}`}>
        <a>My Page</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Messenger</a>
      </div>
      <div className={s.item}>
        <a>Friends</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
    )
}

export default Navbar;