import {
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'
import Colors from '../../styles/Colors'
import HunterText from '../../components/UI/HunterText'
import CapViceCapCard from './components/CapViceCapCard'
import TeamPreview from './TeamPreview'
import { useState } from 'react'
import screenUtils from '../../constants/Dimensions'
import { createParticipation, updateParticipation } from './apiFunctions'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import Cross from '../../assets/Images/Svg/Cross'
import Confirmation from './components/Confirmation'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import SelectStockToSell from './SelectStockToSell'
import ContestJoinedSuccess from './ContestJoinedSuccess'
import YouveWon from './YouveWon'
import LiquidatePopUp from './../PoolGames/LiquidatePopUp'
import timeTillStart from '../../helpers/timeTillStartHelper'
import TimeProgressBar from '../../components/UI/TimeProgressBar'
import shortName from '../../helpers/shortNameHelper'
import HunterBoldText from '../../components/UI/HunterBoldText'
import BatLoader from '../../components/UI/Loader/BatLoader'

const CapViceCap = (props) => {
	const teamPreviewRef = useRef()
	const toggleTeamPreview = useCallback(() => {
		teamPreviewRef.current?.present()
	}, [])
	const [captainId, setCaptainId] = useState(-1)
	const [vCaptainId, setvCaptainId] = useState(-1)
	const contestDetails = useSelector((state) => state.currentContest.value)
	const userDetails = useSelector((state) => state.user.value)
	const selectedPlayers = useSelector((state) => state.selectedPlayers.value)
	const walletBalance = useSelector(
		(state) => state.portfolio.value.wallet_balance,
	)
	const matchDetails = useSelector((state) => state.currentMatch.value)
	const entryFee = useSelector((state) => state.currentContest.value.entryFee)
	const [confirmation, setConfirmation] = useState(false)
	const sheetRefForConfirmation = useRef(null)
	const [isLoading, setIsLoading] = useState(false)
	const [swipe, setSwipe] = useState(true)
	const [state, setState] = useState(1)
	const [isInsufficient, setIsInsufficient] = useState(0)
	useEffect(() => {
		setIsInsufficient(walletBalance < entryFee)
	}, [])
	// if holding detected == true
	// if not holding detected == false
	const [sellStock, setSellStock] = useState(true)
	if (state === 1) {
		// if (sellStock===true) {
		//     var snapPointsForConfirmation = [420];
		// }
		// else {
		//     var snapPointsForConfirmation = [360];
		// }
		var snapPointsForConfirmation = [300]
	} else {
		if (isInsufficient === 1) {
			snapPointsForConfirmation = [460]
		} else {
			snapPointsForConfirmation = [480]
		}
	}

	const handleconfirmationbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForConfirmation?.current.snapToIndex(index)
			setConfirmation(true)
		} else if (index === -1) {
			sheetRefForConfirmation.current.close()
			setConfirmation(false)
			setSwipe(true)
		}
	}, [])

	// bottom sheet for selling stock message
	const [sellStockBottomSheet, setSellStockBottomSheet] = useState(false)
	const sheetRefForSellStock = useRef(null)

	const snapPointsForSellStock = [512]

	const handlesellstockbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForSellStock?.current.snapToIndex(index)
			setSellStockBottomSheet(true)
		} else if (index === -1) {
			sheetRefForSellStock.current.close()
			setSellStockBottomSheet(false)
			setSwipe(true)
		}
	}, [])

	// bottom sheet for contest joined message
	const [joined, setJoined] = useState(false)
	const sheetRefForJoined = useRef(null)

	const snapPointsForJoined = [486]

	const handlejoinedbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForJoined?.current.snapToIndex(index)
			setJoined(true)
		} else if (index === -1) {
			sheetRefForJoined.current.close()
			setJoined(false)
		}
	}, [])

	// bottom sheet for contest joined message
	const [result, setResult] = useState(false)
	const sheetRefForResult = useRef(null)

	// useEffect(() => {
	// 	if (result === false) {
	// 		handleresultbottomsheet(0)
	// 	}
	// }, [])

	const snapPointsForResult = [426]

	const handleresultbottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForResult?.current.snapToIndex(index)
			setResult(true)
		} else if (index === -1) {
			sheetRefForResult.current.close()
			setResult(false)
		}
	}, [])

	// bottom sheet for contest joined message
	const [liquidate, setLiquidate] = useState(false)
	const sheetRefForLiquidate = useRef(null)

	const snapPointsForLiquidate = [552]

	const handleLiquidatebottomsheet = useCallback((index) => {
		if (index === 0) {
			sheetRefForLiquidate?.current.snapToIndex(index)
			setLiquidate(true)
		} else if (index === -1) {
			sheetRefForLiquidate.current.close()
			setLiquidate(false)
		}
	}, [])

	const saveTeam = () => {
		setIsLoading(true)
		console.log(
			'saving team',
			JSON.stringify({
				contest_id: props.route.params.contestId,
				user_id: userDetails,
				captain_id: captainId,
				vice_captain_id: vCaptainId,
				player_ids: selectedPlayers.map((player) => player.id),
			}),
		)
		if (props.route.params.mode === 'edit') {
			updateParticipation(
				JSON.stringify({
					contest_id: props.route.params.contestId,
					user_id: userDetails,
					captain_id: captainId,
					vice_captain_id: vCaptainId,
					player_ids: selectedPlayers.map((player) => player.id),
				}),
			)
		} else {
			createParticipation(
				JSON.stringify({
					contest_id: contestDetails.contestId,
					user_id: userDetails,
					captain_id: captainId,
					vice_captain_id: vCaptainId,
					player_ids: selectedPlayers.map((player) => player.id),
					entry_fee: parseFloat(entryFee + 0.0),
				}),
			)
				.then((res) => {
					console.log(res.data)
					setIsLoading(false)
				})
				.catch((err) => {
					console.log('capvicecap', err)
				})
		}
	}

	return (
		<>
			<HunterGradient>
				<WalletHeader />
				<View style={styles.outerContainer}>
					<View style={{ width: '90%' }}>
						<View>
							<HunterBoldText style={{ textAlign: 'center', fontSize: 20 }}>
								{timeTillStart(contestDetails.startTime).result} left
							</HunterBoldText>
							<HunterSemiBoldText style={{ textAlign: 'center' }}>
								{shortName(matchDetails.teamA)} v{' '}
								{shortName(matchDetails.teamB)}
							</HunterSemiBoldText>
						</View>
						<HunterSemiBoldText
							style={{
								textAlign: 'center',
								marginVertical: screenUtils.height / 85,
							}}
						>
							Choose your Captain and Vice Captain
						</HunterSemiBoldText>
						<View style={styles.pointsInfoCard}>
							<HunterText style={{ fontSize: 10, textAlignVertical: 'center' }}>
								Captain gets 2x points
							</HunterText>
							<HunterText style={{ fontSize: 10, textAlignVertical: 'center' }}>
								Vice Captain gets 1.5x points
							</HunterText>
						</View>
					</View>
				</View>
			</HunterGradient>

			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: screenUtils.width / 25,
					justifyContent: 'space-around',
				}}
			>
				<View style={{ width: '25%' }}>
					<HunterText style={{ fontSize: 12 }}> Type</HunterText>
				</View>
				<View style={{ width: '45%' }}>
					<HunterText style={{ fontSize: 12 }}> Points</HunterText>
				</View>
				<View style={{ width: '15%' }}>
					<HunterText style={{ fontSize: 12 }}> % C by</HunterText>
				</View>
				<View style={{ width: '15%' }}>
					<HunterText style={{ fontSize: 12 }}> % VC by</HunterText>
				</View>
			</View>
			<View>
				<ScrollView
					style={{
						height: '50%',
					}}
				>
					{selectedPlayers?.map((player, index) => (
						<CapViceCapCard
							key={index}
							cPer={4.3}
							vcPer={16.2}
							points={player.ipl_strike_rate}
							playerId={player.id}
							imageSource={player.image_url}
							selectedC={player.id === captainId}
							selectedVC={player.id === vCaptainId}
							c={captainId}
							setC={setCaptainId}
							vc={vCaptainId}
							setVC={setvCaptainId}
							name={player.name}
						/>
					))}
				</ScrollView>
			</View>
			<TeamPreview previewRef={teamPreviewRef} allPlayers={selectedPlayers} />

			{!isLoading ? (
				<FooterButtons
					leftVisible={true}
					checked={true}
					leftTitle={'Team Preview'}
					leftPress={() => toggleTeamPreview()}
					rightTitle={'Save Team'}
					rightPress={() => handleconfirmationbottomsheet(0)}
				/>
			) : (
				<BatLoader size={screenUtils.width / 4} />
			)}

			{/* bottom sheet for confirmation dialog */}

			<TouchableOpacity
				onPress={() => setConfirmation(false)}
				activeOpacity={1}
				style={
					!confirmation
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForConfirmation}
					snapPoints={snapPointsForConfirmation}
					enablePanDownToClose={true}
					onClose={() => handleconfirmationbottomsheet(-1)}
				>
					<BottomSheetView>
						<View style={styles.sortby_heading_container}>
							<HunterBoldText style={{ fontSize: 19 }}>
								Confirmation
							</HunterBoldText>
							<TouchableOpacity
								style={styles.sortby_heading}
								onPress={() => handleconfirmationbottomsheet(-1)}
							>
								<Cross />
							</TouchableOpacity>
						</View>
						<Confirmation
							swipe={swipe}
							setSwipe={setSwipe}
							handleconfirmationbottomsheet={handleconfirmationbottomsheet}
							state={state}
							isInsufficient={walletBalance < entryFee}
							sellStock={sellStock}
							handlesellstockbottomsheet={handlesellstockbottomsheet}
							handlejoinedbottomsheet={handlejoinedbottomsheet}
							saveTeamfn={saveTeam}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>

			{/* bottom sheet for sell stock dialog */}

			<View
				onPress={() => setSellStockBottomSheet(false)}
				activeOpacity={1}
				style={
					!sellStockBottomSheet
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForSellStock}
					snapPoints={snapPointsForSellStock}
					enablePanDownToClose={true}
					onClose={() => handlesellstockbottomsheet(-1)}
				>
					<BottomSheetView>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								paddingLeft: 24,
								paddingBottom: 10,
								// paddingRight: 30,
								height: 50,
								borderBottomColor: '#EAE5F4',
								borderBottomWidth: 1,
							}}
						>
							<TouchableOpacity
								style={{ ...styles.sortby_heading, paddingRight: 15 }}
								onPress={() => {
									handlesellstockbottomsheet(-1)
									handleconfirmationbottomsheet(0)
								}}
							>
								<BackArrow />
							</TouchableOpacity>
							<Text style={styles.sortby_heading}>Select stock to sell</Text>
						</View>
						<SelectStockToSell
							swipe={swipe}
							setSwipe={setSwipe}
							handlesellstockbottomsheet={handlesellstockbottomsheet}
							state={state}
							handleconfirmationbottomsheet={handleconfirmationbottomsheet}
							setState={setState}
						/>
					</BottomSheetView>
				</BottomSheet>
			</View>

			{/* bottom sheet for contest joined dialog */}

			<TouchableOpacity
				onPress={() => setJoined(false)}
				activeOpacity={1}
				style={
					!joined
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForJoined}
					snapPoints={snapPointsForJoined}
					enablePanDownToClose={true}
					onClose={() => handlejoinedbottomsheet(-1)}
				>
					<BottomSheetView>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								paddingLeft: 24,
								paddingBottom: 10,
								// paddingRight: 30,
								height: 50,
								borderBottomColor: '#EAE5F4',
								borderBottomWidth: 1,
							}}
						>
							<HunterText style={styles.sortby_heading}>
								Contest joined Sucessfully
							</HunterText>
						</View>
						<ContestJoinedSuccess />
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>

			{/* bottom sheet for result dialog */}

			<TouchableOpacity
				onPress={() => setResult(false)}
				activeOpacity={1}
				style={
					!result
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForResult}
					snapPoints={snapPointsForResult}
					enablePanDownToClose={true}
					onClose={() => handleresultbottomsheet(-1)}
					backgroundStyle={{ backgroundColor: '#EFECFA' }}
				>
					<BottomSheetView>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								paddingLeft: 24,
								paddingBottom: 10,
								// paddingRight: 30,
								height: 50,
								borderBottomColor: '#EAE5F4',
								borderBottomWidth: 1,
							}}
						>
							<Text style={styles.sortby_heading}>Yay! You've won</Text>
						</View>
						<YouveWon
							handleLiquidatebottomsheet={handleLiquidatebottomsheet}
							handleresultbottomsheet={handleresultbottomsheet}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>

			{/* bottom sheet for liquidate dialog */}

			<TouchableOpacity
				onPress={() => setLiquidate(false)}
				activeOpacity={1}
				style={
					!liquidate
						? styles.sortby_background_container_0
						: styles.sortby_background_container_100
				}
			>
				<BottomSheet
					ref={sheetRefForLiquidate}
					snapPoints={snapPointsForLiquidate}
					enablePanDownToClose={true}
					onClose={() => handleLiquidatebottomsheet(-1)}
				>
					<BottomSheetView>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								paddingLeft: 24,
								paddingBottom: 10,
								// paddingRight: 30,
								height: 50,
								borderBottomColor: '#EAE5F4',
								borderBottomWidth: 1,
							}}
						>
							<TouchableOpacity
								style={{ ...styles.sortby_heading, paddingRight: 15 }}
								onPress={() => {
									handleLiquidatebottomsheet(-1)
									handleresultbottomsheet(0)

									// handleconfirmationbottomsheet(0)
								}}
							>
								<BackArrow />
							</TouchableOpacity>
							<Text style={styles.sortby_heading}>Liquidate</Text>
						</View>
						<LiquidatePopUp
							handleLiquidatebottomsheet={handleLiquidatebottomsheet}
							handleresultbottomsheet={handleresultbottomsheet}
						/>
					</BottomSheetView>
				</BottomSheet>
			</TouchableOpacity>
		</>
	)
}

export default CapViceCap

const styles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		borderWidth: 2,
		borderRadius: 18,
		borderColor: Colors.white,
		paddingVertical: 16,
		backgroundColor: '#FFFFFF66',
	},
	pointsInfoCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#F9F0F5',
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 20,
		padding: 10,
		marginVertical: 10,
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
