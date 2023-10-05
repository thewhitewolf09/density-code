import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import { React, useRef, useState, useEffect } from 'react'
import HunterGradient from '../../components/UI/Gradient'
import { ScrollView } from 'react-native-gesture-handler'
import Statistics from '../../Screens/PlayerInfo/components/Statistics'
import PerformanceTrend from './components/PerformanceTrend'
import WalletHeader from '../../components/UI/WalletHeader'
import PlayerInfoCard from './components/PlayerInfoCard'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'
import appColors from '../../styles/Colors'
import screenUtils from '../../constants/Dimensions'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import StockPrice from '../../components/UI/Charts/StockPrice'
import { useNavigation } from '@react-navigation/native'
import { getPriceHistory, getPlayerById } from './apiFunction'
import { useSelector } from 'react-redux'
import AnimatedLottieView from 'lottie-react-native'
import { loadingBat } from '../../assets/assets'
import BatLoader from '../../components/UI/Loader/BatLoader'
// import gradient from 'chartjs-plugin-gradient'

// import BasicExample from "./components/ani";
const PlayerInfo = (props) => {
	const [player, setPlayer] = useState([])
	const playerId = props.route.params.playerId
	// Fetching player data from player id
	useEffect(() => {
		setIsLoading(true)
		getPlayerById(playerId)
			.then((res) => {
				setPlayer(res.data)
				// Need to confirm this code
				setIsLoading(false)
				// console.log(res.data)
			})
			.catch((err) => console.log(err))
	}, [])

	const sWidth = Dimensions.get('window').width
	const sHeight = Dimensions.get('window').height
	const navigation = useNavigation()
	const setDataRef = useRef()
	const filters = ['1 day', '1 week', '1 month', '3 months']
	const [selectedTimeIndex, setSelectedTimeIndex] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const [priceHistoryLoading, setPriceHistoryLoading] = useState(false)
	const tempdata = [
		12.2, 19.32, 3.51, 5.256, 2.214, 3.2, 2.142, 1.36, 15.2, 6.9,
	]
	let newData = [12, 19, 3, 5, 2, 3, 2, 1, 15, 6]
	let width, height, gradient
	const [priceHistory, setPriceHistory] = useState()
	useEffect(() => {
		// console.log(player)
		setPriceHistoryLoading(true)
		getPriceHistory(playerId, selectedTimeIndex)
			.then((res) => {
				setPriceHistory(res.data.price)
				setPriceHistoryLoading(true)
				console.log(res.data.price.length)
			})
			.catch((err) => console.log(err))
	}, [selectedTimeIndex])
	useEffect(() => {
		if (priceHistory) {
			let nums = priceHistory.map((point) =>
				parseFloat(point.last_traded_price),
			)
			nums = nums.slice(0, 10)
			setDataRef.current.setData([nums])
		}
	}, [priceHistory])
	// setInterval(() => {
	// 	newData.shift()
	// 	newData.push((Math.random() + 1) * 10)
	// 	setDataRef.current.setData([newData])
	// }, 1000)
	function getGradient(ctx, chartArea) {
		const chartWidth = chartArea.right - chartArea.left
		const chartHeight = chartArea.bottom - chartArea.top
		if (gradient === null || width !== chartWidth || height !== chartHeight) {
			// Create the gradient because this is either the first render
			// or the size of the chart has changed
			width = chartWidth
			height = chartHeight
			gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
			gradient.addColorStop(0, '#6D48FF')
			gradient.addColorStop(0.3, '#f09bc066')
			gradient.addColorStop(0.6, '#724cfe33')
			gradient.addColorStop(1, '#6e49ff00')
		}

		return gradient
	}
	const chartConfig = {
		// chart config here

		type: 'line',
		data: {
			labels: ['d', 'd', 'd', '', '', '', '', '', '', ''],
			datasets: [
				{
					gradient: {
						backgroundColor: {
							axis: 'y',
							colors: {
								0: 'red',
								50: 'yellow',
								100: 'green',
							},
						},
					},
					label: 'Stock price',
					data: tempdata,
					borderWidth: 2,
					borderColor: appColors.hunter,
					fill: true,
					cubicInterpolationMode: 'monotone',
					tension: 0.4,
					backgroundColor: '#6D48FF33',
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					titleFontColor: appColors.hunter,
					callbacks: {
						title: (item) => 'Rs' + item,
						label: (item) => 'Rs' + item,
					},
				},
			},
			scales: {
				x: {
					display: false,
				},
			},
		},
		plugins: {
			gradient,
		},
	}

	return (
		<>
			<ScrollView style={{ marginBottom: sHeight / 8.5 }}>
				<HunterGradient>
					<WalletHeader />
					{!isLoading ? (
						<PlayerInfoCard
							player={player}
							onPress={() => navigation.navigate('PlayerList')}
						/>
					) : (
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<AnimatedLottieView
								source={loadingBat}
								style={{ height: 100, width: 100 }}
								autoPlay
								loop
							/>
						</View>
					)}
					<View
						style={{
							marginHorizontal: sWidth / 25,
							marginVertical: screenUtils.height / 80,
							backgroundColor: appColors.white,
							paddingVertical: 10,
						}}
					>
						<StockPrice config={chartConfig} ref={setDataRef} />
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
						>
							{filters.map((type, index) => (
								<FilterButton
									onPress={() => setSelectedTimeIndex(index)}
									active={index === selectedTimeIndex}
									key={index}
									title={type}
								/>
							))}
						</View>
					</View>
					<PerformanceTrend type={'batting'} />
					<PerformanceTrend isBowl={true} type={'bowling'} />
					<Statistics Player={player} />
				</HunterGradient>
			</ScrollView>
			<FooterButtons
				leftVisible={true}
				leftTitle={'Sell'}
				rightTitle={'Buy'}
				checked={true}
				leftPress={() => navigation.navigate('BuySell', { Player: player })}
				rightPress={() => navigation.navigate('BuySell', { Player: player })}
				// leftVisible={false}
				// checked={true}
			/>
		</>
	)
}

export default PlayerInfo

const styles = StyleSheet.create({})
