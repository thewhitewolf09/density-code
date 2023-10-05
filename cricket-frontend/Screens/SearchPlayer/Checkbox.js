import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

import COLORS from '../../styles/Colors'
import { checkPNG } from '../../assets/assets'

const Checkbox = ({ checked }) => {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				borderWidth: 1.5,
				borderColor: checked ? COLORS.hunter : COLORS.primary,
				width: 18,
				height: 18,
				margin: 10,
				// backgroundColor: checked ? COLORS.hunter : 'transparent',
			}}
		>
			{checked && <Image source={checkPNG} style={{ width: 18, height: 18 }} />}
		</View>
	)
}

export default Checkbox

const styles = StyleSheet.create({
	container: {},
})
