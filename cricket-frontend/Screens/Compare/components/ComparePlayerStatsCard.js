import { Dimensions, Image, StyleSheet, View, Pressable } from 'react-native'
import React from 'react'

import { Colors } from '../../../styles'

import HunterText from '../../../components/UI/HunterText'
import PercentageChange from '../../../components/UI/PercentageChange'
import PlayerPerformanceChart from '../../../components/UI/Charts/PlayerPerformanceChart'
import { image17 } from '../../../assets/assets'
const { width, height } = Dimensions.get('window')
import PerformanceTrend from '../../PlayerInfo/components/PerformanceTrend'

const ComparePlayerStatsCard = ({
	name,
	position,
	nationality,
	ipl_team,
	backgroundColor,
	imageURL,
}) => {
	if(nationality?.length>8) {
		nationality = nationality.substring(0, 8) + '...'
	}
	if(ipl_team?.length>7) {
		ipl_team = ipl_team.substring(0, 7) + '...'
	}
	if(name?.length>14) {
		name = name.substring(0, 14) + '...'
	}
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				marginVertical: height * 0.05,
				marginHorizontal: width * 0.03,
				backgroundColor: backgroundColor ? 'lightblue' : Colors.white,
				elevation: 10,
			}}
		>
			<View style={styles.cardInside}>
				<View>
					<Image source={{uri: imageURL}} style={styles.virat} />
				</View>
				<View style={{ alignItems: 'center', lineHeight: 10 }}>
					<HunterText
						style={{ fontWeight: '700', fontSize: 16, letterSpacing: 0.5 }}
					>
						{name}
					</HunterText>
					<HunterText>{position}</HunterText>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.teamStyle}>
						<View
							style={{
								borderStyle: 'solid',
								borderWidth: 4,
								borderColor: 'blue',
								borderRadius: 10,
								height: 0.01,
								width: 0.01,
							}}
						>
							<HunterText> </HunterText>
						</View>
						<HunterText style={{ fontSize: 12 }}> {nationality}</HunterText>
					</View>

					<View style={styles.teamStyle}>
						<View
							style={{
								borderStyle: 'solid',
								borderWidth: 4,
								borderColor: 'red',
								borderRadius: 10,
								height: 0.01,
								width: 0.01,
							}}
						>
							<HunterText> </HunterText>
						</View>
						<HunterText style={{ fontSize: 12 }}> {ipl_team}</HunterText>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 7,
					}}
				>
					<HunterText
						style={{ fontWeight: '500', fontSize: 16, letterSpacing: 1 }}
					>
						₹5,500
					</HunterText>
					<PercentageChange value={95} />
				</View>
				<View style={{ marginVertical: height * 0.01 }}>
					<PerformanceTrend inCompare={true} />
				</View>
				<View style={{ marginVertical: height * 0.01 }}>
					<PerformanceTrend inCompare={true} />
				</View>
			</View>
		</View>
	)
}

export default ComparePlayerStatsCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardView: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		marginVertical: height * 0.05,
		marginHorizontal: width * 0.02,
		// width: 0.6 * width,
		// height: height * 0.30,
		backgroundColor: Colors.white,
		elevation: 10,
		// marginHorizontal: width*0.04,
	},
	cardInside: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: height * 0.02,
		paddingHorizontal: width * 0.01,
		// borderWidth: 1,
	},
	virat: {
		width: width * 0.2,
		height: height * 0.08,
	},
	button: {
		backgroundColor: Colors.primary,
		borderRadius: 30,
		paddingHorizontal: height * 0.01,
		paddingVertical: height * 0.005,
	},
	text: {
		color: Colors.white,
		textAlign: 'center',
		fontSize: 12,
		paddingHorizontal: width * 0.03,
	},
	teamStyle: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: Colors.secondaryDark,
		borderRadius: 74,
		paddingHorizontal: height * 0.005,
		marginLeft: 0.01 * width,
		alignItems: 'center',
	},
})
