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
	getLeaderBoardByContestId,
	getParticipation,
	getParticipationbycontestid,
} from './apiFunctions'
import MyContestCard from '../../components/UI/MyContestCard'
import { useDispatch, useSelector } from 'react-redux'
import timeTillStart from '../../helpers/timeTillStartHelper'
import { setSelectedContest } from '../../redux/features/PoolGameSlices/contestSlice'
import { filterAlt, rcbFlag } from '../../assets/assets'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import { setContestListOfMatch } from '../../redux/features/PoolGameSlices/contestListOfMatchSlice'
import TimeProgressBar from '../../components/UI/TimeProgressBar'
import CheckCircle from '../../assets/Images/Svg/CheckCircle'
import HunterBoldText from '../../components/UI/HunterBoldText'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import MyTeamCard from '../../components/UI/MyTeamCard'
import TeamPreview from './TeamPreview'
import LeaderboardCard from './components/LeaderboardCard'
import BatLoader from '../../components/UI/Loader/BatLoader'

const MyTeams = (props) => {
	const playersArray = ['A', 'A', 'A', 'A']
	const navigation = useNavigation()
	const contestId = props.route.params.contestId
	const [leaderboardUsers, setLeaderboardUsers] = useState([])
	const [myTeamList, setMyTeamsList] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()

	const userId = useSelector((state) => state.user.value)

	const matchDetails = useSelector((state) => state.currentMatch.value)

	const [tillStart, setTillStart] = useState(
		timeTillStart(matchDetails.startTime).result,
	)

	const timeOfMatchEntry = 24 * 60 * 60 //48 hr earlier than start time

	let start_time = new Date(matchDetails.startTime)
	let end_time = new Date(matchDetails.endTime)
	let current_time = new Date()

	const tabs = ['Leaderboard', 'Team']
	const [tabIndex, setTabIndex] = useState(0)
	const [refreshing, setRefreshing] = useState(false)
	const teamPreviewRef = useRef()
	const [previewPlayers, setPreviewPlayers] = useState([])
	const toggleTeamPreview = useCallback(() => {
		teamPreviewRef.current?.present()
	}, [])

	useEffect(() => {
		setIsLoading(true)
		if (tabIndex) {
			getParticipation(userId)
				.then((response) => {
					console.log('getParticipationDATA#########', response.data)
					setIsLoading(false)
					setMyTeamsList(
						response.data.filter((team) => team.contest_id === contestId),
					)
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
			getLeaderBoardByContestId(contestId)
				.then((res) => {
					console.log(res.data)
					setIsLoading(false)
					setLeaderboardUsers(res.data)
				})
				.catch((err) => console.log(err))
		}
	}, [tabIndex])
	const onRefresh = () => {
		setRefreshing(true)
		getLeaderBoardByContestId(contestId)
			.then((res) => {
				setRefreshing(false)
				console.log(res.data)
				setLeaderboardUsers(res.data)
			})
			.catch((err) => console.log(err))
	}
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
								<HunterText
									style={{ fontSize: 10, color: '#737373', fontWeight: '500' }}
								>
									{tillStart}
								</HunterText>

								{/* <TimeProgressBar
									startTime={matchDetails.startTime}
									timeOfMatchEntry={timeOfMatchEntry}
								/> */}
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
						<Text style={styles.MatchTitleText}>ICC T20 WC</Text>
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

					{/* my teams section*/}
					<View
						style={{
							backgroundColor: 'white',
							marginTop: screenUtils.height / 29,
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								padding: screenUtils.width / 20,
								width: screenUtils.width,
							}}
						>
							{tabs.map((type, index) => (
								<FilterButton
									onPress={() => setTabIndex(index)}
									active={index === tabIndex}
									key={index}
									style={{
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

						{tabIndex ? (
							!isLoading ? (
								<ScrollView style={{ height: screenUtils.height * 0.65 }}>
									{/* Player List View */}
									<View
										style={{
											display: 'flex',
											alignItems: 'center',
											marginTop: 5,
										}}
									>
										{myTeamList &&
											myTeamList?.map((Team, index) => (
												<View key={Team.id}>
													<MyTeamCard
														teamIndex={index}
														teamA={matchDetails.teamA}
														teamB={matchDetails.teamB}
														teamDetails={Team}
														// setPreview={setPreview}
														previewFn={toggleTeamPreview}
														setPreviewPlayers={setPreviewPlayers}
														contestId={contestId}
													/>
												</View>
											))}
									</View>
								</ScrollView>
							) : (
								<BatLoader size={screenUtils.width / 2} />
							)
						) : !isLoading ? (
							<ScrollView
								style={{ height: screenUtils.height * 0.65 }}
								refreshControl={
									<RefreshControl
										refreshing={refreshing}
										onRefresh={onRefresh}
									/>
								}
							>
								{leaderboardUsers?.map((item, index) => (
									<View key={index}>
										<LeaderboardCard
											rank={item.rank}
											id={item.id}
											name={item.name}
											score={item.score}
										/>
									</View>
								))}
							</ScrollView>
						) : (
							<BatLoader size={screenUtils.width / 2} />
						)}
					</View>
				</View>
				<TeamPreview previewRef={teamPreviewRef} allPlayers={previewPlayers} />
			</LinearGradient>
		</SafeAreaView>
	)
}

export default MyTeams

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
		height: 28,
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
