import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UPIPayment from './UPIPayment'
import CardPayment from './CardPayment'
import NetBankingPayment from './NetBankingPayment'
import AddMoney from './AddMoney'
import AddCard from './AddCard'

const AddMoneyNavigator = () => {
	const Stack = createStackNavigator()
	return (
		<View style={{ flex: 1 }}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen component={AddMoney} name="AddMoney" />
				<Stack.Screen component={UPIPayment} name="UPI" />
				<Stack.Screen component={CardPayment} name="Card" />
				<Stack.Screen component={AddCard} name="AddCard" />
				<Stack.Screen component={NetBankingPayment} name="NetBanking" />
			</Stack.Navigator>
		</View>
	)
}

export default AddMoneyNavigator

const styles = StyleSheet.create({})
