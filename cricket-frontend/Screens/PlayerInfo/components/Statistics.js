import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HunterText from '../../../components/UI/HunterText'
import FilterButton from '../../../components/UI/Buttons/FilterButton'
import { getPlayerStatistics } from './apiFunction'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function Statistics({ Player }) {
	const [x, setX] = useState('ipl')
	// const [stats, setStats] = useState('')
	const matchTypes = ['IPL', 'T20', 'ODI', 'TEST', 'DOMESTIC']
	const [selectedMatchTypeIndex, setSelectedMatchTypeIndex] = useState(0)
	// // Fetching Players Data from API
	// useEffect(() => {
	// 	getPlayerStatistics()
	// 		.then((response) => {
	// 			setStats(response.data)
	// 		})
	// 		.catch((error) => console.log(error))
	// }, [])
	console.log(Player)
	const StatCard = ({ title, stat }) => {
		return (
			<View style={styles.StatCardOutView}>
				<View style={styles.statCardString}>
					<HunterText style={styles.statCardStringText}>{title}</HunterText>
				</View>
				<View style={styles.statCardNum}>
					<HunterText style={styles.statCardNumText}>{stat}</HunterText>
				</View>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.upperContainer}>
			<View style={styles.StatScreenOut}>
				{/* BOWLING STATS */}

				<View style={styles.StatScreenHead}>
					<HunterText style={styles.StatScreenHeadText}>
						Bowling Stats
					</HunterText>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginVertical: 14,
						paddingHorizontal: 10,
						//   borderWidth:1,
						//   borderColor:'black'
					}}
				>
					{matchTypes.map((matchType, index) => (
						<FilterButton
							active={index === selectedMatchTypeIndex}
							onPress={() => {
								setSelectedMatchTypeIndex(index)
								setX(matchType.toLowerCase())
							}}
							title={matchType}
							key={matchType}
						/>
					))}
				</View>
				<View>
					<StatCard title="Matches" stat={Player[`${x}_no_of_matches`]} />
					<StatCard title="Innings" stat={Player[`${x}_no_of_innings`]} />
					<StatCard title="Wickets" stat={Player[`${x}_no_of_wickets`]} />
					<StatCard title="Avg" stat={Player[`${x}_average`]} />
					<StatCard title="Economy" stat={Player[`${x}_economy`]} />
					<StatCard title="Maidens" stat={Player[`${x}_no_of_maidens`]} />
				</View>

				<View style={styles.StatScreenHead}>
					<HunterText style={styles.StatScreenHeadText}>
						Batting Stats
					</HunterText>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginVertical: 14,
						paddingHorizontal: 10,
						//   borderWidth:1,
						//   borderColor:'black'
					}}
				>
					{matchTypes.map((matchType, index) => (
						<FilterButton
							active={index === selectedMatchTypeIndex}
							onPress={() => {
								setSelectedMatchTypeIndex(index)
								setX(matchType.toLowerCase())
							}}
							title={matchType}
							key={matchType}
						/>
					))}
				</View>
				<View>
					<StatCard title="Matches" stat={Player[`${x}_no_of_matches`]} />
					<StatCard title="Innings" stat={Player[`${x}_no_of_innings`]} />
					<StatCard title="Runs" stat={Player[`${x}_no_of_runs`]} />
					<StatCard title="Avg" stat={Player[`${x}_average`]} />
					<StatCard title="StrikeRate" stat={Player[`${x}_strike_rate`]} />
					<StatCard
						title="50s/100s"
						stat={
							Player[`${x}_no_of_fifties`] +
							`${'/'}` +
							Player[`${x}_no_of_hundreds`]
						}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		backgroundColor: 'white',
		paddingHorizontal: 20,
		marginVertical: 16,
		// borderColor: "red",
		// borderWidth: 2,
	},
	StatCardOutView: {
		display: 'flex',
		flexDirection: 'row',
		borderColor: '#EDEFF1',
		borderBottomWidth: 1,
		justifyContent: 'space-between',
		backgroundColor: '#FFFFFF',
		// elevation: 4,
		// marginVertical:3
	},
	statCardString: {
		// borderColor: "yellow",
		// borderWidth: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	statCardStringText: {
		fontSize: 14,
		fontWeight: '400',
	},
	statCardNum: {
		// borderColor: "yellow",
		// borderWidth: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	statCardNumText: {
		fontSize: 14,
		fontWeight: '400',
	},

	//from here screen

	StatScreenOut: {
		//  borderColor: "yellow",
		// borderWidth: 2,
	},
	StatScreenHead: {
		//  borderColor: "blue",
		// borderWidth: 2,
		paddingVertical: 10,
		paddingHorizontal: 10,
		display: 'flex',
		justifyContent: 'center',
	},
	StatScreenHeadText: {
		fontSize: 20,
		fontWeight: '600',
	},
})

export default Statistics
