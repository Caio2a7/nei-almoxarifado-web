<script setup> </script>

<template>
	<Modal id="actionConfirm">
		<template v-slot:header>
			<h5 class="modal-title"> Confirmação de ação </h5>
			 <button class="btn btn-transparent text-light close-btn" type="button" data-bs-dismiss="modal">
                <IconsClose class="close mt-1 ms-5 s-5" width="1.7em" height="1.7em"/>
            </button>
		</template>
		<template v-slot:body>
			<slot name="text" />
		</template>
		<template v-slot:footer>
			<div class="container-fluid d-flex justify-content-center align-items-center">
				<slot name="buttons" />
            </div>
		</template>
	</Modal>
</template>

<style scoped>
.close-btn{
	padding: 0;
	margin: 0;
	border: none;
}
</style>

