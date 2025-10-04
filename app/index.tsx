import { SafeAreaView } from 'react-native-safe-area-context';
import { TodayWorkout } from "@/components";
import {colors, spacing } from '@/constants';
import styled from '@emotion/native';

const StyledSafeAreaView = styled(SafeAreaView)`
	background: ${colors.appBackground};
	flex: 1;
	padding: ${spacing(6)};
	gap: ${spacing(5)};
`

export default function Page() {
	return (
		<StyledSafeAreaView>
			<TodayWorkout exercises={[]} />
		</StyledSafeAreaView>
	);
}
