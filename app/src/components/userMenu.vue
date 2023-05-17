<template>
  <div>
    <div class="fixed left-0 top-0 h-full bg-gray-800 text-gray-100" :class="{ 'hidden': !show }"> 
      <ul class="marginTopMenu p-4">
        <div v-if="this.userLevel == 2">
          <li class="mb-2">
            <router-link to="/settings">Minha Conta</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/allpurchases">Pedidos</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/cart">Carrinho</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/favoritos">Favoritos</router-link>
          </li>
          <li class="mb-2">
            <button @click="logout">Sair</button>
          </li>
        </div>

        <div v-if="this.userLevel == 3">
          <li class="mb-2">
            <router-link to="/settings">Minha Conta</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/allpurchases">Pedidos Recebidos</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/cart">Cadastrar Produto</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/favoritos">Meus Produtos</router-link>
          </li>
          <li class="mb-2">
            <button @click="logout">Sair</button>
          </li>
        </div>

        <div v-if="this.userLevel == 1">
          <li class="mb-2">
            <router-link to="/settings">Minha Conta</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/admin/allusers">Usuários Cadastrados</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/admin/allproducts">Produtos Cadastrados</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/favoritos">Painel Geral</router-link>
          </li>
          <li class="mb-2">
            <button @click="logout">Sair</button>
          </li>
        </div>
      </ul>
    </div>

  </div>

  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
      userLevel: {
      type: Number,
      required: true
    }

    },
    methods: {
      logout() {
        localStorage.removeItem('token')
        this.$emit('update:show', false)
        location.reload()
      },
    },
  };
  </script>

  <style scoped>
  .marginTopMenu{
    margin-top: 5rem;
  }
  </style>
  