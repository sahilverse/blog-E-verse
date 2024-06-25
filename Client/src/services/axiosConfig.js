import axios from 'axios';

/**
 * Axios instance with custom configuration.
 * @type {import('axios').AxiosInstance}
 */

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


export default axiosApi;