import React from "react";
import {
	CardContainer,
	FlexContainer,
	Image,
	UserName,
	Address,
	Rating,
	Comment,
} from "./UserCardStyles";

interface Props {
	Img: string;
	username: string;
	address: string;
	comment: string;
	active: boolean;
}

export const UserCard: React.FC<Props> = ({
	Img,
	username,
	address,
	comment,
	active,
}) => {
	return (
		<CardContainer focus={active}>
			<FlexContainer>
				<FlexContainer>
					<Image src={Img} alt="User" />
					<div style={{ paddingLeft: "10px" }}>
						<UserName>{username}</UserName>
						<Address>{address}</Address>
					</div>
				</FlexContainer>
				<Rating>
					4.5{" "}
					<i
						className="fas fa-star fa-s"
						style={{ color: "#FEA250" }}
					></i>
				</Rating>
			</FlexContainer>
			<Comment>{comment}</Comment>
		</CardContainer>
	);
};
