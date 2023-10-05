import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import HunterText from '../../components/UI/HunterText'
import CardGradient from '../../components/UI/CardGradient'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import appColors from './../../styles/Colors'
import screenUtils from './../../constants/Dimensions'
import VectorIcon from './/..//..//assets/Images/Svg/VectorIcon'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'
import { useNavigation } from '@react-navigation/native'
import AmountField from '../../components/UI/InputFields/AmountField'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const Liquidate = () => {
	const [amount, setAmount] = useState()
	const navigation = useNavigation()
	return (
		<View style={{ height: '91%' }}>
			<View style={styles.amountInfo}>
				<View>
					<Text style={{ fontWeight: '600', fontSize: 16, lineHeight: 24 }}>
						400 stocks to liquidate
					</Text>
				</View>
				<View style={{ marginTop: 30 }}>
					<AmountField
						title={'Stocks to liquidate'}
						addOptions={['%25', '%50', '%75', '%100']}
					/>
				</View>

				<View style={{ marginVertical: 25 }}>
					<View>
						<CardGradient style={styles.container}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									width: '100%',
									paddingHorizontal: 10,
								}}
							>
								<HunterSemiBoldText
									style={{ fontSize: 24, textAlign: 'center' }}
								>
									₹4,500
								</HunterSemiBoldText>
								<HunterSemiBoldText
									style={{
										color: appColors.secondaryDark,
										fontSize: 12,
										textAlign: 'center',
									}}
								>
									Estimated amount
								</HunterSemiBoldText>
							</View>
						</CardGradient>
					</View>
				</View>
			</View>
			<FooterButtons
				rightPress={() => {
					navigation.navigate('Liquidate')
				}}
				leftPress={() => {
					navigation.navigate('BottomNavigation')
				}}
				leftVisible={true}
				leftTitle={'Cancel'}
				rightTitle={'Liquidate'}
				checked={true}
			/>
		</View>
	)
}

export default Liquidate

const styles = StyleSheet.create({
	amountInfo: {
		backgroundColor: '#FFFFFF',
		padding: sWidth / 13.33,
	},
	inputHolder: {
		borderWidth: 2,
		padding: 13,
		borderRadius: 12,
		borderColor: '#EDEFF1',
		fontFamily: 'hunter',
		marginVertical: 6,
	},
	addAmount: {
		color: '#0F0B19',
		padding: 5,
		paddingHorizontal: 10,
		margin: 8,
		borderWidth: 1,
		borderColor: '#9292924d',
		borderRadius: 14,
		alignSelf: 'center',
	},
	container: {
		flexDirection: 'row',
		// justifyContent: 'center',

		borderWidth: 2,
		borderColor: '#5f40dd4a',
		borderRadius: 12,
		paddingVertical: 14,
		marginVertical: screenUtils.height / 85,
	},
})
