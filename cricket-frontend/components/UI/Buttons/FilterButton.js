import { Dimensions, Pressable } from 'react-native'
import React from 'react'
import appColors from '../../../styles/Colors'
import HunterText from '../HunterText'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const FilterButton = ({ style, title, onPress, active, bgColor }) => {
	return (
		<Pressable
			style={[
				{
					backgroundColor: active
						? (bgColor) ? bgColor : 'rgba(109, 72, 255, 0.72)'
						: appColors.white,
					borderRadius: 17,
					borderColor: appColors.secondaryDark,
					borderWidth: 1,
					paddingHorizontal: sWidth / 40,
					paddingVertical: sHeight / 170,
				},
				style,
			]}
			onPress={onPress}
		>
			<HunterText
				style={{
					alignSelf: 'center',
					textAlignVertical: 'center',
					fontSize: 12,
					color: !active ? appColors.primary : appColors.secondary,
				}}
			>
				{title}
			</HunterText>
		</Pressable>
	)
}

export default FilterButton
