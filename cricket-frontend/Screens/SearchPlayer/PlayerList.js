import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	ScrollView,
	Pressable,
	TouchableOpacity,
	Image,
} from 'react-native'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Checkbox from 'expo-checkbox'
import screenUtils from '../../constants/Dimensions'

import COLORS from '../../styles/Colors'
import { cancel, loadingBat } from '../../assets/assets'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import HunterText from '../../components/UI/HunterText'
import FilterBottomModalSheets from './FilterBottomModalSheets'
import Cross from '..//../assets/Images/Svg/Cross'
import SortBottomModalSheets from './SortBottomModalSheets'
import WalletHeader from '../../components/UI/WalletHeader'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { getPlayerStatistics, getMarketplaceList } from './apiFunctions'
import { vectorPNG } from '../../assets/assets'
import FilterList from './components/FilterList'
import HunterBoldText from '../../components/UI/HunterBoldText'
import AnimatedLottieView from 'lottie-react-native'
import { useDispatch } from 'react-redux'
import { setPlayerDetail } from '../../redux/features/Players/PlayerSlice'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
const PlayerList = () => {
	const dispatch = useDispatch()
	const navigation = useNavigation()
	const [loader, setloader] = useState(true)
	const [comparePlayerData, setComparePlayerData] = useState([])

	// var tempComparePlayerData = []

	const [tempComparePlayerData, setTempComparePlayerData] = useState([])

	const playersArray = ['A', 'A', 'A', 'A']

	const [playerData, setPlayerData] = useState([])
	const [oldPlayerData, setOldPlayerData] = useState([])
	const [search, setSearch] = useState('')

	const [scroller, setScroller] = useState(true)

	// const [isChecked, setIsChecked] = useState(false)

	// const [backBlue, setBlackBlue] = useState(false)

	// For filter Data
	const [nationality, setNationality] = useState([])
	const [iplTeam, setIplTeam] = useState([])
	const [playerStatus, setPlayerStatus] = useState([])
	const [capped, setCapped] = useState([])
	const [filteredBottomSheetArr, setfilteredBottomSheetArr] = useState([
		{ nationality: nationality },
		{ iplteam: iplTeam },
		{ playerStatus: playerStatus },
		{ capped: capped },
	])

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

	const callApi = () => {
		setloader(true)
		getMarketplaceList()
			.then((response) => {
				// dispatch(setPlayerDetail(response.data))
				// console.log(playerDetail)
				setPlayerData(response.data)
				setFilteredData(response.data)
				setloader(false)
			})
			.catch((error) => console.log(error))
	}
	useEffect(() => {
		callApi()
	}, [])

	const [searchField, setSearchField] = useState('')
	const [filteredData, setFilteredData] = useState('')
	const [sortByOption, setSortByOption] = useState('All')

	// const newFilteredData = filteredData.slice(0, 19)
	// console.log(newFilteredData.length)
	// Need to confirm

	useEffect(() => {}, [tempComparePlayerData])

	useEffect(() => {
		let x = playerData.filter((person) => {
			return person.name.toLowerCase().includes(searchField?.toLowerCase())
		})
		setFilteredData(x)
	}, [searchField])

	useEffect(() => {
		let a = playerData.filter((person) => {
			return (
				// nationality.includes(person.nationality) ||
				person.nationality === nationality ||
				person.type === playerStatus ||
				person.ipl_team === iplTeam
			)
		})
		setFilteredData(a)
	}, [nationality, iplTeam, playerStatus, capped])

	useEffect(() => {
		let y = playerData.sort(
			(a, b) =>
				parseFloat(
					b.ipl_no_of_runs +
						b.test_no_of_runs +
						b.odi_no_of_runs +
						b.t20_no_of_runs,
				) -
				parseFloat(
					a.ipl_no_of_runs +
						a.test_no_of_runs +
						a.odi_no_of_runs +
						a.t20_no_of_runs,
				),
		)

		if (sortByOption == 'Most Runs') setFilteredData(y)
		if (sortByOption == 'All') setFilteredData(filteredData)
	}, [sortByOption])
	// const [sortBySelectedData, setSortBySelectedData] = useState('')

	useEffect(() => {}, [tempComparePlayerData])

	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.6, 1]}
				colors={['#6D48FF', '#f09bc080', '#724cfe33', '#6e49ff00']}
				style={{ height: '100%' }}
			>
				{/* Header View */}
				<WalletHeader title={'Marketplace'} />
				<View>
					{/* Search View */}
					<View style={styles.searchdiv}>
						<AntDesign name="search1" size={30} color="black" />
						<TextInput
							style={styles.searching}
							placeholder="Search"
							onChangeText={(e) => {
								setSearchField(e)
							}}
							value={searchField}
						/>
					</View>

					{/* Sorting and Searching View */}
					<View style={styles.sorch}>
						{scroller && (
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									flex: 1,
									paddingHorizontal: screenUtils.width / 25,
								}}
							>
								<Pressable style={styles.sort} onPress={() => setSort(1)}>
									<View
										style={{ flexDirection: 'row', alignItems: 'flex-start' }}
									>
										<HunterSemiBoldText>Sort by:</HunterSemiBoldText>
										<HunterText> Trending </HunterText>
									</View>
									<MaterialIcons name="sort" color="black" size={20} />
								</Pressable>
								<Pressable
									style={styles.sort}
									onPress={() => {
										console.log('Compare Vector Pressed'), setScroller(false)
									}}
								>
									<Image source={vectorPNG} />
								</Pressable>
								<Pressable style={styles.sort} onPress={() => setFilter(1)}>
									<HunterText>Filter</HunterText>
									<Image source={filter} />
								</Pressable>
							</View>
						)}

						{!scroller && (
							<View style={styles.nsorch}>
								<Pressable
									style={styles.nsort}
									onPress={() => {
										setScroller(true)
									}}
								>
									<Image source={cancel} />
									<HunterText style={{ marginLeft: 12 }}>
										Exit Compare
									</HunterText>
								</Pressable>
								<Pressable
									style={styles.compare}
									onPress={() => {
										navigation.navigate('PlayerCompareScrollView', {
											selectedPlayers: tempComparePlayerData,
										})
									}}
								>
									<HunterText style={{ color: COLORS.white }}>
										Compare
									</HunterText>
								</Pressable>
							</View>
						)}
					</View>
				</View>
				{/* Player List View */}
				{!loader ? (
					<View
						style={{
							flex: 1,
							marginBottom: screenUtils.height / 13.1,
						}}
					>
						<FilterList
							filteredData={filteredData}
							scroller={scroller}
							tempComparePlayerData={tempComparePlayerData}
							setTempComparePlayerData={setTempComparePlayerData}
							nationality={nationality}
							callApi={callApi}
						/>
					</View>
				) : (
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<AnimatedLottieView
							source={loadingBat}
							style={{ height: 300, width: 300 }}
							autoPlay
							loop
						/>
					</View>
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
							<HunterBoldText style={styles.filter_heading}>
								Filter
							</HunterBoldText>
							<TouchableOpacity
								style={styles.filter_heading}
								onPress={() => {
									handlefilterbottomsheet(-1)
									console.log(filteredBottomSheetArr)
								}}
							>
								<Cross />
							</TouchableOpacity>
						</View>
						<FilterBottomModalSheets
							setNationality={setNationality}
							setIplTeam={setIplTeam}
							setplayerStatus={setPlayerStatus}
							setCapped={setCapped}
						/>
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
						<SortBottomModalSheets
							handlesortbottomsheet={handlesortbottomsheet}
							setSortByOption={setSortByOption}
							sortByOption={sortByOption}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default PlayerList

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
		// borderWidth: 2,
	},
	nsorch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 20,
	},

	sort: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 5,
		backgroundColor: 'white',
		padding: width * 0.02,
	},
	nsort: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: 'white',
		padding: width * 0.02,
	},
	compare: {
		backgroundColor: COLORS.primary,
		height: 0.04 * height,
		alignItem: 'center',
		justifyContent: 'center',
		borderRadius: 36,
		paddingHorizontal: 10,
	},

	filter_background_container_0: {
		display: 'none',
	},

	filter_background_container_100: {
		display: 'flex',
		height: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	filter_heading_container: {
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
	filter_heading: {
		fontSize: 20,
		lineHeight: 30,
	},

	sort_background_container_0: {
		display: 'none',
	},

	sort_background_container_100: {
		display: 'flex',
		height: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	sort_heading_container: {
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
	sort_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
})
