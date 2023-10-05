import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HunterText from '../../../components/UI/HunterText'
import appColors from '../../../styles/Colors'
import cardValidator from 'card-validator'

// eslint-disable-next-line no-undef
let valid = cardValidator
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const CardInput = () => {
	const [cardNum, setCardNum] = useState('')
	const [cardType, setCardType] = useState('')
	const [nameOnCard, setNameonCard] = useState('')
	const [cvv, setCvv] = useState('')
	const [expiryDate, setExpiryDate] = useState('')
	const [nameValidation, _setNameValidation] = useState()
	const [isInvalid, setIsInvalid] = useState(false)
	useEffect(() => {
		if (cardNum) {
			console.log(cardNum.replace(/\s/g, ''))
			let numberValidation = valid.number(cardNum)
			if (!numberValidation.isPotentiallyValid) {
				console.log('invalid')
				setCardType()
				setIsInvalid(true)
			} else if (numberValidation.card) {
				console.log(numberValidation.card.type) // 'visa'
				setCardType(numberValidation.card.type)
				setIsInvalid(false)
			}
		}
	}, [cardNum])
	return (
		<View style={styles.cardContainer}>
			<View style={styles.headerContainer}>
				<Text style={{ fontFamily: 'hunterSemiBold', fontSize: 14 }}>Card</Text>
				<HunterText style={{ color: 'gray', marginVertical: 2 }}>
					Add money using any card
				</HunterText>
			</View>
			<View style={{ marginVertical: 8 }}>
				<HunterText>Number on Card</HunterText>
				<View
					style={[
						{ flexDirection: 'row', justifyContent: 'space-between' },
						styles.inputContainer,
					]}
				>
					<TextInput
						style={{ flexGrow: 1, fontFamily: 'hunterSemiBold', fontSize: 16 }}
						keyboardType="number-pad"
						placeholder="xxxx-xxxx-xxxx-xxxx"
						maxLength={19}
						value={cardNum}
						onChangeText={(e) => {
							setCardNum(
								e
									.replace(/\s?/g, '')
									.replace(/(\d{4})/g, '$1 ')
									.trim(),
							)
						}}
					/>
					<HunterText style={{ textAlignVertical: 'center' }}>
						{cardType}
					</HunterText>
				</View>
				{isInvalid && (
					<HunterText
						style={{
							textAlignVertical: 'center',
							marginVertical: 4,
							color: 'red',
						}}
					>
						Incorrect card number, please verify again
					</HunterText>
				)}
			</View>
			<View style={{ marginVertical: 8 }}>
				<HunterText>Name on Card</HunterText>
				<View style={styles.inputContainer}>
					<TextInput
						style={{
							fontFamily: 'hunterSemiBold',
						}}
						placeholder="Name"
						value={nameOnCard}
						onChangeText={(e) => setNameonCard(e)}
					/>
				</View>
				<HunterText style={{ textAlignVertical: 'center' }}>
					{nameValidation}
				</HunterText>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<View style={{ width: '45%' }}>
					<HunterText>Expiry Date</HunterText>
					<View style={styles.inputContainer}>
						<TextInput
							maxLength={5}
							keyboardType="numeric"
							style={{ fontFamily: 'hunter' }}
							placeholder="MM/YY"
							value={expiryDate}
							onChangeText={(e) => setExpiryDate(e)}
						/>
					</View>
					<HunterText style={{ textAlignVertical: 'center' }}>
						{nameValidation}
					</HunterText>
				</View>

				<View style={{ width: '45%' }}>
					<HunterText>CVV</HunterText>
					<View style={styles.inputContainer}>
						<TextInput
							style={{
								fontFamily: 'hunterSemiBold',
							}}
							maxLength={3}
							placeholder="xxx"
							value={cvv}
							onChangeText={(e) => setCvv(e)}
						/>
					</View>
					<HunterText style={{ textAlignVertical: 'center' }}>
						{nameValidation}
					</HunterText>
				</View>
			</View>
		</View>
	)
}

export default CardInput

const styles = StyleSheet.create({
	inputContainer: {
		textAlignVertical: 'center',
		fontFamily: 'hunterSemiBold',
		width: '100%',
		marginVertical: 2,
		borderWidth: 2,
		borderRadius: 8,
		padding: sWidth / 30.5,
		paddingHorizontal: sWidth / 22.22,
		borderColor: appColors.secondaryDark,
	},
	cardContainer: {
		borderWidth: 2,
		borderRadius: 12,
		borderColor: appColors.secondaryDark,
		paddingHorizontal: sWidth / 40,
		marginVertical: sHeight / 42.5,
	},
	headerContainer: {
		borderBottomWidth: 1,
		paddingVertical: sHeight / 425,
		borderColor: appColors.secondaryDark,
		marginVertical: sHeight / 85,
	},
})
