import axios from 'axios';

/**
 * Axios instance with custom configuration.
 * @type {import('axios').AxiosInstance}
 */

const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


export default axiosApi;