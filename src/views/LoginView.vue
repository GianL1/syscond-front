<template>
  <div class="login-content">
    <div id="login-form">
      <h2>Login</h2>

      <form @submit.prevent="login">

        <label for="email">Email: </label>
        <input type="email" name="email" v-model="email" required>

        <label for="password">Password: </label>
        <input type="password" v-model="password" name="password" required>

        <InputSubmit :titulo_botao="Login"></InputSubmit>

      </form>
    </div>

  </div>


</template>
<script>
  import http from '@/services/http';
  import InputSubmit from "@/components/form/InputSubmit";
  import {useAuth} from "@/stores/auth";

  const auth = useAuth();

  export default {
    components: {InputSubmit},
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      async login() {
        try {

          const user = JSON.stringify({email: this.email, password: this.password})
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
<style scoped>

 *{
   margin: 0;
   padding: 0;
   border: 0;
   box-sizing: border-box;
   font-family: Helvetica;
   color: #323232;
 }

  .login-content{
    background-image: url('../../public/img/background-image.jpg');
    background-size: cover;
    background-position-y: -200px;
  }

  input:focus{
    outline: none;
  }

  #login-form{
    background-color: white;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 30px;
    margin-top: 10vh;
    border-radius: 10px;
    text-align: center;
  }

  form{
    margin-top: 30px;
    margin-bottom: 40px;
  }

  label,input{
    display: block;
    width: 100%;
    text-align: left;

  }
  label{
    font-weight: bold;
    font-size: .8rem;
  }

  input{
    border-bottom: 2px solid #323232;
    padding: 10px;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  input:focus{
    border-bottom: 2px solid blue;
  }
</style>