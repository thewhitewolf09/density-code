import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardInput from './components/CardInput'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import WalletBalance from './components/WalletBalance'
import AddMoneyStyles from './Styles'
import HunterButton from '../../components/UI/Buttons/HunterButton'

const AddCard = () => {
	return (
		<View style={{ height: '100%' }}>
			<ScrollView>
				<HunterGradient>
					<WalletHeader />
					<WalletBalance />
					<View style={AddMoneyStyles.addMoneyContainer}>
						<View>
							{/* <AddAmount/> */}
							<Text
								style={{
									fontSize: 16,
									fontFamily: 'hunterSemiBold',
								}}
							>
								Add your card
							</Text>
							<CardInput />
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
				<HunterButton title={'Continue'} />
			</View>
		</View>
	)
}

export default AddCard

const styles = StyleSheet.create({})
