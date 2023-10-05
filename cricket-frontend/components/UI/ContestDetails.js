import {
	Dimensions,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import screenUtils from '../../constants/Dimensions'

import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { LinearGradient } from 'expo-linear-gradient'
import HunterGradient from './Gradient'
import WalletHeader from './WalletHeader'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import HunterText from './HunterText'
import ProgressBar from './ProgressBar'
import HunterSemiBoldText from './HunterSemiBoldText'
import WinnerCard from '../../Screens/PoolGames/components/WinnerCard'
import {
	getLeaderBoardByContestId,
	getPrizeDistribution,
} from '../../Screens/PoolGames/apiFunctions'
import { useSelector } from 'react-redux'
import timeTillStart from '../../helpers/timeTillStartHelper'
import NumberToWord from '../../helpers/NumberToWord'
import HunterBoldText from './HunterBoldText'
import prizeDistHelper from '../../helpers/prizeDistHelper'
import FilterButton from './Buttons/FilterButton'
import LeaderboardCard from '../../Screens/PoolGames/components/LeaderboardCard'
import { getParlayLeaderBoardByContestId } from '../../Screens/ParlayGames/apiFunctions'
import shortName from '../../helpers/shortNameHelper'
import BatLoader from './Loader/BatLoader'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const ContestDetails = (props) => {
	const [typeIndex, setTypeIndex] = useState(0)

	const navigation = useNavigation()
	const id = props.route.params.prizeDistributionId
	const contestId = props.route.params.contestId
	const matchDetails = useSelector((state) => state.currentMatch.value)
	const contestDetails = useSelector((state) => state.currentContest.value)
	const [prizePool, setPrizePool] = useState(
		NumberToWord(contestDetails.entryFee * contestDetails.poolSize),
	)
	const [isLoading, setIsLoading] = useState(false)
	const [prizeDist, setPrizeDist] = useState([])
	useEffect(() => {
		setIsLoading(true)
		getPrizeDistribution(id)
			.then((res) => {
				setIsLoading(false)
				let prize = res.data.prize_distribution
				console.log(res.data)
				setPrizeDist(prizeDistHelper(prize))
			})
			.catch((err) => console.log(err))
	}, [])
	const types = ['Winnings']

	return (
		<SafeAreaView style={{ height: '99%' }}>
			<View>
				<HunterGradient style={{ height: '100%' }}>
					<WalletHeader />
					<View
						style={{
							borderWidth: 1,
							borderColor: 'white',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							backgroundColor: 'rgba(255, 255, 255, 0.4)',
							paddingVertical: 20,
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-evenly',
							}}
						>
							<View style={{}}>
								<View>
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
								<HunterText
									style={{
										paddingHorizontal: width * 0.03,
										fontSize: 10,
										color: '#525252',
										// textAlign: 'center',
									}}
								>
									in {timeTillStart(matchDetails.startTime).result}
								</HunterText>
							</View>
							<View
								style={{
									paddingHorizontal: width * 0.03,
									paddingVertical: height * 0.005,
									backgroundColor: 'white',
									borderRadius: 16,
									justifyContent: 'center',
									marginHorizontal: width * 0.03,
								}}
							>
								<HunterText style={{ fontWeight: '400', fontSize: 10 }}>
									Prize Pool
								</HunterText>
								<HunterSemiBoldText
									style={{ fontSize: screenUtils.width / 26 }}
								>
									₹{prizePool}
								</HunterSemiBoldText>
							</View>
						</View>
						{typeIndex == 0 ? (
							<View
								style={{
									marginHorizontal: width * 0.05,
									marginVertical: height * 0.02,
								}}
							>
								<ProgressBar
									percentstyle={{
										width:
											(parseFloat(contestDetails.participantCount) /
												parseFloat(contestDetails.poolSize)) *
												100 +
											'%',
										// width : "20%",
										height: '100%',
										borderRadius: 4,
										// backgroundColor: "red",
									}}
								/>
								<View
									style={{
										display: 'flex',
										flexDirection: 'row',
									}}
								>
									<HunterSemiBoldText
										style={{
											fontSize: 13,
										}}
									>
										{contestDetails.poolSize - contestDetails.participantCount}/
									</HunterSemiBoldText>
									<HunterText
										style={{
											fontSize: 13,
										}}
									>
										{contestDetails.poolSize} spots left
									</HunterText>
								</View>
							</View>
						) : null}
						{typeIndex == 0 ? (
							<LinearGradient
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 1 }}
								locations={[0, 0.6]}
								colors={['rgba(1, 148, 83, 0.24)', 'rgba(1, 148, 83, 1)']}
								style={{
									borderRadius: 40,
									display: 'flex',
									alignItems: 'center',
									marginHorizontal: width * 0.05,
								}}
							>
								<Pressable
									onPress={() => {
										contestDetails.contestType === 'Parlay'
											? navigation.navigate('QuestionPage', { contestId })
											: navigation.navigate('ReadyToCreate')
									}}
									style={{
										backgroundColor: 'rgba(1, 148, 83, 0.54)',
										width: '100%',
										borderRadius: 40,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										padding: 6,
									}}
								>
									<HunterText style={{ color: 'white', fontSize: 15 }}>
										Join ₹ {contestDetails.entryFee}
									</HunterText>
								</Pressable>
							</LinearGradient>
						) : null}
					</View>
					<View
						style={{
							backgroundColor: 'white',
							width: '100%',
							flexDirection: 'row',
							justifyContent: 'center',
							paddingVertical: 10,
							borderTopWidth: 4,
							borderColor: 'white',
						}}
					>
						{types.map((type, index) => (
							<FilterButton
								onPress={() => setTypeIndex(index)}
								active={index === typeIndex}
								key={index}
								style={{
									paddingHorizontal: screenUtils.width / 20,
									paddingVertical: screenUtils.height / 85,
									borderRadius: 4,
								}}
								title={type}
							/>
						))}
					</View>

					<View
						style={{
							backgroundColor: 'white',
							padding: screenUtils.width / 20,
							height: '61%',
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<HunterText>Ranks</HunterText>
							<HunterText>Winnings</HunterText>
						</View>
						{!isLoading ? (
							<ScrollView
								style={{
									height: sHeight * 0.47,
								}}
							>
								{prizeDist.map((item, index) => (
									<WinnerCard
										key={index}
										rankLow={item.rankLow}
										rankHigh={item.rankHigh}
										percentage={item.percentage}
									/>
								))}
							</ScrollView>
						) : (
							<BatLoader size={screenUtils.width / 2} />
						)}
					</View>
				</HunterGradient>
			</View>
		</SafeAreaView>
	)
}

export default ContestDetails

const styles = StyleSheet.create({
	buySellContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: sHeight / 42.5,
	},
	amountInfo: {
		backgroundColor: '#FFFFFF',
		padding: sWidth / 13.33,
	},
	buySellButton: {
		paddingVertical: sHeight / 85,
		paddingHorizontal: sWidth / 10,
	},
	buySellActive: {
		borderRadius: 14,
		backgroundColor: '#FFFFFF',
	},
	addAmount: {
		color: '#0F0B19',
		padding: 5,
		paddingHorizontal: 10,
		margin: 8,
		borderWidth: 1,
		borderColor: '#9292924d',
		borderRadius: 14,
		alignSelf: 'center',
	},
	autoBuy_background_container_0: {
		display: 'none',
	},

	autoBuy_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	autoBuy_container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 253,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	autoBuy_heading_container: {
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
	autoBuy_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
})
