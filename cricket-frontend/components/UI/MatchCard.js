import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HunterBoldText from './HunterBoldText'
import screenUtils from '../../constants/Dimensions'
import timeTillStart from '../../helpers/timeTillStartHelper'
import HunterText from './HunterText'
import { groupsIcon, paymentsIcon } from '../../assets/assets'
import TimeProgressBar from './TimeProgressBar'
import NumberToWord from '../../helpers/NumberToWord'
import shortName from '../../helpers/shortNameHelper'
import MatchCardGradient from './Gradients/MatchCardGradient'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function MatchCard({
	teamA,
	teamB,
	startTime,
	no_of_contest,
	highest_prize_pool,
	imageSourceA,
	imageSourceB,
}) {
	const [tillStart, setTillStart] = useState(timeTillStart(startTime).result)
	const [highestPrizePool, setHighestPrizePool] = useState(
		NumberToWord(highest_prize_pool),
	)

	const timeOfMatchEntry = 24 * 60 * 60 //24 hr earlier than start time

	return (
		<MatchCardGradient style={{ borderRadius: 32, marginVertical: 16 }}>
			<View>
				<View style={styles.MatchOut}>
					<View style={styles.MatchRemainTime}>
						<HunterText
							style={{ fontSize: 10, color: '#737373', fontWeight: '500' }}
						>
							{tillStart}
						</HunterText>

						<TimeProgressBar
							startTime={startTime}
							timeOfMatchEntry={timeOfMatchEntry}
						/>
					</View>

					<View style={styles.MatchTitle}>
						<HunterText style={styles.MatchTitleText}>ICC t20 WC</HunterText>
					</View>

					<View style={styles.MatchTeamDetails}>
						<View style={styles.MatchTeamADetails}>
							<View style={styles.flagLogoContainer}>
								<Image
									style={styles.tinyLogo}
									source={{
										uri: imageSourceA,
									}}
								/>
							</View>

							<View style={[styles.teamNameContainer]}>
								<HunterBoldText
									style={{
										paddingHorizontal: 8,
										fontSize: screenUtils.width / 25,
										flexShrink: 1,
									}}
								>
									{shortName(teamA)}
								</HunterBoldText>
								<HunterText
									style={{
										paddingHorizontal: 8,
										fontSize: screenUtils.width / 60,
										flexShrink: 1,
									}}
								>
									{teamA}
								</HunterText>
							</View>
						</View>

						<View style={{ display: 'flex', justifyContent: 'center' }}>
							<HunterText
								style={{
									fontSize: screenUtils.width / 40,
								}}
							>
								VS
							</HunterText>
						</View>

						<View style={styles.MatchTeamADetails}>
							<View
								style={[
									styles.teamNameContainer,
									{ justifyContent: 'flex-end' },
								]}
							>
								<HunterBoldText
									style={{
										paddingHorizontal: 8,
										fontSize: screenUtils.width / 25,
										flexShrink: 1,
										textAlign: 'right',
									}}
								>
									{shortName(teamB)}
								</HunterBoldText>
								<HunterText
									style={{
										paddingHorizontal: 8,
										fontSize: screenUtils.width / 60,
										flexShrink: 1,
									}}
								>
									{teamB}
								</HunterText>
							</View>
							<View style={styles.flagLogoContainer}>
								<Image style={styles.tinyLogo} source={{ uri: imageSourceB }} />
							</View>
						</View>
					</View>

					<View style={styles.MatchCardFooter}>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Image source={groupsIcon} style={{ width: 20, height: 10 }} />
							<Text style={{ fontWeight: '500', fontSize: 10, marginLeft: 5 }}>
								{no_of_contest} Contests
							</Text>
						</View>

						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Image source={paymentsIcon} style={{ width: 18, height: 13 }} />
							<Text style={{ fontWeight: '500', fontSize: 10, marginLeft: 5 }}>
								₹{highestPrizePool}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</MatchCardGradient>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		// backgroundColor: "#5F40DD4D",
		paddingTop: 5,
		paddingBottom: 1,
		borderColor: 'red',
		borderWidth: 2,
	},
	MatchOut: {
		borderColor: 'white',
		borderWidth: 2,
		width: screenUtils.width / 1.1,
		dispaly: 'flex',
		borderRadius: 32,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	MatchRemainTime: {
		marginTop: -16,
		position: 'absolute',
		backgroundColor: 'white',
		borderRadius: 32,
		padding: 5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	MatchTitle: {
		paddingVertical: screenUtils.height / 170,
		width: '100%',
	},
	MatchTitleText: {
		fontWeight: '500',
		fontSize: 10,
	},
	MatchTeamDetails: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: screenUtils.height / 85,
	},

	MatchTeamADetails: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
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
	flagLogoContainer: {
		width: 44,
		height: 44,
		backgroundColor: 'white',
		borderRadius: 13,
		shadowColor: 'rgba(0, 0, 0, 0.2)',
		elevation: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tinyLogo: {
		width: 40,
		height: 40,
		overflow: 'hidden',
		borderRadius: 13,
	},
	textinfooter: {
		fontWeight: '500',
		fontSize: 10,
	},
})

export default MatchCard
