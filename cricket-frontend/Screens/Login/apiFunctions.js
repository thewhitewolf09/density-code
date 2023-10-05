import { CONSUME_OTP, CREATE_OTP, USER_EXISTS } from '../../api/URI/index'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const createOTP = (phNumberObjet) => {
	const url = CREATE_OTP.url
	console.log('object', phNumberObjet)
	return axiosWithApi({ url, method: CREATE_OTP.reqType, body: phNumberObjet })
}

export const consumeOTP = (otpObject) => {
	const url = CONSUME_OTP.url
	return axiosWithApi({ url, method: CONSUME_OTP.reqType, body: otpObject })
}

export const userExists = (phoneNumber) => {
	console.log(phoneNumber)
	const url = USER_EXISTS.url + phoneNumber
	return axiosWithApi({ url, method: USER_EXISTS.reqType })
}
