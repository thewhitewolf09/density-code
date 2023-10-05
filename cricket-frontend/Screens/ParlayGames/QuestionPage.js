import {
	Dimensions,
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../styles/Colors'
import WalletHeader from '../../components/UI/WalletHeader'
import { LinearGradient } from 'expo-linear-gradient'
import { india_png_flag, rcbFlag } from '../../assets/assets'
import HunterText from '../../components/UI/HunterText'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'
import { useNavigation } from '@react-navigation/native'
import { getAllQuestionsListByContestId } from './apiFunctions'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import timeTillStart from '../../helpers/timeTillStartHelper'
import HunterBoldText from '../../components/UI/HunterBoldText'
import screenUtils from '../../constants/Dimensions'
import shortName from '../../helpers/shortNameHelper'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
// import QuestionPart from './components/QuestionPart'

const { width, height } = Dimensions.get('window')

const QuestionPage = (props) => {
	const contestId = props.route.params.contestId
	const navigation = useNavigation()
	const [checked, setChecked] = useState(-1)

	const matchDetails = useSelector((state) => state.currentMatch.value)

	const [questionList, setQuestionList] = useState([
		{
			id: 'a5fd8c6c-e69e-4f97-9416-cddb5b6f42f4',
			question: 'Who won the Asia Cup 2022?',
			question_options: 'SriLanka, Bangladesh, India, Pakistan',
			correct_answer: 'SriLanka',
			question_score: 5,
			question_type: '',
		},
	])

	const [answerList, setAnswerList] = useState([])

	const [questionNumber, setQuestionNumber] = useState(0)

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// setLoading(true)
		getAllQuestionsListByContestId(contestId)
			.then((response) => {
				setQuestionList(response.data)
				setLoading(false)
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	console.log(answerList)

	const questionOptions =
		questionList[questionNumber].question_options.split(',')

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				style={{ height: '100%' }}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						borderWidth: 1,
						borderColor: Colors.white,
						borderTopLeftRadius: 17,
						borderTopRightRadius: 17,
						backgroundColor: Colors.whiteHalf,
					}}
				>
					<Text style={{ fontWeight: '600', fontSize: 20, marginVertical: 10 }}>
						{timeTillStart(matchDetails.startTime).result} left
					</Text>
					{/* match event heading */}
					<View style={styles.MatchTitle}>
						<HunterText style={styles.MatchTitleText}>ICC t20 WC</HunterText>
					</View>

					{/* match details */}
					<View style={styles.MatchTeamDetails}>
						<View style={styles.MatchTeamADetails}>
							<View style={styles.flagLogoContainer}>
								<Image
									style={styles.tinyLogo}
									source={matchDetails.team_a_image_URL}
								/>
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
									{shortName(matchDetails.teamA)}
								</HunterBoldText>
							</View>
						</View>

						<View style={{ display: 'flex', justifyContent: 'center' }}>
							<HunterText
								style={{
									fontWeight: '400',
									fontSize: screenUtils.width / 30,
									color: 'grey',
								}}
							>
								VS
							</HunterText>
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
									{shortName(matchDetails.teamB)}
								</HunterBoldText>
							</View>
							<View style={styles.flagLogoContainer}>
								<Image
									style={styles.tinyLogo}
									source={matchDetails.team_b_image_URL}
								/>
							</View>
						</View>
					</View>
					<View
						style={{
							borderWidth: 2,
							borderRadius: 30,
							width: width * 0.83,
							height: height * 0.043,
							backgroundColor: Colors.whiteHalf,
							borderColor: Colors.white,
							paddingHorizontal: 15,
							paddingVertical: height * 0.01,
							marginVertical: height * 0.02,
						}}
					>
						<HunterText style={{ fontWeight: '500', fontSize: 10 }}>
							{questionNumber + 1}/{questionList.length} questions
						</HunterText>
					</View>
				</View>

				{/* <View>
					<QuestionPart checked={checked} />
				</View> */}

				<ScrollView>
					{loading ? (
						<View
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: height * 0.45,
							}}
						>
							<Text>Loading ...</Text>
						</View>
					) : (
						<View
							style={{
								// flexDierection: 'column',
								// justifyContent: "space-between",
								elevation: 10,
								backgroundColor: Colors.white,
								height: height * 0.65,
							}}
						>
							<View>
								<View style={{ alignItems: 'center' }}>
									<HunterSemiBoldText
										style={{
											fontSize: 16,
											marginVertical: width * 0.067,
										}}
									>
										{questionList[questionNumber].question}
									</HunterSemiBoldText>
								</View>
								<View>
									{questionOptions.map((item, i) => {
										return checked === i ? (
											<Pressable
												key={i}
												style={{
													flexDirection: 'row',
													alignItems: 'center',
													backgroundColor: Colors.white,
													marginVertical: height * 0.01,
													marginHorizontal: width * 0.05,
													paddingHorizontal: width * 0.05,
													paddingVertical: height * 0.02,
													borderRadius: 12,
													elevation: 10,
												}}
											>
												<TouchableOpacity
													style={{
														height: 20,
														width: 20,
														borderColor: '#6D48FF',
														borderRightWidth: 2,
														borderBottomWidth: 2,
														borderLeftWidth: 2,
														borderTopWidth: 2,
														borderRadius: 40,
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
													}}
												>
													<View
														style={{
															height: 14,
															width: 14,
															backgroundColor: '#6D48FF',
															borderRadius: 40,
														}}
													></View>
												</TouchableOpacity>

												<HunterText style={{ marginHorizontal: 10 }}>
													{questionOptions[i]}
												</HunterText>
											</Pressable>
										) : (
											<Pressable
												key={i}
												onPress={() => {
													setChecked(i)
													setAnswerList([...answerList, questionOptions[i]])
												}}
												style={{
													flexDirection: 'row',
													alignItems: 'center',
													backgroundColor: Colors.white,
													marginVertical: height * 0.01,
													marginHorizontal: width * 0.05,
													paddingHorizontal: width * 0.05,
													paddingVertical: height * 0.02,
													borderRadius: 12,
													elevation: 10,
												}}
											>
												<TouchableOpacity
													style={{
														height: 20,
														width: 20,
														borderColor: '#6D48FF',
														borderRightWidth: 2,
														borderBottomWidth: 2,
														borderLeftWidth: 2,
														borderTopWidth: 2,
														borderRadius: 40,
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
													}}
												></TouchableOpacity>
												<HunterText style={{ marginHorizontal: 10 }}>
													{questionOptions[i]}
												</HunterText>
											</Pressable>
										)
									})}
								</View>
							</View>
						</View>
					)}
				</ScrollView>

				<FooterButtons
					rightPress={() => {
						if (checked > -1) {
							if (questionNumber < questionList.length - 1) {
								setQuestionNumber(questionNumber + 1)
							}
							setChecked(-1)
							// questionNumber++;
							if (questionNumber === questionList.length - 1) {
								navigation.navigate('AllAnswered', {
									answerList: answerList,
								})
							}
						}
					}}
					rightTitle="Continue"
					checked={checked > -1}
				/>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default QuestionPage

const styles = StyleSheet.create({
	container: {},
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
	MatchTeamADetails: {
		// borderColor: "yellow",
		// borderWidth: 2,
		// width:"100%",
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
