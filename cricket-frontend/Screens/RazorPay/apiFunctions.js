import { CREATE_ORDER, VERIFY_PAYMENT } from '../../api/URI'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const createRazorpayOrder = (body) => {
	const url = CREATE_ORDER.url
	return axiosWithApi({ url, method: CREATE_ORDER.reqType, body: body })
}
export const verifyPayment = (body) => {
	const url = VERIFY_PAYMENT.url
	console.log(body)
	return axiosWithApi({ url, method: VERIFY_PAYMENT.reqType, body: body })
}
