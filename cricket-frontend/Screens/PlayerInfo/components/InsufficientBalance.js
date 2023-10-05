import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
import { useNavigation } from '@react-navigation/native'

const InsufficientBalance = ({ isBuy, wallet_balance }) => {
	const navigation = useNavigation()
	return (
		<View
			style={{
				flexDirection: 'row',
				width: '100%',
				backgroundColor: '#FFF8BB',
				padding: 10,
				justifyContent: 'center',
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
			}}
		>
			<View style={{ flexDirection: 'row', flex: 0.9 }}>
				<View style={{ alignSelf: 'center', paddingRight: 5 }}>
					<HunterText>ⓘ</HunterText>
				</View>

				<HunterText style={{ fontSize: 11, alignSelf: 'center' }}>
					{isBuy
						? 'Insufficient Balance. Please lower the quantity or add money to wallet'
						: wallet_balance
						? null
						: 'Insufficient stocks. Please lower the quantity.'}
				</HunterText>
			</View>
			{isBuy ? (
				<Pressable
					style={{ alignSelf: 'center' }}
					onPress={() => navigation.navigate('AddMoney')}
				>
					<HunterText
						style={{
							backgroundColor: 'black',
							color: 'white',
							alignSelf: 'center',
							paddingHorizontal: 18,
							paddingVertical: 6,
							borderRadius: 13,
							fontSize: 12,
						}}
					>
						Add to wallet
					</HunterText>
				</Pressable>
			) : null}
		</View>
	)
}

export default InsufficientBalance

const styles = StyleSheet.create({})
