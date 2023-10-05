import {
	Dimensions,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

//   import PlayerCard from "./PlayerCard";
import HunterText from '../../components/UI/HunterText'
//   import FilterBottomModalSheets from "./FilterBottomModalSheets";
//   import Cross from "..//../assets/Images/Svg/Cross";
//   import SortBottomModalSheets from "./SortBottomModalSheets";
import WalletHeader from '../../components/UI/WalletHeader'
import { useNavigation } from '@react-navigation/native'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import SortByBottomSheet from './components/SortByBottomSheet'
import FilterBottomSheet from './components/FilterBottomSheet'
import Cross from '../../assets/Images/Svg/Cross'
import { getContestById, getContestList } from './apiFunctions'
import ContestCard from '../../components/UI/ContestCard'
import { useDispatch, useSelector } from 'react-redux'
import timeTillStart from '../../helpers/timeTillStartHelper'
import { setSelectedContest } from '../../redux/features/PoolGameSlices/contestSlice'
import { filterAlt, loadingBat } from '../../assets/assets'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import { setContestListOfMatch } from '../../redux/features/PoolGameSlices/contestListOfMatchSlice'
import AnimatedLottieView from 'lottie-react-native'
import shortName from '../../helpers/shortNameHelper'
import TimeProgressBar from '../../components/UI/TimeProgressBar'

const ContestListPool = (props) => {
	const playersArray = ['A', 'A', 'A', 'A']
	const navigation = useNavigation()
	const id = props.route.params.matchId
	const type = props.route.params.type
	const [sortby, setSortBy] = useState(false)
	const sheetRefForSortBy = useRef(null)
	const snapPointsForSortBy = [340]
	const [contestList, setContestList] = useState([])
	const [allContestList, setAllContestList] = useState([])
	const dispatch = useDispatch()
	const handlesortbybottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForSortBy?.current.snapToIndex(index)
			setSortBy(true)
		} else if (index === -1) {
			sheetRefForSortBy.current.close()
			setSortBy(false)
		}
	}, [])
	const [isLoading, setIsLoading] = useState(false)

	const userId = useSelector((state) => state.user.value)
	useEffect(() => {
		setIsLoading(true)
		if (!type) {
			getContestList(id)
				.then((response) => {
					setContestList(response.data)
					setAllContestList(response.data)
					setIsLoading(false)
				})
				.catch((err) => {
					console.log('err', err.data)
				})
		} else {
			getContestById(userId, id)
				.then((response) => {
					console.log(response.data)
					setContestList(response.data)
					setIsLoading(false)
				})
				.catch((err) => {
					console.log('err', err.data)
				})
		}
	}, [])
	const [filter, setFilter] = useState(false)
	const sheetRefForFilter = useRef(null)
	const snapPointsForFilter = [450]
	const handlefilterbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForFilter?.current.snapToIndex(index)
			setFilter(true)
		} else if (index === -1) {
			sheetRefForFilter.current.close()
			setFilter(false)
		}
	}, [])

	useEffect(() => {
		getContestList(id)
			.then((response) => {
				console.log(response.data)
				setContestList(response.data)
			})
			.catch((err) => {
				console.log('err', err.data)
			})
	}, [])

	const matchDetails = useSelector((state) => state.currentMatch.value)
	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<View
					style={{
						borderWidth: 2,
						borderColor: 'white',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						backgroundColor: 'rgba(255, 255, 255, 0.4)',
						borderBottomWidth: 0,
					}}
				>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View style={styles.searchdiv}>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									width: screenUtils.width / 1.5,
								}}
							>
								<HunterSemiBoldText
									style={{
										fontSize: screenUtils.width / 20,
										marginHorizontal: 10,
										// flexShrink: 1,
									}}
								>
									{shortName(matchDetails.teamA)}
								</HunterSemiBoldText>
								<HunterText
									style={{
										fontSize: screenUtils.width / 20,
									}}
								>
									v
								</HunterText>
								<HunterSemiBoldText
									style={{
										fontSize: screenUtils.width / 20,
										marginHorizontal: 10,
									}}
								>
									{shortName(matchDetails.teamB)}
								</HunterSemiBoldText>
							</View>
						</View>
						<View style={styles.MatchRemainTime}>
							<HunterText
								style={{ fontSize: 9, fontWeight: '500', color: '#737373' }}
							>
								{timeTillStart(matchDetails.startTime).result}
							</HunterText>
							<TimeProgressBar
								startTime={matchDetails.startTime}
								timeOfMatchEntry={24 * 60 * 60}
							/>
						</View>
					</View>

					{/* Sorting and Searching View */}

					<View style={styles.sorch}>
						<Pressable
							style={styles.sort}
							onPress={() => handlesortbybottomsheet(0)}
						>
							<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
								<HunterText style={{ fontWeight: '500' }}>Sort by</HunterText>
							</View>
							<MaterialIcons name="sort" color="black" size={20} />
						</Pressable>

						<Pressable
							style={styles.filter}
							onPress={() => handlefilterbottomsheet(0)}
						>
							<HunterText>Filter</HunterText>
							<Image source={filterAlt} style={{ height: 16, width: 16 }} />
						</Pressable>
					</View>

					<ScrollView style={{ height: height / 1.35 }}>
						{/* Player List View */}
						{isLoading ? (
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
						) : (
							<View
								style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}
							>
								{contestList &&
									contestList.map((contest) => (
										<Pressable
											onPress={() => {
												navigation.navigate('ContestDetails', {
													contestId: contest.id,
													prizeDistributionId: contest.prize_distribution_id,
												})
												dispatch(
													setSelectedContest({
														contestId: contest.id,
														entryFee: contest.entry_fee,
														poolSize: contest.pool_size,
														participantCount: contest.participant_count,
														startTime: matchDetails.startTime,
													}),
												)
											}}
											key={contest.id}
										>
											<ContestCard
												poolSize={contest.pool_size}
												entryFee={contest.entry_fee}
												firstPrize={
													(contest.first_prize *
														contest.pool_size *
														contest.entry_fee) /
													100
												}
												totalWinPercentage={
													contest.total_people_winning / contest.pool_size
												}
												participantCount={contest.participant_count}
											/>
										</Pressable>
									))}
							</View>
						)}
					</ScrollView>
				</View>
			</LinearGradient>

			{/* bottom sheet for sort by entry price and pool */}

			<TouchableOpacity
				onPress={() => setSortBy(false)}
				activeOpacity={1}
				style={
					!sortby
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForSortBy}
					snapPoints={snapPointsForSortBy}
					enablePanDownToClose={true}
					onClose={() => handlesortbybottomsheet(-1)}
				>
					<BottomSheetView>
						<View style={styles.sortby_heading_container}>
							<Text style={styles.sortby_heading}>Sort by</Text>
						</View>
						<SortByBottomSheet
							contestList={contestList}
							setContestList={setContestList}
							sheetRef={sheetRefForSortBy}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>

			{/* bottom sheet for filter by entry price ,teams and pools */}

			<TouchableOpacity
				onPress={() => setFilter(false)}
				activeOpacity={1}
				style={
					!filter
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForFilter}
					snapPoints={snapPointsForFilter}
					enablePanDownToClose={true}
					onClose={() => handlefilterbottomsheet(-1)}
				>
					<BottomSheetView>
						<View style={styles.sortby_heading_container}>
							<Text style={styles.sortby_heading}>Filter</Text>
							<TouchableOpacity
								style={styles.sortby_heading}
								onPress={() => handlefilterbottomsheet(-1)}
							>
								<Cross />
							</TouchableOpacity>
						</View>
						<FilterBottomSheet
							allContestList={allContestList}
							setContestList={setContestList}
							sheetRef={sheetRefForFilter}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default ContestListPool

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
		padding: width * 0.03,
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
		marginBottom: 8,
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
		paddingHorizontal: 5,
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
	MatchRemainTime: {
		// borderColor: "yellow",
		// borderWidth: 2,
		// marginTop: -16,
		backgroundColor: 'white',
		borderRadius: 32,
		padding: 5,
		elevation: 4,
		height: 28,
		width: 73,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
