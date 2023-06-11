<template>
  <div id="blocos-list" v-for="bloco in blocos">
    <div id="bloco-title">
      {{bloco.name_bloco}}
      <span id="seta-expandir">
        <router-link :to= "'/apartments/create/' + bloco.id" > + </router-link>
        <a href="#">v</a>
      </span>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import {useAuth} from "@/stores/auth";

const auth = useAuth();

  export default {
    name: "ListagemBlocos",
    data(){
      return {
        blocos:''
      }
    },
    methods:{
      async getBlocos() {

        const headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }

        const response = await axios.get('http://127.0.0.1:8000/api/bloco/index', {headers});

        this.blocos = response.data.blocos;
      }
    },
    mounted() {
      this.getBlocos()
    }
  }

</script>
<style scoped>
  #blocos-list{
    width: 350px;
    height: 45px;
  }
  #bloco-title{
    padding: 15px 13px;
  }
  #seta-expandir{
    margin-left: 50%;
  }
  a{
    font-size: 24px;
    text-decoration: none;
    margin: 15px;
  }

</style>