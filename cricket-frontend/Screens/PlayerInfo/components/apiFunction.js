import { PLAYER_STATS } from '../../../api/URI/index'

import axiosWithApi from '../../../hooks/axiosHelper/axiosWithApi'
export const getPlayerStatistics = () => {
	const url = PLAYER_STATS.url
	return axiosWithApi({ url, method: PLAYER_STATS.reqType })
}
