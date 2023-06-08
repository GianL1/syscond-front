<template>
  <h2>Login</h2>

  <form @submit.prevent="login" >
    <label for="email">Email</label>
    <input type="email" name="email">

    <label for="password">Password</label>
    <input type="text" name="password">

    <InputSubmit :titulo_botao="Login"></InputSubmit>

  </form>

</template>
<script>
  import http from '@/services/http';
  import {reactive} from "vue";
  import InputSubmit from "@/components/form/InputSubmit";
  import {useAuth} from "@/stores/auth";

  const auth = useAuth();
  const user = reactive({
    email:'gyan.patrick1@gmail.com',
    password:'thiego01'
  })

  export default {
    components: {InputSubmit},
    methods:{
      async login() {
        try {
          const {data} = await http.post('/auth/login', user)
          auth.setToken(data.token);
          auth.setUser(data.user);

          const isAutenticated = await auth.checkToken();

          if (isAutenticated.valid) {

            this.$router.push({name:'bloco'})
          }

        }catch (error){
          console.log(error)
        }
      }
    }
  }

</script>