import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Pressable,
	TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect, memo } from 'react'
import PeterThornton from './../../assets/Images/PeterThornton.png'
import { ScrollView } from 'react-native-gesture-handler'
import AddPNG from './../../assets/Images/add.png'
import RemovePNG from './../../assets/Images/remove.png'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useFocusEffect } from '@react-navigation/native'

// import RnIncrementDecrementBtn from "react-native-increment-decrement-button";

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const SelectStockToSell = () => {
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
		{
			id: 4,
			image: PeterThornton,
			playerName: 'Sumit Nirmal',
			stocks: 40,
			count: 0,
		},
		{
			id: 5,
			image: PeterThornton,
			playerName: 'Rajesh',
			stocks: 40,
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
			<View style={{ marginTop: 150, display: 'flex', flexDirection: 'row' }}>
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
			<BottomSheetScrollView
				focusHook={useFocusEffect}
				style={{ paddingVertical: '5%' }}
			>
				{PlayerToBeSold.map((data, id) => {
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
													console.log('Hello')
													if (countArray[id] > 0) {
														setCountArray((countArray) => [
															...countArray.slice(0, id),
															countArray[id] - 1,
															...countArray.slice(id + 1),
														])
													} else {
														return 0
													}
												}}
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
	)
}

export default SelectStockToSell

const styles = StyleSheet.create({})
