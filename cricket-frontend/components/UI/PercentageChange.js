import { View } from 'react-native'
import React from 'react'
import HunterText from './HunterText'
//
const PercentageChange = ({ value }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
			}}
		>
			{parseFloat(value) > 0 ? (
				<HunterText style={{ color: 'green', fontSize: 12 }}>
					{' '}
					▲ {parseFloat(value).toFixed(2)}%
				</HunterText>
			) : (
				<HunterText style={{ color: 'red', fontSize: 12 }}>
					{' '}
					▼ {parseFloat(-value).toFixed(2)}%
				</HunterText>
			)}
		</View>
	)
}

export default PercentageChange
