<template>
    <div class="container">
		<!-- TODO: transformar em tabela com linhas !-->
		<div class="sub-catalog bg-light mb-4 mt-1 ps-2 pe-2">
        	<h6 class="sub-catalog-title ps-2 d-flex align-items-center opacity-75">
        	    <IconsInformation class="me-2"/>
        	    Descrição da página 
        	</h6>
        	<p class="sub-catalog-text opacity-75 mb-0">
				É por meio desta página que a administração irá controlar as solicitações de itens do almoxarifado, aceitando-as ou recusando-as. Ademais pode-se atrelar 
				uma mensagem de notificação para a resposta da solicitação.
			</p>
    	</div>
		<div class="row mt-3 d-flex align-items-center justify-content-center">
			<div v-if="solicitations.length > 0" v-for="req in solicitations" :key="req.id" :class="{'extra-large': solicitations.length == 1, 'col-xl-6': solicitations.length == 2}" class="p-0 col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-3 mb-xl-0"> 
				<CardsSolicitation
					:person="req.user.name"
					:requestedAt="req.creationDate"	
					:message="req.description"
					:itemName="req.item.name"	
					:itemTag="req.item.sipacCode"
					:quantityRequested="req.quantityRequested"
					:itemQuantity="req.item.quantity"
					:itemType="req.item.type"
					:requestId="req.id"
					> 
				</CardsSolicitation>
			</div>
			<div v-else class="warning-text d-flex aling-items-center justify-content-center">
                 <p class="text-dark-emphasis fs-5 opacity-50">Nenhuma solicitação feita.</p>
             </div>
		</div>
    </div>
</template>

<script setup lang="ts"> 
import { inject } from 'vue';
import { getRequestByStatus } from '../services/requests/requestsGET';
import { useUser } from '../stores/user';
import { provide, ref } from 'vue';
import { useRoute } from 'vue-router';

const setpageTitle = inject('setpageTitle');
const sendDataToParent = () => {
    const title = "Controle de Acesso";
    const route = `${useRoute().fullPath}`
    setpageTitle(title, route, 'control');
};
sendDataToParent();

const userStore = useUser()
const res = await getRequestByStatus(userStore, 'pendente');
const solicitations = ref([])
res.content.map((request) => {
	solicitations.value.push(request)
})
if(res.totalPages > 1){
	for(let i = 1; i < res.totalPages; i++){
		const res = await getRequestByStatus(userStore, 'pendente', i);
		res.content.map((request) => {
			solicitations.value.push(request);
		})
	}
}

provide('setSolicitations', async () => {
	console.log("WHATAFICL")
	solicitations.value = []
	const res = await getRequestByStatus(userStore, 'pendente');
	res.content.map((request) => {
		solicitations.value.push(request)
	})
	if(res.totalPages > 1){
	for(let i = 1; i < res.totalPages; i++){
		const res = await getRequestByStatus(userStore, 'pendente', i);
		res.content.map((request) => {
			solicitations.value.push(request);
		})
	}
}
})
</script>

<style scoped>
.extra-large{
	width: 50vw;
}
.container{
	width: 100%;
	padding-left: 30px;
}
.warning-text{
	margin-top: 5%;
	margin-bottom: 25%;
	width: 80%;
}
.sub-catalog{
    border-radius: 13px;
    margin-top: -14px;
    padding-top: 10px;
    padding-bottom: 20px;
    margin-right: 10%;
    margin-left: 10%;
    border: 1px #D9D9D9 solid;
    box-shadow: 3px 3px 13px 0px rgb(0, 0, 0, 0.2);
}
.sub-catalog-text{
    padding: 0px 10px 0px 10px;
    font-size: 15px;
}
h6{
    font-weight: 400;
    color: rgb(51,51,51, 0.8);
}
</style>
