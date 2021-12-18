import React from "react";
import Box from "../../data/img/box.svg";
import { Button, CardContainer, Heading, List, Price } from "./CardStyles";

interface Props {
	type: string;
	feats: Array<string>;
	price?: number;
}

export const Card: React.FC<Props> = ({ type, feats, price }) => {
	return (
		<CardContainer focus={type === "Premium" ? true : false}>
			<div>
				<img src={Box} alt="Party" />
				<Heading>{type} Plan</Heading>
				<List>
					{feats.map((feat) => (
						<li>{feat}</li>
					))}
				</List>
			</div>
			<div>
				<Price>
					{price === undefined ? (
						<strong style={{ fontWeight: 500 }}>Free</strong>
					) : (
						<>
							<strong style={{ fontWeight: 500 }}>
								${price}
							</strong>
							/mo
						</>
					)}
				</Price>
				<Button focus={type === "Premium" ? true : false}>
					Select
				</Button>
			</div>
		</CardContainer>
	);
};
