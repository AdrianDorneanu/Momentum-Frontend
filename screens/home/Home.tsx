import { Text } from "react-native";
import { Streak, TodayWorkout } from "@/components";
import { StyledSafeAreaView } from "./Home.style";

export const Home = () => {
	return (
		<StyledSafeAreaView edges={["left", "right", "bottom"]}>
			<Text>Hi Catalina!</Text>
			<TodayWorkout exercises={[]} />
			<Streak></Streak>
		</StyledSafeAreaView>
	);
};
