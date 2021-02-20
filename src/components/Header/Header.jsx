import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
        <img
          src=''
          alt="logo"
        ></img>
        <div className={h.title}>ReactJS Study Project</div>
      </header>
    )
}

export default Header;