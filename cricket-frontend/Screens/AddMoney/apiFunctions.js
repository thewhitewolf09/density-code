import { ADD_MONEY_TO_WALLET } from '../../api/URI'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const addMoneyToWallet = (moneyObject) => {
	const url = ADD_MONEY_TO_WALLET.url
	return axiosWithApi({
		url,
		method: ADD_MONEY_TO_WALLET.reqType,
		body: moneyObject,
	})
}
