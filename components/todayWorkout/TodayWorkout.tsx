import { Text } from "react-native";
import { NoExercises } from "./noExercises";
import { FC } from "react";

interface TodayWorkoutProps {
	exercises: [];
}

export const TodayWorkout: FC<TodayWorkoutProps> = ({ exercises }) => {
	return <NoExercises />;
};
