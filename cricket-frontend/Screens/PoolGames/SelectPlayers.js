import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import TeamCount from './components/TeamCount'
import TeamPlayersListing from './components/TeamPlayersListing'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import Colors from '../../styles/Colors'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'
import { useNavigation } from '@react-navigation/native'
import TeamPreview from './TeamPreview'
import screenUtils from '../../constants/Dimensions'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import Cross from '../../assets/Images/Svg/Cross'
import ShowTeams from './components/ShowTeams'
import { getSquadByMatchId } from './apiFunctions'
import { useDispatch, useSelector } from 'react-redux'
import timeTillStart from '../../helpers/timeTillStartHelper'
import { setSelectedSquad } from '../../redux/features/PoolGameSlices/squadSlice'
import { setFullMatchSquad } from '../../redux/features/PoolGameSlices/fullMatchSquadSlice'
import AnimatedLottieView from 'lottie-react-native'
import { loadingBat } from '../../assets/assets'
import BatLoader from '../../components/UI/Loader/BatLoader'

const SelectPlayers = (props) => {
	const matchDetails = useSelector((state) => state.currentMatch.value)

	const [teamACount, setTeamACount] = useState(0)
	const [teamBCount, setTeamBCount] = useState(0)
	const [teamIndex, setTeamIndex] = useState(0)
	const [credits, setCredits] = useState(100)
	const navigation = useNavigation()
	const [players, setPlayers] = useState([[], [], [], []])
	const [allPlayers, setAllPlayers] = useState([[], [], [], []])
	const [selectedPlayers, setSelectedPlayers] = useState([])
	const [editSelectedPlayers, setEditSelectedPlayers] = useState([])
	const [typeIndex, setTypeIndex] = useState(0)
	const teamPreviewRef = useRef()
	const toggleTeamPreview = useCallback(() => {
		teamPreviewRef.current?.present()
	}, [])

	const editModePlayers = useSelector(
		(state) => state.selectedPlayersToEdit.value,
	)

	// bottom sheet for show teams
	const [showTeams, setShowTeams] = useState(false)
	const sheetRefForShowTeams = useRef(null)
	const snapPointsForShowTeams = [320]
	const [isLoading, setIsLoading] = useState(false)
	const mode = props.route.params.mode
	const editContestId = props.route.params.contestId
	useEffect(() => {
		setIsLoading(true)
		getSquadByMatchId(matchDetails.matchId)
			.then((response) => {
				setIsLoading(false)
				setPlayers(response.data)
				setAllPlayers(response.data)
				let d = response.data
				let x = []
				for (let i = 0; i < 4; i++) {
					for (let j = 0; j < d[i]?.length; j++) x.push(d[i][j])
				}
				dispatch(setFullMatchSquad(x))
				if (mode === 'edit') {
					setEditSelectedPlayers(editModePlayers)
					for (let i = 0; i < editModePlayers.length; i++) {
						let teams = editModePlayers[i].recent_teams.split('_')
						if (teams.includes(matchDetails.teamA))
							setTeamACount((state) => state + 1)
						if (teams.includes(matchDetails.teamB))
							setTeamBCount((state) => state + 1)
					}
				}
				// dispatch(setFullMatchSquad([1, 2, 3]))
			})
			.catch((err) => console.log(err))
	}, [])
	const handleshowTeamsbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForShowTeams?.current.snapToIndex(index)
			setShowTeams(true)
		} else if (index === -1) {
			sheetRefForShowTeams.current.close()
			setShowTeams(false)
		}
	}, [])
	const dispatch = useDispatch()
	return (
		<>
			<HunterGradient>
				<WalletHeader />
				<View style={styles.outerContainer}>
					<View style={{ width: '90%' }}>
						<View>
							<HunterSemiBoldText
								style={{
									textAlign: 'center',
									fontSize: screenUtils.width / 20,
								}}
							>
								{timeTillStart(matchDetails.startTime).result} left
							</HunterSemiBoldText>
							<Text
								style={{
									textAlign: 'center',
									fontSize: screenUtils.width / 30,
								}}
							>
								ICC T20 WC
							</Text>
						</View>
						<TeamCount
							teamAPlayerCount={teamACount}
							teamBPlayerCount={teamBCount}
							credits={credits}
							setCredits={setCredits}
							teamA={matchDetails.teamA}
							teamB={matchDetails.teamB}
						/>
					</View>
				</View>
				<View>
					{!isLoading ? (
						<TeamPlayersListing
							players={players[typeIndex]}
							typeIndex={typeIndex}
							setTypeIndex={setTypeIndex}
							selectedPlayers={selectedPlayers}
							setSelectedPlayers={setSelectedPlayers}
							handleshowTeamsbottomsheet={handleshowTeamsbottomsheet}
							setCredits={setCredits}
							setTeamACount={setTeamACount}
							setTeamBCount={setTeamBCount}
							teamA={matchDetails.teamA}
							teamB={matchDetails.teamB}
							teamACount={teamACount}
							teamBCount={teamBCount}
							mode={mode}
							teamIndex={teamIndex}
						/>
					) : (
						<BatLoader size={screenUtils.width / 2} />
					)}
				</View>
			</HunterGradient>
			<FooterButtons
				leftVisible={true}
				checked={true}
				rightPress={() => {
					if (teamACount + teamBCount == 11) {
						dispatch(setSelectedSquad(selectedPlayers))
						navigation.navigate('ChooseCaptain', {
							selectedPlayers: selectedPlayers,
							contestId: editContestId,
							mode: mode,
						})
					}
				}}
				leftPress={() => toggleTeamPreview()}
				leftTitle={'Team Preview'}
				rightTitle={'Continue'}
			/>
			<TeamPreview previewRef={teamPreviewRef} allPlayers={selectedPlayers} />

			{/* bottom sheet for show teams */}

			<TouchableOpacity
				onPress={() => setShowTeams(false)}
				activeOpacity={1}
				style={
					!showTeams
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForShowTeams}
					snapPoints={snapPointsForShowTeams}
					enablePanDownToClose={true}
					onClose={() => handleshowTeamsbottomsheet(-1)}
				>
					<BottomSheetView>
						<View style={styles.sortby_heading_container}>
							<Text style={styles.sortby_heading}>Show Teams</Text>
							<TouchableOpacity
								style={styles.sortby_heading}
								onPress={() => handleshowTeamsbottomsheet(-1)}
							>
								<Cross />
							</TouchableOpacity>
						</View>
						<ShowTeams
							teamIndex={teamIndex}
							setTeamIndex={setTeamIndex}
							setPlayers={setPlayers}
							allPlayers={allPlayers}
							sheetRef={sheetRefForShowTeams}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>
		</>
	)
}

export default SelectPlayers

const styles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		borderWidth: 2,
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		borderColor: Colors.white,
		paddingVertical: screenUtils.height / 53.2,
		backgroundColor: '#FFFFFF66',
	},
	sortby_background_container_0: {
		display: 'none',
	},
	sortby_background_container_100: {
		display: 'flex',
		height: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		top: 0,
		width: '100%',
	},
	sortby_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 10,
		paddingRight: 30,
		height: 60,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	sortby_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
})
