<template>
  <div class="marginTop drop-shadow-lg w-3/4 shadow-sm shadow-gray-400 p-4 rounded-md items-center">
    <div class="w-full flex items-center justify-center ">
        <h1 class="text-2xl max-sm:text-lg">Configurações da Conta</h1>
    </div>
    <div class="flex justify-center items-center w-full gap-4 mt-8 max-sm:flex-col ">
        <div class="flex flex-col gap-4 max-sm:order-2 ">
            <div class="divInputGap">
                <legend class="legendText">Nome</legend>
                <input class="inputStyleSettings paddingInput " type="text" value="NOME">
            </div>
            <div class="divInputGap">
                <legend class="legendText">Telefone</legend>
                <input class="inputStyleSettings" type="text" value="NOME">
            </div>
            <div class="divInputGap">
                <legend class="legendText">Email</legend>
                <input class="inputStyleSettings" type="email" value="NOME">
            </div>
            <div class="divInputGap "> 
                <legend class="legendText">Aniversário</legend>
                <input class="w-3/4 p-1 rounded-lg shadow-sm shadow-gray-400  " type="date" value="NOME">
            </div>
        </div>
        <div class=" flex justify-center max-sm:order-1">
            <div class="w-2/3  flex flex-col items-center ">
                <img class="border2 borderImg shadow-sm shadow-gray-400  border-opacity-5" src="../../public/img/icons/cafe-torrado.jpeg" alt="">
                <legend>Alterar Foto</legend>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.border2{
    border-radius: 50%;
}


.inputStyleSettings{
    @apply flex p-1 border-b-2 border-black border-opacity-50 outline-none mx-auto shadow-none  max-sm:w-full max-sm:mx-0
}

.divInputGap{
    @apply flex flex-col gap-1
}

.legendText{
    font-size: .8rem;
    opacity: .7;
}


</style>

