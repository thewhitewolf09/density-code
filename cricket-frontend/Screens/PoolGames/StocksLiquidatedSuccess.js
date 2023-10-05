import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearTextGradient } from 'react-native-text-gradient'
// import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from 'expo-linear-gradient'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import { useNavigation } from '@react-navigation/native'

const StocksLiquidatedSuccess = ({ handleliquidateSuccessbottomsheet }) => {
	const navigation = useNavigation()
	return (
		<View style={{ marginTop: 150, alignItems: 'center', textAlign: 'center' }}>
			<View style={{}}>
				<Image
					source={require('./../../assets/Images/StockPurch2.png')}
					style={{
						width: 139,
						height: 139,
						zIndex: 1,
						marginTop: -105,
					}}
				/>
			</View>
			<View
				style={{
					backgroundColor: 'rgba(237, 239, 241, 1)',
					width: '80%',
					// height: 70,
					borderRadius: 20,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: 10,
					padding: 20,
					elevation: 1,
				}}
			>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{ fontSize: 16, fontWeight: '600', padding: 10 }}>
						400 stocks liquidated
					</Text>
					<Text style={{ fontSize: 14 }}>
						Massa sit cursus proin quam faucibus urna.
					</Text>
				</View>
			</View>
			<View style={{ marginTop: 20, width: 165 }}>
				<HunterButton
					onPress={() => {
						handleliquidateSuccessbottomsheet(-1)
					}}
					title={'Close'}
				/>
			</View>
		</View>
	)
}

export default StocksLiquidatedSuccess

const styles = StyleSheet.create({})
