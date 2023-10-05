import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	SafeAreaView,
	ScrollView,
} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import HunterText from '../../components/UI/HunterText'
import appColors from '../../styles/Colors'
import { LinearGradient } from 'expo-linear-gradient'

import WalletHeader from '../../components/UI/WalletHeader'
import { CryptoBenefitImage, EasyTransactions } from '../../assets/assets'

const CryptoBenefits = () => {
	return (
		<SafeAreaView style={{}}>
			<ScrollView>
				<LinearGradient
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					locations={[0, 0.2, 0.5, 0.6]}
					colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
				>
					<WalletHeader />
					<View
						style={{
							// borderWidth: 2,
							margin: 0.05 * width,
							paddingHorizontal: width * 0.05,
							paddingVertical: 0.025 * height,
							borderRadius: 12,
                            backgroundColor: appColors.whiteHalf,
						}}
					>
						<HunterSemiBoldText style={{ fontSize: 14 }}>
							What is Crypto?
						</HunterSemiBoldText>
						<HunterText style={{ fontSize: 12 }}>
							A cryptocurrency, crypto-currency, or crypto is a digital currency
							designed to work as a medium of exchange through a computer
							network that is not reliant on any central authority, such as a
							government or bank, to uphold or maintain it.
						</HunterText>
						<View style={{ alignItems: 'center' }}>
							<Image source={CryptoBenefitImage} />
						</View>
					</View>
					<View
						style={{
							// borderWidth: 2,
							margin: 0.05 * width,
							paddingHorizontal: width * 0.05,
							paddingVertical: 0.025 * height,
							borderRadius: 12,
                            backgroundColor: appColors.whiteHalf,
						}}
					>
						<HunterSemiBoldText>Its Benefits</HunterSemiBoldText>
						<View
							style={{
								paddingVertical: height * 0.0125,
								paddingHorizontal: width * 0.025,
								// borderWidth: 1,
								borderRadius: 6,
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: appColors.white,
								marginVertical: 0.0125 * height,
							}}
						>
							<Image style={{ margin: 9 }} source={EasyTransactions} />
							<HunterText>Easy Transactions</HunterText>
						</View>
						<View
							style={{
								paddingVertical: height * 0.0125,
								paddingHorizontal: width * 0.025,
								// borderWidth: 1,
								borderRadius: 6,
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: appColors.white,
								marginVertical: 0.0125 * height,
							}}
						>
							<Image style={{ margin: 9 }} source={EasyTransactions} />
							<HunterText>Relatively Secure</HunterText>
						</View>
						<View
							style={{
								paddingVertical: height * 0.0125,
								paddingHorizontal: width * 0.025,
								// borderWidth: 1,
								borderRadius: 6,
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: appColors.white,
								marginVertical: 0.0125 * height,
							}}
						>
							<Image style={{ margin: 9 }} source={EasyTransactions} />
							<HunterText>Short Settlement Times and Low Fees</HunterText>
						</View>
						<View
							style={{
								paddingVertical: height * 0.0125,
								paddingHorizontal: width * 0.025,
								// borderWidth: 1,
								borderRadius: 6,
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: appColors.white,
								marginVertical: 0.0125 * height,
							}}
						>
							<Image style={{ margin: 9 }} source={EasyTransactions} />
							<HunterText>Exponential Indusrty Growth</HunterText>
						</View>
						<View
							style={{
								paddingVertical: height * 0.0125,
								paddingHorizontal: width * 0.025,
								// borderWidth: 1,
								borderRadius: 6,
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: appColors.white,
								marginVertical: 0.0125 * height,
							}}
						>
							<Image style={{ margin: 9 }} source={EasyTransactions} />
							<HunterText>Posibility of Outsized Returns</HunterText>
						</View>
						<View
							style={{
								paddingVertical: height * 0.0125,
								paddingHorizontal: width * 0.025,
								// borderWidth: 1,
								borderRadius: 6,
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: appColors.white,
								marginVertical: 0.0125 * height,
							}}
						>
							<Image style={{ margin: 9 }} source={EasyTransactions} />
							<HunterText>Potential Inflation Hedge</HunterText>
						</View>
					</View>
				</LinearGradient>
			</ScrollView>
		</SafeAreaView>
	)
}

export default CryptoBenefits

const styles = StyleSheet.create({})
