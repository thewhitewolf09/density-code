import {
	Dimensions,
	Pressable,
	SafeAreaView,
	Text,
	View,
	Image,
	TextInput,
} from 'react-native'
import React, { useState } from 'react'
import appColors from '../../../styles/Colors'
import HunterText from '../../../components/UI/HunterText'
import screenUtils from '../../../constants/Dimensions'
import ForwardArrow from '../../../assets/MoreIcons/arrow_forward.png'
import leaderboardicon from '../../../assets/MoreIcons/leaderboard.png'
import { LinearGradient } from 'expo-linear-gradient'
import HunterBoldText from '../../../components/UI/HunterBoldText'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const UserInfoCard = ({ title, editcheck, state, setState }) => {
	// console.log('from user info card' , {title} , {state})
	const [isFocused, setIsFocused] = useState(false)
	return (
		<View
			style={{
				elevation: 4,
				borderRadius: 12,
				marginVertical: screenUtils.height / 100,
				width: screenUtils.width / 1.1,
				borderColor: isFocused ? appColors.hunter : 'grey',
				borderWidth: isFocused ? 1 : 0,
			}}
		>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingHorizontal: screenUtils.height / 100,
					alignItems: 'center',
					borderRadius: 12,
					backgroundColor: 'white',
				}}
			>
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<LinearGradient
						style={{
							borderRadius: 10,
							marginVertical: screenUtils.height / 100,
							marginHorizontal: screenUtils.width / 50,
						}}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						locations={[0, 0.8]}
						colors={['rgba(25, 255, 255, 1)', 'rgba(197, 20, 255, 0.51)']}
					></LinearGradient>
					<View
						style={{
							fontSize: 14,
							display: 'flex',
							textAlign: 'center',
							justifyContent: 'center',
							paddingHorizontal: screenUtils.width / 120,
						}}
					>
						<HunterText style={{ fontSize: 12, color: 'grey' }}>
							{title}
						</HunterText>
					</View>
					<View
						style={{
							marginBottom: screenUtils.height / 50,
							paddingLeft: screenUtils.width / 85,
						}}
					>
						<TextInput
							style={{
								color: 'black',
								fontSize: 16,
								fontWeight: 'bolder',
								width: screenUtils.width / 1.2,
								borderBottomWidth: editcheck ? screenUtils.height / 600 : 0,
								borderColor: isFocused ? appColors.hunter : 'grey',
								fontFamily: 'hunter',
							}}
							value={state}
							onChangeText={(newValue) => {
								setState(newValue)
							}}
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
							keyboardType="text"
							editable={editcheck}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

export default UserInfoCard
