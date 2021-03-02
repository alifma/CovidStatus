import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <Link className="navbar-brand font-weight-bold" to="/">
        <span className="text-info">Covid19</span> Status
      </Link>
      
      <div className="collapse navbar-collapse" id="navbarNav">
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
        </ul>
      </div>
    </nav>
  );
};
export default navbar;
