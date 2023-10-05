import { Pressable } from 'react-native'
import React from 'react'
import HunterText from '../HunterText'
import appColors from '../../../styles/Colors'

const HunterButton = ({ title, onPress, disabled, style }) => {
	return (
		<Pressable
			style={[
				{
					width: '100%',
					borderRadius: 12,
					paddingVertical: 13,
					elevation: disabled ? 0 : 20,
					backgroundColor: disabled
						? appColors.secondaryDark
						: appColors.hunter,
				},
				style,
			]}
			onPress={onPress}
		>
			<HunterText
				style={{
					color: disabled ? 'rgba(204, 204, 204, 1)' : 'white',
					fontSize: 16,
					textAlign: 'center',
					fontFamily: 'hunterBold',
				}}
			>
				{' '}
				{title}
			</HunterText>
		</Pressable>
	)
}

export default HunterButton
