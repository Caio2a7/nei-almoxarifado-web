<script setup lang="ts"> 
	const person = { name: 'Gabriel' };
	const item = { name: 'Monitor Multilaser', quantity: 2, itemTagging: 2029103923 };
	const requests = [
	{ 
		requestedAt: new Date(Date.now()).toLocaleDateString(),
		message: "Solicito o item para a sala A308",
		quantity: 1,
		person: person.name,
		item: item.name,
		itemTagging: item.itemTagging,
		itemQuantity: item.quantity
	 }, 
	{
		requestedAt: new Date(Date.now()).toLocaleDateString(),
		message: "Solicito o item para a sala B204",
		quantity: 15,
		person: "Clezio",
		item: "Copo descartável",
		itemTagging: 20191029301, 
		itemQuantity: 200
	},
	];

</script>
<template>
	<div class="row d-block">
		<div class="catalog-header d-flex align-items-center">
			<h2>Controle de Acesso</h2>
			<div class="actions-buttons d-flex">
				<ButtonsFilter />
				<ButtonsConfigure /> 
			</div>
		</div>
		 <hr>
	</div>

    <div class="container d-flex content">
	<!-- TODO: transformar em tabela com linhas !-->
	<div class="row">
		<div v-for="req in requests" class="col-xl-6 col-12 mb-3 mb-xl-0"> 
			<CardsSolicitation 
				:person="req.person"
				:requestedAt="req.requestedAt"
				:message="req.message"
				:itemName="req.item"	
				:itemTagging="req.itemTagging"
				:quantity="req.quantity"
				:itemQuantity="req.itemQuantity"
			> 
			</CardsSolicitation>
		</div>
	</div>
    </div>
</template>


<style scoped>
	.content {
		margin-left: 3vh;
		margin-right: 3vh;
	}

h2{
    font-weight: 300;
    color: rgb(51,51,51, 0.8);
}
.catalog-header{
    justify-content: space-between;
}
@media screen and (max-width: 872px){
    .catalog-header{
        display: block !important;
        text-align: center;
    }
    .actions-buttons{
        justify-content: center;
        align-content: center;
    }
}
 </style>
