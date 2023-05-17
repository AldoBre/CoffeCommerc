<!-- eslint-disable vue/no-deprecated-filter -->
<template>
	<div>
		<div
			class="marginTop drop-shadow-lg w-11/12 shadow-sm shadow-gray-400 p-4 rounded-md items-center"
		>
			<div class="w-full flex items-center justify-center">
				<div class="text-center flex-grow">
					<h1 class="text-2xl max-sm:text-lg">Todos os Usuários</h1>
				</div>
			</div>
			<div class="absolute top-5 right-5">
				<button
					class="border-solid border-2 p-2 border-indigo-600 rounded hover:bg-sky-500/100"
					@click="openModal = true"
				>
					Novo Usuário
				</button>
			</div>
				<div class="flex justify-center items-center w-full gap-4 mt-8">
					<table class="min-w-max rounded-lg overflow-hidden">
						<thead>
							<tr class="bg-gray-100 uppercase text-sm leading-normal">
								<th class="py-3 px-6 text-left">Nome</th>
								<th class="py-3 px-6 text-center">Email</th>
								<th class="py-3 px-6 text-center">Data de Cadastro</th>
								<th class="py-3 px-6 text-center">Telefone</th>
								<th class="py-3 px-6 text-center">Ações</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr v-for="item in users" :key="item.id">
								<td class="py-3 px-6 text-left">{{ item.name }}</td>
								<td class="py-3 px-6 text-center">{{ item.email }}</td>
								<td class="py-3 px-6 text-center">{{ item.createdAt }}</td>
								<td class="py-3 px-6 text-center">{{ item.phone_number }}</td>
								<td class="py-3 px-6 text-center">
									<button
										@click="showModalUser=true,getUser(item.id)"
										class="text-purple-600 hover:text-purple-900"
									>
										<i class="fas fa-edit"></i>
									</button>
									<button
										@click="deleteUser(item.id)"
										class="text-red-600 hover:text-red-900 ml-4"
									>
										<i class="fas fa-trash"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
	
	
			<div v-if="openModal">
				<div>
					<div
						class="marginTop drop-shadow-lg w-11/12 border-2 p-4 rounded-md items-center"
					>
						<div class="text-center mb-8">
							<h1 class="text-2xl">Cadastro de Usuário</h1>
						</div>
	
						<div class="flex gap-20 justify-center">
							<div class="flex gap-2">
								<input
									type="radio"
									id="pf"
									name="userType"
									v-model="userType"
									value="true"
								/>
								<legend>Pessoa Física</legend>
							</div>
	
							<div class="flex gap-2">
								<input
									type="radio"
									id="pj"
									name="userType"
									v-model="userType"
									value="false"
								/>
								<legend>Empresa</legend>
							</div>
						</div>
	
						<form action="">
							<div class="flex flex-col gap-7 w-3/4 mx-auto">
								<div v-if="userType === 'true'" class="div-input-style">
									<legend class="legend-style">Nome</legend>
									<input
										class="input-style"
										required
										type="text"
										placeholder="Nome Completo"
										v-model="name"
									/>
								</div>
	
								<div v-if="userType === 'false'" class="div-input-style">
									<legend class="legend-style">Razão Social</legend>
									<input
										class="input-style"
										required
										type="text"
										placeholder="Nome Completo"
									/>
								</div>
	
								<div v-if="userType" class="div-input-style">
									<legend class="legend-style">Telefone</legend>
									<input
										class="input-style"
										required
										type="text"
										placeholder="(DD) XXXXX - XXXX"
										v-model="phone_number"
									/>
								</div>
	
								<div v-if="userType" class="div-input-style">
									<div class="flex gap-2">
										<div class="relative">
											<legend class="legend-style ">Senha</legend>
											<div class="flex justify-center items-center">
												<input
													:type="showPassword ? 'text' : 'password'" 
													class="input-style pr-10 "
													required
													placeholder="Senha de 8 digitos"
													v-model="password"
												>
												<i class=" absolute top-3/4 right-3 transform -translate-y-1/2 fas fa-eye-slash cursor-pointer" @click="showPassword = true"></i>
											</div>
										</div>
										<div>
											<legend class="legend-style">Confirma Senha</legend>
											<input
												class="input-style"
												required
												type="password"
												placeholder="Senha de 8 digitos"
											/>
										</div>
									</div>
								</div>
	
								<div
									v-if="userType === 'true'"
									class="flex gap-7 max-sm:flex-col"
								>
									<div class="div-input-style">
										<legend class="legend-style">Data Nascimento</legend>
										<input
											class="input-style !w-auto !ml-20 max-sm:!mx-3"
											required
											type="date"
											placeholder="Rua"
											v-model="birth_date"
										/>
									</div>
								</div>
	
								<div v-if="userType" class="div-input-style">
									<legend class="legend-style">Email</legend>
									<input
										class="input-style"
										required
										type="text"
										placeholder="exemplo@email.com"
										v-model="email"
									/>
								</div>
	
								<div v-if="userType === 'true'" class="div-input-style">
									<legend class="legend-style">CPF</legend>
									<input
										class="input-style"
										required
										type="text"
										placeholder="XXX.XXX.XXX-XX"
										v-model="cpf"
									/>
								</div>
	
								<div v-if="userType === 'true'" class="div-input-style">
									<legend class="legend-style">Admin</legend>
									<select
									v-model="isAdmin">
										<option value=1>Sim</option>
										<option value=2>Não</option>
									</select>
								</div>
	
								<div v-if="userType === 'false'" class="div-input-style">
									<legend class="legend-style">CNPJ</legend>
									<input
										class="input-style"
										required
										type="text"
										placeholder="XXX.XXX.XXX/XXXX-XX"
									/>
								</div>
	
								<div v-if="userType === 'false'" class="div-input-style">
									<legend class="legend-style">Inscrição estadual</legend>
									<input
										class="input-style"
										required
										type="text"
										placeholder="XXX.XXX.XXX/XXXX-XX"
									/>
								</div>
							</div>
						</form>
						<ul v-if="errors.length">
							<li v-for="error in errors" :key="error">{{ error }}</li>
						</ul>
						<div v-if="userType" class="flex justify-center">
							<button @click="registerUser()" class="bg-orange-800 p-2 text-xl rounded-lg w-40 mt-4">
								Cadastrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div v-if="showModalUser" class="fixed z-10 inset-0 overflow-y-auto">
					<div
						class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
					>
						<div class="fixed inset-0 transition-opacity" aria-hidden="true">
							<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>
						<span
							class="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
							>&#8203;</span
						>
						<div
							class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
						>
							<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div class="sm:flex sm:items-start">
									<div
										class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10"
									>
										<i class="fas fa-edit text-purple-600"></i>
									</div>
									<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
										<h3 class="text-lg leading-6 font-medium text-gray-900">
											Editar Usuário
										</h3>
										<div class="mt-2">
											<form>
												<div class="mb-4">
													<label
														class="block text-gray-700 font-bold mb-2"
														for="title"
													>
														Nome
													</label>
													<input
														v-model="userInfo.name"
														class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
														id="title"
														type="text"
														placeholder="Digite o título do produto"
													/>
												</div>
												<div class="mb-4">
													<label
														class="block text-gray-700 font-bold mb-2"
														for="price"
													>
														Email
													</label>
													<input
														v-model="userInfo.email"
														class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
														id="price"
														type="text"
														placeholder="Digite o preço do produto"
													/>
												</div>
												<div class="mb-4">
													<label
														class="block text-gray-700 font-bold mb-2"
														for="price"
													>
														Telefone
													</label>
													<input
														v-model="userInfo.phone_number"
														class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
														id="price"
														type="text"
														placeholder="Digite o preço do produto"
													/>
												</div>
											</form>
											<ul v-if="errors.length">
												<li v-for="error in errors" :key="error">{{error }}</li>
											</ul>
										</div>
									</div>
								</div>
								
							</div>
							<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
								<button
									@click="editUsers(userInfo.id)"
									type="button"
									class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
								>
									Salvar
								</button>
								<button
									@click="showModalUser= false"
									type="button"
									class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								>
									Cancelar
								</button>
							</div>
						</div>
					</div>
		</div>
	</div>
