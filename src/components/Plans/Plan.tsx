import React from "react";
import { Card } from "./Card";
import { Heading, Text, PlanContainer, FlexContainer } from "./PlanStyles";

interface Props {
	type: string;
	feats: Array<string>;
	price?: number;
}

const availablePlans: Props[] = [
	{
		type: "Free",
		feats: [
			"Unlimited Bandwitch",
			"Encrypted Connection",
			"No Traffic Logs",
			"Works on All Devices",
		],
	},
	{
		type: "Standard",
		feats: [
			"Unlimited Bandwitch",
			"Encrypted Connection",
			"No Traffic Logs",
			"Works on All Devices",
			"Connect Anyware",
		],
		price: 9,
	},
	{
		type: "Premium",
		feats: [
			"Unlimited Bandwitch",
			"Encrypted Connection",
			"No Traffic Logs",
			"Works on All Devices",
			"Connect Anyware",
			"Get New Features",
		],
		price: 12,
	},
];

export const Plan: React.FC = () => {
	return (
		<PlanContainer>
			<Heading>Choose Your Plan</Heading>
			<Text>
				Let's choose the package that is best for you and explore it
				happily and cheerfully.
			</Text>
			<FlexContainer>
				{availablePlans.map((plan) => (
					<Card
						type={plan.type}
						feats={plan.feats}
						price={plan.price}
					/>
				))}
			</FlexContainer>
		</PlanContainer>
	);
};
