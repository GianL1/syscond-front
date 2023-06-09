<template>

</template>

<script>
import axios from "axios";

export default {
  name: "LogoutView",
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

      this.$router.push({name:'login'})
    }
  },
  mounted() {
    this.logout()
  }
}
</script>

<style scoped>

</style>