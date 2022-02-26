import axios from 'axios';

import { BASEURL } from '@/api/config'

// This depends on where the token is stored when logging in
const token = localStorage.getItem('token');

const request = axios.create({
    baseURL: BASEURL,
    timeout: 5000
})

// set post request header
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// Add request interceptor
request.interceptors.request.use(
    config => {
        // Add token to request header
        token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// Add response interceptor
request.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        // Corresponding error handling
        // For example: token expired, unauthorized access, path does not exist, server problem, etc.
        if (error.response && error.response.status) {
            switch (error.response.status) {
                case 401:
                    break
                case 403:
                    break
                case 404:
                    break
                case 500:
                    break
                default:
                    console.log('Other error messages')
            }
        }
        return Promise.reject(error)
    }
)

export default request
