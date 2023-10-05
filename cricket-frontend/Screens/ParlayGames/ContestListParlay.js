import {
	Dimensions,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
import BackArrow from '../../assets/Images/Svg/BackArrow'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import HunterText from '../../components/UI/HunterText'
import WalletHeader from '../../components/UI/WalletHeader'
import { useNavigation } from '@react-navigation/native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import SortByBottomSheet from './components/SortByBottomSheet'
import FilterBottomSheet from './components/FilterBottomSheet'
import Cross from '../../assets/Images/Svg/Cross'
import { getParlayContestList } from './apiFunctions'
import ContestCard from '../../components/UI/ContestCard'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import timeTillStart from '../../helpers/timeTillStartHelper'
import { setSelectedContest } from '../../redux/features/PoolGameSlices/contestSlice'
import { useDispatch } from 'react-redux'

const ContestListParlay = (props) => {
	const playersArray = ['A', 'A', 'A', 'A']
	const navigation = useNavigation()
	const matchId = props.route.params.matchId
	const teamA = props.route.params.teamA
	const teamB = props.route.params.teamB
	const startTime = props.route.params.startTime
	const setParlayContestCount = props.route.params.setParlayContestCount

	const [entryPrice, setEntryPrice] = useState(-1)
	const [slot, setSlot] = useState(-1)
	const [sortByOption, setSortByOption] = useState(-1)

	// bottom sheet for sorting contest
	const [sortby, setSortBy] = useState(false)
	const sheetRefForSortBy = useRef(null)
	const snapPointsForSortBy = [340]
	const [contestList, setContestList] = useState(null)
	const handlesortbybottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForSortBy?.current.snapToIndex(index)
			setSortBy(true)
		} else if (index === -1) {
			sheetRefForSortBy.current.close()
			setSortBy(false)
		}
	}, [])

	// Filter Function
	useEffect(() => {
		let a = contestList?.filter((contest) => {
			// for filtering contests according to entry_fee
			if (entryPrice === 0) {
				contest.entry_fee >= 1 && contest.entry_fee <= 50
			} else if (entryPrice === 1) {
				contest.entry_fee >= 51 && contest.entry_fee <= 100
			} else if (entryPrice === 2) {
				contest.entry_fee >= 101 && contest.entry_fee <= 1000
			} else if (entryPrice === 3) {
				contest.entry_fee >= 1001
			}

			// for filtering contests according to slots
			if (slot === 0) {
				contest.pool_size >= 1 && contest.pool_size <= 10000
			} else if (slot === 1) {
				contest.pool_size >= 10001 && contest.pool_size <= 100000
			} else if (slot === 2) {
				contest.pool_size >= 100001 && contest.pool_size <= 1000000
			} else if (slot === 3) {
				contest.pool_size >= 1000001 && contest.pool_size <= 2500000
			} else if (slot === 4) {
				contest.pool_size >= 2500000
			}
		})
		setContestList(a)
	}, [entryPrice, slot])

	// Sort Function
	useEffect(() => {
		let y = contestList?.sort(
			(a, b) => parseFloat(b.entry_fee) - parseFloat(a.entry_fee),
		)
		let m = contestList?.sort(
			(a, b) => parseFloat(b.pool_size) - parseFloat(a.pool_size),
		)
		if (sortByOption == 0) setContestList(y)
		else if (sortByOption == 1) setContestList(y.reverse())
		else if (sortByOption == 2) setContestList(m)
		else if (sortByOption == 3) setContestList(m.reverse())
	}, [sortByOption])

	// bottom sheet for sorting contest
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
		getParlayContestList(matchId)
			.then((response) => {
				//console.log(response.data)
				setContestList(response.data)
				setParlayContestCount(response.data.length)
			})
			.catch((err) => {
				console.log('err', err)
			})
	}, [])

	const dispatch = useDispatch()
	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				{/* Header View */}
				<WalletHeader />
				{/* team A vs Team b  View */}
				<View
					style={{
						borderWidth: 1,
						borderColor: 'white',
						borderRadius: 20,
						backgroundColor: 'rgba(255, 255, 255, 0.4)',
					}}
				>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							paddingRight: width * 0.04,
						}}
					>
						<View style={styles.searchdiv}>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-evenly',
									alignItems: 'center',
									width: screenUtils.width / 1.5,
								}}
							>
								<HunterSemiBoldText
									style={{
										fontSize: screenUtils.width / 24,
										marginRight: 5,
										flexShrink: 1,
										textAlign: 'left',
									}}
								>
									{teamA}
								</HunterSemiBoldText>
								<HunterText
									style={{
										fontSize: screenUtils.width / 24,
									}}
								>
									vs
								</HunterText>
								<HunterSemiBoldText
									style={{
										fontSize: screenUtils.width / 24,
										marginLeft: 5,
										flexShrink: 1,
										textAlign: 'right',
									}}
								>
									{teamB}
								</HunterSemiBoldText>
							</View>
						</View>
						<View style={styles.MatchRemainTime}>
							<Text
								style={{ fontSize: 9, fontWeight: '500', color: '#737373' }}
							>
								{timeTillStart(startTime).result}
							</Text>
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
						</Pressable>
					</View>

					<ScrollView style={{ height: height / 1.3 }}>
						{/* Player List View */}
						<View
							style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}
						>
							{contestList &&
								contestList.map((contest) => {
									return (
										<Pressable
											onPress={() => {
												navigation.navigate('ContestDetails', {
													contestId: contest.id,
													//prizeDistributionId: contest.prize_distribution_id,
													// that should be change according to parlay contest
													prizeDistributionId:
														'4dc6dbd0-68d1-400c-aae8-8bc29f60bdf7',
												})
												dispatch(
													setSelectedContest({
														contestId: contest.id,
														entryFee: contest.entry_fee,
														poolSize: contest.pool_size,
														participantCount: contest.no_of_partcipants,
														startTime: startTime,
														contestType: 'Parlay',
													}),
												)
											}}
											key={contest.id}
										>
											<ContestCard
												poolSize={contest.pool_size}
												entryFee={contest.entry_fee}
												firstPrize={contest.first_prize_ammount}
												// totalWinPercentage={
												// 	contest.total_people_winning / contest.pool_size
												// }
												totalWinPercentage="80"
												participantCount={contest.no_of_partcipants}
											/>
										</Pressable>
									)
								})}
						</View>
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
						<SortByBottomSheet setSortByOption={setSortByOption} />
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
							entryprice={entryPrice}
							slot={slot}
							setEntryPrice={setEntryPrice}
							setSlot={setSlot}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default ContestListParlay

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
		marginVertical: 7,
		//   marginHorizontal: 15,
		flexDirection: 'row',
		//   backgroundColor: "white",
		//   borderRadius: 10,
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
