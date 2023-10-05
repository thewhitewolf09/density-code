import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HunterBoldText from './HunterBoldText'
import screenUtils from '../../constants/Dimensions'
import timeTillStart from '../../helpers/timeTillStartHelper'
import HunterText from './HunterText'
import { groupsIcon, paymentsIcon, rcbFlag } from '../../assets/assets'
import Edit from '../../assets/Images/Svg/Edit'
import CheckCircle from '../../assets/Images/Svg/CheckCircle'
import MilitaryTech from '../../assets/Images/Svg/MilitaryTech'
import TimeProgressBar from './TimeProgressBar'
import NumberToWord from '../../helpers/NumberToWord'
import HunterSemiBoldText from './HunterSemiBoldText'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function MyMatchCard({
	teamA,
	teamB,
	startTime,
	no_of_contest,
	noOfTeams,
	endTime,
	team_a_image_url,
	team_b_image_url,
}) {
	const [tillStart, setTillStart] = useState(timeTillStart(startTime).result)

	const timeOfMatchEntry = 2 * 24 * 60 * 60 //48 hr earlier than start time

	let start_time = new Date(startTime)
	let end_time = new Date(endTime)
	let current_time = new Date()

	return (
		<View style={styles.MatchMain}>
			<View style={styles.MatchOut}>
				{start_time > current_time ? (
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
				) : null}
				{end_time < current_time ? (
					<View style={styles.MatchRemainTime}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								paddingHorizontal: 5,
							}}
						>
							<CheckCircle />
							<HunterSemiBoldText
								style={{
									fontSize: 10,
									color: '#737373',
									fontWeight: '500',
									marginLeft: 5,
								}}
							>
								Completed
							</HunterSemiBoldText>
						</View>
					</View>
				) : null}
				{end_time > current_time && start_time < current_time ? (
					<View style={styles.MatchRemainTime}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								paddingHorizontal: 5,
							}}
						>
							<View
								style={{
									width: 12,
									height: 12,
									backgroundColor: '#D23954',
									borderRadius: 40,
								}}
							></View>
							<HunterSemiBoldText
								style={{
									fontSize: 10,
									color: '#737373',
									fontWeight: '500',
									marginLeft: 5,
								}}
							>
								Live
							</HunterSemiBoldText>
						</View>
					</View>
				) : null}

				<View style={styles.MatchTitle}>
					<Text style={styles.MatchTitleText}>ICC t20 WC</Text>
				</View>

				<View style={styles.MatchTeamDetails}>
					<View style={styles.MatchTeamADetails}>
						<View style={styles.flagLogoContainer}>
							<Image style={styles.tinyLogo} source={team_a_image_url} />
						</View>

						<View
							style={[
								styles.teamNameContainer,
								{ justifyContent: 'flex-start' },
							]}
						>
							<HunterBoldText
								style={{
									paddingHorizontal: 8,
									fontSize: screenUtils.width / 30,
									flexShrink: 1,
								}}
							>
								{teamA}
							</HunterBoldText>
						</View>
					</View>

					<View style={{ display: 'flex', justifyContent: 'center' }}>
						<Text
							style={{
								fontSize: screenUtils.width / 30,
								color: 'grey',
							}}
						>
							VS
						</Text>
					</View>

					<View style={styles.MatchTeamADetails}>
						<View
							style={[styles.teamNameContainer, { justifyContent: 'flex-end' }]}
						>
							<HunterBoldText
								style={{
									paddingHorizontal: 8,
									fontSize: screenUtils.width / 30,
									flexShrink: 1,
								}}
							>
								{teamB}
							</HunterBoldText>
						</View>
						<View style={styles.flagLogoContainer}>
							<Image style={styles.tinyLogo} source={team_b_image_url} />
						</View>
					</View>
				</View>

				<View>
					{end_time > current_time && start_time < current_time ? (
						<View>
							<HunterSemiBoldText
								style={{
									fontSize: 10,
									lineHeight: 15,
									color: '#737373',
								}}
							>
								Started
							</HunterSemiBoldText>
						</View>
					) : null}
					{start_time > current_time ? (
						<View
							style={{
								backgroundColor: '#0B0617',
								width: 62,
								height: 24,
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: 36,
								marginBottom: 5,
							}}
						>
							<Edit />
							<HunterSemiBoldText
								style={{
									fontSize: 10,
									lineHeight: 15,
									color: 'white',
									marginLeft: 5,
								}}
							>
								Edit
							</HunterSemiBoldText>
						</View>
					) : null}
					{end_time < current_time ? (
						<View>
							<HunterSemiBoldText
								style={{
									fontSize: 10,
									lineHeight: 15,
									color: '#737373',
								}}
							>
								Ended - {end_time.toLocaleString()}
							</HunterSemiBoldText>
						</View>
					) : null}
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
							{noOfTeams} Teams
						</Text>
					</View>

					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						{/* <Image source={paymentsIcon} style={{ width: 18, height: 13 }} /> */}
						<MilitaryTech />
						<Text style={{ fontWeight: '500', fontSize: 10, marginLeft: 5 }}>
							{no_of_contest} contest
						</Text>
					</View>
				</View>
			</View>
		</View>
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
	MatchMain: {
		// borderColor: "yellow",
		// borderWidth: 1,
		display: 'flex',
		alignItems: 'center',
		// justifyContent:'center'
		paddingTop: 15,
		marginBottom: 6,
		background: 'transparent',
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
		// borderColor: "red",
		// borderWidth: 2,
		width: '100%',
		paddingVertical: 3,
		paddingHorizontal: 5,
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
	},
	teamNameContainer: {
		flexDirection: 'row',
		width: 100,
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
	},
	textinfooter: {
		fontWeight: '500',
		fontSize: 10,
	},
})

export default MyMatchCard
