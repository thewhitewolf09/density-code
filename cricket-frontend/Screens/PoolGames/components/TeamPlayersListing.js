import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../styles/Colors'
import FilterButton from '../../../components/UI/Buttons/FilterButton'
import PoolPlayerCard from './PoolPlayerCard'
import { pool_player_image } from '../../../assets/assets'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import HunterText from '../../../components/UI/HunterText'
import screenUtils from '../../../constants/Dimensions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const TeamPlayersListing = ({
	typeIndex,
	setTypeIndex,
	players,
	selectedPlayers,
	setSelectedPlayers,
	handleshowTeamsbottomsheet,
	setCredits,
	setTeamACount,
	setTeamBCount,
	teamA,
	teamB,
	teamACount,
	teamBCount,
	mode,
	teamIndex,
}) => {
	const [playerCount, setPlayerCount] = useState([0, 0, 0, 0])
	const playerTypes = [
		'WK(' + playerCount[0] + ')',
		'BAT(' + playerCount[1] + ')',
		'ALL(' + playerCount[2] + ')',
		'BOWL(' + playerCount[3] + ')',
	]
	const editModePlayers = useSelector(
		(state) => state.selectedPlayersToEdit.value,
	)
	const teamName = ['All Teams', teamA, teamB]
	const [tabType, setTabType] = useState()
	const [limitMessage, setLimitMessage] = useState()
	const [showLimit, setShowLimit] = useState(false)
	useEffect(() => {
		if (typeIndex === 0) setTabType('Wicket Keepers')
		if (typeIndex === 1) setTabType('Batsman')
		if (typeIndex === 2) setTabType('All rounders')
		if (typeIndex === 3) setTabType('Bowlers')
	}, [typeIndex])
	useEffect(() => {
		if (mode === 'edit') {
			setSelectedPlayers(editModePlayers)
			let tempBowlCount = 0,
				tempBatCount = 0,
				tempWKCount = 0
			for (let i = 0; i < editModePlayers.length; i++) {
				if (editModePlayers[i].type === 'Bowler') tempBowlCount++
				if (editModePlayers[i].type === 'Batsman') tempBatCount++
				if (editModePlayers[i].type === 'Keeper') tempWKCount++
			}
			setPlayerCount([tempWKCount, tempBatCount, 0, tempBowlCount])
		}
	}, [])
	const showLimitHandler = () => {
		setShowLimit(true)
		setTimeout(() => {
			setShowLimit(false)
		}, 2000)
	}
	const handleSelection = (player) => {
		if (
			selectedPlayers.findIndex((sPlayer) => {
				return sPlayer.id == player.id
			}) === -1
		) {
			let valid = true
			if (teamACount + teamBCount == 11) {
				valid = false
				setLimitMessage("Can't select more than 11 players")
				showLimitHandler()
			} else if (player.team === teamA) {
				teamACount < 7
					? setTeamACount((s) => s + 1)
					: ((valid = false),
					  setLimitMessage("Can't select more than 7 players from a team"),
					  showLimitHandler())
			} else
				teamBCount < 7
					? setTeamBCount((s) => s + 1)
					: ((valid = false),
					  setLimitMessage("Can't select more than 7 players from a team"),
					  showLimitHandler())

			if (valid) {
				setSelectedPlayers((e) => [
					...e,
					{
						id: player.id,
						type: player.type,
						name: player.name,
						image_url: player.image_url,
						fantasy_points: player.fantasy_points,
					},
				])
				setCredits((state) => state - player.credit)
				let tempPlayerCount = playerCount
				tempPlayerCount[typeIndex]++
				setPlayerCount(tempPlayerCount)
			}
		} else {
			setCredits((state) => state + player.credit)
			setSelectedPlayers(
				selectedPlayers.filter((sPlayer) => {
					return sPlayer.id !== player.id
				}),
			)
			let tempPlayerCount = playerCount
			tempPlayerCount[typeIndex]--
			setPlayerCount(tempPlayerCount)
			if (player.team === teamA) setTeamACount((s) => s - 1)
			else setTeamBCount((s) => s - 1)
		}
	}
	return (
		<>
			<View
				style={{
					backgroundColor: Colors.white,
					height: '100%',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginVertical: screenUtils.height / 54,
					}}
				>
					{playerTypes?.map((type, index) => (
						<FilterButton
							onPress={() => setTypeIndex(index)}
							active={index === typeIndex}
							key={index}
							style={{
								paddingHorizontal: screenUtils.width / 20,
								paddingVertical: screenUtils.height / 85,
								borderTopLeftRadius: index == 0 ? 8 : 0,
								borderBottomLeftRadius: index == 0 ? 8 : 0,
								borderTopRightRadius: index == 3 ? 8 : 0,
								borderBottomRightRadius: index == 3 ? 8 : 0,
							}}
							title={type}
						/>
					))}
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginHorizontal: screenUtils.width / 20,
						marginVertical: screenUtils.height / 85,
					}}
				>
					<HunterSemiBoldText
						style={{
							textAlignVertical: 'center',
							fontSize: showLimit ? 10 : 12,
							color: showLimit ? 'red' : 'black',
						}}
					>
						{!showLimit ? `Select 1-4 ${tabType}` : limitMessage}
					</HunterSemiBoldText>
					<View
						style={{
							flexDirection: 'row',
							borderRadius: 10,
							borderColor: Colors.secondaryDark,
							borderWidth: 1,
							padding: screenUtils.height / 212,
							paddingHorizontal: screenUtils.width / 40,
						}}
					>
						<HunterSemiBoldText style={{ fontSize: screenUtils.width / 33.3 }}>
							Showing :{' '}
						</HunterSemiBoldText>
						<Pressable onPress={() => handleshowTeamsbottomsheet(0)}>
							<Text style={{ fontSize: 12 }}>{teamName[teamIndex]}</Text>
						</Pressable>
					</View>
				</View>

				<View style={{ flex: 1 }}>
					<View
						style={{
							flexDirection: 'row',
						}}
					>
						<View style={{ width: '50%' }}>
							<HunterText
								style={{
									fontSize: screenUtils.width / 33.3,
									textAlign: 'center',
								}}
							>
								{' '}
								Player
							</HunterText>
						</View>
						<View style={{ width: '20%' }}>
							<HunterText
								style={{
									fontSize: screenUtils.width / 33.3,
									textAlign: 'center',
								}}
							>
								{' '}
								Points
							</HunterText>
						</View>
						<View style={{ width: '20%' }}>
							<HunterText
								style={{
									fontSize: screenUtils.width / 33.3,
									textAlign: 'center',
								}}
							>
								{' '}
								Credits
							</HunterText>
						</View>
						<View style={{ width: '10%' }}>
							<HunterText
								style={{
									fontSize: screenUtils.width / 33.3,
									textAlign: 'center',
								}}
							>
								{' '}
							</HunterText>
						</View>
					</View>

					<ScrollView
						style={{
							marginBottom: screenUtils.height / 1.235,
						}}
					>
						{players &&
							players?.map((player, index) => (
								<Pressable onPress={() => handleSelection(player)} key={index}>
									<PoolPlayerCard
										selected={
											selectedPlayers.findIndex(
												(sPlayer) => player.id === sPlayer.id,
											) !== -1
										}
										imageSource={
											player.image_url ? player.image_url : pool_player_image
										}
										name={player.name}
										creditScore={player.credit}
										points={player.ipl_strike_rate}
										teamName={player.team}
									/>
								</Pressable>
							))}
					</ScrollView>
				</View>
			</View>
		</>
	)
}

export default TeamPlayersListing

const styles = StyleSheet.create({})
