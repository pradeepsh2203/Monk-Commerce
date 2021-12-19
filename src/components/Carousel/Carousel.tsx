import React, { useState } from "react";
import { UserCard } from "./UserCard";
import {
	Button,
	CarouselContainer,
	CarouselNav,
	CarouselNavEle,
	FlexContainer,
	Heading,
	Text,
} from "./CarouselStyle";
import { Users } from "./UserData";

export const Carousel: React.FC = () => {
	const [ActiveComment, setActiveComment] = useState(1);
	return (
		<div>
			<Heading>Trusted by Thousands of Happy Customer</Heading>
			<Text>
				These are the stories of our customers who have joined us with
				great pleasure when using this crazy feature.
			</Text>
			<CarouselContainer>
				{Users.map((user) => {
					return (
						<UserCard
							key={user.Id}
							Img={user.Img}
							username={user.username}
							address={user.address}
							comment={user.comment}
							active={user.Id === ActiveComment}
						/>
					);
				})}
			</CarouselContainer>
			<FlexContainer>
				<CarouselNav>
					{Users.map((user) => (
						<CarouselNavEle
							key={user.Id}
							active={user.Id === ActiveComment ? true : false}
							onClick={() => setActiveComment(user.Id)}
						></CarouselNavEle>
					))}
				</CarouselNav>
				<div>
					<Button
						dir="left"
						onClick={() => setActiveComment(ActiveComment - 1)}
						disabled={ActiveComment === 1 ? true : false}
					>
						<i className="fas fa-arrow-left"></i>
					</Button>
					<Button
						dir="right"
						onClick={() => setActiveComment(ActiveComment + 1)}
						disabled={ActiveComment === Users.length ? true : false}
					>
						<i className="fas fa-arrow-right"></i>
					</Button>
				</div>
			</FlexContainer>
		</div>
	);
};
