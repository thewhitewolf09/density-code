import {
	Dimensions,
	Keyboard,
	Pressable,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import OtpFields from './components/OTP/OtpFields'
import UpperPhoneField from './components/OTP/UpperPhoneField'

import TandC from './components/OTP/TandC'
import HunterText from '../../components/UI/HunterText'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import screenUtils from '../../constants/Dimensions'
//import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'
import { useNavigation } from '@react-navigation/native'
import { consumeOTP, createOTP } from './apiFunctions'
import { setUserId } from '../../redux/features/userSlice'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/userDataSlice'
import BatLoader from '../../components/UI/Loader/BatLoader'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const OTP = (prop) => {
	// phone number and country code from <PhoneNumber/> as prop in navigation parameters
	const phoneNumber = prop.route.params.phoneNumber
	const phoneInput = prop.route.params.phoneInput
	const country_code = prop.route.params.country_code
	const deviceId = prop.route.params.deviceId
	const preAuthSessionId = prop.route.params.preAuthSessionId
	const signinup = prop.route.params.signinup
	const navigation = useNavigation()
	const [otpCode, setOTPCode] = useState('')
	const [isPinReady, setIsPinReady] = useState(false)
	const [timer, setTimer] = useState(30)
	const [resendOtp, setResendOtp] = useState(false)
	const [incorrectOtp, setIncorrectOtp] = useState(false)
	const [isChecked1, setChecked1] = useState(false)
	const [isChecked2, setChecked2] = useState(false)
	const [triesLeft, setTriesleft] = useState(undefined)
	const [newPreAuthSessionId, setNewPreAuthSessionId] =
		useState(preAuthSessionId)
	const [newDeviceId, setNewDeviceId] = useState(deviceId)
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
		if (timer === 0) {
			setTimer(0)
			setResendOtp(true)
		} else
			setTimeout(() => {
				setTimer(timer - 1)
			}, 1000)
	}, [timer])

	const maximumCodeLength = 6

	// for handling otp on clicking continue button
	const handleOTP = () => {
		console.log('Continue Button Clicked!!!')
		setIsLoading(true)
		if (isChecked1 === true && isChecked2 === true) {
			consumeOTP(
				JSON.stringify({
					preAuthSessionId: newPreAuthSessionId,
					deviceId: newDeviceId,
					userInputCode: otpCode,
				}),
			)
				.then((response) => {
					console.log(response.data)
					setIsLoading(false)
					if (response.data.status === 'INCORRECT_USER_INPUT_CODE_ERROR') {
						setTriesleft(response.data.failedCodeInputAttemptCount)
						console.log(response.data.failedCodeInputAttemptCount)
						setIncorrectOtp(true)
					} else if (response.data.status === 'OK') {
						setIncorrectOtp(false)
						console.log(response.data.user.id)
						dispatch(setUserId(response.data.user.id))
						navigation.navigate('BottomNavigation')
						// navigation.navigate('UserInfo')
					} else {
						setIncorrectOtp(true)
					}
				})
				.catch((err) => {
					setIsLoading(false)
					setIncorrectOtp(true)
					console.log('err', err)
				})
		} else if (signinup === true) {
			consumeOTP(
				JSON.stringify({
					preAuthSessionId: newPreAuthSessionId,
					deviceId: newDeviceId,
					userInputCode: otpCode,
				}),
			)
				.then((response) => {
					setIsLoading(false)
					if (response.data.status === 'INCORRECT_USER_INPUT_CODE_ERROR') {
						setTriesleft(response.data.failedCodeInputAttemptCount)
						setIncorrectOtp(true)
					} else if (response.data.status === 'OK') {
						setIncorrectOtp(false)
						console.log(response.data.user.id)
						dispatch(setUserId(response.data.user.id))
						navigation.navigate('BottomNavigation')
					} else {
						setIncorrectOtp(true)
					}
				})
				.catch((err) => {
					setIncorrectOtp(true)
					console.log('err', err)
				})
		} else if (isChecked1 === false || isChecked2 === false) {
			setIncorrectOtp(false)
			setIsLoading(false)
		}
	}

	return (
		<ScrollView
			contentContainerStyle={{
				display: 'flex',
				height: '100%',
				paddingBottom: 10,
				justifyContent: 'space-between',
			}}
		>
			<View>
				<UpperPhoneField phoneInput={phoneInput} country_code={country_code} />

				<View style={{ backgroundColor: '#EDEFF1' }}>
					<Pressable onPress={Keyboard.dismiss}>
						<OtpFields
							incorrect={incorrectOtp}
							code={otpCode}
							setCode={setOTPCode}
							maximumLength={maximumCodeLength}
							setIsPinReady={setIsPinReady}
						/>
					</Pressable>

					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: sWidth / 13,
							marginVertical: sHeight / 80,
						}}
					>
						{incorrectOtp ? (
							<HunterText
								style={{
									fontSize: 14,
									color: 'red',
									textAlignVertical: 'center',
								}}
							>
								Incorrect OTP, Tries left : {triesLeft}
							</HunterText>
						) : (
							<HunterText></HunterText>
						)}

						{resendOtp ? (
							<Pressable
								onPress={() => {
									createOTP(JSON.stringify({ phoneNumber: phoneNumber }))
										.then((response) => {
											console.log(response.data)
											setNewPreAuthSessionId(response.data.preAuthSessionId)
											setNewDeviceId(response.data.deviceId)
										})
										.catch((err) => {
											console.log('err', err)
										})
									setResendOtp(false)
									setTimer(30)
								}}
							>
								<HunterText
									style={{ textDecorationLine: 'underline', fontSize: 14 }}
								>
									Resend OTP
								</HunterText>
							</Pressable>
						) : (
							<HunterText
								style={{ textDecorationLine: 'underline', fontSize: 14 }}
							>
								Resend code in {timer}
							</HunterText>
						)}
					</View>
				</View>
			</View>

			{!signinup ? (
				<TandC
					isChecked1={isChecked1}
					setChecked1={setChecked1}
					isChecked2={isChecked2}
					setChecked2={setChecked2}
				/>
			) : null}

			{!isLoading ? (
				<View
					style={{
						justifyContent: 'center',
						flexDirection: 'row',
						marginHorizontal: screenUtils.width / 20,
					}}
				>
					<HunterButton onPress={handleOTP} title={'Continue'} />
				</View>
			) : (
				<BatLoader size={screenUtils.width / 4} />
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		borderRadius: 32,
	},
	upperInnerContainer: {
		marginHorizontal: 27,
		marginTop: 92,
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
		marginTop: 19,
		paddingHorizontal: 20,
	},
	num: {
		color: '#0F0B19',
		fontSize: 24,
	},
	button: {
		backgroundColor: '#6D48FF',
		color: 'white',
		padding: 10,
		paddingHorizontal: 15,
		borderRadius: 36,
		fontSize: 12,
	},
	shadowProp: {
		shadowColor: '#4D2DC9',
		shadowOffset: { width: 14, height: 12 },
		shadowOpacity: 0.2,
		shadowRadius: 70,
	},
})
export default OTP
