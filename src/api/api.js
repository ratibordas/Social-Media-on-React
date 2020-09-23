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
        return myAxios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    // func for follow user
    follow(id) {
        return myAxios.post(`follow/${id}`, {}).then(response => {
           return response.data;
       })
     },
    // func for unfollow user
    unfollow(id) {
        return myAxios.delete(`follow/${id}`).then(response => {
           return response.data;
       })
     },
     // func for get profile user => Profile Page
     getProfile(id) {
         return myAxios.get(`profile/${id}`).then(response => {
             return response.data;
         })
     }
}


export const authAPI = {
   
  getMyProfile() {
      return myAxios.get(`auth/me`).then(response => {
        return response.data
      })
  }



}