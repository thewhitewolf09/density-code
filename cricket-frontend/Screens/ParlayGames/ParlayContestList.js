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
import ContestCard from './components/ContestCard'
import { useNavigation } from '@react-navigation/native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import SortByBottomSheet from './components/SortByBottomSheet'
import FilterBottomSheet from './components/FilterBottomSheet'
import Cross from '../../assets/Images/Svg/Cross'
import { getContestList } from './apiFunctions'

const ParlayContestList = (props) => {
	const playersArray = ['A', 'A', 'A', 'A']
	const navigation = useNavigation()
	const id = props.route.params.matchId
	const [sortby, setSortBy] = useState(false)
	const sheetRefForSortBy = useRef(null)
	const snapPointsForSortBy = [340]
	const [contestList, setContestList] = useState([])

	const handlesortbybottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForSortBy?.current.snapToIndex(index)
			setSortBy(true)
		} else if (index === -1) {
			sheetRefForSortBy.current.close()
			setSortBy(false)
		}
	}, [])
	useEffect(() => {
		getContestList(id)
			.then((response) => {
				setContestList(response.data)
			})
			.catch((err) => {
				console.log('err', err)
			})
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

	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.4, 0.6, 0.8]}
				style={{ height: '100%' }}
				colors={['#6D48FF', '#6D48FF80', '#724cfe33', '#6e49ff00']}
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
							<Pressable
								style={{
									paddingRight: 10,
									paddingVertical: 12,
									paddingHorizontal: 12,
								}}
								onPress={() => {
									navigation.navigate('UpComingMatch')
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
						<View style={styles.MatchRemainTime}>
							<Text
								style={{ fontSize: 10, fontWeight: '500', color: '#737373' }}
							>
								88h 88m
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
						<Pressable style={styles.filter}>
							<HunterText>All rounder</HunterText>
						</Pressable>
					</View>
					<ScrollView style={{ height: height / 1.3 }}>
						{/* Player List View */}
						<View
							style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}
						>
							{contestList.map((contest) => (
								<Pressable
									onPress={() =>
										navigation.navigate('ContestDetails', {
											contestId: contest.id,
										})
									}
									key={contest.id}
								>
									<ContestCard
										poolSize={contest.pool_size}
										entryFee={contest.entry_fee}
									/>
								</Pressable>
							))}
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
						<SortByBottomSheet />
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
						<FilterBottomSheet />
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default ParlayContestList

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
