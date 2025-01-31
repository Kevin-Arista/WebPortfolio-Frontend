import "./App.css";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Experience from "./pages/Experience/Experience.js";
import Blog from "./pages/Blog/Blog.js";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/experience" element={<Experience />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</div>
	);
}

export default App;
