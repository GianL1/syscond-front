<template>
  <nav>

    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link> |
    
    <router-link to="" v-if="auth.isAutenticated()"> Olá, {{ auth.user.name }} </router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/bloco/index">Blocos</router-link> |
    <router-link to="/logout" v-if="auth.isAutenticated()">Logout</router-link>
  </nav>
</template>

<script>
import {useAuth} from "@/stores/auth";
import axios from "axios";

export default {
  name: "Navbar",
  props:["logo", "alt"],
  data() {
    return {
      auth: useAuth()
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  nav{
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  nav a {
    color: #009879;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }
  nav a:hover{
    color: #fff;
  }

  #logo-url{
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 40px;
    height: 40px;
  }
</style>