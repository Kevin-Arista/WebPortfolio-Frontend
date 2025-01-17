import "./LandingCard.scss";
import bioPic from "../../assets/profilepic.png";
import { Link } from "react-router-dom";
import { LuLinkedin } from "react-icons/lu";
import { TbBrandGithub } from "react-icons/tb";
import { CiCoffeeCup } from "react-icons/ci";

function LandingCard(props) {
	return (
		<div className="LandingCard">
			<div className="card-container">
				<div className="img-col">
					<img className="bioPicture" alt="profile_pic" src={bioPic}></img>
					<div className="icon-row">
						<span className="icon">
							<LuLinkedin />
						</span>
						<span className="icon">
							<TbBrandGithub />
						</span>
						<span className="icon">
							<CiCoffeeCup />
						</span>
					</div>
				</div>
				<div className="vl"></div>
				<div className="text-container">
					<h1 className="full-name">Kevin Arista Solis</h1>
					<h3 className="sub-title">Security and Software Engineer</h3>
					<div className="nav-links">
						<Link to="/about" className="link">
							ABOUT
						</Link>
						<Link to="/experience" className="link">
							EXPERIENCE
						</Link>
						<Link to="/blog" className="link">
							BLOG
						</Link>
						<Link to="/contact" className="link">
							CONTACT
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingCard;
