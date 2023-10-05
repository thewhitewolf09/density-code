import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Pressable,
	FlatList,
	Image,
} from 'react-native'
import React from 'react'
import LeaderBoardCard from './../Home/components/LeaderBoardCard'
import IplLeaderCard from './../Home/components/IplLeaderCard'
import HunterText from '../../components/UI/HunterText'
import { iplLogoImage } from '../../assets/assets'
import { iplIcon } from '../../assets/assets'
import { useNavigation } from '@react-navigation/native'
import { getCombinedLeaderBoard } from './apiFunction'
import { useState, useEffect } from 'react'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'

// import { SafeAreaView } from 'react-native-safe-area-context'

function IplLeaderBoard() {
	const [LeaderBoardInfo, setLeaderBoardInfo] = useState([])
	useEffect(() => {
		getCombinedLeaderBoard()
			.then((response) => {
				setLeaderBoardInfo(response.data?.slice(0, 5))
				console.log(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	// const renderItem = () => (
	//     <LeaderBoardCard/>
	//   );
	const navigation = useNavigation()
	return (
		// <SafeAreaView style={styles.upperContainer}>

		<View style={styles.leaderMain}>
			<View style={styles.leaderOutView}>
				<View style={styles.iplIcon}>
					<Image
						style={{
							width: 32,
							height: 48,
							alignSelf: 'center',
						}}
						source={iplIcon}
					/>
					<View style={{ alignSelf: 'center', paddingHorizontal: 4 }}>
						<HunterSemiBoldText style={styles.iplNameHeading}>
							IPL
						</HunterSemiBoldText>
						<HunterText style={styles.iplNameSubHeading}>Bonanza</HunterText>
					</View>
				</View>
				<View style={styles.leaderHead}>
					<HunterText style={styles.leaderHeadText}>Leaderboard</HunterText>
				</View>
			</View>

			<View style={styles.LeaderBoardCards}>
				{LeaderBoardInfo?.map((item, i) =>
					i < 5 ? (
						<IplLeaderCard
							index={i}
							playerName={item.user_id}
							user_winnings={item.user_winnings}
							key={item.user_id}
						/>
					) : null,
				)}
			</View>

			<Pressable onPress={() => navigation.navigate('ViewAllIplLeaderBoard')}>
				<View style={styles.allBtn}>
					<HunterText style={styles.allBtnText}>View All</HunterText>
				</View>
			</Pressable>
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
		height: 100,
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
		marginTop: 10,
		marginBottom: 30,
		backgroundColor: 'white',
		borderRadius: 20,
		marginHorizontal: 10,
	},
	leaderHead: {
		borderStyle: 'solid',
		// borderColor: "red",
		// borderWidth: 2,
		justifyContent: 'center',
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	iplIcon: {
		width: screenUtils.width / 4,
		paddingHorizontal: 10,
		display: 'flex',
		flexDirection: 'row',
	},
	iplNameHeading: {
		color: '#263D88',
		fontSize: 20,
	},
	iplNameSubHeading: {
		color: '#0B0617',
		fontSize: 12,
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

export default IplLeaderBoard
