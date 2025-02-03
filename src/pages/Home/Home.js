import "./Home.scss";
import LandingCard from "../../components/LandingCard/LandingCard.js";
import integrities from "../../data/integrities.js";

function Home(props) {
	return (
		<div className="Home">
			<div className="marquee">
				<div className="marquee-track">
					{integrities.map((phrase, index) => (
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
