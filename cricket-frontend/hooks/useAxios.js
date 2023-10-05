import axios from 'axios'
import { BaseUrl } from '../constants/URL'

const axiosInstance = axios.create({
	baseURL: BaseUrl().jokes,
})
const useAxios = ([url, method, headers = null, body = null]) => {
	return axiosInstance[method](url, JSON.parse(headers), JSON.parse(body))
}

export default useAxios
