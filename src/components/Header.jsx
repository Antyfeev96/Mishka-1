import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
        <img
          src="https://o.remove.bg/downloads/26a1c213-7f8d-4160-9baa-cde5254e8c4c/coffee-removebg-preview.png"
          alt="logo"
        ></img>
        <div className={h.title}>ReactJS Study Project</div>
      </header>
    )
}

export default Header;