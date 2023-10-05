import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import MaskedView from "@react-native-community/masked-view";
import { stockPurch2 } from '../../assets/assets'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import { useNavigation } from '@react-navigation/native'
import HunterText from '../../components/UI/HunterText'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import screenUtils from '../../constants/Dimensions'

const ContestJoinedSuccess = () => {
	const navigation = useNavigation()
	const matchDetails = useSelector((state) => state.currentMatch.value)
	const [endTime, setEndTime] = useState()
	useEffect(() => {
		let date = new Date(matchDetails.startTime)
		date.setHours(date.getHours() + 5)
		setEndTime(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
	}, [])

	return (
		<View style={{ marginTop: 150, alignItems: 'center', textAlign: 'center' }}>
			<View style={{}}>
				<Image
					source={stockPurch2}
					style={{
						width: screenUtils.width / 2.8,
						height: screenUtils.width / 2.8,
						zIndex: 1,
						marginTop: -105,
					}}
				/>
			</View>
			<View
				style={{
					backgroundColor: 'rgba(237, 239, 241, 1)',
					width: '80%',
					// height: 70,
					borderRadius: 20,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: 10,
					padding: 20,
					elevation: 1,
				}}
			>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<HunterText style={{ fontSize: 12 }}>Results out at</HunterText>
					<HunterSemiBoldText style={{ fontSize: 16, padding: 10 }}>
						{endTime}
					</HunterSemiBoldText>
				</View>
			</View>
			<View style={{ marginTop: 20, width: 165 }}>
				<HunterButton
					onPress={() => {
						navigation.navigate('BottomNavigation')
					}}
					title={'Close'}
				/>
			</View>
		</View>
	)
}

export default ContestJoinedSuccess

const styles = StyleSheet.create({})
