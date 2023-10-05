import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
import screenUtils from '../../../constants/Dimensions'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function WinnerCard({ rankLow, rankHigh, percentage }) {
	return (
		<View
			style={{
				justifyContent: 'space-between',
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: 'white',
				borderBottomColor: 'rgba(109, 72, 255, 0.2)',
				borderBottomWidth: 1,
				paddingVertical: 20,
			}}
		>
			<View>
				<HunterText
					style={{ fontSize: screenUtils.width / 33.3, Color: 'black' }}
				>
					#{rankLow == rankHigh ? rankLow : `${rankLow}-${rankHigh}`}
				</HunterText>
			</View>
			<View>
				<HunterText
					style={{ fontSize: screenUtils.width / 33.3, Color: 'black' }}
				>
					{percentage}%
				</HunterText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		backgroundColor: '#5F40DD4D',
		paddingTop: 0,
		paddingBottom: 1,
		borderColor: 'red',
		borderBottomWidth: 1,
		marginVertical: 200,
	},
})

export default WinnerCard
