import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HunterText from '../../components/UI/HunterText'

const AutoBuySet = ({
	transaction,
	setTransaction,
	setAutoBuy,
	setSwipeColor,
}) => {
	const navigation = useNavigation()
	return (
		<View style={styles.auto_buy_set_container}>
			<HunterText style={styles.auto_buy_set_container.font}>
				On successful transaction, the order will be visible in the your
				portfolio{' '}
			</HunterText>
			{transaction === 0 ? (
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<Pressable
						style={{
							backgroundColor: '#ffffff',
							width: 165,
							height: 50,
							borderRadius: 12,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							borderColor: '#000000',
							borderWidth: 1,
							marginTop: 23,
							marginRight: 10,
							elevation: 10,
						}}
						onPress={() => {
							setAutoBuy(0)
							setSwipeColor('black')
						}}
					>
						<HunterText
							style={{
								fontSize: 16,
								fontWeight: '500',
								paddingHorizontal: 20,
								lineHeight: 24,
								textAlignVertical: 'center',
								textAlign: 'center',
							}}
						>
							Go Back
						</HunterText>
					</Pressable>
					<Pressable
						style={{
							backgroundColor: '#6D48FF',
							width: 165,
							height: 50,
							borderRadius: 12,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							marginTop: 23,
							elevation: 10,
						}}
						onPress={() => {
							navigation.navigate('BottomNavigation')
							setAutoBuy(0)
						}}
					>
						<HunterText
							style={{
								color: 'white',
								fontSize: 16,
								fontWeight: '500',
								paddingHorizontal: 20,
								lineHeight: 24,
								textAlignVertical: 'center',
								textAlign: 'center',
							}}
						>
							Check Portfolio{' '}
						</HunterText>
					</Pressable>
				</View>
			) : (
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<Pressable
						style={{
							backgroundColor: '#6D48FF',
							width: 340,
							height: 50,
							borderRadius: 12,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							marginTop: 53,
							elevation: 10,
						}}
						onPress={() => {
							setAutoBuy(0)
							setTransaction(0)
							navigation.navigate('PlayerList')
						}}
					>
						<HunterText
							style={{
								color: 'white',
								fontSize: 16,
								fontWeight: '500',
								paddingHorizontal: 20,
								lineHeight: 24,
								textAlignVertical: 'center',
								textAlign: 'center',
							}}
						>
							Okay
						</HunterText>
					</Pressable>
				</View>
			)}
		</View>
	)
}

export default AutoBuySet

const styles = StyleSheet.create({
	auto_buy_set_container: {
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		font: {
			fontSize: 16,
			fontWeight: '400',
			lineHeight: 24,
			color: '#606060',
		},
	},
})
