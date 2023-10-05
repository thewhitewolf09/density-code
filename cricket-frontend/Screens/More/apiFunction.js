import {
	GET_PROFILE,
	TRANSACTION_ORDER,
	UPDATE_PROFILE,
} from '../../api/URI/index'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const getTransaction = (id) => {
	const url = TRANSACTION_ORDER.url + id
	return axiosWithApi({ url, method: TRANSACTION_ORDER.reqType })
}
export const getProfile = () => {
	const url = GET_PROFILE.url
	return axiosWithApi({ url, method: GET_PROFILE.reqType })
}
export const updateProfile = (userinfoObject) => {
	const url = UPDATE_PROFILE.url
	return axiosWithApi({
		url,
		method: UPDATE_PROFILE.reqType,
		body: userinfoObject,
	})
}
