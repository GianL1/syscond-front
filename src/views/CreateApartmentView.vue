<template>

  <div>
    <Message :msg="msg" v-show="msg"></Message>

    <form  @submit.prevent="createApartment">
      <div>Cadastrando Novo Apartamento</div>

      <label for="name_apartment">Nome do apartamento: </label>
      <input type="text" name="name_apartent" v-model="name_apartment">
      <InputSubmit></InputSubmit>
    </form>

  </div>

</template>

<script>
import InputSubmit from "@/components/form/InputSubmit";
import axios from "axios";
import Message from "@/components/Message";

export default {

  name: "CreateApartmentComponent",
  components: {Message, InputSubmit},
  props:['id_bloco'],
  data() {
    return {
      name_apartment:'',
      bloco_id:this.id_bloco
    }
  },
  methods:{
    async createApartment() {

      const data = {
        name_apartment: this.name_apartment,
        bloco_id: this.bloco_id,
        user_id:null
      }

      const dataJson = JSON.stringify(data);

      axios.post('http://127.0.0.1:8000/api/apartment', dataJson,{
        headers: {
          'Authorization': `Bearer ` + localStorage.getItem('token')
        }
      }).then((res) => {
            console.log(res.data)
          })
          .catch((error) => {
            console.error(error)
          })


      this.successMessage();

      this.limparCampos();
    },

    limparCampos(){
      this.apartment_name = '';
    },

    successMessage() {
      this.msg = `Apartamento cadastrado com sucesso`;
      setTimeout(()=> this.msg = '', 3000);
    }
  }
}
</script>

<style scoped>

</style>