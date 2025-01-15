import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar.js";
const quotes = [
	"Engineering for Humanity",
	"Immigrant Rights",
	"First-Generation",
	"Low-Income",
	"Mexican-American",
	"Family Bound",
	"Hecho en Casa",
];

function Home(props) {
	return (
		<div className="Home">
			<marquee direction="left" loop="">
				{quotes.map((phrase, index) => (
					<span key={index}>{phrase}</span>
				))}
			</marquee>
			<Navbar></Navbar>
			<p>Home</p>
		</div>
	);
}

export default Home;
