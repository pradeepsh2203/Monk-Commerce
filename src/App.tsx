import React from "react";
import { Carousel } from "./components/Carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/header";
import { Home } from "./components/Home/Home";
import { Plan } from "./components/Plans/Plan";

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<Home />
				<Plan />
				<Carousel />
			</div>
			<Footer />
		</>
	);
}

export default App;