</template>

<script>
import axios from "../plugins/axios";
export default {
	data: () => ({
		users: [],
		userInfo:[],
		userType: "",
		openModal: false,
    showPassword: false,
    errors: [],
		showModalUser: false

	}),
	methods: {
		getUsers() {
			const token = localStorage.getItem("token");
			axios
				.get("/admin/users", { headers: { Authorization: `Bearer ${token}` } })
				.then((response) => {
					this.users = response.data.users;
				});
		},
		registerUser() {
			const formData = {
				name: this.name,
				cpf: this.cpf,
				email: this.email,
				birth_date: this.birth_date,
				password: this.password,
				phone_number: this.phone_number,
				level_user: this.isAdmin,
        age: 30
			};
			axios.post("/register", formData).then(() => {
			}).catch((error) => { 
      if (error.response.data.errors) {
        this.errors = error.response.data.errors;
      } else {
        this.errors = [error.response.data.message];
      }
    });
		},
		getUser(id){
			const token = localStorage.getItem("token");
			axios
				.get(`/admin/user/${id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					this.userInfo = response.data
				});
		},
		deleteUser(id) {
	const token = localStorage.getItem("token");
	axios
		.delete(`/admin/user/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				paranoid: false // habilita o soft delete
			}
		})
		.then(() => {
			this.getUsers();
			this.$store.dispatch('message','Usuário deletado com sucesso!')
		})
		.catch((error) => {
			console.error(error);
		});
},

		editUsers(id) {
			
      const token = localStorage.getItem("token");
      axios.patch(`/admin/user/${id}`,this.userInfo, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(() => {
        this.showModalUser = false
        this.getUsers();
        this.$store.dispatch('message','Usuário alterado com sucesso!')
      }).catch((error) => { 
      if (error.response.data.errors) {
        this.errors = error.response.data.errors;
      } else {
        this.errors = [error.response.data.message];
      }
    });
    }
	},
	created() {
		this.getUsers();
	},
};
</script>

<style scoped>
.border2 {
	border-radius: 50%;
}
</style>

