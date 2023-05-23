<template>
  <div class="marginTop drop-shadow-lg w-3/4 shadow-sm shadow-gray-400 p-4 rounded-md items-center">
    <div class="w-full flex items-center justify-center ">
        <h1 class="text-2xl max-sm:text-lg">Configurações da Conta</h1>
    </div>
    <div class="flex justify-center items-center w-full gap-4 mt-8 max-sm:flex-col ">
        <div class="flex flex-col gap-4 max-sm:order-2 ">
            <div class="divInputGap">
                <legend class="legendText">Nome</legend>
                <input :disabled="!editing" class="inputStyleSettings paddingInput " type="text" :value="userInfo.name">
            </div>
            <div class="divInputGap">
                <legend class="legendText">Telefone</legend>
                <input :disabled="!editing" class="inputStyleSettings" type="text" :value="userInfo.phone_number">
            </div>
            <div class="divInputGap">
                <legend class="legendText">Email</legend>
                <input :disabled="!editing" class="inputStyleSettings" type="email" :value="userInfo.email">
            </div>
            <div class="flex justify-center gap-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="toggleEditing">{{ editing ? 'Cancelar' : 'Alterar Dados' }}</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="editing == true">Salvar</button>
            </div>
        </div>
        <div class=" flex justify-center max-sm:order-1">
            <div class="w-2/3  flex flex-col items-center ">
                <img class="border2 borderImg shadow-sm shadow-gray-400  border-opacity-5" src="../../public/img/icons/cafe-torrado.jpeg" alt="">
                <button class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="toggleEditingPhoto">{{ editing ? 'Opa' : 'Alterar Foto' }}</button>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import axios from "../plugins/axios";
export default {
    data(){
        return{
            userId:'',
            editing: false,
            userInfo: [],
            errors: [],
        }
    },
    methods:{
        getUser(){
            const token = localStorage.getItem("token");
            const decodedToken = JSON.parse(atob(token.split(".")[1]));
            this.userId = decodedToken.userId;
            axios.get(`/user/${this.userId}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
                .then((response) => {
                    this.userInfo = response.data
                    console.log(this.userInfo)
                    
                })
        },
        toggleEditing() {
            this.editing = !this.editing;
        }

    },
    created(){
        this.getUser()
    }
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

