import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Pressable,
	FlatList,
	Image,
	ScrollView,
} from 'react-native'
import React from 'react'
import LeaderBoardCard from './../Home/components/LeaderBoardCard'
import IplLeaderCard from './../Home/components/IplLeaderCard'
import HunterText from '../../components/UI/HunterText'
import { iplLogoImage } from '../../assets/assets'
import { iplIcon } from '../../assets/assets'
import { useNavigation } from '@react-navigation/native'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import screenUtils from '../../constants/Dimensions'
import { useState, useEffect } from 'react'
import { getCombinedLeaderBoard } from './apiFunction'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
// import { SafeAreaView } from 'react-native-safe-area-context'

function ViewAllIplLeaderBoard() {
	// const renderItem = () => (
	//     <LeaderBoardCard/>
	//   );'
	const navigation = useNavigation()
	const [LeaderBoardInfo, setLeaderBoardInfo] = useState([])
	useEffect(() => {
		getCombinedLeaderBoard()
			.then((response) => {
				setLeaderBoardInfo(response.data)
				console.log(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		// <SafeAreaView style={styles.upperContainer}>

		<View style={styles.leaderMain}>
			<View style={styles.leaderOutView}>
				{/* <View style={styles.iplIcon}>
					<Image style={{width : 55 , height : 83}} source={iplIcon} />
					<View style={styles.iplName}>
						<Text style={styles.iplNameHeading}>IPL</Text>
						<Text style={styles.iplNameSubHeading}>Bananza</Text>
					</View>
				</View> */}
				<View style={styles.leaderHead}>
					<Pressable onPress={() => navigation.goBack()}>
						<View
							style={{
								borderWidth: 0,
								paddingVertical: screenUtils.height / 120,
								paddingHorizontal: screenUtils.width / 20,
							}}
						>
							<BackArrow />
						</View>
					</Pressable>
					<HunterSemiBoldText
						style={[styles.leaderHeadText, { borderWidth: 0 }]}
					>
						Game Leaderboard
					</HunterSemiBoldText>
				</View>
			</View>

			<ScrollView
				style={[styles.LeaderBoardCards, { height: screenUtils.height / 1.1 }]}
			>
				{LeaderBoardInfo?.map((item, i) => (
					<IplLeaderCard
						key={i}
						index={i}
						playerName={item.user_id}
						user_winnings={item.user_winnings}
					/>
				))}
			</ScrollView>
		</View>

		//  </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		backgroundColor: '#F5F5F5',
		paddingTop: 30,
		//   paddingBottom:100,
		borderColor: 'red',
		borderWidth: 2,
		flex: 1,
		color: 'red',
	},
	leaderOutView: {
		borderColor: 'black',
		// borderWidth:2,
		borderBottomWidth: 1,
		marginVertical: screenUtils.height / 70,
		borderBottomColor: '#BEBEBE',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		// backGroundColor:"white"
	},
	leaderMain: {
		// borderColor: "blue",
		// borderWidth: 2,
		display: 'flex',
		padding: 10,
		marginVertical: 10,
		backgroundColor: 'white',
		borderRadius: 20,
		marginHorizontal: 10,
	},
	leaderHead: {
		borderStyle: 'solid',
		// borderColor: "red",
		// borderWidth: 2,
		// justifyContent:'space-around',
		paddingVertical: 10,
		display: 'flex',
		flexDirection: 'row',
	},
	iplIcon: {
		width: 100,

		// paddingVertical:20,
		display: 'flex',
		flexDirection: 'row',
		// borderWidth : 2
	},
	iplNameHeading: {
		color: '#263D88',
		fontSize: 20,
		fontWeight: '700',
		marginTop: 25,
	},
	iplNameSubHeading: {
		color: '#0B0617',
		fontSize: 12,
		fontWeight: '400',
	},
	timePeriod: {
		display: 'flex',
		flexDirection: 'row',
		borderColor: 'grey',
		borderWidth: 0.5,
		// elevation: 7,
		borderRadius: 9,
	},
	leaderHeadText: {
		fontWeight: '600',
		fontSize: 20,
	},
	timeWeek: {
		// borderColor: "yellow",
		// borderWidth: 2,
		width: '33%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 15,
		// borderBottomLeftRadius:9,
		// borderTopLeftRadius:9,
	},
	timeMonthly: {
		// borderColor: "yellow",
		// borderWidth: 2,
		width: '33%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 15,
	},
	timeDaily: {
		// borderColor: "yellow",
		// borderWidth: 2,
		width: '33%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 15,
		// borderBottomRightRadius:9,
		// borderTopRightRadius:9,
	},
	timeBtnText: {
		color: 'black',
		fontSize: 16,
		fontWeight: '400',
	},
	LeaderBoardCards: {
		paddingTop: 10,
	},
	allBtn: {
		// borderColor: "yellow",
		// borderWidth: 2,
		borderRadius: 14.6702,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	allBtnText: {
		color: 'black',
		fontWeight: '500',
		fontSize: 16,
		paddingVertical: 10,
	},
})

export default ViewAllIplLeaderBoard
