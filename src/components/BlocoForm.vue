<template>
  <div>
    <div>
      <Message :msg="msg" v-show="msg"></Message>

      <form action="" method="post" id="bloco-form" @submit="createBloco">
        <div class="input-container">
          <label for="name_bloco">Nome do Bloco</label>
          <input type="text" name="name_bloco" id="name_bloco" v-model="name_bloco" placeholder="Digite o nome do bloco">
        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Cadastrar Bloco">
        </div>
      </form>
    </div>

  </div>
</template>

<script>

import axios from "axios";
import Message from "@/components/Message";

export default {
  name: "BlocoForm",
  components: {Message},
  data(){
    return {
      name_bloco:''
    }
  }
  ,
  methods:{

    async createBloco(e){
      e.preventDefault();

      const data = {
        name_bloco: this.name_bloco
      }

      const dataJson = JSON.stringify(data);

      axios.post('http://127.0.0.1:8000/api/bloco', dataJson,{
        headers: {
          'Authorization': `Bearer `
        }
      })
          .then((res) => {
            console.log(res.data)
          })
          .catch((error) => {
            console.error(error)
          })

      this.successMessage();

      this.limparCampos();
    },

    limparCampos(){
      this.name_bloco = '';
    },
    
    successMessage() {
      this.msg = `Bloco cadastrado com sucesso`;
      setTimeout(()=> this.msg = '', 3000);
    }
  }
}
</script>

<style scoped>
  #bloco-form{
    max-width: 400px;
    margin: 0 auto;
  }
  .input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label{
    font-weight: bold;
    margin: 0 auto;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
    border-right: 4px solid #fcba03;

  }

  input{
    padding: 5px 10px;
    width: 300px;
    margin: 0 auto;
  }

  .submit-btn{
    background-color: #222;
    color: #fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover{
    background-color: transparent;
    color: #222;
  }

</style>