import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import WalletBalance from '../AddMoney/components/WalletBalance'
import AddMoneyStyles from '../AddMoney/Styles'
import { useNavigation } from '@react-navigation/native'
import AmountField from '../../components/UI/InputFields/AmountField'
import { createRazorpayOrder, verifyPayment } from './apiFunctions'
import RazorpayCheckout from 'react-native-razorpay'
const RazorpayAddToWallet = () => {
	const navigation = useNavigation()
	const [amount, setAmount] = useState()

	const handleAdd = () => {
		let options = {
			key: 'rzp_test_l0UIgOk0zeT7X5', // Enter the Key ID generated from the Dashboard
			amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: 'INR',
			name: 'Density',
			description: 'Test Transaction',
			image: 'https://example.com/your_logo',
		}
		let body = {
			amount: parseInt(amount) * 100,
			currency: 'INR',
		}
		createRazorpayOrder(JSON.stringify(body))
			.then((response) => {
				console.log(response.data)
				options = { ...options, order_id: response.data.initial_order_id }
				console.log(options)
				RazorpayCheckout.open(options)
					.then((data) => {
						console.log(data)
						verifyPayment(
							JSON.stringify({
								id: response.data.id,
								razorpay_payment_id: data.razorpay_payment_id,
								razorpay_order_id: data.razorpay_order_id,
								razorpay_signature: data.razorpay_signature,
							}),
						)
							.then((response) => console.log(response.data))
							.catch((err) => console.log(err))
					})
					.catch((err) => {
						console.log(err)
					})
			})
			.catch((err) => console.log(err))
	}
	return (
		<View style={{ height: '100%' }}>
			<ScrollView>
				<HunterGradient>
					<WalletHeader />
					<WalletBalance />
					<View style={AddMoneyStyles.addMoneyContainer}>
						<View>
							<AmountField
								title={'Add Amount'}
								addOptions={['₹25', '₹100', '₹500']}
								value={amount}
								setValue={setAmount}
								unit={'₹'}
							/>
						</View>
					</View>
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
				<HunterButton onPress={handleAdd} title={'Add money'} />
			</View>
		</View>
	)
}

export default RazorpayAddToWallet

const styles = StyleSheet.create({})
