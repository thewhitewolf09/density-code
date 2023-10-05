import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import TimeCard from './components/TimeCard'
import PointSystemCard from './components/PointSystemCard'
import { cricket_team_bg } from '../../assets/assets'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import screenUtils from '../../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'
import appColors from '../../styles/Colors'

const ReadyToCreate = () => {
	const navigation = useNavigation()
	const [matchTime, setMatchTime] = useState()
	return (
		<ScrollView>
			<HunterGradient>
				<WalletHeader />
				<View style={styles.outerContainer}>
					<TimeCard />
					<PointSystemCard />
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<Image
							style={{
								width: screenUtils.width / 1.15,
								height: screenUtils.width / 1.15,
							}}
							source={cricket_team_bg}
						/>
					</View>
					<View
						style={{
							marginHorizontal: 20,
						}}
					>
						<HunterButton
							onPress={() => {
								navigation.navigate('SelectPlayers', { mode: 'create' })
							}}
							title={'Create Team'}
						/>
					</View>
				</View>
			</HunterGradient>
		</ScrollView>
	)
}

export default ReadyToCreate

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: '#FFFFFF80',
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		paddingVertical: screenUtils.height / 40,
	},
})
