import {
	Dimensions,
	Image,
	Keyboard,
	Pressable,
	Text,
	View,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { LinearGradient } from 'expo-linear-gradient'
// import GradientImage from "../../components/Login/GradientImage";
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

import HunterText from '../../components/UI/HunterText'
import { bgplayers } from '../../assets/assets'
import { createOTP, userExists } from './apiFunctions'
import BatLoader from '../../components/UI/Loader/BatLoader'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
const PhoneNumber = ({ navigation }) => {
	const [value, setValue] = useState('')
	const [invalid, setInvalid] = useState(0)
	const phoneInput = useRef(null)
	const [_phoneNumber, setPhoneNumber] = useState('')
	const [countrycode, setCountryCode] = useState('91')
	const [signin, setSignin] = useState(true)
	const [isUserExist, setIsUserExist] = useState(true)
	const [isUserExistText, setIsUserExistText] = useState(null)
	const [keyboardStatus, setKeyboardStatus] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
			setKeyboardStatus(false)
		})
		const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
			setKeyboardStatus(true)
		})

		return () => {
			showSubscription.remove()
			hideSubscription.remove()
		}
	}, [])

	const isValidPhoneNumber = () => {
		const checkValid = phoneInput.current?.isValidNumber(value) // if number is valid it will return true
		setInvalid(checkValid ? 2 : 1)
		if (checkValid === true && value !== '') {
			setIsLoading(true)
			userExists(countrycode + value)
				.then((response) => {
					console.log(response.data.user_exists)
					setIsLoading(false)
					if (signin === true) {
						if (response.data.user_exists === true) {
							// for creating otp
							setIsUserExist(true)
							setIsLoading(true)
							createOTP(JSON.stringify({ phoneNumber: _phoneNumber }))
								.then((response) => {
									setIsLoading(false)
									navigation.navigate('OTP', {
										country_code: countrycode,
										phoneNumber: _phoneNumber,
										phoneInput: value,
										signinup: signin,
										deviceId: response.data.deviceId,
										preAuthSessionId: response.data.preAuthSessionId,
									})
								})
								.catch((err) => {
									console.log('err', err)
								})
						} else if (response.data.user_exists === false) {
							setIsUserExistText('User does not exist!!!')
							setIsUserExist(false)
						}
					} else {
						if (response.data.user_exists === true) {
							setIsLoading(false)
							setIsUserExistText('User already exists!!!')
							setIsUserExist(false)
						} else if (response.data.user_exists === false) {
							// for creating otp
							setIsUserExist(true)
							setIsLoading(true)
							createOTP(JSON.stringify({ phoneNumber: _phoneNumber }))
								.then((response) => {
									setIsLoading(false)
									navigation.navigate('OTP', {
										country_code: countrycode,
										phoneNumber: _phoneNumber,
										phoneInput: value,
										signinup: signin,
										deviceId: response.data.deviceId,
										preAuthSessionId: response.data.preAuthSessionId,
									})
								})
								.catch((err) => {
									console.log('err', err)
								})
						}
					}
				})
				.catch((err) => {
					console.log('err', err)
				})
		}
	}

	return (
		<View
			enabled
			behavior={'height'}
			style={{
				backgroundColor: '#939de0',
				flex: 1,
				zIndex: 1,
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<View
				style={{
					marginHorizontal: sWidth * 0.05,
					marginVertical: sHeight * 0.2,
					zIndex: 1,
				}}
			>
				<View>
					<HunterSemiBoldText
						style={{
							color: 'white',
							fontSize: 28,
							letterSpacing: 6,
							marginVertical: screenUtils.height / 140,
						}}
					>
						HUNTER
					</HunterSemiBoldText>
					<HunterText
						style={{ color: 'white', fontSize: 20, marginVertical: 6 }}
					>
						{signin ? 'Login to your account' : 'Sign Up'}
					</HunterText>
				</View>

				<View>
					{!isLoading ? (
						<PhoneInput
							ref={phoneInput}
							defaultValue={value}
							defaultCode="IN"
							layout="second"
							onChangeCountry={(country) => setCountryCode(country.callingCode)}
							onChangeText={(text) => {
								setValue(text)
							}}
							onChangeFormattedText={(text) => {
								setPhoneNumber(text)
							}}
							codeTextStyle={{
								fontFamily: 'hunterSemiBold',
							}}
							containerStyle={{
								width: '100%',
								paddingVertical: 5,
								padding: 10,
								borderRadius: 12,
								backgroundColor: 'white',
								borderColor: invalid === 2 || invalid === 0 ? null : 'red',
								borderWidth: invalid === 2 || invalid === 0 ? 0 : 1,
								marginVertical: 10,
							}}
							textInputStyle={{
								fontSize: 16,
								color: '#0F0B19',
								fontFamily: 'hunterSemiBold',
							}}
							withShadow
							autoFocus
						/>
					) : (
						<BatLoader size={screenUtils.width / 4} />
					)}

					{invalid === 1 ? (
						<Text style={{ color: 'red' }}>Enter Valid Phone Number</Text>
					) : null}

					{!isUserExist ? (
						<Text style={{ color: 'red' }}>{isUserExistText}</Text>
					) : null}

					<Pressable onPress={isValidPhoneNumber}>
						<HunterText
							style={{
								width: '100%',
								backgroundColor: '#6D48FF',
								color: 'white',
								textAlign: 'center',
								paddingVertical: 16,
								borderRadius: 12,
								marginVertical: 8,
							}}
						>
							{"LET'S PLAY"}
						</HunterText>
					</Pressable>

					<Pressable onPress={() => setSignin(!signin)}>
						<HunterText
							style={{
								textAlign: 'center',
								color: 'white',
								textDecorationLine: 'underline',
							}}
						>
							{signin
								? 'New to hunter ? Sign up'
								: 'Already have an account? Sign in'}
						</HunterText>
					</Pressable>
				</View>
			</View>
			{
				<View
					style={{
						// position: "absolute",
						bottom: sHeight / 6,
						width: '100%',
						height: '50%',
						zIndex: -1,
						// borderWidth: 20,
					}}
				>
					<Image
						source={bgplayers}
						style={{
							width: '100%',
							height: '100%',
							// position: "absolute",
							bottom: 0,
							zIndex: -1,
						}}
					/>
					<LinearGradient
						// Background Linear Gradient
						colors={['transparent', 'rgba(95,64,221,0.8)']}
						style={{
							zIndex: 1,
							width: '100%',
							height: '20%',
							borderColor: 'red',
							// borderWidth: 2,
							position: 'absolute',
							bottom: 0,
						}}
					/>
				</View>
			}
		</View>
	)
}

// background: linear-gradient(180deg, rgba(95, 64, 221, 0) 0%, #5F40DD 100%);

export default PhoneNumber
