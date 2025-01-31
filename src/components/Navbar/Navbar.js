import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/profilepic.png";

function Navbar() {
	return (
		<div className="Navbar">
			<div className="Logo">
				<Link to="/" className="nav-link" data-testid="nav-link">
					<img id="logo-btn" alt="app logo" src={logo} />
				</Link>
			</div>
			<div className="nav-links">
				<Link to="/about" className="nav-link" data-testid="nav-link">
					About
				</Link>
				<Link to="/experience" className="nav-link" data-testid="nav-link">
					Experience
				</Link>
				<Link to="/blog" className="nav-link" data-testid="nav-link">
					Blog
				</Link>
				<Link to="/contact" className="nav-link" data-testid="nav-link">
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
