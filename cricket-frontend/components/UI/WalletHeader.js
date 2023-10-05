import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React from 'react'
import HunterText from '../UI/HunterText'
import HunterSemiBoldText from '../UI/HunterSemiBoldText'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import { useNavigation } from '@react-navigation/native'
import { accountBalanceWallet } from '../../assets/assets'
import { useSelector } from 'react-redux'
import screenUtils from '../../constants/Dimensions'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const WalletHeader = ({ onBack, noWallet, noarrow, title }) => {
	const sWidth = Dimensions.get('window').width
	const sHeight = Dimensions.get('window').height
	const navigation = useNavigation()
	const walletBalance = useSelector(
		(state) => state.portfolio.value.wallet_balance,
	)

	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'row',
				marginHorizontal: sWidth / 23.5,
				marginVertical: sHeight / 48,
			}}
		>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					style={{
						alignSelf: 'center',
						// marginRight: 16,
						paddingHorizontal: noarrow ? 0 : sWidth / 20,
						paddingVertical: sHeight / 80,
					}}
					onPress={() => navigation.goBack()}
				>
					{!noarrow ? <BackArrow color={'white'} /> : null}
				</TouchableOpacity>

				{title ? (
					<HunterSemiBoldText
						style={{
							color: 'white',
							alignSelf: 'center',
							textAlignVertical: 'center',
							fontSize: 20,
						}}
					>
						{title}
					</HunterSemiBoldText>
				) : (
					<HunterSemiBoldText
						style={{
							color: 'white',
							alignSelf: 'center',
							textAlignVertical: 'center',
							fontSize: 20,
							letterSpacing: sWidth / 40,
						}}
					>
						HUNTER
					</HunterSemiBoldText>
				)}
			</View>

			{!noWallet ? (
				<Pressable
					onPress={() => {
						navigation.navigate('AddMoney')
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: '#FFFFFF80',
							justifyContent: 'space-between',
							padding: 10,
							borderRadius: 10,
						}}
					>
						<View>
							<Image
								style={{
									width: screenUtils.width / 22.2,
									height: screenUtils.width / 22.2,
									margin: 2,
								}}
								source={accountBalanceWallet}
							/>
						</View>

						<HunterText
							style={{
								color: '#0B0617',
								textAlignVertical: 'center',
								marginHorizontal: 5,
							}}
						>
							₹{parseFloat(walletBalance).toFixed(2)}
						</HunterText>
					</View>
				</Pressable>
			) : null}
		</View>
	)
}

export default WalletHeader

const styles = StyleSheet.create({})
