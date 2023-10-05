import {
	Dimensions,
	Pressable,
	SafeAreaView,
	Text,
	View,
	Image,
} from 'react-native'
import React from 'react'
import appColors from '../../../styles/Colors'
import HunterText from '../../../components/UI/HunterText'
import screenUtils from '../../../constants/Dimensions'
import ForwardArrow from '../../../assets/MoreIcons/arrow_forward.png'
import leaderboardicon from '../../../assets/MoreIcons/leaderboard.png'
import { LinearGradient } from 'expo-linear-gradient'
import HunterBoldText from '../../../components/UI/HunterBoldText'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
// import appColors from '../../../styles/Colors'
// import HunterText from '../HunterText'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const PressableCard = ({ title, imageSrc }) => {
	return (
		// <View style={{ borderWidth: 2, marginTop: 100 , justifyContent:'space-between' , borderColor:'yellow' }}>
		<View
			style={{
				elevation: 4,
				borderRadius: 12,
				marginVertical: screenUtils.height / 100,
				width: screenUtils.width / 1.1,
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
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<LinearGradient
						style={{
							borderRadius: 10,
							marginVertical: screenUtils.height / 100,
							marginHorizontal: screenUtils.width / 50,
						}}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						locations={[0, 0.6]}
						colors={['rgba(203, 190, 255, 0.54)', 'rgba(197, 230, 255, 0.51)']}
					>
						<View
							style={{
								paddingHorizontal: screenUtils.width / 28,
								paddingVertical: screenUtils.height / 55,
								borderRadius: 10,
							}}
						>
							<Image
								source={imageSrc}
								style={{
									width: screenUtils.width / 25,
									height: screenUtils.height / 50,
								}}
							/>
						</View>
					</LinearGradient>
					<View
						style={{
							fontSize: 14,
							display: 'flex',
							textAlign: 'center',
							justifyContent: 'center',
							paddingHorizontal: screenUtils.width / 100,
						}}
					>
						<HunterSemiBoldText style={{ fontSize: 16 }}>
							{title}
						</HunterSemiBoldText>
					</View>
				</View>
				<View>
					<View
						style={{
							paddingHorizontal: screenUtils.width / 22,
							paddingVertical: screenUtils.height / 40,
							borderRadius: 10,
						}}
					>
						<Image
							source={ForwardArrow}
							style={{
								width: screenUtils.width / 34,
								height: screenUtils.height / 38,
							}}
						/>
					</View>
				</View>
			</View>
		</View>
		// </View>
	)
}

export default PressableCard

// { style, title, onPress, active }
// <Pressable
// style={[
//     {
//         backgroundColor: active ? appColors.primary : appColors.white,
//         borderRadius: 17,
//         borderColor: appColors.secondaryDark,
//         borderWidth: 1,
//         paddingHorizontal: sWidth / 40,
//         paddingVertical: sHeight / 170,
//     },
//     style,
// ]}
// onPress={onPress}
// >
// <HunterText
//     style={{
//         alignSelf: 'center',
//         textAlignVertical: 'center',
//         fontSize: 12,
//         color: !active ? appColors.primary : appColors.secondary,
//     }}
// >
//     {title}
// </HunterText>
// </Pressable>
