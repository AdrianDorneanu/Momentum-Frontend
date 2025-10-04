import styled from "@emotion/native";
import { Text, View } from "react-native";
import { colors, radii, spacing } from "@/constants";

export const Container = styled(View)`
	background: white;
	border-radius: ${radii.lg};
	box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
	padding: ${spacing(6)};
	gap: ${spacing(6)};
`;
export const Description = styled(Text)`
	color: ${colors.label};
	font-size: 20px;
	font-weight: 500;
`;
