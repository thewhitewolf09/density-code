import {
	View,
	StyleSheet,
	Dimensions,
	Image,
	Pressable,
	Text,
} from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import HunterText from './HunterText'
import { LinearGradient } from 'expo-linear-gradient'
import screenUtils from '../../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'
import FirstBadge from '../../assets/Images/Svg/FirstBadge'
import Prize from '../../assets/Images/Svg/Prize'
import paymentsIcon from '../../assets/assets'
import HunterSemiBoldText from './HunterSemiBoldText'
import NumberToWord from '../../helpers/NumberToWord'
import Payments from '../../assets/Images/Svg/Payments'
import appColors from '../../styles/Colors'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

// import { LinearGradient } from 'expo-linear-gradient';

export default function MyContestCard({
	totalWinnings,
	winners,
	rank,
	points,
	status,
	entryFee,
	nofTeams,
	earnings,
}) {
	//const [prizePool, setPrizePool] = useState(NumberToWord(entryFee * poolSize))
	const navigation = useNavigation()
	return (
		// <SafeAreaView style={styles.upperContainer}>

		<View style={styles.ContestMain}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<HunterText style={{ fontSize: 10, color: '#525252' }}>
						Total winnings
					</HunterText>
					<HunterSemiBoldText style={{ fontSize: 14, color: '#0B0617' }}>
						₹{totalWinnings}
					</HunterSemiBoldText>
				</View>
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<HunterText style={{ fontSize: 10, color: '#525252' }}>
						Winners
					</HunterText>
					<HunterSemiBoldText style={{ fontSize: 14, color: '#0B0617' }}>
						{winners}
					</HunterSemiBoldText>
				</View>
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<HunterText style={{ fontSize: 10, color: '#525252' }}>
						Entry fee
					</HunterText>
					<HunterSemiBoldText
						style={{ fontSize: 14, color: '#0B0617', textAlign: 'right' }}
					>
						₹{entryFee}
					</HunterSemiBoldText>
				</View>
			</View>

			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<HunterText style={{ fontSize: 10, color: '#525252' }}>
						Joined with
					</HunterText>
					<HunterSemiBoldText style={{ fontSize: 14, color: '#0B0617' }}>
						{nofTeams} teams
					</HunterSemiBoldText>
				</View>
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<HunterText style={{ fontSize: 10, color: '#525252' }}>
						Points
					</HunterText>
					<HunterSemiBoldText style={{ fontSize: 14, color: '#0B0617' }}>
						{points}
					</HunterSemiBoldText>
				</View>
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<HunterText style={{ fontSize: 10, color: '#525252' }}>
						Rank
					</HunterText>
					<HunterSemiBoldText style={{ fontSize: 14, color: '#0B0617' }}>
						#{rank}
					</HunterSemiBoldText>
				</View>
			</View>
			<View style={styles.MatchCardFooter}>
				<View style={{ flexDirection: 'row' }}>
					<HunterText
						style={{
							fontSize: screenUtils.width / 40,
							marginHorizontal: screenUtils.width / 80,
							textAlignVertical: 'center',
						}}
					>
						Your earnings
					</HunterText>
					<View style={{ alignSelf: 'center' }}>
						<Payments />
					</View>
					<HunterSemiBoldText
						style={{
							color: appColors.green,
							marginHorizontal: screenUtils.width / 80,
						}}
					>
						₹{earnings}
					</HunterSemiBoldText>
				</View>
				<HunterText style={{ color: appColors.hunter }}>{status}</HunterText>
			</View>
		</View>

		// </SafeAreaView>
	)
}
const styles = StyleSheet.create({
	upperContainer: {
		// backgroundColor: "#5F40DD4D",
		paddingTop: 5,
		paddingBottom: 1,
		borderColor: 'red',
		borderWidth: 2,
		marginTop: 50,
	},

	tinyLogo: {
		width: 50,
		height: 50,
		// borderColor: "red",
		// borderWidth: 2,
	},
	MatchCardFooter: {
		borderColor: 'white',
		borderWidth: 2,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		borderRadius: 32,
		paddingHorizontal: 6,
		backgroundColor: '#F9F9F9',
		marginTop: 4,
		alignItems: 'center',
		height: 36,
		elevation: 10,
	},
	ContestMain: {
		borderColor: '#D8D3E9',
		borderWidth: 2,
		width: screenUtils.width / 1.1,
		dispaly: 'flex',
		borderRadius: 20,
		flexDirection: 'column',
		padding: screenUtils.width / 25,
		marginVertical: screenUtils.height / 85,
	},
})
