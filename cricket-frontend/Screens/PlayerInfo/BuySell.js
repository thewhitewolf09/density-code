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

import HunterGradient from '../../components/UI/Gradient'
import HunterText from '../../components/UI/HunterText'
import PlayerInfoCard from '../PlayerInfo/components/PlayerInfoCard'
import SwipeButton from 'rn-swipe-button'
import Cross from '../../assets/Images/Svg/Cross'
import Failed from '../../assets/Images/Svg/Failed'
import AutoBuySet from './AutoBuySet'
import AutoSellSet from './AutoSellSet'
import AutoPurchaseExecution from './AutoPurchaseExecution'
import WalletHeader from '../../components/UI/WalletHeader'
import AmountField from '../../components/UI/InputFields/AmountField'
import appColors from '../../styles/Colors'
import InsufficientBalance from './components/InsufficientBalance'
import HunterBoldText from '../../components/UI/HunterBoldText'
import { createOrder, getPortfolioData, getReturnAmount } from './apiFunction'
import { useSelector } from 'react-redux'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import CardGradient from '../../components/UI/CardGradient'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const BuySell = (props) => {
	const [orderSuccessfull, setOrderSuccessfull] = useState(false)
	const [portfolioData, setPortfolioData] = useState([])
	const [OrderedData, setorderedData] = useState('')
	const userDetails = useSelector((state) => state.user.value)
	const player = props.route.params.Player
	const [sellData, setSellData] = useState()
	// Fetching Players Data from API
	useEffect(() => {
		const getPortfolioObject = {
			user_id: userDetails,
		}

		getPortfolioData(JSON.stringify(getPortfolioObject))
			.then((response) => {
				setPortfolioData(response.data)
				let tempPlayerHoldings = response.data.players.find(
					(p) => p.player_id === player.id,
				)
				console.log(tempPlayerHoldings)
				setSellData(tempPlayerHoldings.stock_amount)
			})
			.catch((error) => console.log('###portfolio', error))
	}, [])
	const [isBuy, setIsBuy] = useState(true)

	// portfolioData.balance_of >
	// player.player_stock.price * (amountBuy / player.player_stock.price).toFixed(0)
	// 	? setIsInsufficient(false)
	// 	: setIsInsufficient(true)
	const [swipeColor, setSwipeColor] = useState('black')

	// to set auto buy set state
	// if stocks are insufficient to buy  setAutoBuy = 1
	const [autoBuy, setAutoBuy] = useState(0)

	// to set auto sell set state
	// if stocks are insufficient to sell setAutoSell = 1
	const [autoSell, setAutoSell] = useState(0)

	//isBuy == false ? setAutoSell(1) : setAutoSell(0)
	// transaction state
	// it come after purchase of stock failed and it will suggest to set on auto purchase
	const [transaction, setTransaction] = useState(0)

	// for auto purchase execution
	const [autoPurchase, setAutoPurchase] = useState(0)

	// for buy purchase autoBuySellPurchase = 0 and sell purchase autoBuySellPurchase = 1
	const [autoBuySellPurchase, setAutoBuySellPurchase] = useState(0)
	const [amountBuy, setAmountBuy] = useState(0)
	const [amountSell, setAmountSell] = useState(0)

	const [estimatedQuantity, setEstimatedQuantity] = useState(0)
	const [estimatedAmount, setEstimatedAmount] = useState(0)

	const navigation = useNavigation()
	const transactionProcessed = () => {
		// condition for buying stocks
		isBuy ? setAutoBuy(1) : setAutoSell(1)
		!isBuy ? setAutoBuy(0) : setAutoSell(0)
		setSwipeColor('white')

		const orderObject = {
			user_id: userDetails,
			type: isBuy ? 'buy' : 'sell',
			amount: isBuy
				? parseFloat(amountBuy)
				: parseFloat(amountSell * sellData * 0.01),
			token_id: player.blockchain_token_id,
		}
		console.log(orderObject)
		createOrder(JSON.stringify(orderObject))
			.then((response) => {
				console.log('$$$', response.data)
				setorderedData(response.data)
			})
			.catch((e) => {
				console.log(orderObject)

				console.log(e)
			})
	}
	const [isInsufficient, setIsInsufficient] = useState(false)
	useEffect(() => {
		let isApiSubscribed = true
		portfolioData.wallet_balance < amountBuy
			? setIsInsufficient(true)
			: setIsInsufficient(false)

		let type = isBuy ? 'buy' : 'sell'
		let fiat_amount = parseFloat(amountBuy == '' ? 0 : amountBuy)
		let token_id = parseInt(player.blockchain_token_id)
		if (amountBuy >= 0) {
			getReturnAmount(type, fiat_amount, token_id)
				.then((response) => {
					console.log(response.data)
					if (isApiSubscribed) setEstimatedQuantity(response.data.stock_amount)
				})
				.catch((error) => console.log('###', error))
		}

		return () => {
			isApiSubscribed = false
		}
	}, [amountBuy])

	useEffect(() => {
		let isApiSubscribed = true

		let type = isBuy ? 'buy' : 'sell'
		let stock_amount = parseFloat(amountSell * sellData * 0.01)
		let token_id = parseInt(player.blockchain_token_id)
		if (amountSell <= 100) {
			getReturnAmount(type, stock_amount, token_id)
				.then((response) => {
					console.log(response.data)
					if (isApiSubscribed) setEstimatedAmount(response.data.fiat_amount)
				})
				.catch((error) => console.log('###', error))
		}

		return () => {
			isApiSubscribed = false
		}
	}, [amountSell])

	return (
		<SafeAreaView style={{ height: '99%' }}>
			<ScrollView>
				<HunterGradient>
					<WalletHeader />
					<PlayerInfoCard
						player={player}
						onPress={() => navigation.navigate('PlayerInfo')}
					/>
					<View style={styles.buySellContainer}>
						<View
							intensity={10}
							style={{
								flexDirection: 'row',
								backgroundColor: '#FFFFFF52',
								borderRadius: 14,
							}}
						>
							<Pressable onPress={() => setIsBuy(true)}>
								<HunterText
									style={[styles.buySellButton, isBuy && styles.buySellActive]}
								>
									{' '}
									Buy
								</HunterText>
							</Pressable>
							{sellData && (
								<Pressable
									onPress={() => {
										setIsBuy(false)
										setIsInsufficient(false)
									}}
								>
									<HunterText
										style={[
											styles.buySellButton,
											!isBuy && styles.buySellActive,
										]}
									>
										Sell
									</HunterText>
								</Pressable>
							)}
						</View>
					</View>
					<View
						style={{
							padding: sWidth / 20,
							backgroundColor: appColors.white,
						}}
					>
						{isBuy ? (
							<AmountField
								isBuy={isBuy}
								title={'Buying Amount'}
								addOptions={['₹25', '₹50', '₹100', '₹500']}
								value={amountBuy}
								setValue={setAmountBuy}
								unit={'₹'}
							/>
						) : (
							<>
								<View style={{ flexDirection: 'row' }}>
									<HunterSemiBoldText>Current Holding:</HunterSemiBoldText>
									<HunterSemiBoldText
										style={{
											color: amountSell > 100 ? 'red' : 'black',
											marginHorizontal: 4,
										}}
									>
										{sellData?.toFixed(6)}
									</HunterSemiBoldText>
								</View>

								<AmountField
									isBuy={isBuy}
									title={'Selling Quantity'}
									addOptions={['10%', '25%', '50%']}
									value={amountSell}
									setValue={setAmountSell}
									unit={'%'}
								/>
							</>
						)}
						<View>
							<CardGradient style={styles.container}>
								<View>
									<HunterSemiBoldText
										style={{ fontSize: 24, textAlign: 'center' }}
									>
										{isBuy
											? estimatedQuantity.toFixed(2)
											: estimatedAmount.toFixed(2)}
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
					</View>
				</HunterGradient>
			</ScrollView>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					backgroundColor: '#FFFFFF',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					elevation: 40,
					width: '100%',
				}}
			>
				{isInsufficient && (
					<InsufficientBalance
						wallet_balance={portfolioData.wallet_balance}
						isBuy={isBuy}
					/>
				)}
				{isBuy ? (
					<View
						style={{
							paddingHorizontal: 25,
							paddingVertical: 20,
							width: '100%',
						}}
					>
						<HunterText style={{ fontSize: 16, lineHeight: 24 }}>
							Total Order Value
						</HunterText>
						<HunterBoldText style={{ fontSize: 20, lineHeight: 30 }}>
							{parseFloat(amountBuy).toFixed(2)}
						</HunterBoldText>
						<HunterText style={{ fontSize: 16, color: '#8A8A8A', top: 10 }}>
							Wallet Balance{' '}
							<HunterBoldText>{portfolioData.wallet_balance}</HunterBoldText>
						</HunterText>
						<HunterText style={{ fontSize: 12, color: '#A6A6A6', top: 10 }}>
							Total order value includes 0.5% Fees{' '}
							<HunterBoldText>ⓘ</HunterBoldText>
						</HunterText>
						<HunterText style={{ fontSize: 12, color: '#A6A6A6', top: 10 }}>
							Expected Price Impact = 5% <HunterBoldText>ⓘ</HunterBoldText>
						</HunterText>
					</View>
				) : (
					<View
						style={{
							paddingHorizontal: 25,
							paddingVertical: 30,
							width: '100%',
						}}
					>
						<HunterText style={{ fontSize: 16, lineHeight: 24 }}>
							Total Order Value
						</HunterText>
						<HunterBoldText style={{ fontSize: 20, lineHeight: 30 }}>
							{isBuy ? OrderedData.amount : estimatedAmount}
						</HunterBoldText>
						<HunterText style={{ fontSize: 16, color: '#8A8A8A', top: 10 }}>
							Stocks remaining{' '}
							{isBuy
								? OrderedData.amount
								: ((1 - amountSell * 0.01) * sellData).toFixed(6)}
							<HunterBoldText>{portfolioData.stock_amount}</HunterBoldText>
						</HunterText>
						<HunterText style={{ fontSize: 12, color: '#A6A6A6', top: 10 }}>
							Total order value includes 0.5% Fees and 1% TDS{' '}
							<HunterBoldText>ⓘ</HunterBoldText>
						</HunterText>
					</View>
				)}

				<SwipeButton
					disabled={
						(!isBuy && amountSell > 100) ||
						(isBuy && (isInsufficient || amountBuy == 0))
					}
					swipeSuccessThreshold={60}
					height={60}
					width={'90%'}
					title={isBuy ? 'Swipe to Buy' : 'Swipe to Sell'}
					titleStyles={{
						fontFamily: 'hunter',
						color: swipeColor,
						zIndex: 1,
					}}
					containerStyles={{
						borderRadius: 12,
						marginHorizontal: sWidth / 20,
						width: '100%',
					}}
					railFillBackgroundColor="#6D48FF" //(Optional)
					railFillBorderColor="#6D48FF" //(Optional)
					thumbIconBackgroundColor="#6D48FF" //(Optional)
					thumbIconBorderColor="#6D48FF" //(Optional)
					onSwipeSuccess={() => {
						portfolioData.wallet_balance >
						(player?.player_stock.price + 0.5) *
							(amountBuy / (player?.player_stock.price + 0.5)).toFixed(2)
							? transactionProcessed()
							: null
					}}
					railBackgroundColor="white" //(Optional)
					railBorderColor={'lightgray'} //(Optional)
					thumbIconComponent={() => (
						<HunterText style={{ color: 'white' }}> {'❯❯'}</HunterText>
					)}
					thumbIconStyles={{
						borderRadius: 12,
					}}
					railStyles={{
						borderRadius: 12,
					}}
					shouldResetAfterSuccess={true}
				/>
			</View>

			{/* for auto buy window */}
			<View
				style={
					autoBuy === 0
						? styles.autoBuy_background_container_0
						: styles.autoBuy_background_container_100
				}
			>
				<View style={styles.autoBuy_container}>
					<View style={styles.autoBuy_heading_container}>
						{transaction === 0 ? (
							<HunterSemiBoldText
								style={[
									styles.autoBuy_heading,
									{
										color: 'green',
									},
								]}
							>
								Order Placed!
							</HunterSemiBoldText>
						) : null}
						<Pressable
							style={styles.autoBuy_heading}
							onPress={() => {
								setAutoBuy(0)
								setTransaction(0)
							}}
						>
							<Cross />
						</Pressable>
					</View>
					<AutoBuySet
						transaction={transaction}
						setTransaction={setTransaction}
						setAutoBuy={setAutoBuy}
						setSwipeColor={setSwipeColor}
					/>
				</View>
			</View>

			{/* for auto sell window */}
			<View
				style={
					autoSell === 0
						? styles.autoBuy_background_container_0
						: styles.autoBuy_background_container_100
				}
			>
				<View style={styles.autoBuy_container}>
					<View style={styles.autoBuy_heading_container}>
						{transaction === 0 ? (
							<HunterText
								style={[
									styles.autoBuy_heading,
									{
										color: 'green',
									},
								]}
							>
								Order Placed!
							</HunterText>
						) : null}
						<Pressable
							style={styles.autoBuy_heading}
							onPress={() => {
								setAutoSell(0)
								setTransaction(0)
							}}
						>
							<Cross />
						</Pressable>
					</View>
					<AutoSellSet
						transaction={transaction}
						setTransaction={setTransaction}
						setAutoSell={setAutoSell}
						setSwipeColor={setSwipeColor}
					/>
				</View>
			</View>

			{/* for auto purchase window */}
			<View
				style={
					autoPurchase === 0
						? styles.autoBuy_background_container_0
						: styles.autoBuy_background_container_100
				}
			>
				<View style={styles.autoBuy_container}>
					<View style={styles.autoBuy_heading_container}>
						{autoBuySellPurchase === 0 ? (
							<HunterText style={styles.autoBuy_heading}>
								Auto Buy executed!
							</HunterText>
						) : (
							<HunterText style={styles.autoBuy_heading}>
								Auto Sell executed!
							</HunterText>
						)}
						<Pressable
							style={styles.autoBuy_heading}
							onPress={() => {
								setAutoPurchase(0)
							}}
						>
							<Cross />
						</Pressable>
					</View>
					<AutoPurchaseExecution
						autoBuySellPurchase={autoBuySellPurchase}
						setAutoBuySellPurchase={setAutoBuySellPurchase}
						autoPurchase={autoPurchase}
						setAutoPurchase={setAutoPurchase}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default BuySell

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
		lineHeight: 30,
	},
})
