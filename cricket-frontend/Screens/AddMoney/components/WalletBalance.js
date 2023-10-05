import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../../styles/Colors'
import HunterText from '../../../components/UI/HunterText'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolioData } from '../../PoolGames/apiFunctions'
import { setPorfolioData } from '../../../redux/features/Portfolio/portfolioSlice'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const WalletBalance = () => {
	const [isLoading, setIsLoading] = useState(false)
	const userDetails = useSelector((state) => state.user.value)
	const [walletBalance, setWalletBalance] = useState(0)
	const dispatch = useDispatch()
	console.log(userDetails)
	// Fetching Players Data from API
	const callApi = () => {
		let userObj = {
			user_id: userDetails,
		}
		setIsLoading(true)
		getPortfolioData(JSON.stringify(userObj))
			.then((res) => {
				setIsLoading(false)
				dispatch(setPorfolioData(res.data))
				setWalletBalance(res.data.wallet_balance)
				// console.log(res.data)
			})
			.catch((err) => console.log(err))
	}
	useEffect(() => {
		callApi()
	}, [])

	return (
		<View style={styles.walletContainer}>
			<View style={styles.balanceHolder}>
				<View
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
					}}
				>
					<View style={{ top: sHeight / 85, paddingHorizontal: 10 }}>
						<Text
							style={{
								color: 'rgba(31,29,41, 0.6)',
								fontSize: 12,
								fontWeight: '400',
								// letterSpacing : 10
							}}
						>
							W A L L E T {'  '} B A L A N C E
						</Text>
						<HunterText
							style={{
								fontSize: 36,
								fontFamily: 'hunterSemiBold',
							}}
						>
							₹{walletBalance.toFixed(6)}
						</HunterText>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
						<Pressable
							style={{
								alignSelf: 'flex-start',
								paddingVertical: 15,
								paddingLeft: 15,
							}}
						>
							<LinearGradient
								start={{ x: 0.0, y: 0.0 }}
								end={{ x: 0.5, y: 1.0 }}
								locations={[0, 1]}
								colors={['rgba(11, 6, 23, 0.51)', 'rgba(11, 6, 23, 1)']}
								style={{
									width: '100%',
									paddingVertical: sHeight / 90,
									// marginVertical: sHeight / 55,
									borderRadius: 36,
									borderWidth: 2,
									alignSelf: 'flex-end',
								}}
							>
								<HunterText
									style={{
										color: 'white',
										textAlign: 'center',
										fontSize: 12,
										fontWeight: '400',
										paddingHorizontal: 20,
										lineHeight: 18,
									}}
								>
									Withdraw
								</HunterText>
							</LinearGradient>
						</Pressable>
						<Pressable
							// onPress={console.log(portfolioData)}
							style={{
								alignSelf: 'flex-start',
								padding: 15,
							}}
						>
							<View
								style={{
									width: '100%',
									paddingVertical: sHeight / 90,
									// marginVertical: sHeight / 55,
									borderRadius: 36,
									borderWidth: 2,
									alignSelf: 'flex-end',
								}}
							>
								<HunterText
									style={{
										color: '#000',
										textAlign: 'center',
										fontSize: 12,
										fontWeight: '400',
										paddingHorizontal: 20,
										lineHeight: 18,
									}}
								>
									View transaction{' '}
								</HunterText>
							</View>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	)
}

export default WalletBalance

const styles = StyleSheet.create({
	walletContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	balanceHolder: {
		backgroundColor: 'white',
		color: Colors.primary,
		width: '90%',
		padding: 10,
		borderRadius: 20,
		borderColor: 'black',
		zIndex: 1,
		elevation: 10,
	},
})
