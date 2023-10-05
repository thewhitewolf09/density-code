import { PLAYER_LIST} from '../../api/URI/index'

import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'
export const getPlayerList = () => {
	const url = PLAYER_STATS.url
	return axiosWithApi({ url, method: PLAYER_STATS.reqType })
}