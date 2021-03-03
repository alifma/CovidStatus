import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link className="navbar-brand font-weight-bold" to="/">
        <span className="text-main">Covid-19</span> Status
      </Link>
      
      <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default navbar;
