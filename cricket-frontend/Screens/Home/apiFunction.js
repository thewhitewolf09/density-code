import { HIT_MAN, TOP_10_PLAYER_LIST , BUY_ON_DIP , COMBINED_LEADERBOARD} from '../../api/URI/index'
import { RISING_STARS  , USER_PORTFOLIO , ALL_ROUNDER} from '../../api/URI/index'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const getTop10Players = () => {
	const url = TOP_10_PLAYER_LIST.url
	return axiosWithApi({ url, method: TOP_10_PLAYER_LIST.reqType })
}
export const getRisingStars = () => {
	const url = RISING_STARS.url
	return axiosWithApi({ url, method: RISING_STARS.reqType })
}
export const getallrounder = () => {
	const url = ALL_ROUNDER.url
	return axiosWithApi({ url, method: ALL_ROUNDER.reqType })
}
export const getHitMans = () => {
	const url = HIT_MAN.url
	return axiosWithApi({url , method: HIT_MAN.reqType})
}
export const getBuyOnDip = () => {
	const url = BUY_ON_DIP.url
	return axiosWithApi({url , method: BUY_ON_DIP.reqType})
}
export const getCombinedLeaderBoard = () => {
	const url = COMBINED_LEADERBOARD.url
	return axiosWithApi({url , method: COMBINED_LEADERBOARD.reqType})
}
