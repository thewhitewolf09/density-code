import {
	SafeAreaView,
	StyleSheet,
	View,
	Dimensions,
	ScrollView,
	Pressable,
	RefreshControl,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import HunterBoldText from '../../components/UI/HunterBoldText'
import { LinearGradient } from 'expo-linear-gradient'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import WalletHeader from '../../components/UI/WalletHeader'
import { useNavigation } from '@react-navigation/native'
import { getMatchList, getMatchListByUserId } from './apiFunctions'
import SwitchButton from '../../components/UI/Buttons/SwitchButton'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import screenUtils from '../../constants/Dimensions'
import MatchCard from '../../components/UI/MatchCard'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedMatch } from '../../redux/features/PoolGameSlices/matchSlice'
import Lottie from 'lottie-react-native'
import HunterText from '../../components/UI/HunterText'
import MyMatchCard from '../../components/UI/MyMatchCard'
import AnimatedLottieView from 'lottie-react-native'
import { loadingBat } from '../../assets/assets'
import isUpcoming from '../../helpers/upcomingMatchCheck'
import appColors from '../../styles/Colors'
import HunterGradient from '../../components/UI/Gradient'
const UpComingMatchList = () => {
	const navigation = useNavigation()
	const [matches, setMatches] = useState([])
	const [myMatches, setMyMatches] = useState([])
	const MatchTypes = ['Upcoming Matches', 'My Matches']
	const myContestMatchTypes = ['All', 'Live', 'Upcoming', 'Completed']
	const [selectedMatchTypeIndex, setSelectedMatchTypeIndex] = useState(0)

	const [typeIndex, setTypeIndex] = useState(0)
	const [loader, setloader] = useState(false)
	const dispatch = useDispatch()
	const userId = useSelector((state) => state.user.value)
	const callApi = () => {
		setloader(true)
		if (typeIndex == 0) {
			getMatchList()
				.then((response) => {
					let x = response.data.sort((a, b) => {
						let A = new Date(a.start_time)
						let B = new Date(b.start_time)
						return A - B
					})
					setMatches(x)
					setloader(false)
				})
				.catch((err) => {
					console.log(err)
				})
		}

		if (typeIndex == 1) {
			// api for match list based on user participation
			getMatchListByUserId(userId)
				.then((response) => {
					let current_time = new Date()
					console.log(response.data)
					if (selectedMatchTypeIndex === 0) {
						// for All
						setMyMatches(response.data)
						setloader(false)
					} else if (selectedMatchTypeIndex === 1) {
						// for live matches
						setMyMatches(
							response?.data.filter(
								(match) =>
									current_time < new Date(match.end_time) &&
									current_time > new Date(match.start_time),
							),
						)
						setloader(false)
					} else if (selectedMatchTypeIndex === 2) {
						// for upcomming matches
						setMyMatches(
							response?.data.filter(
								(match) => current_time < new Date(match.start_time),
							),
						)
						setloader(false)
					} else {
						// for completed matches
						setMyMatches(
							response?.data.filter(
								(match) => current_time > new Date(match.end_time),
							),
						)
						setloader(false)
					}
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}
	useEffect(() => {
		callApi()
	}, [typeIndex, selectedMatchTypeIndex])

	return (
		<SafeAreaView style={{ height: '100%' }}>
			<HunterGradient style={{ height: '100%' }}>
				{/* Header View */}

				<WalletHeader title={'Pool Games'} />

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginVertical: screenUtils.height / 80,
						width: screenUtils.width,
					}}
				>
					{MatchTypes.map((type, index) => (
						<FilterButton
							onPress={() => setTypeIndex(index)}
							active={index === typeIndex}
							key={index}
							style={{
								width: screenUtils.width / 2.05,
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
				{typeIndex == 1 ? (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginVertical: 14,
							paddingHorizontal: 30,
							//   borderWidth:1,
							//   borderColor:'black'
						}}
					>
						{myContestMatchTypes.map((matchType, index) => (
							<FilterButton
								active={index === selectedMatchTypeIndex}
								onPress={() => {
									setSelectedMatchTypeIndex(index)
								}}
								title={matchType}
								key={matchType}
								bgColor="#353535"
							/>
						))}
					</View>
				) : null}

				{typeIndex == 1 ? (
					<ScrollView
						style={{
							height: '100%',
							marginBottom: screenUtils.height / 12,
						}}
						refreshControl={
							<RefreshControl refreshing={loader} onRefresh={callApi} />
						}
					>
						{!loader ? (
							<View
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								{myMatches?.map((match, index) => (
									<Pressable
										key={index}
										onPress={() => {
											dispatch(
												setSelectedMatch({
													teamA: match.team_a,
													teamB: match.team_b,
													startTime: match.start_time,
													matchId: match.id,
												}),
											)
											navigation.navigate('MyContest', {
												matchId: match.id,
												type: typeIndex,
											})
										}}
									>
										<MyMatchCard
											teamA={match.team_a}
											teamB={match.team_b}
											startTime={match.start_time}
											endTime={match.end_time}
											no_of_contest={match.contest}
											noOfTeams={match.teams}
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
									style={{ height: 300, width: 300 }}
									autoPlay
									loop
								/>
							</View>
						)}
					</ScrollView>
				) : (
					<ScrollView
						style={{
							height: '100%',
							marginBottom: screenUtils.height / 12,
						}}
						refreshControl={
							<RefreshControl refreshing={loader} onRefresh={callApi} />
						}
					>
						{!loader ? (
							<View
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								{matches?.map((match, index) => (
									// isUpcoming(match.start_time) &&
									<Pressable
										key={index}
										onPress={() => {
											dispatch(
												setSelectedMatch({
													teamA: match.team_a,
													teamB: match.team_b,
													startTime: match.start_time,
													matchId: match.id,
												}),
											)
											navigation.navigate('ContestListPool', {
												matchId: match.id,
												type: typeIndex,
											})
										}}
									>
										<MatchCard
											teamA={match.team_a}
											teamB={match.team_b}
											startTime={match.start_time}
											no_of_contest={match.no_of_contest}
											highest_prize_pool={match.highest_prize_pool}
											imageSourceA={match.team_a_image_URL}
											imageSourceB={match.team_b_image_URL}
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
									style={{ height: 300, width: 300 }}
									autoPlay
									loop
								/>
							</View>
						)}
					</ScrollView>
				)}
			</HunterGradient>
		</SafeAreaView>
	)
}

export default UpComingMatchList

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
		marginVertical: 15,
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
