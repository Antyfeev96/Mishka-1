import s from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={s.nav}>
      <div className={s.title}>Navigation</div>
      <div className={s.container}>
      <div className={`${s.item}`}>
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
      </div>
    </nav>
    )
}

export default Navbar;