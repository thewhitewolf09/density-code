import {
	Dimensions,
	ScrollView,
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Pressable,
	Image,
} from 'react-native'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import PlayerTypeScroll from './../Home/components/PlayerTypeScroll'
import PlayerCard from './../Home/components/PlayerCard'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import LeaderBoard from '../../Screens/Home/LeaderBoard'
import IplLeaderBoard from '../../Screens/Home/IplLeaderBoard'
import HomeCards from './../Home/components/HomeCards'
import StocksLiquidatedSuccess from '../PoolGames/StocksLiquidatedSuccess'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import screenUtils from '../../constants/Dimensions'
import { useDispatch, useSelector } from 'react-redux'
import HunterBoldText from '../../components/UI/HunterBoldText'
import { getTop10Players } from './apiFunction'
import { getRisingStars } from './apiFunction'
import { getHitMans } from './apiFunction'
import { getBuyOnDip } from './apiFunction'
import { getallrounder } from './apiFunction'
import { loadingBat, viratKohli } from '../../assets/assets'
import RcbFlag from '../../assets/Images/Svg/RcbFlag'
import IndiaFlag from '../../assets/Images/Svg/IndiaFlag'
import { BlurView } from 'expo-blur'
import HunterText from '../../components/UI/HunterText'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import { getPortfolioData } from '../PlayerInfo/apiFunction'
import { setPorfolioData } from '../../redux/features/Portfolio/portfolioSlice'
import AnimatedLottieView from 'lottie-react-native'

