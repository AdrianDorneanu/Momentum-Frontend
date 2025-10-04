import styled from "@emotion/native";
import { View, Text, TouchableOpacity } from "react-native";
import { colors, radii, spacing } from "@/constants";

export const Container = styled(View)`
	background: white;
	border-radius: ${radii.lg};
	box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
	padding: ${spacing(6)};
	gap: ${spacing(6)};
`;

export const HeaderWrapper = styled(View)`
	gap: ${spacing(6)};
`;

export const Header = styled(Text)`
	color: ${colors.header};
	font-weight: 700;
	font-size: 28px;
`;

export const Description = styled(Text)`
	color: ${colors.label};
	font-size: 20px;
	font-weight: 500;
	text-align: center;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
	align-self: center;
	background: ${colors.primary};
	border-radius: ${radii.sm};
	padding-inline: ${spacing(8)};
	padding-block: ${spacing(3)};
`;

export const ButtonText = styled(Text)`
	color: white;
	font-size: 16px;
	font-weight: 500;
`;
