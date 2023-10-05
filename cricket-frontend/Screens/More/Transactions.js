import {
	Dimensions,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native'
import React, { useEffect, useState, FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import Colors from '../../styles/Colors'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import PortfolioCard from '../Portfolio/PortfolioCard'
import { arrowDownwardIos, viratKohli } from '../../assets/assets'
import TransactionCard from './components/TransactionCard'
import HunterBoldText from '../../components/UI/HunterBoldText'
import { ScrollView } from 'react-native-gesture-handler'
import { getTransaction } from './apiFunction'
// import DropDownPicker from 'react-native-dropdown-picker'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import DepositsCard from './components/DepositsCard'
// import { Icon } from 'react-native-elements'
// import DropDownItem from 'react-native-drop-down-item'
import TransactionDropdown from './components/TransactionDropdown'
import { useSelector } from 'react-redux'
import { PENDING_ORDER } from '../../socket/URI'
import { RefreshControl } from 'react-native'
import BatLoader from '../../components/UI/Loader/BatLoader'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const Transactions = () => {
	const [typeIndex, setTypeIndex] = useState(0)
	const [tradesData, setTradesData] = useState([])
	const [withdrawData, setWithdrawData] = useState([])
	const [depositsData, setDepositsData] = useState([])
	const types = ['Deposits', 'Trades', 'Withdraw']
	const [pendingOrder, setPendingOrder] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const userId = useSelector((state) => state.user.value)
	const pendingOrderSocket = new WebSocket(PENDING_ORDER.url + userId)
	useEffect(() => {
		pendingOrderSocket.onmessage = (event) => {
			if (pendingOrder !== JSON.parse(event.data))
				setPendingOrder(JSON.parse(event.data))
		}
	}, [])

	useEffect(() => {
		callApi()
	}, [])

	const callApi = () => {
		setIsLoading(true)
		getTransaction(userId)
			.then((response) => {
				console.log('trades', response.data.trades)
				setIsLoading(false)
				setTradesData(
					response.data.trades.sort((a, b) => {
						return new Date(b.time) - new Date(a.time)
					}),
				)

				setWithdrawData(
					response.data.exchanges.filter((item) => {
						return item.type == 'Withdraw'
					}),
				)
				setDepositsData(
					response.data.exchanges.filter((item) => {
						return item.type == 'Deposit'
					}),
				)
			})
			.catch((e) => {
				console.log(e)
			})
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.4, 0.6, 0.8]}
				style={{ height: '100%' }}
				colors={['#6D48FF', '#6D48FF80', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader title={'Transactions'} noWallet={true} />
				<View
					style={{
						width: sWidth,
						borderWidth: 1,
						borderColor: Colors.white,
						borderTopLeftRadius: 17,
						borderTopRightRadius: 17,
						backgroundColor: Colors.whiteHalf,
						flex: 1,
					}}
				>
					<View
						style={{
							width: sWidth,
							flexDirection: 'row',
							justifyContent: 'center',
							paddingVertical: 10,
						}}
					>
						{types.map((type, index) => (
							<FilterButton
								onPress={() => setTypeIndex(index)}
								active={index === typeIndex}
								key={index}
								style={{
									paddingHorizontal: sWidth / 20,
									paddingVertical: sHeight / 75,
									borderTopLeftRadius: index == 0 ? 8 : 0,
									borderBottomLeftRadius: index == 0 ? 8 : 0,
									borderTopRightRadius: index == 2 ? 8 : 0,
									borderBottomRightRadius: index == 2 ? 8 : 0,
								}}
								title={type}
							/>
						))}
					</View>
					{/* <View> */}
					{isLoading && <BatLoader size={screenUtils.width / 2} />}
					{typeIndex === 0 && !isLoading ? (
						<ScrollView
							style={{ flex: 1 }}
							refreshControl={
								<RefreshControl refreshing={isLoading} onRefresh={callApi} />
							}
						>
							<View
								style={{
									width: sWidth,
									paddingLeft: sWidth / 40,
									paddingTop: sHeight / 35,
								}}
							>
								<HunterBoldText>PROCESSED</HunterBoldText>
								{depositsData.map((item, index) => {
									return (
										<View key={index}>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'+'}
											/>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'+'}
											/>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'+'}
											/>
										</View>
									)
								})}
							</View>
						</ScrollView>
					) : null}

					{typeIndex === 1 && (
						<ScrollView
							style={{ flex: 1 }}
							refreshControl={
								<RefreshControl refreshing={isLoading} onRefresh={callApi} />
							}
						>
							<View>
								<HunterBoldText
									style={{ marginHorizontal: screenUtils.width / 20 }}
								>
									PROCESSED
								</HunterBoldText>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'center',
									}}
								>
									<View style={{}}>
										{tradesData.map((item, index) => {
											return (
												<TransactionCard
													key={index}
													name={item.player_name}
													position={item.player_type}
													fiatAmount={item.fiat_amount}
													type={item.type}
													status={item.status}
													quantity={item.stock_amount}
													time={item.time}
													imageUrl={item.player_image_url}
												/>
											)
										})}
									</View>
								</View>
							</View>
						</ScrollView>
					)}
					{typeIndex === 2 && (
						<ScrollView
							style={{ flex: 1 }}
							refreshControl={
								<RefreshControl refreshing={isLoading} onRefresh={callApi} />
							}
						>
							<View
								style={{
									width: sWidth,
									paddingLeft: sWidth / 40,
									paddingTop: sHeight / 35,
								}}
							>
								<HunterBoldText>PROCESSED</HunterBoldText>
								{withdrawData.map((item, index) => {
									return (
										<View key={index}>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'-'}
											/>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'-'}
											/>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'-'}
											/>
										</View>
									)
								})}

								<HunterBoldText>YESTERDAY</HunterBoldText>

								{withdrawData.map((item, index) => {
									return (
										<View key={index}>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'-'}
											/>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'-'}
											/>
											<TransactionDropdown
												amount={item.amount}
												message={item.message}
												sign={'-'}
											/>
										</View>
									)
								})}
							</View>
						</ScrollView>
					)}
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default Transactions

const styles = StyleSheet.create({})
