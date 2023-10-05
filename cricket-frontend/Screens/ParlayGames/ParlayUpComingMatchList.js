import {
	SafeAreaView,
	StyleSheet,
	View,
	Dimensions,
	ScrollView,
	Pressable,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// import HunterText from '../../components/UI/HunterText'
import WalletHeader from '../../components/UI/WalletHeader'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import screenUtils from '../../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'
import { getMatchList } from './apiFunctions'
import MatchCard from '../../components/UI/MatchCard'
import { setSelectedMatch } from '../../redux/features/PoolGameSlices/matchSlice'
import { useDispatch } from 'react-redux'
import isUpcoming from '../../helpers/upcomingMatchCheck'
import BatLoader from '../../components/UI/Loader/BatLoader'
// import SwitchButton from '../../components/UI/Buttons/SwitchButton'

const ParlayUpComingMatchList = () => {
	const navigation = useNavigation()
	const [matches, setMatches] = useState([])
	const MatchTypes = ['Upcoming Matches', 'My Matches']
	const [typeIndex, setTypeIndex] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		if (typeIndex == 0) {
			getMatchList()
				.then((response) => {
					setIsLoading(false)
					let x = response.data.sort((a, b) => {
						let A = new Date(a.start_time)
						let B = new Date(b.start_time)
						return A - B
					})
					setMatches(x)
				})
				.catch((err) => {
					console.log(err)
				})
		}

		if (typeIndex == 1) {
			getMatchList()
				.then((response) => {
					setIsLoading(false)
					setMatches(response.data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [typeIndex])
	const dispatch = useDispatch()
	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.3, 0.5, 0.7]}
				style={{ height: '100%' }}
				colors={['#6D48FF', '#6D48FF80', '#724cfe33', '#6e49ff00']}
			>
				{/* Header View */}
				<WalletHeader title={'Parlay Games'} />

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginVertical: screenUtils.height / 54,
						width: screenUtils.width,
					}}
				>
					{MatchTypes.map((type, index) => (
						<FilterButton
							onPress={() => setTypeIndex(index)}
							active={index === typeIndex}
							key={index}
							style={{
								width: screenUtils.width / 2.1,
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

				<ScrollView style={{ height: height / 1.25 }}>
					{!isLoading ? (
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
										navigation.navigate('ContestListParlay', {
											matchId: match.id,
											teamA: match.team_a,
											teamB: match.team_b,
											startTime: match.start_time,
										})
									}}
								>
									<MatchCard
										teamA={match.team_a}
										teamB={match.team_b}
										startTime={match.start_time}
										no_of_contest={match.number_of_parlay_contest}
										highest_prize_pool={match.highest_parlay_prize_pool}
									/>
								</Pressable>
							))}
						</View>
					) : (
						<BatLoader size={screenUtils.width / 1.5} />
					)}
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default ParlayUpComingMatchList

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
