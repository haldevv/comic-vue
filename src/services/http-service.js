import axios from 'axios'

class HttpService {
    /**
     * Make a http request method: GET
     * @param {*} url
     * @returns
     */
    get(url, config) {
        return axios.get(url, config)
    }


    /**
     * Make a http request method: POST
     * @param {*} url
     * @param {*} data
     * @param {*} config
     * @returns
     */
    post(url, data, config) {
        return axios.post(url, data, config)
    }
}

const http = new HttpService()
export default http
