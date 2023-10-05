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
import HunterSemiBoldText from './HunterSemiBoldText'
import NumberToWord from '../../helpers/NumberToWord'
import CardGradient from './CardGradient'
import MatchCardGradient from './Gradients/MatchCardGradient'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

// import { LinearGradient } from 'expo-linear-gradient';

export default function ContestCard({
	poolSize,
	entryFee,
	firstPrize,
	totalWinPercentage,
	participantCount,
}) {
	const [prizePool, setPrizePool] = useState(NumberToWord(entryFee * poolSize))
	const navigation = useNavigation()
	return (
		// <SafeAreaView style={styles.upperContainer}>
		<MatchCardGradient style={styles.ContestMain}>
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
						Prize Pool
					</HunterText>
					<HunterSemiBoldText style={{ fontSize: 16, color: '#0B0617' }}>
						₹{prizePool}
					</HunterSemiBoldText>
				</View>

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<HunterText style={{ marginHorizontal: screenUtils.width / 66.6 }}>
						Entry
					</HunterText>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						locations={[0, 0.6]}
						colors={['rgba(1, 148, 83, 0.54)', 'rgba(1, 148, 83, 1)']}
						style={{ borderRadius: 15 }}
					>
						<View
							style={{
								width: screenUtils.width / 4.1,
								height: screenUtils.height / 25.75,
								borderRadius: 15,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<HunterText
								style={{
									color: 'white',
									fontSize: screenUtils.width / 33.33,
								}}
							>
								₹ {entryFee}
							</HunterText>
						</View>
					</LinearGradient>
				</View>
			</View>
			<View style={{ paddingVertical: 5 }}>
				<ProgressBar
					percentstyle={{
						width:
							(parseFloat(participantCount) / parseFloat(poolSize)) * 100 + '%',

						// width : "20%",
						height: '100%',
						borderRadius: 4,
						// backgroundColor: "red",
					}}
				/>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<HunterText style={{ fontSize: 10, color: 'black' }}>
					{poolSize - participantCount}/
				</HunterText>
				<HunterText style={{ fontSize: 10, color: 'grey' }}>
					{poolSize} spots left
				</HunterText>
			</View>
			<View style={styles.MatchCardFooter}>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<FirstBadge />
					<HunterText
						style={{
							fontWeight: '500',
							fontSize: screenUtils.width / 40,
							textAlignVertical: 'center',
						}}
					>
						₹ {firstPrize}
					</HunterText>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<Prize />
					<HunterText
						style={{ fontWeight: '500', fontSize: 10, marginLeft: 5 }}
					>
						{totalWinPercentage * 100} %
					</HunterText>
				</View>
			</View>
		</MatchCardGradient>

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
		marginVertical: 8,
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
		backgroundColor: 'white',
		marginTop: 4,
		alignItems: 'center',
		height: 36,
		elevation: 10,
	},
	ContestMain: {
		borderColor: 'white',
		borderWidth: 2,
		width: screenUtils.width / 1.1,
		dispaly: 'flex',
		borderRadius: 20,
		flexDirection: 'column',
		padding: screenUtils.height / 54,
		marginVertical: screenUtils.height / 85,
	},
})
