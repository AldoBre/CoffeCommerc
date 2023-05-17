<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/no-deprecated-filter -->
<template>
	<div>
		<div
			class="marginTop drop-shadow-lg w-3/4 shadow-sm shadow-gray-400 p-4 rounded-md items-center"
		>
			<div class="w-full flex items-center justify-center">
				<h1 class="text-2xl max-sm:text-lg">Todos os Produtos</h1>
			</div>
			<div class="flex justify-center items-center w-full gap-4 mt-8">
				<table class="min-w-max rounded-lg overflow-hidden">
					<thead>
						<tr class="bg-gray-100 uppercase text-sm leading-normal">
							<th class="py-3 px-6 text-left">Titulo</th>
							<th class="py-3 px-6 text-center">Preço</th>
							<th class="py-3 px-6 text-center">Vendedor</th>
							<th class="py-3 px-6 text-center">Data Anúncio</th>
							<th class="py-3 px-6 text-center">Ações</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						<tr v-for="item in products" :key="item.id">
							<td class="py-3 px-6 text-left">{{ item.name }}</td>
							<td class="py-3 px-6 text-center">{{ "R$" + item.price }}</td>
							<td class="py-3 px-6 text-center">Fornecedor</td>
							<td class="py-3 px-6 text-center">{{ item.createdAt }}</td>
							<td class="py-3 px-6 text-center">
								<button
									@click="showModal=true,getProduct(item.id)"
									class="text-purple-600 hover:text-purple-900"
								>
									<i class="fas fa-edit"></i>
								</button>
								<button
									@click="deleteProduct(item.id)"
									class="text-red-600 hover:text-red-900 ml-4"
								>
									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
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
									Editar Produto
								</h3>
								<div class="mt-2">
									<form>
										<div class="mb-4">
											<label
												class="block text-gray-700 font-bold mb-2"
												for="title"
											>
												Título
											</label>
											<input
												v-model="productsInfo.name"
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
												Preço
											</label>
											<input
												v-model="productsInfo.price"
												class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												id="price"
												type="text"
												placeholder="Digite o preço do produto"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							@click="editProduct(productsInfo.id)"
							type="button"
							class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
						>
							Salvar
						</button>
						<button
							@click="showModal = false"
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
		products: [],
    showModal: false,
    productsInfo:[]
	}),
	methods: {
		getProducts() {
			const token = localStorage.getItem("token");
			axios
				.get("/admin/products", {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					this.products = response.data.products;
				});
		},
		deleteProduct(id) {
			const token = localStorage.getItem("token");
			axios
				.delete(`/admin/products/${id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(() => {
					this.getProducts();
					this.$store.dispatch('message','Deletado com sucesso!')
				})
				.catch((error) => {
					console.error(error);
				});
		},
		getProduct(id) {
			const token = localStorage.getItem("token");
			axios
				.get(`/admin/products/${id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					this.productsInfo = response.data
				});
		},
    editProduct(id) {
      const token = localStorage.getItem("token");
      axios.patch(`/admin/products/${id}`,this.productsInfo, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(() => {
        this.showModal = false
        this.getProducts();
        this.$store.dispatch('message','Alterado com sucesso!')
      })
    }
	},
	created() {
		this.getProducts();
	},
};
</script>

<style scoped>
.border2 {
	border-radius: 50%;
}
</style>

