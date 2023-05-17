<template >
  <main class="marginTop w-11/12  justify-center grid grid-cols-4 gap-4 mb-2 ">
    <div class="col-span-4 flex justify-center">

      <div >
        <img :src="imagens[indice].src" alt="" />
      </div>
    
    </div>

    <div class="bg-orange-700 rounded p-2">Outro banner</div>

    <div class=" bg-slate-600 col-span-3 rounded p-2 ">
      <div>
        <router-link to="route">Ver todos</router-link>
      </div>

      <div class="grid grid-cols-4 gap-3 p-4">
        <div v-for="item in products" :key="item.id" class="flex flex-col bg-white w-auto p-4">
          <h1>{{item.name}}</h1>
          <img class="w-36" :src="item.img_url||'/img/download.png'" alt="">
          <p>{{'R$ ' + String(item.price).replace(".",",")}}</p>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import axios from "../plugins/axios"
export default {
 data(){
  return{
    imagens:[
      {src:"img/icons/banner.png"},
      {src:"img/icons/banner2.png"},
      {src:"img/icons/banner3.png"},
    ],
    indice:0,
    products: []
  }
 },
 created(){
  setInterval(this.proximo, 3000)
  this.getProducts()
 },
 methods:{
  proximo(){
    this.indice++
    if(this.indice >= this.imagens.length){
      this.indice = 0
    }
  },
  getProducts(){
    axios.get("/products/list").then(response =>{
      const productsList = response.data.products;
      for(let i = 0; i < productsList.length; i++){
        this.products.push(productsList[i])
      }
    })
  }

 }
};
</script>


<style >
.marginTop{
  @apply mt-24 mr-auto ml-auto
}





</style>