const sHeight = Dimensions.get('window').height
const sWidth = Dimensions.get('window').width
const Home = () => {
	const navigation = useNavigation()
	const SLIDER_WIDTH = Dimensions.get('window').width
	const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)
	const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4)
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)
	const [index, setIndex] = useState(0)
	const [btnIndex, setBtnIndex] = useState(0)
	const isCarousel = useRef(null)

	// bottom sheet for contest joined message
	// const [liquidateSuccess, setLiquidateSuccess] = useState(true)
	// const sheetRefForLiquidateSuccess = useRef(null)
	// useEffect(() => {
	// 	if (liquidateSuccess === true) {
	// 		handleliquidateSuccessbottomsheet(0)
	// 	}
	// }, [])
	const userId = useSelector((state) => state.user.value)

	const snapPointsForLiquidateSuccess = [552]

	const handleliquidateSuccessbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForLiquidateSuccess?.current.snapToIndex(index)
			setLiquidateSuccess(true)
		} else if (index === -1) {
			sheetRefForLiquidateSuccess.current.close()
			setLiquidateSuccess(false)
		}
	}, [])

	const [playerList, setPlayerList] = useState([])

	useEffect(() => {
		setIsLoading(true)
		setActiveIndex(0)
		if (btnIndex == 0) {
			getTop10Players()
				.then((response) => {
					setIsLoading(false)
					setCarouselItems(response.data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
		if (btnIndex == 1) {
			getRisingStars()
				.then((response) => {
					setIsLoading(false)
					setCarouselItems(response.data)
					// console.log(response)
				})
				.catch((err) => {
					console.log(err)
				})
		}
		if (btnIndex == 2) {
			getallrounder()
				.then((response) => {
					setIsLoading(false)
					setCarouselItems(response.data)
					// console.log(response)
				})
				.catch((err) => {
					console.log(err)
				})
		}
		if (btnIndex == 3) {
			getHitMans()
				.then((response) => {
					setIsLoading(false)
					setCarouselItems(response.data)
					// console.log(response)
				})
				.catch((err) => {
					console.log(err)
				})
		}

		if (btnIndex == 4) {
			getBuyOnDip()
				.then((response) => {
					setIsLoading(false)
					setCarouselItems(response.data)
					// console.log(response)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [btnIndex])
	const userDetails = useSelector((state) => state.user.value)

	useEffect(() => {
		let userObj = {
			user_id: userDetails,
		}
		getPortfolioData(JSON.stringify(userObj))
			.then((res) => {
				dispatch(setPorfolioData(res.data))
				console.log(res.data)
			})
			.catch((err) => console.log(err))
	}, [])

	const [activeIndex, setActiveIndex] = useState(0)
	const [carouselItems, setCarouselItems] = useState([])
	const ref = useRef(null)

	const renderItem = useCallback(({ item, index }) => {
		return (
			<PlayerCard
				name={item.Name}
				CurrentPrice={item.CurrentPrice}
				PercentageIncrease={item.PercentageIncrease}
				playerImageUrl={item.PlayerPhoto}
				iplImageUrl={item.IPLTeamPhoto}
				nationalImageUrl={item.TeamPhoto}
				playerId={item.PlayerId}
			/>
		)
	}, [])

	const playerTypes = [
		'Top 10',
		'Rising star',
		'All rounder',
		'Hitman',
		'Buy on dip',
	]
	return (
		<View style={{ height: screenUtils.height / 1.04 }}>
			<ScrollView>
				<LinearGradient
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					locations={[0, 0.2, 0.5, 0.6]}
					colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
				>
					<View
					//   style={{
					//     margin: 20,
					//   }}
					>
						<WalletHeader noarrow={true} />

						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									// marginVertical: 14,
									paddingHorizontal: 10,
									//   borderWidth:1,
									//   borderColor:'black'
								}}
							>
								{playerTypes.map((playerType, index) => (
									<FilterButton
										active={index === btnIndex}
										onPress={() => {
											setBtnIndex(index)
										}}
										bgColor={'black'}
										title={playerType}
										key={playerType}
										style={{
											paddingHorizontal: screenUtils.width / 40,
											marginHorizontal: screenUtils.width / 40,
											paddingVertical: screenUtils.height / 80,
										}}
									/>
								))}
							</View>
						</ScrollView>

						{/* 
						<PlayerTypeScroll active={index == activeIndex } setBtnIndex={setBtnIndex} /> */}
						{/* {playerList.map((playerListItem)=>(	<Carousel
							layout="default"
							ref={isCarousel}
							enableMomentum={true}
							decelerationRate={0.9}
							data={players}
							renderItem={(player) => (
								<PlayerCard key={player} _firstName={player.firstName} />
							)}
							sliderWidth={SLIDER_WIDTH}
							itemWidth={ITEM_WIDTH}
							//inactiveSlideShift={10}
							onSnapToItem={(index) => setIndex(index)}
							useScrollView={true}
						/>))} */}
						{!isLoading ? (
							<>
								<Carousel
									layout="default"
									ref={ref}
									enableMomentum={true}
									decelerationRate={0.9}
									data={carouselItems}
									renderItem={renderItem}
									sliderWidth={SLIDER_WIDTH}
									itemWidth={ITEM_WIDTH}
									//inactiveSlideShift={10}
									onSnapToItem={(index) => setActiveIndex(index)}
									useScrollView={true}
								/>
								<Pagination
									dotsLength={carouselItems?.length}
									activeDotIndex={activeIndex}
									carouselRef={isCarousel}
									dotStyle={{
										width: 5,
										height: 5,
										borderRadius: 5,
										marginHorizontal: 0,
										backgroundColor: 'rgba(0, 0, 0, 0.92)',
									}}
									inactiveDotOpacity={0.4}
									inactiveDotScale={0.6}
									tappableDots={true}
								/>
							</>
						) : (
							<View
								style={{
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<AnimatedLottieView
									source={loadingBat}
									style={{
										height: screenUtils.width / 1.5,
										width: screenUtils.width / 1.5,
									}}
									autoPlay
									loop
								/>
							</View>
						)}
					</View>
					<HomeCards />
				</LinearGradient>
				{/* <LeaderBoard /> */}
				<IplLeaderBoard />
			</ScrollView>

			{/* bottom sheet for liquidate success dialog */}
			{/* <TouchableOpacity
				onPress={() => setLiquidateSuccess(false)}
				activeOpacity={1}
				style={
					!liquidateSuccess
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForLiquidateSuccess}
					snapPoints={snapPointsForLiquidateSuccess}
					enablePanDownToClose={true}
					onClose={() => handleliquidateSuccessbottomsheet(-1)}
				>
					<BottomSheetView>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								paddingLeft: 24,
								paddingBottom: 10,
								// paddingRight: 30,
								height: 50,
								borderBottomColor: '#EAE5F4',
								borderBottomWidth: 1,
							}}
						>
							<Text style={styles.sortby_heading}>
								Stocks liquidated Successfully
							</Text>
						</View>
						<StocksLiquidatedSuccess
							handleliquidateSuccessbottomsheet={
								handleliquidateSuccessbottomsheet
							}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity> */}
		</View>
	)
}

const styles = StyleSheet.create({
	sortby_background_container_0: {
		display: 'none',
	},
	sortby_background_container_100: {
		display: 'flex',
		height: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		top: 0,
		width: '100%',
	},
	sortby_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 10,
		paddingRight: 30,
		height: 60,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	sortby_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
})

export default Home
