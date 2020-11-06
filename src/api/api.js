import Axios from 'axios'

// custom Axios instance
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
    // func for get profile user => Profile Page from profileAPI
    getProfile(id) {
        return profileAPI.getProfile(id)
    }
}


export const authAPI = {
    //get login|password. Authefication via https://social-network.samuraijs.com/
    getMyProfile() {
        return myAxios.get(`auth/me`).then(response => {
            return response.data
        })
    },
    loginning(email, password, rememberMe = false, captcha = null) {

        return myAxios.post(`auth/login`, { email, password, rememberMe, captcha }).then(response => {
            return response.data
        })
    },
    logout() {
        return myAxios.delete(`auth/login`);
    },
    getCaptchaUrl() {
        return myAxios.get(`security/get-captcha-url`).then(response => {
            return response.data
        })
    }
    
}





export const profileAPI = {
    // func for get profile user => Profile Page
    getProfile(id) {
        return myAxios.get(`profile/${id}`).then(response => {
            return response.data;
        })
    },
    // func for get status user => Profile Page
    getStatus(id) {
        return myAxios.get(`profile/status/${id}`);
    },
    // func for update status user => Profile Page
    updateStatus(status) {
        return myAxios.put(`profile/status`, { status: status });
    },
    updatePhoto(photo) {
        // VERY IMPORTANT FOR UPLOAD IMG ON SERVER
        const formData = new FormData();
        formData.append("image", photo)
        //
     // func for update profile avatar  => Profile Page
        return myAxios.put(`profile/photo`, formData);
    },
    saveProfileData(profile) {
        return myAxios.put(`profile`, profile);
    }
    
}