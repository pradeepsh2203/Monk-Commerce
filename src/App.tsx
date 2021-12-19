import React from "react";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/header";
import { Home } from "./components/Home/Home";
import { Plan } from "./components/Plans/Plan";

function App() {
	return (
		<div>
			<Header />
			<Home />
			<Plan />
			<Carousel />
		</div>
	);
}

export default App;
