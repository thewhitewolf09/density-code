import {
	PLAYER_LIST,
	USER_PORTFOLIO,
	GET_MARKETPLACE_LIST,
} from '../../api/URI'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const getPlayerStatistics = () => {
	const url = PLAYER_LIST.url
	return axiosWithApi({ url, method: PLAYER_LIST.reqType })
}

export const getMarketplaceList = () => {
	const url = GET_MARKETPLACE_LIST.url
	return axiosWithApi({ url, method: GET_MARKETPLACE_LIST.reqType })
}
