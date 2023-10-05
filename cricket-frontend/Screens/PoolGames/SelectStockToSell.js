import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Pressable,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import PeterThornton from './../../assets/Images/PeterThornton.png'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AddPNG from './../../assets/Images/add.png'
import RemovePNG from './../../assets/Images/remove.png'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import EstimationCard from '../PlayerInfo/components/EstimationCard'
import CardGradient from '../../components/UI/CardGradient'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import appColors from './../../styles/Colors'
import screenUtils from './../../constants/Dimensions'
import SwipeButton from 'rn-swipe-button'
import VectorIcon from './/..//..//assets/Images/Svg/VectorIcon'
import { getPortfolioData } from './apiFunctions'
import { useSelector } from 'react-redux'

// import RnIncrementDecrementBtn from "react-native-increment-decrement-button";

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const SelectStockToSell = ({
	setSwipe,
	handlesellstockbottomsheet,
	swipe,
	state,
	handleconfirmationbottomsheet,
	setState,
}) => {
	const [portfolioData, setPortfolioData] = useState([])

	const userDetails = useSelector((state) => state.user.value)

	// Fetching Players Data from API
	useEffect(() => {
		const getPortfolioObject = {
			user_id: userDetails,
		}

		getPortfolioData(JSON.stringify(getPortfolioObject))
			.then((response) => {
				setPortfolioData(response.data)
			})
			.catch((error) => console.log(error))
	}, [])
	// console.log(portfolioData.players)
	let PlayerToBeSold = [
		{
			id: 1,
			image: PeterThornton,
			playerName: 'Gaurav',
			stocks: 2,
			count: 0,
		},
		{
			id: 2,
			image: PeterThornton,
			playerName: 'Suraj',
			stocks: 5,
			count: 0,
		},
		{
			id: 3,
			image: PeterThornton,
			playerName: 'Arya',
			stocks: 7,
			count: 0,
		},
	]
	const [countArray, setCountArray] = useState(
		new Array(PlayerToBeSold.length).fill(0),
	)
	return (
		<View
			style={{
				margin: sWidth / 20,
			}}
		>
			<View style={{ display: 'flex', flexDirection: 'row' }}>
				<View style={{ flex: 5 }}>
					<Text
						style={{
							color: '#737373',
						}}
					>
						Player
					</Text>
				</View>
				<View style={{ flex: 2, alignItems: 'center' }}>
					<Text
						style={{
							color: '#737373',
						}}
					>
						Stocks
					</Text>
				</View>
				<View style={{ flex: 4, alignItems: 'center' }}>
					<Text
						style={{
							color: '#737373',
						}}
					>
						Sell
					</Text>
				</View>
			</View>
			<View style={{ height: 200, paddingTop: 10 }}>
				<BottomSheetScrollView>
					{PlayerToBeSold &&
						PlayerToBeSold.map((data, id) => {
							return (
								<View key={id}>
									<View style={{ display: 'flex', flexDirection: 'row' }}>
										<View
											style={{ flex: 5, display: 'flex', flexDirection: 'row' }}
										>
											<Image source={(require = data.image)} />
											<View
												style={{
													paddingHorizontal: '10%',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												<Text>{data.playerName}</Text>
											</View>
										</View>
										<View style={{ flex: 2, alignItems: 'center' }}>
											<Text>{data.stocks}</Text>
										</View>
										<View style={{ flex: 4, alignItems: 'center' }}>
											<View
												style={{
													flexDirection: 'row',
													justifyContent: 'space-around',
													width: '80%',
												}}
											>
												<View
													key={id}
													style={{
														alignItems: 'center',
														justifyContent: 'center',
													}}
												>
													<TouchableOpacity
														onPress={() => {
															if (countArray[id] > 0) {
																console.log('he')

																setCountArray((countArray) => [
																	...countArray.slice(0, id),
																	countArray[id] - 1,
																	...countArray.slice(id + 1),
																])
															} else {
																return 0
															}
														}}
														style={{ padding: 10 }}
													>
														<Image source={(require = RemovePNG)} />
													</TouchableOpacity>
												</View>
												<View
													style={{
														borderWidth: 2,
														borderRadius: 12,
														width: 54,
														height: 29,
														alignItems: 'center',
														justifyContent: 'center',
														borderColor: 'rgba(42, 21, 123, 0.2)',
													}}
												>
													<Text>{countArray[id]}</Text>
												</View>
												<View
													style={{
														alignItems: 'center',
														justifyContent: 'center',
													}}
												>
													<TouchableOpacity
														onPress={() => {
															if (countArray[id] < PlayerToBeSold[id].stocks) {
																setCountArray((countArray) => [
																	...countArray.slice(0, id),
																	countArray[id] + 1,
																	...countArray.slice(id + 1),
																])
															} else {
																return 0
															}
														}}
														style={{ padding: 10 }}
													>
														<Image source={(require = AddPNG)} />
													</TouchableOpacity>
												</View>
											</View>
										</View>
									</View>
									<View
										style={{
											borderWidth: 0.3,
											borderColor: '#737373',
											marginVertical: 10,
										}}
									/>
								</View>
							)
						})}
				</BottomSheetScrollView>
			</View>
			<View>
				<CardGradient style={styles.container}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
							paddingHorizontal: 10,
						}}
					>
						<HunterSemiBoldText style={{ fontSize: 24, textAlign: 'center' }}>
							₹4,500
						</HunterSemiBoldText>
						<HunterSemiBoldText
							style={{
								color: appColors.secondaryDark,
								fontSize: 12,
								textAlign: 'center',
							}}
						>
							Estimated amount
						</HunterSemiBoldText>
					</View>
				</CardGradient>
			</View>
			<View style={{ width: 300 }}>
				{/* Swipe Button */}

				<SwipeButton
					disabled={false}
					//disable the button by doing true (Optional)
					swipeSuccessThreshold={60}
					height={60}
					//height of the button (Optional)
					width={350}
					//width of the button (Optional)
					title="Swipe to Sell"
					titleStyles={{
						fontFamily: 'hunter',
						color: swipe ? 'black' : 'white',
						zIndex: 1,
					}}
					//Text inside the button (Optional)
					//thumbIconImageSource={thumbIcon}
					//You can also set your own icon (Optional)
					containerStyles={{
						borderRadius: 12,
						width: 350,
					}}
					//After the completion of swipe (Optional)
					//railBackgroundColor="#6D48FF"
					railFillBackgroundColor="#6D48FF" //(Optional)
					railFillBorderColor="#6D48FF" //(Optional)
					thumbIconBackgroundColor="#6D48FF" //(Optional)
					thumbIconBorderColor="#6D48FF" //(Optional)
					onSwipeSuccess={() => {
						setSwipe(false)
						setTimeout(() => {
							handlesellstockbottomsheet(-1)
							handleconfirmationbottomsheet(0)
						}, 1500)
					}}
					railBackgroundColor="white" //(Optional)
					railBorderColor="lightgray" //(Optional)
					thumbIconComponent={() => <VectorIcon />}
					thumbIconStyles={{
						borderRadius: 12,
					}}
					railStyles={{
						borderRadius: 12,
					}}
					shouldResetAfterSuccess={true}
				/>
			</View>
		</View>
	)
}

export default SelectStockToSell

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		// justifyContent: 'center',

		borderWidth: 2,
		borderColor: '#5f40dd4a',
		borderRadius: 12,
		paddingVertical: 14,
		marginVertical: screenUtils.height / 85,
	},
})
