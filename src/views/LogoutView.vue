<template>

</template>

<script>
import axios from "axios";
import {useAuth} from "@/stores/auth";

export default {
  name: "LogoutView",
  data() {
    return {
      auth: useAuth(),
      reload:false
    }
  },
  methods: {
    async logout() {

      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }


      axios.post('http://127.0.0.1:8000/api/auth/logout', {},{headers})
          .then(
              (res) => {
                console.log(res.data)
              }
          )
          .catch(
              (error) => {
                console.error(error)
              }
          )
      ;

      this.auth.clear();
      this.$router.push({name:'home'})
    }
  },
  mounted() {
    this.logout()
  }
}
</script>

<style scoped>

</style>