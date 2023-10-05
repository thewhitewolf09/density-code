import {
	View,
	StyleSheet,
	Dimensions,
	Image,
	Pressable,
	Text,
} from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import HunterText from './HunterText'
import { LinearGradient } from 'expo-linear-gradient'
import screenUtils from '../../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'
import FirstBadge from '../../assets/Images/Svg/FirstBadge'
import Prize from '../../assets/Images/Svg/Prize'
import paymentsIcon, { sampleUser } from '../../assets/assets'
import HunterSemiBoldText from './HunterSemiBoldText'
import NumberToWord from '../../helpers/NumberToWord'
import Payments from '../../assets/Images/Svg/Payments'
import GroupsSvg from '../../assets/Images/Svg/Groups_svg'
import Edit from '../../assets/Images/Svg/Edit'
import { useDispatch } from 'react-redux'
import { setSelectedSquad } from '../../redux/features/PoolGameSlices/squadSlice'
import { setSelectedSquadToEdit } from '../../redux/features/PoolGameSlices/editSquadSlice'
import shortName from '../../helpers/shortNameHelper'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

// import { LinearGradient } from 'expo-linear-gradient';

export default function MyTeamCard({
	teamIndex,
	teamA,
	teamB,
	teamDetails,
	//setPreview
	previewFn,
	setPreviewPlayers,
	contestId,
}) {
	const navigation = useNavigation()
	const [captain, setCaptain] = useState('')
	const [viceCaptain, setViceCaptain] = useState('')
	const dispatch = useDispatch()
	let selectedPlayers = []
	const [playerList, setPlayerList] = useState()
	const [teamACount, setTeamACount] = useState(0)
	const [teamBCount, setTeamBCount] = useState(0)
	useEffect(() => {
		// for captain and vice captain
		let tempteamA = 0
		let tempteamB = 0
		teamDetails.players.map((player) => {
			if (teamDetails.captain_id === player.id) {
				setCaptain(player.name)
			}

			if (teamDetails.vice_captain_id === player.id) {
				setViceCaptain(player.name)
			}
			let tempTeams = player.recent_teams.split('_')
			console.log(tempTeams)

			if (tempTeams.includes(teamA) == true) tempteamA++
			if (tempTeams.includes(teamB) == true) tempteamB++
		})
		selectedPlayers = teamDetails.players
		setTeamACount(tempteamA)
		setTeamBCount(tempteamB)
		setPlayerList(selectedPlayers)
	}, [])
	console.log(teamA)
	const handlePreviewPlayers = () => {
		selectedPlayers = teamDetails.players
		setPreviewPlayers(selectedPlayers)
		previewFn()
	}
	return (
		// <SafeAreaView style={styles.upperContainer}>

		<View style={styles.ContestMain}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<HunterSemiBoldText>My Team {teamIndex + 1}</HunterSemiBoldText>

				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<Pressable
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							borderColor: '#E4E0F3',
							paddingHorizontal: 10,
							borderRadius: 8,
							borderWidth: 1,
						}}
						onPress={handlePreviewPlayers}
					>
						<GroupsSvg />
						<HunterSemiBoldText
							style={{
								fontSize: 12,
								lineHeight: 18,
								marginLeft: 5,
							}}
						>
							Preview
						</HunterSemiBoldText>
					</Pressable>
					<Pressable
						onPress={() => {
							dispatch(setSelectedSquadToEdit(playerList))
							navigation.navigate('SelectPlayers', {
								mode: 'edit',
								contestId: contestId,
							})
						}}
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							paddingHorizontal: 10,
							marginLeft: 10,
						}}
					>
						<Edit color="#6D48FF" />
						<HunterSemiBoldText
							style={{
								fontSize: 12,
								lineHeight: 18,
								marginLeft: 5,
								color: '#6D48FF',
							}}
						>
							Edit
						</HunterSemiBoldText>
					</Pressable>
				</View>
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginVertical: 10,
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '40%',
						paddingRight: 20,
					}}
				>
					<View style={{ display: 'flex', flexDirection: 'column' }}>
						<HunterText style={{ fontSize: 10, color: '#525252' }}>
							{shortName(teamA)}
						</HunterText>
						<HunterSemiBoldText style={{ fontSize: 14, color: '#0B0617' }}>
							{teamACount}
						</HunterSemiBoldText>
					</View>
					<View style={{ display: 'flex', flexDirection: 'column' }}>
						<HunterText style={{ fontSize: 10, color: '#525252' }}>
							{shortName(teamB)}
						</HunterText>
						<HunterSemiBoldText style={{ fontSize: 14, color: '#0B0617' }}>
							{teamBCount}
						</HunterSemiBoldText>
					</View>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						width: '60%',
					}}
				>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '50%',
						}}
					>
						<View
							style={{
								position: 'absolute',
								left: 16,
								top: -20,
							}}
						>
							<Image source={sampleUser} style={{ width: 40, height: 40 }} />
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#6D48FF',
								borderRadius: 48,
								width: 20,
								height: 20,
								position: 'absolute',
								left: 7,
								top: -20,
							}}
						>
							<HunterText
								style={{
									color: 'white',
									fontSize: 10,
									lineHeight: 15,
								}}
							>
								C
							</HunterText>
						</View>

						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#262626',
								borderRadius: 4,
								paddingHorizontal: 10,
								paddingVertical: 3,
								position: 'absolute',
								left: 0,
								top: 9,
							}}
						>
							<HunterText
								style={{
									color: 'white',
									fontSize: 10,
									lineHeight: 15,
								}}
							>
								{captain}
							</HunterText>
						</View>
					</View>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '50%',
						}}
					>
						<View
							style={{
								position: 'absolute',
								left: 16,
								top: -20,
							}}
						>
							<Image source={sampleUser} style={{ width: 40, height: 40 }} />
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#6D48FF',
								borderRadius: 48,
								width: 20,
								height: 20,
								position: 'absolute',
								left: 7,
								top: -20,
							}}
						>
							<HunterText
								style={{
									color: 'white',
									fontSize: 10,
									lineHeight: 15,
								}}
							>
								VC
							</HunterText>
						</View>

						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#262626',
								borderRadius: 4,
								paddingHorizontal: 10,
								paddingVertical: 3,
								position: 'absolute',
								left: 0,
								top: 9,
							}}
						>
							<HunterText
								style={{
									color: 'white',
									fontSize: 10,
									lineHeight: 15,
								}}
							>
								{viceCaptain}
							</HunterText>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.MatchCardFooter}>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<HunterText
						style={{
							fontSize: 10,
							lineHeight: 15,
							color: '#737373',
						}}
					>
						WK
					</HunterText>
					<HunterSemiBoldText
						style={{
							fontSize: 10,
							lineHeight: 15,
						}}
					>
						{' '}
						{
							teamDetails.players.filter((player) => player.type === 'Keeper')
								.length
						}
					</HunterSemiBoldText>
				</View>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<HunterText
						style={{
							fontSize: 10,
							lineHeight: 15,
							color: '#737373',
						}}
					>
						BAT
					</HunterText>
					<HunterSemiBoldText
						style={{
							fontSize: 10,
							lineHeight: 15,
						}}
					>
						{' '}
						{
							teamDetails.players.filter((player) => player.type === 'Batsman')
								.length
						}
					</HunterSemiBoldText>
				</View>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<HunterText
						style={{
							fontSize: 10,
							lineHeight: 15,
							color: '#737373',
						}}
					>
						AR
					</HunterText>
					<HunterSemiBoldText
						style={{
							fontSize: 10,
							lineHeight: 15,
						}}
					>
						{' '}
						{
							teamDetails.players.filter(
								(player) => player.type === 'Allrounder',
							).length
						}
					</HunterSemiBoldText>
				</View>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<HunterText
						style={{
							fontSize: 10,
							lineHeight: 15,
							color: '#737373',
						}}
					>
						BOWL
					</HunterText>
					<HunterSemiBoldText
						style={{
							fontSize: 10,
							lineHeight: 15,
						}}
					>
						{' '}
						{
							teamDetails.players.filter((player) => player.type === 'Bowler')
								.length
						}
					</HunterSemiBoldText>
				</View>
			</View>
		</View>

		// </SafeAreaView>
	)
}
const styles = StyleSheet.create({
	upperContainer: {
		// backgroundColor: "#5F40DD4D",
		paddingTop: 5,
		paddingBottom: 1,
		borderColor: 'red',
		borderWidth: 2,
		marginTop: 50,
	},

	tinyLogo: {
		width: 50,
		height: 50,
		// borderColor: "red",
		// borderWidth: 2,
	},
	MatchCardFooter: {
		borderColor: 'white',
		borderWidth: 2,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		borderRadius: 32,
		paddingHorizontal: 15,
		backgroundColor: '#F9F9F9',
		marginTop: 25,
		alignItems: 'center',
		height: 36,
		elevation: 10,
	},
	ContestMain: {
		borderColor: '#D8D3E9',
		borderWidth: 2,
		width: screenUtils.width / 1.1,
		dispaly: 'flex',
		borderRadius: 20,
		flexDirection: 'column',
		paddingHorizontal: 16,
		paddingVertical: screenUtils.height / 54,
		marginVertical: 10,
	},
})
