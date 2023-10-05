import { Pressable, StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import { useState , useEffect } from 'react'
import LeaderBoardCard from './../Home/components/LeaderBoardCard'
// import { SafeAreaView } from 'react-native-safe-area-context'
import screenUtils from '../../constants/Dimensions'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../../assets/Images/Svg/BackArrow'


function ViewAllLeaderBoard() {
	// const renderItem = () => (
	//     <LeaderBoardCard/>
	//   );
    const navigation = useNavigation();
	const timeSlot = [ 'Weekly' , 'Monthly' , 'Daily']
    const type = "timeSlotBtn"
	const [typeIndex , setTypeIndex] = useState(0)
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

                <Pressable onPress={() => navigation.goBack()}>
                <View style={{borderWidth:0 , paddingVertical:screenUtils.height / 120 , paddingHorizontal:screenUtils.width / 20}}><BackArrow/></View>
                </Pressable>
                <Text style={[styles.leaderHeadText , {borderWidth:0}]}>Stocks Leaderboard</Text>
               
					
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

			<ScrollView style={[styles.LeaderBoardCards, {height:screenUtils.height/1.2}]}>
            <Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
            <Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
            <Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			<Pressable onPress={() => navigation.navigate('Portfolio')} ><LeaderBoardCard /></Pressable>
			</ScrollView>

			
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
		// justifyContent: 'space-around',
		paddingVertical: 10,
        display:'flex',
        flexDirection:'row'
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

export default ViewAllLeaderBoard
