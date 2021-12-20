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
import { useScreenWidth } from "../../customHooks/getScreenWIdth";

export const Carousel: React.FC = () => {
	const [ActiveComment, setActiveComment] = useState(1);
	let screenWidth = useScreenWidth();

	const scrollTo = (id: number) => {
		const ele = document.getElementById("carousel-container");
		if (ele === null) {
			return;
		}
		const cardWidth = Math.min(screenWidth, 340);
		ele.scrollTo({
			left: (id - 1) * cardWidth + (id - 1) * 60,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<Heading>Trusted by Thousands of Happy Customer</Heading>
			<Text>
				These are the stories of our customers who have joined us with
				great pleasure when using this crazy feature.
			</Text>
			<CarouselContainer id="carousel-container">
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
							onClick={() => {
								scrollTo(user.Id);
								setActiveComment(user.Id);
							}}
						></CarouselNavEle>
					))}
				</CarouselNav>
				<div>
					<Button
						dir="left"
						onClick={() => {
							scrollTo(ActiveComment - 1);
							setActiveComment(ActiveComment - 1);
						}}
						disabled={ActiveComment === 1 ? true : false}
					>
						<i className="fas fa-arrow-left"></i>
					</Button>
					<Button
						dir="right"
						onClick={() => {
							scrollTo(ActiveComment + 1);
							setActiveComment(ActiveComment + 1);
						}}
						disabled={ActiveComment === Users.length ? true : false}
					>
						<i className="fas fa-arrow-right"></i>
					</Button>
				</div>
			</FlexContainer>
		</div>
	);
};
