import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { loadingBat } from '../../../assets/assets'

const BatLoader = ({ size }) => {
	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AnimatedLottieView
				source={loadingBat}
				style={{ height: size, width: size }}
				autoPlay
				loop
			/>
		</View>
	)
}

export default BatLoader

const styles = StyleSheet.create({})
