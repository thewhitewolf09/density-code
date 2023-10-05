import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Pressable,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ShowTeams = ({
	allPlayers,
	setPlayers,
	teamIndex,
	setTeamIndex,
	sheetRef,
}) => {
	const teamA = useSelector((state) => state.currentMatch.value.teamA)
	const teamB = useSelector((state) => state.currentMatch.value.teamB)
	const show_teams = [
		{
			name: 'All Teams',
		},
		{
			name: teamA,
		},
		{
			name: teamB,
		},
	]
	useEffect(() => {
		if (teamIndex === 2) {
			let x = [[]]
			x[0] =
				allPlayers && allPlayers[0]?.filter((player) => player.team === teamB)
			x[1] =
				allPlayers && allPlayers[1]?.filter((player) => player.team === teamB)
			x[3] =
				allPlayers && allPlayers[3]?.filter((player) => player.team === teamB)
			setPlayers(x)
		}
		if (teamIndex === 1) {
			let x = [[]]
			x[0] =
				allPlayers && allPlayers[0]?.filter((player) => player.team === teamA)
			x[1] =
				allPlayers && allPlayers[1]?.filter((player) => player.team === teamA)
			x[3] =
				allPlayers && allPlayers[3]?.filter((player) => player.team === teamA)
			setPlayers(x)
			sheetRef.current.close()
		}
		if (teamIndex === 0) setPlayers(allPlayers)
	}, [teamIndex])
	return (
		<View style={{ padding: 20 }}>
			{show_teams &&
				show_teams.map((item, i, arr) => {
					return teamIndex === i ? (
						<Pressable key={i} style={styles.sortby_text}>
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

							<Text style={styles.sortby_text.font}>{item.name}</Text>
						</Pressable>
					) : (
						<Pressable
							key={i}
							style={styles.sortby_text}
							onPress={() => {
								setTeamIndex(i)
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
							<Text style={styles.sortby_text.font}>{item.name}</Text>
						</Pressable>
					)
				})}
		</View>
	)
}

export default ShowTeams

const styles = StyleSheet.create({
	sortby_text: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		font: {
			marginLeft: 10,
			height: 21,
			fontSize: 14,
			lineHeight: 21,
			color: '#1F1D2',
			fontWeight: '500',
		},
	},
})
