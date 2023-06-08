import {defineStore} from "pinia";
import {ref} from "vue";
import http from "@/services/http";

export const useAuth = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));

    const user = ref(JSON.parse(localStorage.getItem("user")));

    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue)
        token.value = tokenValue
    }

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue))
        user.value = userValue
    }

   async function checkToken() {
        try {
            const tokenAuth = 'Bearer '+ token.value;
            const {data} = await http.get('/auth/verify',{
                headers: {
                    Authorization:tokenAuth
                }
            })

            return data;
        }catch (error){
            console.log(error.response.data)
        }

    }



    return {
        token, user, setToken, setUser, checkToken
    }
})