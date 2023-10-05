import {
	PLAYER_STATS,
	GET_PROFILE_BY_USER_ID,
	GET_PRICE_HISTORY_BY_USER_id,
	GET_PRICE_HISTORY_BY_USER_ID,
	CREATE_BUY_SELL_ORDER,
	GET_MARKETPALCE_LIST_BY_PLAYER_ID,
	GET_RETURN_AMOUNT,
} from '../../api/URI/index'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const getPlayerStatistics = () => {
	const url = PLAYER_STATS.url
	return axiosWithApi({ url, method: PLAYER_STATS.reqType })
}

export const getPortfolioData = (getPortfolioObject) => {
	const url = GET_PROFILE_BY_USER_ID.url
	return axiosWithApi({
		url,
		method: GET_PROFILE_BY_USER_ID.reqType,
		body: getPortfolioObject,
	})
}

export const getPriceHistory = (playerId, timeIndex) => {
	let time = ''
	let time_interval = 0
	switch (timeIndex) {
		case 0:
			time = 'day'
			time_interval = 60
			break
		case 1:
			time = 'week'
			time_interval = 420
			break
		case 2:
			time = 'month'
			time_interval = 2100
			break
		case 3:
			time = 'month'
			time_interval = 6300
			break
	}

	const url =
		GET_PRICE_HISTORY_BY_USER_ID.url +
		playerId +
		'&time=' +
		time +
		'&amount=1' +
		'&time_interval_in_min=' +
		time_interval
	return axiosWithApi({
		url,
		method: GET_PRICE_HISTORY_BY_USER_ID.reqType,
	})
}

export const createOrder = (orderObject) => {
	const url = CREATE_BUY_SELL_ORDER.url
	return axiosWithApi({
		url,
		method: CREATE_BUY_SELL_ORDER.reqType,
		body: orderObject,
	})
}

export const getReturnAmount = (type, fiatAmount, tokenId) => {
	let mode = type === 'buy' ? '&fiat_amount=' : '&stock_amount='
	const url =
		GET_RETURN_AMOUNT.url +
		'?type=' +
		type +
		mode +
		fiatAmount +
		'&token_id=' +
		tokenId
	return axiosWithApi({
		url,
		method: GET_RETURN_AMOUNT.reqType,
	})
}

export const getPlayerById = (id) => {
	const url = GET_MARKETPALCE_LIST_BY_PLAYER_ID.url + id
	return axiosWithApi({
		url,
		method: GET_MARKETPALCE_LIST_BY_PLAYER_ID.reqType,
	})
}
