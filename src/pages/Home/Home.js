import "./Home.scss";
import LandingCard from "../../components/LandingCard/LandingCard.js";

const quotes = [
	"Engineering for Humanity",
	"Immigrant Rights",
	"First-Generation",
	"Low-Income",
	"Mexican-American",
	"Family Bound",
	"Hecho en Casa",
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
					<span className="phrases" key={index}>
						<b>
							<i>{phrase}</i>
						</b>
					</span>
				))}
			</marquee>
			<LandingCard></LandingCard>
		</div>
	);
}

export default Home;
