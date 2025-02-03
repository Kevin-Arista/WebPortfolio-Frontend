import "./About.scss";
import Navbar from "../../components/Navbar/Navbar";
import musicData from "../../data/music";

function About(props) {
	const selectedSong = musicData[Math.floor(Math.random() * musicData.length)];
	console.log(selectedSong);

	return (
		<div className="About">
			<Navbar></Navbar>
			<p>About</p>
			<iframe
				className="favsong"
				src={` ${selectedSong}`}
				width="35%"
				height="152"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"></iframe>
		</div>
	);
}

export default About;
