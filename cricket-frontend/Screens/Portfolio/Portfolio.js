import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	Image,
	ScrollView,
	Pressable,
	FlatList,
	TouchableOpacity,
} from 'react-native'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import SwitchButton from '../../components/UI/Buttons/SwitchButton'
import appColors from '../../styles/Colors'
import Lottie from 'lottie-react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// import Data from "./data";

import PortfolioCard from './PortfolioCard'
import HunterText from '../../components/UI/HunterText'
import HunterBoldText from '../../components/UI/HunterBoldText'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import FilterBottomModalSheets from '../SearchPlayer/FilterBottomModalSheets'
import Cross from '..//../assets/Images/Svg/Cross'
import SortBottomModalSheets from '../SearchPlayer/SortBottomModalSheets'
import WalletHeader from '../../components/UI/WalletHeader'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { getPlayerStatistics } from '../SearchPlayer/apiFunctions'
import screenUtils from '../../constants/Dimensions'
import { useDispatch, useSelector } from 'react-redux'
import AnimatedLottieView from 'lottie-react-native'
import { loadingBat } from '../../assets/assets'
import { setMarketPlaceSelectedPlayer } from '../../redux/features/MarketPlaceSlice/marketplaceSlice'
import { getPortfolioData } from '../PlayerInfo/apiFunction'
import { setPorfolioData } from '../../redux/features/Portfolio/portfolioSlice'
import { RefreshControl } from 'react-native'
import BatLoader from '../../components/UI/Loader/BatLoader'
import { isLoading } from 'expo-font'
const Portfolio = () => {
	const playersArray = ['A', 'A', 'A', 'A']
	const [playerData, setPlayerData] = useState([])
	const [loader, setloader] = useState(false)
	const navigation = useNavigation()

	//to set filter state
	const [filter, setFilter] = useState(false)
	const sheetRefForFilter = useRef(null)
	const snapPointsForFilter = [540]
	const handlefilterbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForFilter.current?.snapToIndex(index)
			setFilter(true)
		} else if (index === -1) {
			sheetRefForFilter.current.close()
			setFilter(false)
		}
	}, [])

	// putting dummy port folio to use in map

	// const portfolioDetails = useSelector((state) => state.portfolio.value)
	const [portfolioDetails, setPortfolioDetails] = useState()
	const userDetails = useSelector((state) => state.user.value)

	useEffect(() => {
		callApi()
	}, [])
	const callApi = () => {
		let userObj = {
			user_id: userDetails,
		}
		setloader(true)
		getPortfolioData(JSON.stringify(userObj))
			.then((res) => {
				dispatch(setPorfolioData(res.data))
				setloader(false)
				setPortfolioDetails(res.data)
				// console.log(res.data)
			})
			.catch((err) => console.log(err))
	}
	//to set sort state
	const [sort, setSort] = useState(false)
	const sheetRefForSort = useRef(null)
	const snapPointsForSort = [510]
	const handlesortbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForSort.current?.snapToIndex(index)
			setSort(true)
		} else if (index === -1) {
			sheetRefForSort.current.close()
			setSort(false)
		}
	}, [])

	const dispatch = useDispatch()

	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
				style={{ height: '100%' }}
			>
				{/* Header View */}
				<WalletHeader title={'Portfolio'} />
				{/* <View style={styles.searchdiv}>
					<AntDesign name="search1" size={30} color="black" />
					<TextInput style={styles.searching} placeholder="Search" />
				</View> */}
				{/* Search View */}

				{/* Sorting and Searching View */}

				<View
					style={{
						borderWidth: 3,
						backgroundColor: 'rgba(255, 255, 255, 0.8)',
						borderColor: appColors.white,
						marginHorizontal: screenUtils.width / 20,
						borderRadius: 20,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
						}}
					>
						<View
							style={{
								flex: 1,
								paddingVertical: screenUtils.height / 56,
								paddingHorizontal: screenUtils.width / 20,
							}}
						>
							<HunterText style={{ fontWeight: '400', fontSize: 12 }}>
								Invested
							</HunterText>
							<HunterSemiBoldText style={{ fontWeight: '500', fontSize: 16 }}>
								{portfolioDetails?.invested_amount}
							</HunterSemiBoldText>
						</View>
						<View
							style={{
								flex: 1,
								paddingVertical: 15,
								paddingHorizontal: 25,
								justifyContent: 'center',
							}}
						>
							<HunterText
								style={{
									fontWeight: '400',
									fontSize: 12,
								}}
							>
								Current
							</HunterText>
							<HunterSemiBoldText style={{ fontSize: 16 }}>
								{portfolioDetails?.current_amount}
							</HunterSemiBoldText>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: appColors.white,
							borderRadius: 20,
							paddingHorizontal: 10,
							paddingVertical: 8,
							// elevation: 10,
							alignItems: 'center',
							marginBottom: -2,
						}}
					>
						<View style={{ flex: 1, paddingHorizontal: 10 }}>
							<HunterText
								style={{ fontSize: 12, fontWeight: '400', color: '#737373' }}
							>
								P and L
							</HunterText>
						</View>
						<View
							style={{
								flexDirection: 'row',
								flex: 1,
								alignItems: 'center',
								paddingHorizontal: 15,
								justifyContent: 'center',
							}}
						>
							<View style={{ flex: 1 }}>
								<HunterSemiBoldText
									style={{
										fontSize: 12,
										// marginHorizontal: 20,
										color: 'green',
									}}
								>
									+
									{(
										portfolioDetails?.current_amount -
										portfolioDetails?.invested_amount
									).toFixed(2)}
									₹
								</HunterSemiBoldText>
							</View>
							<View style={{ flex: 1 }}>
								<HunterText
									style={{ fontSize: 10, fontWeight: '400', color: 'green' }}
								>
									{(
										((portfolioDetails?.current_amount -
											portfolioDetails?.invested_amount) /
											portfolioDetails?.current_amount) *
										100
									).toFixed(2)}
									%
								</HunterText>
							</View>
						</View>
					</View>
				</View>

				{/* Player List View */}
				{!loader ? (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							flex: 1,
							marginBottom: screenUtils.height / 13.2,
						}}
					>
						<View
							style={{
								flexWrap: 'wrap',
							}}
						>
							<FlatList
								refreshControl={
									<RefreshControl refreshing={loader} onRefresh={callApi} />
								}
								numColumns={2}
								data={portfolioDetails?.players}
								renderItem={({ item, index }) => (
									<Pressable
										onPress={() => {
											dispatch(setMarketPlaceSelectedPlayer(item))
											navigation.navigate('PlayerInfo', {
												playerId: item.player_id,
											})
										}}
										key={index}
									>
										<PortfolioCard
											name={item?.name}
											position={item?.type}
											nationality={item?.nationality}
											ipl_team={item?.ipl_team}
											imageURL={item?.image_url}
											player_stock={item?.player_stock}
											stock_amount={item?.stock_amount}
										/>
									</Pressable>
								)}
							/>
						</View>
					</View>
				) : (
					<BatLoader size={screenUtils.width / 1.5} />
				)}
			</LinearGradient>

			{/* for filter window  */}
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => {
					setFilter(false)
				}}
				style={
					!filter
						? styles.filter_background_container_0
						: styles.filter_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForFilter}
					snapPoints={snapPointsForFilter}
					enablePanDownToClose={true}
					onClose={() => handlefilterbottomsheet(-1)}
				>
					<BottomSheetView>
						<View style={styles.filter_heading_container}>
							<Text style={styles.filter_heading}>Filter</Text>
							<TouchableOpacity
								style={styles.filter_heading}
								onPress={() => {
									handlefilterbottomsheet(-1)
								}}
							>
								<Cross />
							</TouchableOpacity>
						</View>
						<FilterBottomModalSheets />
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>

			{/* for sort window */}
			<TouchableOpacity
				onPress={() => setSort(false)}
				activeOpacity={1}
				style={
					!sort
						? styles.sort_background_container_0
						: styles.sort_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForSort}
					snapPoints={snapPointsForSort}
					enablePanDownToClose={true}
					onClose={() => handlesortbottomsheet(-1)}
				>
					<BottomSheetView>
						<View style={styles.sort_heading_container}>
							<Text style={styles.sort_heading}>Sort by</Text>
							<TouchableOpacity
								style={styles.sort_heading}
								onPress={() => handlesortbottomsheet(-1)}
							>
								<Cross />
							</TouchableOpacity>
						</View>
						<SortBottomModalSheets />
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default Portfolio

