import { Dimensions, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import WalletBalance from './components/WalletBalance'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import { createStackNavigator } from '@react-navigation/stack'
import AddMoneyStyles from './Styles'
import { useNavigation } from '@react-navigation/native'
import SwitchButton from '../../components/UI/Buttons/SwitchButton'
import AmountField from '../../components/UI/InputFields/AmountField'
import { addMoneyToWallet } from './apiFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolioData } from '../PoolGames/apiFunctions'
import { setPorfolioData } from '../../redux/features/Portfolio/portfolioSlice'
import BatLoader from '../../components/UI/Loader/BatLoader'
import screenUtils from '../../constants/Dimensions'

const AddMoney = () => {
	const [amount, setAmount] = useState(0)
	const [isBuy, setisBuy] = useState(true)
	const userId = useSelector((state) => state.user.value)
	const navigation = useNavigation()
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)
	const handleAddMoney = (amount) => {
		let moneyObj = {
			user_id: userId,
			amount: parseInt(amount),
		}
		console.log('moneyObj', moneyObj)
		setIsLoading(true)
		addMoneyToWallet(JSON.stringify(moneyObj))
			.then((res) => {
				console.log(res.data)
				setAmount(0)
				let userObj = {
					user_id: userId,
				}
				getPortfolioData(JSON.stringify(userObj))
					.then((res) => {
						setIsLoading(false)
						dispatch(setPorfolioData(res.data))
						console.log(res.data)
						navigation.navigate('Home')
					})
					.catch((err) => console.log(err))
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
								title={'Amount'}
								addOptions={['₹25', '₹50', '₹100', '₹500']}
								unit={'₹'}
								value={amount}
								setValue={setAmount}
								isBuy={isBuy}
							/>
						</View>
					</View>
				</HunterGradient>
			</ScrollView>
			{!isLoading ? (
				<View
					style={{
						position: 'absolute',
						bottom: 0,
						flex: 1,
						flexDirection: 'row',
						margin: 16,
					}}
				>
					<HunterButton
						onPress={() => {
							handleAddMoney(amount)
						}}
						title={'Add money'}
					/>
				</View>
			) : (
				<BatLoader size={screenUtils.height / 6} />
			)}
		</View>
	)
}

export default AddMoney
