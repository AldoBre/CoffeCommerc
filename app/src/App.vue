<template>
  <div @click="closeModal" class="flex flex-col min-h-screen">
    <nav>
      <div
        class="template fixed top-0 left-0 right-0 flex shadow-md w-full p-4 gap-8 z-50 bg-orange-700"
      >
        <div class="flex justify-center w1/3">
          <router-link to="/"
            ><img class="" src="../public/img/icons/navLogo.svg" alt=""
          /></router-link>
        </div>

        <div class="flex w-full justify-center items-center gap-2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            class="w-4/5 p-2 rounded border"
            type="text"
            placeholder="Encontre o seu café preferido"
          />
        </div>

        <div class="flex w-1/3 items-center gap-5 justify-center">
          <div>
            <router-link to="/cart"
              ><i class="fa-solid fa-cart-shopping w-6 h-7"></i
            ></router-link>
          </div>

          <div
            v-if="!userlogin"
            class="mt-15 flex gap-2 justify-end items-center"
          >
            <button @click="showModal = true" @click.stop>Login</button>

            <div
              v-if="showModal"
              class="modal absolute right-11 mt-72 w-auto bg-white rounded-md overflow-hidden shadow-xl z-10"
              ref="modal"
            >
              <form class="px-4 py-3">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="username"
                  >
                    Nome de usuário
                  </label>
                  <input
                    v-model="username"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Digite seu email"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="password"
                  >
                    Senha
                  </label>
                  <input
                    v-model="password"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    @click.prevent="login"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Entrar
                  </button>
                  <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
                <div
                  class="text-red-600 text-center"
                  v-if="errorMessage"
                  v-html="errorMessage"
                ></div>
              </form>
            </div>

            <p>/</p>

            <router-link to="/register">Cadastre-se</router-link>
          </div>
          <div v-else>Olá, {{ userlogin }}</div>
        </div>
      </div>
    </nav>

    <div :class="{ 'padding-after-login': showMenu }" class="max-sm:p-0">
      <transition>
        <router-view />
      </transition>

      <div>
        <Menu
          :user-level="userLevel"
          :show="showMenu"
          @update:show="updateShow"
        ></Menu>
      </div>
    </div>

    <div v-if="message" class="absolute z-999 mt-24 max-w-full top-0 right-5">
      <div class="text-cyan-100 flex rounded-xl bg-slate-600 p-3">
        <div class="rounded-xl barra-progresso ml-2 mb-1"></div>
        <div class="mr-2">{{ message }}</div>
      </div>
    </div>

    <footer class="relative bottom-0 bg-gray-500 mt-auto">
      <div class="flex">
        <div class="w-1/3 text-sm ml-3 flex flex-col justify-center">
          <p>Coffe Comerce</p>
          <p>Atendimendo: Segunda a Sábado das 08h até 19h</p>

          <p class="flex gap-1">
            <img
              class="w-5"
              src="../public/img/icons/logos_whatsapp-icon.svg"
              alt="whatsapp"
            />
            (49) 12345-6789
          </p>
        </div>

        <div
          class="w-1/3 p-2 mt-2 flex flex-col items-center justify-center text-center"
        >
          <a class="max-w-[20%]" href=""
            ><img src="../public/img/icons/Group.svg" alt=""
          /></a>
          <div class="text-xs">
            <p>CNPJ:03.007.331/0001-41</p>
            <p>CoffeCommerc Todos os direitos reservados &copy;</p>
          </div>
        </div>

        <div class="w-1/3 flex flex-col justify-center text-right">
          <p class="flex gap-1 mb-2 text-center justify-center">
            Stacks utilizadas
          </p>
          <div class="flex gap-3 items-start justify-center">
            <div class="text-center">
              <p>Front-End</p>
              <div class="flex gap-1 justify-center">
                <img
                  class="w-6"
                  src="../public/img/icons/skill-icons_tailwindcss-dark.svg"
                  alt="Tailwind"
                />
                <img
                  class="w-6"
                  src="../public/img/icons/skill-icons_javascript.png"
                  alt="javascript"
                />
                <img
                  class="w-6"
                  src="../public/img/icons/skill-icons_vuejs-dark.svg"
                  alt="Tailwind"
                />
              </div>
            </div>
            <div>
              <p>Back-End</p>
              <div class="flex gap-1 justify-center">
                <img
                  class="w-6"
                  src="../public/img/icons/skill-icons_nodejs-dark.svg"
                  alt="node"
                />
                <img
                  class="w-6"
                  src="../public/img/icons/skill-icons_typescript.svg"
                  alt="typescript"
                />
              </div>
            </div>
            <div>
              <p>Banco de Dados</p>
              <div class="flex gap-1 justify-center">
                <img
                  class="w-6"
                  src="../public/img/icons/skill-icons_mysql-dark.svg"
                  alt="mysql"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "./plugins/axios";
import Menu from "./components/userMenu.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import { mapState } from "vuex";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      showMenu: false,
      showModal: false,
      effectMenu: "",
      username: "",
      password: "",
      errorMessage: "",
      userlogin: "",
      userLevel: 0,
    };
  },
  mounted() {
    document.addEventListener("click", this.closeModal);
    this.loginWithToken();
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeModal);
  },
  computed: {
    ...mapState(["message"]),

    mensagens() {
      return this.$store.getters.mensagens;
    },
  },
  methods: {
    closeModal(event) {
      if (this.$refs.modal && !this.$refs.modal.contains(event.target)) {
        this.showModal = false;
      }
    },
    login() {
      const formData = new FormData();
      formData.append("email", this.username);
      formData.append("password", this.password);
      axios
        .post("/login", formData)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.showMenu = true;
          this.showModal = false;
          this.username = "";
          this.password = "";
          const token = localStorage.getItem("token");
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          this.userlogin = decodedToken.userName;
          this.userLevel = decodedToken.levelUser;
          window.location.reload();
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.errorMessage = "Nome de usuário ou senha incorretos";
          } else {
            this.errorMessage =
              "Ocorreu um erro ao fazer login.<br>Por favor, tente novamente mais tarde";
          }
          this.username = "";
          this.password = "";
          setTimeout(() => {
            this.errorMessage = "";
          }, 3000);
        });
    },
    loginWithToken() {
      const token = localStorage.getItem("token");
      axios.post("/logintoken", { token }).then(() => {
        this.showMenu = true;
        const token = localStorage.getItem("token");
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        this.userlogin = decodedToken.userName;
        this.userLevel = decodedToken.levelUser;
      });
    },
    updateShow(value) {
      this.show = value;
    },
  },
};
</script>

<style >
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.padding-after-login {
  padding-left: 10rem;
}

.barra-progresso {
  height: 4px;
  width: 100%;
  background-color: #e00f0f;
  position: absolute;
  bottom: 0;
  left: 0;

  animation: diminuir 3s linear forwards;
}

@keyframes diminuir {
  from {
    width: 90%;
  }
  to {
    width: 0;
  }
}
</style>
