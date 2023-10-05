import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useState , useEffect } from 'react'
import LeaderBoardCard from './../Home/components/LeaderBoardCard'
// import { SafeAreaView } from 'react-native-safe-area-context'
import screenUtils from '../../constants/Dimensions'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import { useNavigation } from '@react-navigation/native'

function LeaderBoard() {

	const data = [
		{"id": 1, "name": "Sania Das"},
		{"id": 2, "name": "Priyanka Das"},
		{"id": 3, "name": "Rhea Das"},
		{"id": 4, "name": "Kirti Das"},
		{"id": 5, "name": "Urvi Das"},
	]

	// const renderItem = () => (
	//     <LeaderBoardCard/>
	//   );
	const timeSlot = [ 'Weekly' , 'Monthly' , 'Daily']
    const type = "timeSlotBtn"
	const [typeIndex , setTypeIndex] = useState(0)
	const navigation = useNavigation()
	useEffect(() => {
		if(typeIndex==0){
           //call api of weekly leader board and map response to card
		}


		if(typeIndex==1){
           //call api of monthly leader board and map response to card
		}
			

		if(typeIndex==2){
          //call api of daily leader board and map response to card
		}
    
		
		
	}, [typeIndex])
	return (
		// <SafeAreaView style={styles.upperContainer}>

		<View style={styles.leaderMain}>
			<View style={styles.leaderOutView}>
				<View style={styles.leaderHead}>
					<Text style={styles.leaderHeadText}>Leaderboard</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginVertical: screenUtils.height / 54,
						width: screenUtils.width/1.1,
					    // borderWidth:1
						

					}}
				>
				{timeSlot.map((type, index) => (
						<FilterButton
							onPress={() => setTypeIndex(index)}
							active={index === typeIndex}
							key={index}
							style={{
								width: screenUtils.width / 3.4,
								paddingHorizontal: screenUtils.width / 20,
								paddingVertical: screenUtils.height / 85,
								borderTopLeftRadius: index == 0 ? 8 : 0,
								borderBottomLeftRadius: index == 0 ? 8 : 0,
								borderTopRightRadius: index == 2 ? 8 : 0,
								borderBottomRightRadius: index == 2 ? 8 : 0,
							}}
							title={type}
						/>
					))}
					</View>
			</View>

			<View style={styles.LeaderBoardCards}>
			<FlatList
				removeClippedSubviews={true}
				data={data}
				renderItem={({ item }) => (
					<Pressable
						key={item.id}
						onPress={() => {
							navigation.navigate('Portfolio', { name: item.name })
						}}
					>
						<LeaderBoardCard name={item.name} />
					</Pressable>
				)}
				keyExtractor={(item) => item.id}
			/>
			{/* <Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable> */}
			</View>

			<Pressable onPress={() => navigation.navigate('ViewAllLeaderBoard')} >
				<View style={styles.allBtn}>
					<Text style={styles.allBtnText}  >Viewall</Text>
				</View>
			</Pressable>
		</View>

		// </SafeAreaView>
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
		// borderColor: "black",
		borderBottomWidth: 1,
		height: 127,
		borderBottomColor: '#BEBEBE',
	},
	leaderMain: {
		// borderColor: "blue",
		// borderWidth: 2,
		display: 'flex',
		padding: 10,
		marginVertical: 10,
	},
	leaderHead: {
		// borderStyle:"solid",
		// borderColor: "red",
		// borderWidth: 2,
		justifyContent: 'center',
		paddingVertical: 10,
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

export default LeaderBoard
