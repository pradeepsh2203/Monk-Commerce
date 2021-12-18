import React from "react";
import Img from "../../data/img/img.svg";
import { Heading, Text, Button, Content, Image, HomeContainer } from "./Style";

export const Home: React.FC = () => {
	return (
		<HomeContainer>
			<Content>
				<Heading>Want anything to be easy with LaslesVPN.</Heading>
				<Text>
					Provide a network for all your needs with ease and fun using
					LaslesVPN discover interesting features from us.
				</Text>
				<Button>Get Started</Button>
			</Content>
			<Image src={Img} alt="Home" />
		</HomeContainer>
	);
};
