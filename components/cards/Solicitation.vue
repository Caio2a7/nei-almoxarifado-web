<script>
import Card from './Card.vue'
export default {
	components: { Card },
	props: ['person', 'requestedAt', 'expirationDate', 'message', 'itemName', 'itemTagging', 'quantity', 'itemQuantity']
}
</script>

<template>
	<Card>
		<template v-slot:header> <h5> Solicitação </h5> </template>
		<template v-slot:default> 
			<div class="row">
				<div class="col-6">
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Solicitador </label>
						<input readonly class="form-control" type="text" :value="person"> 
					</div>	
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Data </label>
						<input readonly class="form-control" :value="requestedAt">  
					</div>	
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Mensagem da solicitação </label>
						<textarea readonly class="form-control" :value="message"> </textarea>
					</div>	
				</div>
				<div class="col-6">
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Item solicitado </label>
						<input readonly class="form-control" :value="itemName"> 
					</div>	
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Código Sipac </label>
						<input readonly class="form-control" :value="itemTagging"> 
					</div>	
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Quantidade Solicitada </label>
						<input readonly class="form-control" :value="quantity">
					</div>	
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Quantidade Disponível </label>
						<input readonly class="form-control" :value="itemQuantity"> 
					</div>	
				</div>
			</div>
			</template>
		<template v-slot:footer>
			<div class="row justify-content-evenly"> 
				<button class="btn btn-danger col-2 mx-2" data-bs-toggle="modal" data-bs-target="#rejectModal" style="white-space: nowrap;"> Rejeitar </button>
				<button class="btn btn-outline-success col-2 mx-2" data-bs-toggle="modal" data-bs-target="#acceptModal"> Aceitar </button>
			</div>
		</template>
	</Card>

<ModalActionConfirm id="acceptModal">
	<template v-slot:title> Confirmar aceitação </template>
	<template v-slot:text> 
		<h6> Mensagem para a notificação </h6>
		<textarea class="form-control"> </textarea>
	 </template>
	<template v-slot:buttons> 
		<button class="btn btn-secondary mx-2"> Enviar </button>
	</template>
 </ModalActionConfirm>

<ModalActionConfirm id="rejectModal">
	<template v-slot:title> Confirmar rejeição </template>
	<template v-slot:text> 
		<h6> Mensagem para a notificação </h6>
		<textarea class="form-control"> </textarea>
	 </template>
	<template v-slot:buttons> 
		<button class="btn btn-secondary mx-2"> Enviar </button>
	</template>
 </ModalActionConfirm>

</template>

<style scoped>
</style>

