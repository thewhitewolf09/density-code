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
import { arrowDownwardIos } from '../../../assets/assets'
// import appColors from '../../../styles/Colors'
// import HunterText from '../HunterText'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const FaqCard = () => {
	return (
		<View
			style={{
				borderRadius: 12,
				width: '95%',
				marginVertical: screenUtils.height / 100,
				marginLeft: screenUtils.width / 100,
				backgroundColor: '#fff',
			}}
		>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					borderRadius: 12,
				}}
			>
				<View
					style={{
						display: 'flex',
						justifyContent: 'center',
						paddingLeft: screenUtils.width / 20,
						paddingRight: 0,
						paddingVertical: screenUtils.height / 100,
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<HunterSemiBoldText>
						Facilisis mauris turpis sed amet diam phasellus quis?{' '}
					</HunterSemiBoldText>
					<View style={{ alignSelf: 'center', paddingRight: 10 }}>
						<Image source={arrowDownwardIos} />
					</View>
				</View>
			</View>
		</View>
	)
}

export default FaqCard
