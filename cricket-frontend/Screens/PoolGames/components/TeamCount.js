import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IndiaFlag from '../../../assets/Images/Svg/IndiaFlag'
import GroupsSvg from '../../../assets/Images/Svg/Groups_svg'
import HunterText from '../../../components/UI/HunterText'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const TeamCount = ({
	teamAPlayerCount,
	teamBPlayerCount,
	credits,
	teamA,
	teamB,
}) => {
	return (
		<>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					paddingVertical: sHeight / 85,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<IndiaFlag />
					<View style={{ marginHorizontal: sWidth * 0.04 }}>
						<HunterText style={{ fontSize: 12 }}>{teamA}</HunterText>
						<HunterSemiBoldText>{teamAPlayerCount}</HunterSemiBoldText>
					</View>
				</View>
				<View style={{ alignSelf: 'center' }}>
					<Text> VS</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<View style={{ marginHorizontal: sWidth * 0.04 }}>
						<HunterText style={{ fontSize: 12 }}>{teamB}</HunterText>
						<HunterSemiBoldText style={{ textAlign: 'right' }}>
							{teamBPlayerCount}
						</HunterSemiBoldText>
					</View>
					<IndiaFlag />
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#F9F0F5',
					borderColor: 'white',
					borderWidth: 2,
					borderRadius: 20,
					padding: 10,
					marginVertical: 10,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<View style={{ alignSelf: 'center', marginHorizontal: 6 }}>
						<GroupsSvg />
					</View>
					<Text style={{ fontSize: 10, textAlignVertical: 'center' }}>
						{teamAPlayerCount + teamBPlayerCount}/11 Players
					</Text>
				</View>
				<HunterText style={{ fontSize: 10, textAlignVertical: 'center' }}>
					{credits} Credits left
				</HunterText>
			</View>
		</>
	)
}

export default TeamCount

const styles = StyleSheet.create({})
