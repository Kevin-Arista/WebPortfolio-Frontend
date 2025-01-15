import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/locations" element={<Locations />}></Route>
				<Route path="/events" element={<Events />}></Route>
			</Routes>
		</div>
	);
}

export default App;
