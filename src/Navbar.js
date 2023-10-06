import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="container">
        <ul>
          <Link className="linnk" to="/">
            <li>Home</li>
          </Link>
          <Link className="linnk" to="/about">
            <li>About</li>
          </Link>
          <Link className="linnk" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="linnk" to="/ecommerce">
            <li>Ecommerce</li>
          </Link>
          <Link className="linnk" to="/counter">
            <li>Counter</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
