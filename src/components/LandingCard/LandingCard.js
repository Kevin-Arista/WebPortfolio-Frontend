import "./LandingCard.scss";
import bioPic from "../../assets/profilepic.png";
import { Link } from "react-router-dom";
import icon from "react-icons";

function LandingCard(props) {
	return (
		<div className="LandingCard">
			<div className="card-container">
				<img className="bioPicture" alt="profile_pic" src={bioPic}></img>
				<div className="vl"></div>
				<div className="text-container">
					<h1 className="full-name">Kevin Arista Solis</h1>
					<h3 className="sub-title">Security and Software Engineer</h3>
					<div className="nav-links">
						<Link to="/experience" className="link">
							Experience
						</Link>
						<Link to="/blog" className="link">
							Blog
						</Link>
						<Link to="/contact" className="link">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingCard;
