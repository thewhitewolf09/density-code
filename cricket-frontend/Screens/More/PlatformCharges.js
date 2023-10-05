import {
	Dimensions,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import screenUtils from '../../constants/Dimensions'
import { Platform_charges } from '../../assets/assets'
import HunterBoldText from '../../components/UI/HunterBoldText'
import HunterText from '../../components/UI/HunterText'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const PlatformCharges = () => {
	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				{/* Header View */}

				<WalletHeader title={'Pool Games'} noWallet={true} />
				<View>
					<View style={{}}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
							}}
						>
							<Image
								source={Platform_charges}
								style={{ width: 225, height: 145 }}
							/>
						</View>
						<View
							style={{
								margin: sWidth / 20,
								elevation: 10,
								backgroundColor: 'white',
								width: '90%',
								paddingHorizontal: 30,
								paddingVertical: 10,
								borderRadius: 12,
							}}
						>
							<View>
								<HunterBoldText>Deposit Fees</HunterBoldText>
								<HunterText>
									Free. There are no fees for crypto deposits.
								</HunterText>
							</View>
						</View>
						<View
							style={{
								margin: sWidth / 20,
								elevation: 10,
								backgroundColor: 'white',
								width: '90%',
								padding: 10,
								borderRadius: 12,
							}}
						>
							<View>
								<HunterBoldText>Trading Fees</HunterBoldText>
								<HunterText>
									To pay your trading fees, each trade will carry a standard fee
									of 0.25%.
								</HunterText>
							</View>
						</View>
						<View
							style={{
								margin: sWidth / 20,
								elevation: 10,
								backgroundColor: 'white',
								width: '90%',
								padding: 10,
								borderRadius: 12,
							}}
						>
							<View>
								<HunterBoldText>Withdrawal Fees</HunterBoldText>
								<HunterText>
									Our withdrawal fees are dynamic and automatically adjusted
									based on the status of the market. For current withdrawal
									fees, please refer to the Fee Schedule.
								</HunterText>
							</View>
						</View>
					</View>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default PlatformCharges

const styles = StyleSheet.create({})
