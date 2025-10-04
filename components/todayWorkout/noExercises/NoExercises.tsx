import { FC } from "react";
import { Container, Header, Description, StyledTouchableOpacity, ButtonText, HeaderWrapper } from "./NoExercises.style";

export const NoExercises: FC = () => {
	return (
		<Container>
			<HeaderWrapper>
				<Header>Today&#39;s workout</Header>

				<Description>No exercises yet - add your first one to get started</Description>
			</HeaderWrapper>

			<StyledTouchableOpacity>
				<ButtonText>Add exercise</ButtonText>
			</StyledTouchableOpacity>
		</Container>
	);
};
