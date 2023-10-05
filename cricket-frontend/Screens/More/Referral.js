import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	SafeAreaView,
	ScrollView,
	Pressable,
} from 'react-native'
import React, { useState } from 'react'

import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import HunterText from '../../components/UI/HunterText'
import appColors from '../../styles/Colors'
import { ReferralWallet, contentCopy } from '../../assets/assets'

import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Clipboard from '@react-native-clipboard/clipboard'

const Referral = () => {
	const [referalCode, setReferalCode] = useState('code')
	const copyToClipboard = () => {
		Clipboard.setString('This is your referal code.')
	}
	return (
		<SafeAreaView dtyle={{ flex: 1 }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<View
					style={{
						margin: 20,
						backgroundColor: appColors.whiteHalf,
						borderRadius: 12,
						padding: 16,
						alignItems: 'center',
					}}
				>
					<HunterSemiBoldText>Referral Status</HunterSemiBoldText>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItem: 'center',
						}}
					>
						<View style={{ alignItems: 'center' }}>
							<View
								style={{
									borderWidth: 1,
									width: 32,
									height: 32,
									borderRadius: 48,
									alignItems: 'center',
									justifyContent: 'center',
									borderColor: appColors.white,
									backgroundColor: appColors.hunter,
									elevation: 10,
								}}
							>
								<HunterText>1</HunterText>
							</View>
							<HunterText style={{ fontSize: 10 }}>Invite Friends</HunterText>
						</View>
						<View
							style={{
								width: 110,
								borderWidth: 1,
								height: 1,
								borderColor: appColors.hunter,
								marginVertical: 16,
								marginLeft: -30,
								marginRight: -52,
							}}
						></View>
						<View style={{ alignItems: 'center' }}>
							<View
								style={{
									borderWidth: 1,
									width: 32,
									height: 32,
									borderRadius: 48,
									alignItems: 'center',
									justifyContent: 'center',
									borderColor: appColors.white,
									backgroundColor: appColors.whiteHalf,
									elevation: 10,
								}}
							>
								<HunterText>2</HunterText>
							</View>
							<HunterText style={{ fontSize: 10 }}>
								Friend Joined and Plays
							</HunterText>
						</View>
						<View
							style={{
								width: 110,
								borderWidth: 1,
								height: 1,
								borderColor: appColors.white,
								marginVertical: 16,
								marginLeft: -52,
								marginRight: -20,
							}}
						></View>
						<View style={{ alignItems: 'center' }}>
							<View
								style={{
									borderWidth: 1,
									width: 32,
									height: 32,
									borderRadius: 48,
									alignItems: 'center',
									justifyContent: 'center',
									borderColor: appColors.white,
									backgroundColor: appColors.whiteHalf,
									elevation: 10,
								}}
							>
								<HunterText>3</HunterText>
							</View>
							<HunterText style={{ fontSize: 10 }}>Earn Cash</HunterText>
						</View>
					</View>
				</View>
				<View
					style={{
						// borderWidth: 1,
						margin: 10,
						borderRadius: 18,
						padding: 20,
						backgroundColor: appColors.whiteHalf,
					}}
				>
					<Image source={ReferralWallet} />
					<View
						style={{
							alignItem: 'center',
							backgroundColor: appColors.white,
							// borderWidth: 1,
							borderRadius: 18,
							padding: 20,
						}}
					>
						<HunterSemiBoldText>
							Here's Your your referral link
						</HunterSemiBoldText>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: 10,
								// borderWidth: 1,
								backgroundColor: appColors.secondaryDark,
								borderRadius: 18,
								padding: 14,
							}}
						>
							<HunterText>{referalCode}</HunterText>
							<TouchableOpacity
								style={{
									// borderWidth: 1,
									paddingHorizontal: 10,
									borderRadius: 36,
									alignItems: 'center',
									backgroundColor: appColors.primary,
									flexDirection: 'row',
								}}
								onPress={copyToClipboard}
							>
								<Image source={contentCopy} style={{ marginHorizontal: 5 }} />
								<HunterText style={{ color: appColors.white }}>
									Copy Link
								</HunterText>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default Referral

const styles = StyleSheet.create({})
