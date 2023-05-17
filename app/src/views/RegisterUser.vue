<template>
  <main>
    <div class="marginTop drop-shadow-lg w-11/12 border-2 p-4 rounded-md items-center">

      <div class="text-center mb-8">
        <h1 class="text-2xl">Registre-se</h1>
      </div>

      <div class="flex gap-20 justify-center">

        <div class="flex gap-2">
          <input  type="radio" id="pf" name="userType" v-model="userType" value="true">
          <legend>Pessoa Física</legend>
        </div>

        <div class="flex gap-2">
          <input type="radio" id="pj" name="userType" v-model="userType" value="false">
          <legend>Empresa</legend>
        </div>

      </div>
  
      <form action="">
        <div class="flex flex-col gap-7 w-3/4 mx-auto ">

          <div v-if="userType === 'true'" class="div-input-style ">
            <legend class="legend-style">Nome</legend>
            <input class="input-style" required type="text" placeholder="Nome Completo">
          </div>

          <div v-if="userType === 'false'" class="div-input-style ">
            <legend class="legend-style">Razão Social</legend>
            <input class="input-style" required type="text" placeholder="Nome Completo">
          </div>
  
          <div v-if="userType" class="div-input-style">
            <legend class="legend-style">Telefone</legend>
            <input class="input-style" required type="text" placeholder="(DD) XXXXX - XXXX">
          </div>

          <div v-if="userType === 'true'" class=" flex gap-7 max-sm:flex-col ">
            <div class=" div-input-style " >
              <legend class="legend-style">Data Nascimento</legend>
              <input class="input-style !w-auto !ml-20 max-sm:!mx-3" required type="date" placeholder="Rua">
            </div>
            <div class="div-input-style ">
              <legend class="legend-style ml-5 max-sm:!-ml-0">Sexo</legend>
            <input class="input-style !w-20 !mx-20 max-sm:!mx-3" required type="text" placeholder="N">
            </div> 
          </div>
  
          <div v-if="userType" class="div-input-style">
            <legend class="legend-style">Email</legend>
            <input class="input-style" required type="text" placeholder="exemplo@email.com">
          </div>
  
          <div v-if="userType === 'true'" class="div-input-style">
            <legend class="legend-style">CPF</legend>
            <input class="input-style" required type="text" placeholder="XXX.XXX.XXX-XX">
          </div>

          <div v-if="userType ==='false'" class="div-input-style">
            <legend class="legend-style">CNPJ</legend>
            <input class="input-style" required type="text" placeholder="XXX.XXX.XXX/XXXX-XX">
          </div>

          <div v-if="userType === 'false'" class="div-input-style">
            <legend class="legend-style">Inscrição estadual</legend>
            <input class="input-style" required type="text" placeholder="XXX.XXX.XXX/XXXX-XX">
          </div>
  
          <div v-if="userType" class="div-input-style">
            <legend class="legend-style">Endereço</legend>
            <input class="input-style" required type="text" placeholder="Rua">
          </div>

          <div v-if="userType" class=" flex gap-7 max-sm:flex-col  ">
            <div class=" div-input-style " >
              <legend class="legend-style">Bairro</legend>
              <input class="input-style !mr-3 !ml-20 max-sm:!ml-2"  required type="text" placeholder="Rua">
            </div>
            <div class="div-input-style ">
              <legend class="legend-style ml-5 max-sm:!ml-0">Número</legend>
            <input class="input-style !w-20 !mx-20 max-sm:!mx-2" required type="text" placeholder="N">
            </div> 
          </div>

        </div>
      </form>
      <div v-if="userType" class="flex justify-center">
        <button class="bg-orange-800 p-2 text-xl rounded-lg w-40 mt-4">Cadastrar</button>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        userType: ""
      }
    }
  }

</script>

<style scoped>
.div-input-style{
 @apply  flex flex-col  w-full
}

.legend-style{
  @apply text-xl 
}

.input-style{
  @apply p-1 rounded-lg border-orange-800 border-2 border-opacity-50 w-auto sm:w-4/5 mx-auto outline-none
}
</style>
