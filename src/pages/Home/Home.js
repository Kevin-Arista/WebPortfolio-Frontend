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
			<div className="marquee">
				<div className="marquee-track">
					{quotes.map((phrase, index) => (
						<span className="phrases" key={index}>
							<i>{phrase}</i>
						</span>
					))}
				</div>
			</div>
			<LandingCard></LandingCard>
		</div>
	);
}

export default Home;
