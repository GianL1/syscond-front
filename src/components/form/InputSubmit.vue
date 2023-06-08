<template>
  <div class="input-container">
    <input type="submit" class="submit-btn" :value="titulo_botao">
  </div>
</template>

<script>
export default {
  name: "InputSubmit",
  props:['titulo_botao']
}
</script>

<style scoped>
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