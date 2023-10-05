import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import appColors from '../../../styles/Colors'
import HunterText from '../../../components/UI/HunterText'
import { useNavigation } from '@react-navigation/native'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const ChoosePaymentMode = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Pressable
				onPress={() => {
					navigation.navigate('UPI')
				}}
				style={styles.card}
			>
				<HunterText>UPI</HunterText>
				<HunterText>❯</HunterText>
			</Pressable>
			<Pressable
				onPress={() => {
					navigation.navigate('Card')
				}}
				style={styles.card}
			>
				<HunterText>Card</HunterText>
				<HunterText>❯</HunterText>
			</Pressable>
			<Pressable
				onPress={() => {
					navigation.navigate('NetBanking')
				}}
				style={styles.card}
			>
				<HunterText>Netbanking</HunterText>
				<HunterText>❯</HunterText>
			</Pressable>
		</View>
	)
}

export default ChoosePaymentMode

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: sWidth / 22,
		borderRadius: 12,
		borderColor: appColors.secondaryDark,
		borderWidth: 1,
		marginVertical: 4,
	},
})
