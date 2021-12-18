import React from "react";
import { Header } from "./components/Header/header";
import { Home } from "./components/Home/Home";
import { Plan } from "./components/Plans/Plan";

function App() {
	return (
		<div>
			<Header />
			<Home />
			<Plan />
		</div>
	);
}

export default App;
