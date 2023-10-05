import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import HunterSemiBoldText from '../../../../components/UI/HunterSemiBoldText'
import HunterText from '../../../../components/UI/HunterText'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const UpperPhoneField = ({ phoneInput, country_code }) => {
	const [phNo, setPhNo] = useState('9874563210')
	// const inputRef = useRef(null);
	useEffect(() => {
		//console.log(phNo);
	}, [phNo])
	const navigation = useNavigation()
	return (
		<LinearGradient
			start={{ x: 0.0, y: 0.25 }}
			end={{ x: 1.0, y: 1.0 }}
			locations={[0, 0.8, 1]}
			colors={['#F09BC080', '#af9bcc', '#9784c1cc']}
			style={styles.upperContainer}
		>
			<View style={{ marginTop: sHeight / 20, marginHorizontal: sWidth / 15 }}>
				<HunterSemiBoldText
					style={{ fontSize: sHeight / 42, letterSpacing: 4 }}
				>
					HUNTER
				</HunterSemiBoldText>
			</View>
			<View style={styles.upperInnerContainer}>
				<HunterText>OTP sent to</HunterText>
				<View style={[styles.numContainer, { elevation: 10 }]}>
					<View style={{ display: 'flex', flexDirection: 'row' }}>
						<HunterText
							style={{
								fontSize: sWidth / 16,
								textAlignVertical: 'center',
							}}
						>
							{/* phone number from <PhoneNumber/> and passed through <OTP/> as a navigation param */}
							+{country_code} {phoneInput}
						</HunterText>
					</View>
					<Pressable
						onPress={() => navigation.navigate('PhoneNumber')}
						style={[styles.button, { elevation: 1 }]}
					>
						<HunterText
							style={{
								color: 'white',
							}}
						>
							EDIT
						</HunterText>
					</Pressable>
				</View>
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		borderBottomLeftRadius: 32,
		borderBottomRightRadius: 32,
	},
	upperInnerContainer: {
		marginHorizontal: sWidth / 15,
		marginTop: sHeight > 700 ? sHeight / 9 : sWidth / 9,
		paddingBottom: sHeight / 27,
	},
	ellipse: {
		backgroundColor: '#5F40DD4D',
		borderRadius: 500,
		position: 'absolute',
		left: 0,
	},
	numContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 15,
		backgroundColor: '#FFFFFF',
		padding: 12,
		marginTop: sHeight / 45,
		paddingHorizontal: sWidth / 20,
	},
	num: {
		color: '#0F0B19',
		fontSize: sWidth / 16,
		width: '65%',
	},
	button: {
		backgroundColor: '#6D48FF',
		color: 'white',
		paddingHorizontal: 10,
		borderRadius: 36,
		fontSize: 12,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default UpperPhoneField
