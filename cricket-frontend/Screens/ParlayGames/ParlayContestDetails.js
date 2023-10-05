import {
	Dimensions,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { LinearGradient } from 'expo-linear-gradient'
import HunterGradient from './Gradient'
import WalletHeader from './WalletHeader'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import HunterText from './HunterText'
import ProgressBar from './ProgressBar'
import HunterSemiBoldText from './HunterSemiBoldText'
import WinnerCard from '../../Screens/PoolGames/components/WinnerCard'
import { getPrizeDistribution } from '../../Screens/PoolGames/apiFunctions'
import { useSelector } from 'react-redux'
import timeTillStart from '../../helpers/timeTillStartHelper'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const ContestDetails = (props) => {
	const [slide, setSlide] = useState(0)
	const [isBuy, setIsBuy] = useState(true)
	const [isInsufficient, setIsInsufficient] = useState(false)
	const [swipeColor, setSwipeColor] = useState('black')

	const [autoBuy, setAutoBuy] = useState(0)
	const [autoSell, setAutoSell] = useState(0)
	const [transaction, setTransaction] = useState(0)
	const [autoPurchase, setAutoPurchase] = useState(0)
	const [autoBuySellPurchase, setAutoBuySellPurchase] = useState(0)
	const [amount, setAmount] = useState(0)
	const navigation = useNavigation()
	const id = props.route.params.prizeDistributionId
	const matchDetails = useSelector((state) => state.currentMatch.value)
	const contestDetails = useSelector((state) => state.currentContest.value)
	useEffect(() => {
		console.log(id)
		getPrizeDistribution(id)
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => console.log(err))
	}, [id])
	return (
		<SafeAreaView style={{ height: '99%' }}>
			<View>
				<HunterGradient>
					<WalletHeader />
					<View
						style={{
							borderWidth: 1,
							borderColor: 'white',
							borderRadius: 20,
							backgroundColor: 'rgba(255, 255, 255, 0.4)',
							paddingVertical: 10,
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<View style={{ paddingLeft: 10 }}>
								<View style={styles.searchdiv}>
									<Pressable
										style={{
											paddingRight: 10,
											paddingVertical: 12,
											paddingHorizontal: 12,
										}}
									>
										<BackArrow color={'black'} />
									</Pressable>
									<HunterText style={{ fontWeight: '600', fontSize: 20 }}>
										{}
									</HunterText>
									<HunterText style={{ fontWeight: '600', fontSize: 20 }}>
										{matchDetails.teamA}
										{' vs '}
									</HunterText>
									<HunterText style={{ fontWeight: '600', fontSize: 20 }}>
										{matchDetails.teamB}
									</HunterText>
								</View>
								<HunterText
									style={{
										paddingHorizontal: width * 0.03,
										fontWeight: '400',
										fontSize: 12,
										color: '#525252',
									}}
								>
									in {timeTillStart(matchDetails.startTime).result}
								</HunterText>
							</View>
							<View
								style={{
									paddingHorizontal: width * 0.03,
									paddingVertical: height * 0.005,
									backgroundColor: 'white',
									borderRadius: 16,
									justifyContent: 'center',
									marginHorizontal: width * 0.03,
								}}
							>
								<HunterText style={{ fontWeight: '400', fontSize: 10 }}>
									Prize Pool
								</HunterText>
								<HunterSemiBoldText style={{ fontSize: 16 }}>
									{contestDetails.entryFee * contestDetails.poolSize}
								</HunterSemiBoldText>
							</View>
						</View>

						<View
							style={{
								marginHorizontal: width * 0.05,
								marginVertical: height * 0.02,
							}}
						>
							<ProgressBar />
							<View style={{ display: 'flex', flexDirection: 'row' }}>
								<HunterSemiBoldText>
									{contestDetails.participantCount}/
								</HunterSemiBoldText>
								<HunterText>{contestDetails.poolSize} spots left</HunterText>
							</View>
						</View>

						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							locations={[0, 0.6]}
							colors={['rgba(1, 148, 83, 0.54)', 'rgba(1, 148, 83, 1)']}
							style={{
								borderRadius: 15,
								display: 'flex',
								alignItems: 'center',
								marginHorizontal: width * 0.03,
							}}
						>
							<Pressable
								onPress={() => navigation.navigate('ReadyToCreate')}
								style={{
									backgroundColor: 'rgba(1, 148, 83, 0.54)',
									width: '100%',
									height: 33,
									borderRadius: 15,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<HunterText
									style={{ color: 'white', fontWeight: '600', fontSize: 15 }}
								>
									Join ₹ {contestDetails.entryFee}
								</HunterText>
							</Pressable>
						</LinearGradient>
					</View>
				</HunterGradient>
				<View style={{ backgroundColor: 'white' }}>
					<View
						intensity={10}
						style={{
							flexDirection: 'row',
							backgroundColor: '#FFFFFF52',
							borderRadius: 14,
							display: 'flex',
							justifyContent: 'center',
							marginVertical: height * 0.01,
						}}
					>
						<Pressable onPress={() => setIsBuy(true)}>
							<Text
								style={[styles.buySellButton, isBuy && styles.buySellActive]}
							>
								{' '}
								Winnings
							</Text>
						</Pressable>
						<Pressable
							onPress={() => {
								setIsBuy(false)
								console.log(isBuy)
							}}
						>
							<Text
								style={[styles.buySellButton, !isBuy && styles.buySellActive]}
							>
								LeaderBoard
							</Text>
						</Pressable>
					</View>
				</View>

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingHorizontal: sWidth * 0.06,
						backgroundColor: 'white',
					}}
				>
					<HunterText>Ranks</HunterText>
					<HunterText>Winnings</HunterText>
				</View>

				<ScrollView style={{ height: sHeight * 0.5 }}>
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default ContestDetails

const styles = StyleSheet.create({
	buySellContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: sHeight / 42.5,
	},
	amountInfo: {
		backgroundColor: '#FFFFFF',
		padding: sWidth / 13.33,
	},
	buySellButton: {
		paddingVertical: sHeight / 85,
		paddingHorizontal: sWidth / 10,
	},
	buySellActive: {
		borderRadius: 14,
		backgroundColor: '#FFFFFF',
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
	autoBuy_background_container_0: {
		display: 'none',
	},

	autoBuy_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	autoBuy_container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 253,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	autoBuy_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 30,
		paddingRight: 30,
		height: 80,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	autoBuy_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
	searchdiv: {
		marginVertical: 7,
		//   marginHorizontal: 15,
		flexDirection: 'row',
		//   backgroundColor: "white",
		//   borderRadius: 10,
		alignItems: 'center',
		paddingHorizontal: width * 0.03,
	},
})
import {
	Dimensions,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import HunterGradient from '../../components/UI/Gradient'
// import AutoPurchaseExecution from './AutoPurchaseExecution'
import WalletHeader from '../../components/UI/WalletHeader'
// import AmountField from '../../components/UI/InputFields/AmountField'
// import InsufficientBalance from './components/InsufficientBalance'
// import EstimationCard from './components/EstimationCard'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import HunterText from '../../components/UI/HunterText'
import ProgressBar from '../../components/UI/ProgressBar'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import { LinearGradient } from 'expo-linear-gradient'
import WinnerCard from '../PoolGames/components/WinnerCard'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const ParlayContestDetails = () => {
	const [slide, setSlide] = useState(0)
	const [isBuy, setIsBuy] = useState(true)
	const [isInsufficient, setIsInsufficient] = useState(false)
	const [swipeColor, setSwipeColor] = useState('black')

	// to set auto buy set state
	// if stocks are insufficient to buy  setAutoBuy = 1
	const [autoBuy, setAutoBuy] = useState(0)

	// to set auto sell set state
	// if stocks are insufficient to sell setAutoSell = 1
	const [autoSell, setAutoSell] = useState(0)

	// transaction state
	// it come after purchase of stock failed and it will suggest to set on auto purchase
	const [transaction, setTransaction] = useState(0)

	// for auto purchase execution
	const [autoPurchase, setAutoPurchase] = useState(0)

	// for buy purchase autoBuySellPurchase = 0 and sell purchase autoBuySellPurchase = 1
	const [autoBuySellPurchase, setAutoBuySellPurchase] = useState(0)
	const [amount, setAmount] = useState(0)
	const navigation = useNavigation()
	return (
		<SafeAreaView style={{ height: '99%' }}>
			<View>
				<HunterGradient>
					<WalletHeader />
					<View
						style={{
							borderWidth: 1,
							borderColor: 'white',
							borderRadius: 20,
							backgroundColor: 'rgba(255, 255, 255, 0.4)',
							paddingVertical: 10,
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<View style={{ paddingLeft: 10 }}>
								<View style={styles.searchdiv}>
									<Pressable
										style={{
											paddingRight: 10,
											paddingVertical: 12,
											paddingHorizontal: 12,
											// borderWidth:2
										}}
									>
										<BackArrow color={'black'} />
									</Pressable>
									<HunterText style={{ fontWeight: '600', fontSize: 20 }}>
										IND
									</HunterText>
									<HunterText style={{ fontWeight: '600', fontSize: 20 }}>
										{' '}
										vs{' '}
									</HunterText>
									<HunterText style={{ fontWeight: '600', fontSize: 20 }}>
										PAK
									</HunterText>
								</View>
								<HunterText
									style={{
										paddingHorizontal: width * 0.03,
										fontWeight: '400',
										fontSize: 12,
										color: '#525252',
									}}
								>
									in 88h 88m
								</HunterText>
							</View>
							<View
								style={{
									paddingHorizontal: width * 0.03,
									paddingVertical: height * 0.005,
									backgroundColor: 'white',
									borderRadius: 16,
									justifyContent: 'center',
									marginHorizontal: width * 0.03,
								}}
							>
								<HunterText style={{ fontWeight: '400', fontSize: 10 }}>
									Prize Pool
								</HunterText>
								<HunterText style={{ fontWeight: '600', fontSize: 16 }}>
									rs 16 lakh
								</HunterText>
							</View>
						</View>

						<View
							style={{
								marginHorizontal: width * 0.05,
								marginVertical: height * 0.02,
							}}
						>
							<ProgressBar />
							<View style={{ display: 'flex', flexDirection: 'row' }}>
								<HunterSemiBoldText>2,88,999/</HunterSemiBoldText>
								<HunterText>6,78,999 spots left</HunterText>
							</View>
						</View>

						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							locations={[0, 0.6]}
							colors={['rgba(1, 148, 83, 0.54)', 'rgba(1, 148, 83, 1)']}
							style={{
								borderRadius: 15,
								display: 'flex',
								alignItems: 'center',
								marginHorizontal: width * 0.03,
							}}
						>
							<Pressable
								onPress={() => navigation.navigate('ReadyToCreate')}
								style={{
									backgroundColor: 'rgba(1, 148, 83, 0.54)',
									width: '100%',
									height: 33,
									borderRadius: 15,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									// borderWidth:2,
								}}
							>
								<Text
									style={{ color: 'white', fontWeight: '600', fontSize: 15 }}
								>
									join ₹ 45
								</Text>
							</Pressable>
						</LinearGradient>
					</View>
				</HunterGradient>
				<View style={{ backgroundColor: 'white' }}>
					<View
						intensity={10}
						style={{
							flexDirection: 'row',
							backgroundColor: '#FFFFFF52',
							borderRadius: 14,
							display: 'flex',
							justifyContent: 'center',
							marginVertical: height * 0.01,
						}}
					>
						<Pressable onPress={() => setIsBuy(true)}>
							<Text
								style={[styles.buySellButton, isBuy && styles.buySellActive]}
							>
								{' '}
								Winnings
							</Text>
						</Pressable>
						<Pressable
							onPress={() => {
								setIsBuy(false)
								console.log(isBuy)
							}}
						>
							<Text
								style={[styles.buySellButton, !isBuy && styles.buySellActive]}
							>
								LeaderBoard
							</Text>
						</Pressable>
					</View>
				</View>

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingHorizontal: sWidth * 0.06,
						backgroundColor: 'white',
					}}
				>
					<HunterText>Ranks</HunterText>
					<HunterText>Winnings</HunterText>
				</View>

				<ScrollView style={{ height: sHeight * 0.5 }}>
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
					<WinnerCard />
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default ParlayContestDetails

const styles = StyleSheet.create({
	buySellContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: sHeight / 42.5,
	},
	amountInfo: {
		backgroundColor: '#FFFFFF',
		padding: sWidth / 13.33,
	},
	buySellButton: {
		paddingVertical: sHeight / 85,
		paddingHorizontal: sWidth / 10,
	},
	buySellActive: {
		borderRadius: 14,
		backgroundColor: '#FFFFFF',
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
	autoBuy_background_container_0: {
		display: 'none',
	},

	autoBuy_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	autoBuy_container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 253,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	autoBuy_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 30,
		paddingRight: 30,
		height: 80,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	autoBuy_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
	searchdiv: {
		marginVertical: 7,
		//   marginHorizontal: 15,
		flexDirection: 'row',
		//   backgroundColor: "white",
		//   borderRadius: 10,
		alignItems: 'center',
		paddingHorizontal: width * 0.03,
	},
})
>>>>>>>> origin/Sumit:Screens/ParlayGames/ParlayContestDetails.js
