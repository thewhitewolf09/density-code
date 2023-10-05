import { Dimensions, ScrollView, Text, View } from 'react-native'
import React from 'react'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import WalletBalance from './components/WalletBalance'
// import Colors from "../../styles/Colors";
import HunterButton from '../../components/UI/Buttons/HunterButton'
import { createStackNavigator } from '@react-navigation/stack'
import AddMoneyStyles from './Styles'
import CardInput from './components/CardInput'
// import StockPrice, {
//   ChartComponent,
// } from "../../components/UI/Charts/StockPrice";

const sHeight = Dimensions.get('window').height
const sWidth = Dimensions.get('window').width
const AddMoney = () => {
	const Stack = createStackNavigator()
	return (
		<View style={{ height: '100%' }}>
			<ScrollView>
				<HunterGradient>
					<WalletHeader />
					<WalletBalance />
					<ScrollView style={AddMoneyStyles.addMoneyContainer}>
						<Text
							style={{
								fontSize: 16,
								fontFamily: 'hunterSemiBold',
							}}
						>
							Add your card
						</Text>
						<CardInput />
					</ScrollView>
				</HunterGradient>
			</ScrollView>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					flex: 1,
					flexDirection: 'row',
					margin: 16,
				}}
			>
				<HunterButton title={'Submit'} />
			</View>
			{/* <ChartComponent /> */}
		</View>
	)
}

export default AddMoney
