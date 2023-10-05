import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../styles/Colors'
import FilterButton from '../../../components/UI/Buttons/FilterButton'
import HunterText from '../../../components/UI/HunterText'
import screenUtils from '../../../constants/Dimensions'

const PointSystemCard = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
				marginVertical: screenUtils.height / 27,
			}}
		>
			<View
				style={{
					backgroundColor: Colors.secondaryDark,
					width: '95%',
					paddingVertical: 20,
					flexDirection: 'row',
					justifyContent: 'space-around',
					borderRadius: 16,
				}}
			>
				<View>
					<HunterText>1 Run = 1 Point</HunterText>
					<HunterText>1 Wicket = 25 Points</HunterText>
					<HunterText>1 Catch = 8 Points</HunterText>
				</View>
				<View style={{ alignSelf: 'center' }}>
					<FilterButton
						bgColor={'black'}
						onPress={() => {
							alert('Under development')
						}}
						title={'View full point system'}
						active={true}
					/>
				</View>
			</View>
		</View>
	)
}

export default PointSystemCard

const styles = StyleSheet.create({})
