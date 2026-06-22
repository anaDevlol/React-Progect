import logo from './assets/logo.png'
function Header() {
  return (
    <header className="header">
    <img src={logo} alt="Little Lemon Logo" />

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/Order-online">Order Online</a></li>
          <li><a href="/Login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;