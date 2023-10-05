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
	RefreshControl,
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
import {
	getContestById,
	getContestList,
	getContestListByUserIdNMatchId,
} from './apiFunctions'
import MyContestCard from '../../components/UI/MyContestCard'
import { useDispatch, useSelector } from 'react-redux'
import timeTillStart from '../../helpers/timeTillStartHelper'
import { setSelectedContest } from '../../redux/features/PoolGameSlices/contestSlice'
import { filterAlt, loadingBat, rcbFlag } from '../../assets/assets'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import { setContestListOfMatch } from '../../redux/features/PoolGameSlices/contestListOfMatchSlice'
import TimeProgressBar from '../../components/UI/TimeProgressBar'
import CheckCircle from '../../assets/Images/Svg/CheckCircle'
import HunterBoldText from '../../components/UI/HunterBoldText'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import AnimatedLottieView from 'lottie-react-native'

const MyContest = (props) => {
	const navigation = useNavigation()
	const id = props.route.params.matchId
	//const type = props.route.params.type

	const [contestList, setContestList] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const userId = useSelector((state) => state.user.value)
	const callContestList = () => {
		setIsLoading(true)
		getContestListByUserIdNMatchId(id, userId)
			.then((response) => {
				console.log('ContestListByUserIdNMatchId', response.data)
				setIsLoading(false)
				setContestList(response.data)
			})
			.catch((err) => {
				console.log('err', err.data)
			})
	}
	useEffect(() => {
		callContestList()
	}, [])

	const matchDetails = useSelector((state) => state.currentMatch.value)

	// const matchDetails = useSelector((state) => state.currentMatch.value)

	const [tillStart, setTillStart] = useState(
		timeTillStart(matchDetails.startTime).result,
	)
	console.log('matchDetails', matchDetails)
	const timeOfMatchEntry = 24 * 60 * 60 //48 hr earlier than start time

	let start_time = new Date(matchDetails.startTime)
	let end_time = new Date(matchDetails.endTime)
	let current_time = new Date()

	const Types = ['Contest', 'Scoreboard']
	const [typeIndex, setTypeIndex] = useState(0)
	const [refreshing, setRefreshing] = useState(false)

	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
				style={{ height: '100%' }}
			>
				<WalletHeader />
				<View
					style={{
						borderWidth: 1,
						borderColor: 'white',
						borderRadius: 20,
						backgroundColor: 'rgba(255, 255, 255, 0.4)',
					}}
				>
					{/* match timing status */}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							marginTop: 10,
						}}
					>
						{start_time > current_time ? (
							<View style={styles.MatchRemainTime_not_started}>
								<HunterText style={{ fontSize: 10, color: '#737373' }}>
									{tillStart}
								</HunterText>
							</View>
						) : null}
						{end_time < current_time ? (
							<View style={styles.MatchRemainTime}>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'center',
										alignItems: 'center',
										paddingHorizontal: 5,
									}}
								>
									<CheckCircle />
									<HunterSemiBoldText
										style={{
											fontSize: 10,
											color: '#737373',
											fontWeight: '500',
											marginLeft: 5,
										}}
									>
										Completed
									</HunterSemiBoldText>
								</View>
							</View>
						) : null}
						{end_time > current_time && start_time < current_time ? (
							<View style={styles.MatchRemainTime_live}>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'center',
										alignItems: 'center',
										paddingHorizontal: 5,
									}}
								>
									<View
										style={{
											width: 12,
											height: 12,
											backgroundColor: '#D23954',
											borderRadius: 40,
										}}
									></View>
									<HunterSemiBoldText
										style={{
											fontSize: 10,
											color: '#737373',
											fontWeight: '500',
											marginLeft: 5,
										}}
									>
										Live
									</HunterSemiBoldText>
								</View>
							</View>
						) : null}
					</View>

					{/* match event heading */}
					<View style={styles.MatchTitle}>
						<Text style={styles.MatchTitleText}>ICC t20 WC</Text>
					</View>

					{/* match details */}
					<View style={styles.MatchTeamDetails}>
						<View style={styles.MatchTeamADetails}>
							<View style={styles.flagLogoContainer}>
								<Image style={styles.tinyLogo} source={rcbFlag} />
							</View>

							<View
								style={[
									styles.teamNameContainer,
									{ justifyContent: 'flex-start' },
								]}
							>
								<HunterBoldText
									style={{
										paddingHorizontal: 8,
										fontSize: screenUtils.width / 30,
										flexShrink: 1,
									}}
								>
									{matchDetails.teamA}
								</HunterBoldText>
							</View>
						</View>

						<View style={{ display: 'flex', justifyContent: 'center' }}>
							<Text
								style={{
									fontWeight: '400',
									fontStyle: 'italic',
									fontSize: screenUtils.width / 30,
									color: 'grey',
								}}
							>
								VS
							</Text>
						</View>

						<View style={styles.MatchTeamADetails}>
							<View
								style={[
									styles.teamNameContainer,
									{ justifyContent: 'flex-end' },
								]}
							>
								<HunterBoldText
									style={{
										paddingHorizontal: 8,
										fontSize: screenUtils.width / 30,
										flexShrink: 1,
									}}
								>
									{matchDetails.teamB}
								</HunterBoldText>
							</View>
							<View style={styles.flagLogoContainer}>
								<Image style={styles.tinyLogo} source={rcbFlag} />
							</View>
						</View>
					</View>

					{/* contest and scorboard filter button  and contest section*/}
					<View
						style={{
							backgroundColor: 'white',
							marginTop: 30,
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								marginVertical: screenUtils.height / 54,
								width: screenUtils.width,
							}}
						>
							{Types.map((type, index) => (
								<FilterButton
									onPress={() => setTypeIndex(index)}
									active={index === typeIndex}
									key={index}
									style={{
										width: screenUtils.width / 3,
										paddingHorizontal: screenUtils.width / 20,
										paddingVertical: screenUtils.height / 85,
										borderTopLeftRadius: index == 0 ? 8 : 0,
										borderBottomLeftRadius: index == 0 ? 8 : 0,
										borderTopRightRadius: index == 1 ? 8 : 0,
										borderBottomRightRadius: index == 1 ? 8 : 0,
									}}
									title={type}
								/>
							))}
						</View>

						{/* my contest list  */}

						<ScrollView
							style={{ height: height * 0.7 }}
							refreshControl={
								<RefreshControl
									refreshing={isLoading}
									onRefresh={callContestList}
								/>
							}
						>
							{/* Player List View */}

							{!isLoading ? (
								<View
									style={{
										display: 'flex',
										alignItems: 'center',
										marginTop: 5,
									}}
								>
									{contestList &&
										contestList.map((contest) => (
											<Pressable
												onPress={() => {
													navigation.navigate('MyTeams', {
														contestId: contest.contest.id,
													})
												}}
												key={contest.id}
											>
												<MyContestCard
													entryFee={contest.contest.entry_fee}
													nofTeams={contest.joined_with_teams}
													points={contest.total_score}
													rank={contest.Rank}
													status={contest.match_status}
													earnings={contest.Earnings}
													totalWinnings={contest.total_winnings}
													winners={contest.Winners}
												/>
											</Pressable>
										))}
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
										style={{
											height: screenUtils.width / 1.5,
											width: screenUtils.width / 1.5,
										}}
										autoPlay
										loop
									/>
								</View>
							)}
						</ScrollView>
					</View>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default MyContest

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
	MatchRemainTime: {
		// borderColor: "yellow",
		// borderWidth: 2,
		// marginTop: -16,
		backgroundColor: 'white',
		borderRadius: 32,
		padding: 5,
		elevation: 4,
		height: 28,
		paddingHorizontal: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	MatchRemainTime_not_started: {
		borderRadius: 32,
		padding: 5,
		// height: 28,
		paddingHorizontal: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	MatchRemainTime_live: {
		borderRadius: 32,
		padding: 5,
		borderColor: '#D23954',
		borderWidth: 1,
		height: 28,
		paddingHorizontal: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	MatchTitle: {
		// borderColor: "red",
		// borderWidth: 2,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 3,
		paddingHorizontal: 5,
	},
	MatchTitleText: {
		fontWeight: '500',
		fontSize: 12,
	},
	MatchTeamDetails: {
		// borderColor: "red",
		// borderWidth: 2,
		width: '100%',
		paddingHorizontal: 15,
		marginTop: 15,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	teamNameContainer: {
		flexDirection: 'row',
		width: 100,
	},

	MatchTeamADetails: {
		// borderColor: "yellow",
		// borderWidth: 2,
		// width:"100%",
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	MatchCardFooter: {
		borderColor: 'white',
		borderWidth: 2,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		borderRadius: 32,
		paddingHorizontal: 6,
		backgroundColor: 'white',
		marginTop: 4,
		alignItems: 'center',
		height: 36,
		elevation: 10,
	},
	flagLogoContainer: {
		width: 44,
		height: 44,
		backgroundColor: 'white',
		borderRadius: 13,
		shadowColor: 'rgba(0, 0, 0, 0.2)',
		elevation: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tinyLogo: {
		width: 40,
		height: 40,
	},
	textinfooter: {
		fontWeight: '500',
		fontSize: 10,
	},
})
