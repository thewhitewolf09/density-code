import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { AllAnsweredImg } from '../../assets/assets'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import Cross from '../../assets/Images/Svg/Cross'
import Confirmation from '../PoolGames/components/Confirmation'
import BackArrow from '../../assets/Images/Svg/BackArrow'
import SelectStockToSell from '../PoolGames/SelectStockToSell'
import ContestJoinedSuccess from '../PoolGames/ContestJoinedSuccess'
import YouveWon from '../PoolGames/YouveWon'
import LiquidatePopUp from './../PoolGames/LiquidatePopUp'
import { useSelector } from 'react-redux'
import { getPortfolioData } from '../PoolGames/apiFunctions'
import { createParticipationParlay } from './apiFunctions'
import HunterText from '../../components/UI/HunterText'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'

// import HunterGradient from '../../components/UI/Gradient'

const AllAnswered = (props) => {
	const answerList = props.route.params.answerList

	const contestDetails = useSelector((state) => state.currentContest.value)
	//const userDetails = useSelector((state) => state.user.value)

	// bottom sheet for confirmation messages
	const [confirmation, setConfirmation] = useState(false)
	const sheetRefForConfirmation = useRef(null)

	// to set swipe buttons to default
	const [swipe, setSwipe] = useState(true)

	// state of insufficient balance === 0 otherwise === 1
	const [state, setState] = useState(1)
	// 1 for insufficient balance for any contest
	// 2 for insufficient balance for specific contest
	const [isInsufficient, setIsInsufficient] = useState(1)

	// if holding detected == true
	// if not holding detected == false
	const [portfolioData, setPortfolioData] = useState([])
	// Fetching Players Data from API
	// useEffect(() => {
	// 	const getPortfolioObject = {
	// 		user_id: "ff40a6d0-80a8-4443-9deb-b85e752a64c8",
	// 	}

	// 	getPortfolioData(JSON.stringify(getPortfolioObject))
	// 		.then((response) => {
	// 			setPortfolioData(response.data)
	// 		})
	// 		.catch((error) => console.log(error))
	// }, [])
	const [availableStock, setAvailableStock] = useState([])
	// portfolioData &&
	// 	portfolioData['players'].map((item, i) => {
	// 		if (item.stock_amount > 0) {
	// 			//availableStock.push(item)
	// 			// console.log('item')
	// 			setSellStock(true)
	// 		}
	// 	})
	//console.log(portfolioData['players'])
	const [sellStock, setSellStock] = useState()
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
	const [saveContestStatus, setSaveContestStatus] = useState(false)

	const JoinContest = () => {
		let contestObj = {
			contest_id: contestDetails.contestId,
			user_id: 'ff40a6d0-80a8-4443-9deb-b85e752a64c8',
			answers: answerList,
			score: 0,
		}

		createParticipationParlay(JSON.stringify(contestObj))
			.then((res) => {
				console.log(res.data)
				console.log('bottom sheet trigered1')
			})
			.catch((err) => {
				console.log('bottom sheet trigered2')
				console.log(err)
			})
	}

	return (
		<View style={{ height: '100%' }}>
			<View>
				<LinearGradient
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					locations={[0, 0.2, 0.5, 0.6]}
					colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
				>
					<WalletHeader />
					<View style={{ marginTop: '40%' }}>
						<View style={{ alignItems: 'center', position: 'relative' }}>
							<Image
								source={AllAnsweredImg}
								style={{
									width: 152,
									height: 152,
								}}
							/>
							<View style={{ marginTop: '8%' }}>
								<Text
									style={{
										color: 'rgba(31,29,41, 0.6)',
										fontSize: 12,
										fontWeight: '400',
									}}
								>
									A L L {'  '}A N S W E R E D
								</Text>
							</View>
							<View style={{ marginTop: '5%' }}>
								<Text
									style={{
										fontSize: 12,
										textAlign: 'center',
										color: 'rgba(31, 29, 41, 0.4)',
										lineHeight: 18,
									}}
								>
									Please complete the the payment {'\n'}to book your slot.
								</Text>
								<View
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										marginTop: '8%',
									}}
								>
									<LinearGradient
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
										locations={[0, 0.6]}
										colors={['rgba(1, 148, 83, 0.54)', 'rgba(1, 148, 83, 1)']}
										style={{ borderRadius: 39 }}
									>
										<TouchableOpacity
											style={{
												backgroundColor: 'rgba(1, 148, 83, 0.54)',
												width: 350,
												height: 40,
												borderRadius: 15,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
											}}
											onPress={() => {
												handleconfirmationbottomsheet(0)
											}}
										>
											<HunterSemiBoldText
												style={{
													color: 'white',
													fontSize: 15,
												}}
											>
												Join ₹{contestDetails.entryFee}
											</HunterSemiBoldText>
										</TouchableOpacity>
									</LinearGradient>
								</View>
							</View>
						</View>
					</View>
				</LinearGradient>
			</View>
			{saveContestStatus ? JoinContest() : null}

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
							<Text style={styles.sortby_heading}>Confirmation</Text>
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
							isInsufficient={isInsufficient}
							sellStock={sellStock}
							handlesellstockbottomsheet={handlesellstockbottomsheet}
							handlejoinedbottomsheet={handlejoinedbottomsheet}
							setSaveContestStatus={setSaveContestStatus}
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
							<Text style={styles.sortby_heading}>
								Contest joined Sucessfully
							</Text>
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
							<Text style={styles.sortby_heading}>Yay! You&#39;ve won</Text>
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
		</View>
	)
}

export default AllAnswered

const styles = StyleSheet.create({
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
