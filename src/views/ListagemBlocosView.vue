<template>
  <div id="blocos-table">
    <table>
      <thead>
      <tr>
        <th>
          Nome do Bloco
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="bloco in blocos">
        <td >
          {{bloco.name_bloco}}
        </td>
      </tr>
      </tbody>
    </table>
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
  #blocos-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  #blocos-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  #blocos-table th, td {
    padding: 12px 15px;
  }

  #blocos-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  #blocos-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  #blocos-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  #blocos-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }

</style>