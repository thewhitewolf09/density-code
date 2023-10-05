import axios from 'axios'
import { BaseUrl } from '../../constants/URL'

const axiosInstance = axios.create({
	baseURL: BaseUrl().devApi,
})

axiosInstance.defaults.headers.common.accept = '*/*'
axiosInstance.defaults.headers.common.rid = 'anti-csrf'

const axiosWithApi = ({ url, method, headers = null, body = null }) => {
	console.log('url', url)
	return axiosInstance[method](url, JSON.parse(body), JSON.parse(headers))
}

export default axiosWithApi