const styles = StyleSheet.create({
	upperContainer: {
		borderBottomLeftRadius: 32,
		borderBottomRightRadius: 32,
	},
	playerhead: {
		flexDirection: 'row',
		height: 0.11 * height,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	hunter: {
		flex: 5,
		fontSize: 40,
		fontWeight: '400',
		letterSpacing: 2.9,
		paddingTop: 0.02 * height,
	},
	wallet: {
		display: 'flex',
		flex: 1,
		flexDirecton: 'row',
		backgroundColor: 'lightgray',
		marginRight: 0.02 * width,
		marginTop: 0.02 * height,
	},
	wallettext: {
		// flexDirection: "row",
	},
	searchdiv: {
		marginBottom: 15,
		marginHorizontal: 15,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 10,
		alignItems: 'center',
		paddingHorizontal: width * 0.03,
	},
	searching: {
		padding: height * 0.01,
		borderRadius: 10,
		width: 0.8 * width,
	},
	sorch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sort: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 5,
		height: 0.05 * height,
		marginHorizontal: width * 0.04,
		backgroundColor: 'white',
		paddingHorizontal: width * 0.1,
	},
	filter: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// width: 0.3*width,
		height: 0.05 * height,
		borderRadius: 5,
		marginHorizontal: width * 0.04,
		paddingHorizontal: width * 0.03,
		backgroundColor: 'white',
	},

	filter_background_container_0: {
		display: 'none',
	},

	filter_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},

	filter_container: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		height: 500,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	filter_heading_container: {
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
	filter_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},

	sort_background_container_0: {
		display: 'none',
	},

	sort_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	sort_container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 433,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	sort_heading_container: {
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
	sort_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
})
