import { StyleSheet, View } from 'react-native'
import React from 'react'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import appColors from '../../../styles/Colors'
import CardGradient from '../../../components/UI/CardGradient'
import screenUtils from '../../../constants/Dimensions'

const EstimationCard = ({ quantity, isBuy }) => {
	return (
		<View>
			<CardGradient style={styles.container}>
				<View>
					<HunterSemiBoldText style={{ fontSize: 24, textAlign: 'center' }}>
						{isBuy ? '2' : '₹2,400'}
					</HunterSemiBoldText>
					<HunterSemiBoldText
						style={{
							color: appColors.secondaryDark,
							fontSize: 12,
							textAlign: 'center',
						}}
					>
						Estimated {isBuy ? 'Quantity' : 'Amount'}
					</HunterSemiBoldText>
				</View>
			</CardGradient>
		</View>
	)
}

export default EstimationCard

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#5f40dd4a',
		borderRadius: 12,
		paddingVertical: 14,
		marginVertical: screenUtils.height / 85,
	},
})
