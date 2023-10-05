import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import screenUtils from '../../../constants/Dimensions'
import { useSelector } from 'react-redux'
import shortName from '../../../helpers/shortNameHelper'
import timeTillStart from '../../../helpers/timeTillStartHelper'

const TimeCard = () => {
	const matchDetails = useSelector((state) => state.currentMatch.value)

	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
			}}
		>
			<View style={{ width: '80%' }}>
				<HunterText style={{ textAlign: 'center' }}>
					{timeTillStart(matchDetails.startTime).result} left
				</HunterText>
				<HunterSemiBoldText style={{ textAlign: 'center' }}>
					{shortName(matchDetails.teamA)} v {shortName(matchDetails.teamB)}
				</HunterSemiBoldText>
				<HunterSemiBoldText
					style={{ textAlign: 'center', fontSize: screenUtils.width / 25 }}
				>
					Ready to create your first team?
				</HunterSemiBoldText>
				<HunterText style={{ textAlign: 'center', fontSize: 12.5 }}>
					You will score points based on your selected players’ real-life
					performance in this match
				</HunterText>
			</View>
		</View>
	)
}

export default TimeCard

const styles = StyleSheet.create({})
