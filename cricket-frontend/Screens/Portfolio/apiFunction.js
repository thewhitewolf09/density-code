import { USER_PORTFOLIO  } from '../../api/URI'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'


export const getUserPortfolio = () => {
	const url =  USER_PORTFOLIO.data.url
	return axiosWithApi({ url, method: PLAYER_LIST.reqType })
}