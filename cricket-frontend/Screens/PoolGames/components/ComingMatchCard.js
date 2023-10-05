import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HunterBoldText from '../../../components/UI/HunterBoldText'
import screenUtils from '../../../constants/Dimensions'
import timeTillStart from '../../../helpers/timeTillStartHelper'
import HunterText from '../../../components/UI/HunterText'
import {
	groupsIconImage,
	paymentsIconImage,
	rcbFlag,
} from '../../../assets/assets'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function ComingMatchCard({ teamA, teamB, startTime }) {
	// style={styles.NameAndDetails}
	// console.log(startTime)
	const [tillStart, setTillStart] = useState(timeTillStart(startTime).result)
	return (
		// <SafeAreaView style={styles.upperContainer}>
		<View style={styles.MatchMain}>
			<View style={styles.MatchOut}>
				<View style={styles.MatchRemainTime}>
					<HunterText style={{ fontSize: 10, color: '#737373' }}>
						{tillStart}
					</HunterText>
				</View>
				<View style={styles.MatchTitle}>
					<Text style={styles.MatchTitleText}>ICC t20 WC</Text>
				</View>
				<View style={styles.MatchTeamDetails}>
					<View style={styles.MatchTeamADetails}>
						<Image style={styles.tinyLogo} source={rcbFlag} />
						<HunterBoldText
							style={{
								paddingHorizontal: 8,
								fontSize: 16,
							}}
						>
							{teamA}
						</HunterBoldText>
					</View>
					<View style={{ display: 'flex', justifyContent: 'center' }}>
						<Text style={{ fontWeight: '400', fontSize: 12, color: 'grey' }}>
							VS
						</Text>
					</View>
					<View style={styles.MatchTeamADetails}>
						<Text
							style={{
								paddingHorizontal: 8,
								fontWeight: '700',
								fontSize: 16,
							}}
						>
							{teamB}
						</Text>
						<Image style={styles.tinyLogo} source={rcbFlag} />
					</View>
				</View>
				<View style={styles.MatchCardFooter}>
					{/* <View></View> */}
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Image style={{ marginRight: 5 }} source={groupsIconImage} />
						<Text style={{ fontWeight: '500', fontSize: 10 }}>
							128 Contests
						</Text>
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Image source={paymentsIconImage} />
						<Text style={{ fontWeight: '500', fontSize: 10, marginLeft: 5 }}>
							16 lakhs
						</Text>
					</View>
				</View>
			</View>

			{/* </LinearGradient> */}
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
	},
	MatchMain: {
		// borderColor: "yellow",
		// borderWidth: 1,
		height: 165,
		width: 350,
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
		height: 150,
		dispaly: 'flex',
		borderRadius: 32,
		// justifyContent:'center'
		alignItems: 'center',
		paddingHorizontal: 16,

		background: 'linear-gradient(red, blue)',
	},
	MatchRemainTime: {
		marginTop: -16,
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
		// borderColor: "red",
		// borderWidth: 2,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	MatchTeamADetails: {
		// borderColor: "yellow",
		// borderWidth: 2,
		// width:"100%",
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
	tinyLogo: {
		width: 50,
		height: 50,
		// borderColor: "red",
		// borderWidth: 2,
		marginVertical: 8,
	},
	textinfooter: {
		fontWeight: '500',
		fontSize: 10,
	},
})

export default ComingMatchCard
