import React from "react";
import Logo from "../../data/img/logo.svg";
import {
	Copyright,
	FooterContainer,
	Heading,
	InfoContanier,
	Text,
} from "./FooterStyle";

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<InfoContanier>
				<img src={Logo} alt="Logo" />
				<Text>
					LaslesVPN is a private virtual network that has unique
					features and has high security.
				</Text>
				<Copyright>©2020LaslesVPN</Copyright>
			</InfoContanier>
			<div>
				<Heading>Product</Heading>
				<Text>Download</Text>
				<Text>Pricing</Text>
				<Text>Locations</Text>
				<Text>Server</Text>
				<Text>Countries</Text>
				<Text>Blog</Text>
			</div>
			<div>
				<Heading>Engage</Heading>
				<Text>LaslesVPN ?</Text>
				<Text>FAQ</Text>
				<Text>Tutorials</Text>
				<Text>About Us</Text>
				<Text>Privacy Policy</Text>
				<Text>Terms of Service</Text>
			</div>
			<div>
				<Heading>Earn Money</Heading>
				<Text>Affiliate</Text>
				<Text>Become Partner</Text>
			</div>
		</FooterContainer>
	);
};
