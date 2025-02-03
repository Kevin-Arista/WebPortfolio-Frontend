import "./About.scss";
import Navbar from "../../components/Navbar/Navbar";

function About(props) {
	return (
		<div className="About">
			<Navbar></Navbar>
			<p>About</p>
			<iframe
				className="favsong"
				src="https://open.spotify.com/embed/track/5rcnAHBclBs0OGV4rATEnR?utm_source=generator"
				width="35%"
				height="152"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"></iframe>
		</div>
	);
}

export default About;
