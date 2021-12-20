import React, { useState } from "react";
import Logo from "../../data/img/logo.svg";
import { useScreenWidth } from "../../customHooks/getScreenWIdth";
import "./header.css";

export const Header: React.FC = () => {
	const [IsNavVisible, setNavVisible] = useState(false);
	let isScreenSizeSmall: boolean = false;

	let screenWidth = useScreenWidth();

	if (screenWidth < 1000) isScreenSizeSmall = true;

	return (
		<div className="header_container">
			<img src={Logo} alt="Logo" className="header_logo" />
			{(!isScreenSizeSmall || IsNavVisible) && (
				<div className="header_links">
					<p>Pricing</p>
					<p>Testimonial</p>
					<span style={{ width: "60px" }}></span>
					<p className="bold">Sign In</p>
					<p className="focus">Sign Up</p>
				</div>
			)}

			<button
				className="header_button"
				onClick={() => setNavVisible(!IsNavVisible)}
			>
				{IsNavVisible ? (
					<i
						className="fas fa-times fa-2x"
						style={{ color: "#aaa" }}
					></i>
				) : (
					<i
						className="fas fa-align-right fa-2x"
						style={{ color: "#F53838" }}
					></i>
				)}
			</button>
		</div>
	);
};
