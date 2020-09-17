import Axios from 'axios'

// personal Axios instance
const myAxios = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b6644f2f-7ed2-4906-a12a-7c8685cda02e"
    }
})

export const usersAPI = {
    // func for getting data from API
    getUsersFromApi(currentPage = 1, pageSize = 6) {
        return myAxios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response.data;
        })
    }
}