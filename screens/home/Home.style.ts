import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "@/constants";

export const StyledSafeAreaView = styled(SafeAreaView)`
	background: ${colors.appBackground};
	flex: 1;
	padding: ${spacing(6)};
	gap: ${spacing(5)};
`;
