//
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Pressable,
} from 'react-native'
import React, { useState } from 'react'

import PercentageChange from '../../../components/UI/PercentageChange'
import { useNavigation } from '@react-navigation/native'
import { image17, viratKohli } from '../../../assets/assets'
import appColors from '../../../styles/Colors'
import HunterText from '../../../components/UI/HunterText'
import HunterBoldText from '../../../components/UI/HunterBoldText'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import timeSince from '../../../helpers/timeAgoHelper'

const { width, height } = Dimensions.get('window')

const TransactionCard = ({
	name,
	position,
	fiatAmount,
	type,
	status,
	quantity,
	time,
	imageUrl,
}) => {
	if (name.length > 14) {
		name = name.substring(0, 14) + '...'
	}
	return (
		<View
			style={{
				alignItems: 'center',
				// paddingHorizontal: 10,
				width: 0.8 * width,
			}}
		>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginVertical: height * 0.011,
					// marginHorizontal: 0.03 * width,
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: 0.022 * width,
					paddingVertical: 0.007 * height,
					backgroundColor: 'white',
					borderRadius: 20,
					elevation: 10,
					width: 0.9 * width,
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View
						style={{
							backgroundColor: '#ECECEC',
							borderRadius: 20,
							marginRight: width * 0.04,
						}}
					>
						<Image
							source={{ uri: imageUrl }}
							style={{
								height: 0.11 * height,
								width: 0.2 * width,
								paddingTop: 0.01 * height,
								borderRadius: 20,
							}}
						/>
					</View>
					<View
						style={{
							// flexDirection: "column",
							justifyContent: 'center',
							lineHeight: 30,
						}}
					>
						<HunterSemiBoldText style={{ fontSize: 16, letterSpacing: 0.5 }}>
							{name}
						</HunterSemiBoldText>
						<HunterText>{position}</HunterText>
					</View>
				</View>
				<View style={{ alignItems: 'center' }}>
					<HunterSemiBoldText
						style={{ color: type == 'buy' ? '#6D48FF' : '#019453' }}
					>
						{type.toUpperCase()}(
						{status == 'pending'
							? 'PENDING'
							: quantity && parseFloat(quantity).toFixed(4)}
						)
					</HunterSemiBoldText>
					<HunterBoldText
						style={{
							fontSize: status === 'failed' ? 10 : 16,
							letterSpacing: 1,
							color: status === 'failed' ? 'red' : 'black',
						}}
					>
						{status === 'failed'
							? `FAILED ₹${parseFloat(fiatAmount)}`
							: ` ₹${parseFloat(fiatAmount).toFixed(0)}`}
					</HunterBoldText>
					<HunterText style={{ color: 'grey', fontSize: 10 }}>
						{timeSince(new Date(time))}
						{' ago'}
					</HunterText>
				</View>
			</View>
		</View>
	)
}

export default TransactionCard

const styles = StyleSheet.create({
	maindiv: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginVertical: height * 0.011,
		marginHorizontal: 0.03 * width,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 0.025 * width,
		paddingVertical: 0.01 * height,
		backgroundColor: 'white',
		borderRadius: 20,
		elevation: 10,
		width: 0.8 * width,
	},
	button: {
		backgroundColor: 'black',
		borderRadius: 30,
		paddingHorizontal: height * 0.01,
		paddingVertical: height * 0.005,
	},
	text: {
		color: 'white',
		textAlign: 'center',
		fontSize: 12,
		paddingHorizontal: width * 0.03,
	},
})
