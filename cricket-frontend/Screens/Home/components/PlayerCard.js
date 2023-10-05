import { Dimensions, Image, Pressable, View } from 'react-native'
import React from 'react'
import IndiaFlag from '../../../assets/Images/Svg/IndiaFlag'
import RcbFlag from '../../../assets/Images/Svg/RcbFlag'
import { BlurView } from 'expo-blur'
import HunterText from '../../../components/UI/HunterText'
import { viratKohli } from '../../../assets/assets'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import PercentageChange from '../../../components/UI/PercentageChange'
import screenUtils from '../../../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'
const PlayerCard = ({
	name,
	CurrentPrice,
	PercentageIncrease,
	playerImageUrl,
	iplImageUrl,
	nationalImageUrl,
	playerId,
}) => {
	const sWidth = Dimensions.get('window').width
	const sHeight = Dimensions.get('window').height
	const navigation = useNavigation()
	const preOrder = [
		{
			id: 3,
			order_id: '"ODD1234"',
			payer_id: '"SF2345"',
			amount: '"400"',
			txn_status: 'TXN_PENDING',
			orderdetails: [
				{
					id: 6,
					size: 'S',
					quantity: 2,
					item_id: 1,
					title: 'Prod 1',
					category: 'categ 1',
					description: ' Desc 1',
					price: 700,
				},
				{
					id: 7,
					size: 'S',
					quantity: 2,
					item_id: 1,
					title: 'Prod 1',
					category: 'categ 1',
					description: ' Desc 1',
					price: 700,
				},
			],
		},
		{
			id: 4,
			order_id: '"ODD1236"',
			payer_id: '"SF2345"',
			amount: '"400"',
			txn_status: 'TXN_PENDING',
			orderdetails: [],
		},
	]
	return (
		<View
			style={{
				backgroundColor: '#EDEAF480',
				borderRadius: 32,
				margin: sWidth / 16,
				flex: 1,
				height: sHeight / 2.8,
				flexDirection: 'row',
			}}
		>
			<View
				style={{
					padding: sWidth / 25,
					width: '60%',
				}}
			>
				<HunterText style={{ fontSize: screenUtils.width / 16.5 }}>
					{name}
				</HunterText>
				{/* <HunterText style={{ fontSize: 32 }}>Kohli</HunterText> */}
				<View style={{ flexDirection: 'row' }}>
					<Image
						style={{ width: 40, height: 40 }}
						source={{ uri: nationalImageUrl }}
					/>
					<Image
						style={{ width: 40, height: 40 }}
						source={{ uri: iplImageUrl }}
					/>
				</View>
			</View>
			<View style={{ width: '50%' }}>
				<Image
					style={{
						width: sWidth / 2.8,
						height: sHeight / 2.8,
						// backgroundColor: "black",
						borderBottomRightRadius: 32,
						borderTopRightRadius: 32,
					}}
					source={{ uri: playerImageUrl }}
				/>
			</View>
			<BlurView
				intensity={300}
				// tint="light"
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: sWidth / 22.2,
					width: '90%',
					paddingHorizontal: sWidth / 25,
					paddingVertical: sHeight / 105,
					borderRadius: 20,
					position: 'absolute',
					bottom: sHeight / 70,
					backgroundColor: '#ffffff80',
					zIndex: 1,
				}}
			>
				<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
					<HunterSemiBoldText style={{ fontSize: 20, marginHorizontal: 4 }}>
						₹{parseFloat(CurrentPrice).toFixed(2)}
					</HunterSemiBoldText>
					<View style={{ alignSelf: 'center' }}>
						<PercentageChange value={PercentageIncrease} />
					</View>
				</View>
				<Pressable
					onPress={() =>
						navigation.navigate('PlayerInfo', { playerId: playerId })
					}
				>
					<HunterText
						style={{
							backgroundColor: '#6D48FF',
							color: 'white',
							paddingVertical: sHeight / 85,
							paddingHorizontal: sWidth / 25,
							borderRadius: 36,
							fontSize: 12,
						}}
					>
						Trade
					</HunterText>
				</Pressable>
			</BlurView>
		</View>
	)
}

export default PlayerCard
