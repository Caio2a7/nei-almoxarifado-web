<script setup lang="ts"> 
interface ItemHistory{
	name: string,
	sipac: number,
	type: string,
	qtd: number,
	storage: string,
	history: string[],
}

const props = defineProps<{
  item_tb_history: ItemHistory;
}>();

const item_tb_history: ItemHistory = props.item_tb_history;

const itemOperations = reactive([
	{
		 date: new Date(Date.now()).toLocaleDateString(),
		 operation: 'Cadastro',
		 quantity: 3,
		 author: 'Andriel',
	},
	{
		 date: new Date(Date.now()).toLocaleDateString(),
		 operation: 'Consumo',
		 quantity: 3,
		 author: 'Andriel',
	},
	{
		 date: new Date(Date.now()).toLocaleDateString(),
		 operation: 'Exclusão',
		 quantity: 3,
		 author: 'Andriel',
	},
]);

const isCreate = (data) => {
	return data.operation == 'Cadastro'; 
};
const isRequest = (data) => {
	return data.operation == 'Consumo'; 
};
const isDelete = (data) => {
	return data.operation == 'Exclusão'; 
};

</script>

<template>
	<table class="table text-center"> 
		<thead>
			<tr>
				<th scope="col"> Data </th> 
				<th scope="col"> Operação </th> 
				<th scope="col"> Quantidade </th> 
				<th scope="col"> Autor </th> 
			</tr>
		 </thead>
		<tbody>
			<tr v-for="line in itemOperations" :key="line.author"> 
				<td scope="row" class="p-2 mb-3"> {{item_tb_history.history[0]}} </td>
				<td class="fw-bolder p-2 mb-3" style="--bs-bg-opacity: .99"
					:class="{'text-light bg-success border-0': isCreate(line), 'text-light bg-danger border-0': isDelete(line), 'text-light bg-warning border-0': isRequest(line)}"> {{line.operation}} </td>
				<td > {{item_tb_history.qtd}} </td>
				<td > {{line.author}} </td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
</style>

