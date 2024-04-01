<template>
    <Modal id="itemDetailing" tabindex="-1" aria-labelledby="scrollableModalLabel" aria-hidden="true" data-bs-backdrop="true">
        <template v-slot:header>
            <h5 class="header-title d-flex justify-content-start align-items-center">Detalhes do Item</h5>
            <button class="btn btn-transparent border-0 text-light" type="button" data-bs-dismiss="modal">
                <IconsClose class="close mt-1 ms-5 s-5" width="1.7em" height="1.7em"/>
            </button>
        </template>
        <template v-slot:body>
            <div v-if="item_details" class="row">
				<div class="col-6">
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Nome </label>
						<input readonly class="form-control" :class="{'bg-light-emphasis': !editionActive, 'bg-light': editionActive}" type="text" :value="item_details.name">
					</div>	
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Código Sipac </label>
						<input readonly class="form-control" :class="{'bg-light-emphasis': !editionActive, 'bg-light': editionActive}" :value="item_details.sipac"> 
					</div>	
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Tipo </label>
						<input readonly class="form-control" :class="{'bg-light-emphasis': !editionActive, 'bg-light': editionActive}" :value="item_details.type"> 
					</div>
                    <div class="mb-3"> 
						<label class="form-label fw-bold"> Quantidade </label>
						<input readonly class="form-control" :class="{'bg-light-emphasis': !editionActive, 'bg-light': editionActive}" :value="item_details.qtd"> 
					</div>	
				</div>
				<div class="col-6">
					<div class="mb-3"> 
						<label class="form-label fw-bold"> Inventário </label>
						<input readonly class="form-control bg-light-emphasis" :value="item_route"> 
					</div>	
					<div class="mb-4">
                        <label class="form-label fw-bold"> Última atualização </label>
                        <input readonly id="expansible-form" class="form-control bg-light-emphasis" @mouseover="inputExpand" @mouseleave="inputContract" :value="item_details.history[0]">
                    </div>
					<div class="mb-3"> 
						<label class="form fw-bold"> Data de Registro </label>
						<input readonly class="form-control bg-light-emphasis" :value="'03/12/2004 00:00'"> 
					</div>	
                    <div class="mb-4"> 
						<label class="form-label fw-bold"> Criador </label>
						<input readonly class="form-control bg-light-emphasis" :value="'Amauri'"> 
					</div>	
				</div>
			</div>
        </template>
        <template v-slot:footer>
            <div class="container-fluid d-flex justify-content-center align-items-center">
                <button class="btn mode-btn btn-dark-alert mx-2" :class="{'d-none': editionActive, 'd-block': !editionActive}" @click="deleteItem" id="itemDelete" data-bs-dismiss="modal">Excluir</button>
                <button type="button" class="btn btn-light-alert text-light mx-3" :class="{'d-none': !editionActive, 'd-block': editionActive}" @click="revertEdition" data-bs-dismiss="modal">Cancelar</button>
                <button class="btn mode-btn btn-primary mx-2" @click="setEdition">{{ editionActive ? 'Voltar' : 'Editar' }}</button>
                <button class="btn btn-light-success text-light mx-3" id="fetch-inputs" :class="{'d-none': !editionActive, 'd-block': editionActive}" @click="fetchNewData" data-bs-dismiss="modal">Confirmar</button>
            </div>
        </template> 
    </Modal>
</template>

<script>
import { useStorageStore } from '../../stores/storage';

export default {
    data() {
        return {
            expansibleContainer: null,
            expansibleInput: null, 
            shadowInput: null,
            mouseOverFlag: false,
            inputs: [],
            editionActive: false
        }
    },
    methods: {
        deleteItem(){
            this.store.deleteItem(this.item_index, this.item_route);
        },
        inputExpand() { 
            if (!this.mouseOverFlag) { 
                this.mouseOverFlag = true;
                this.shadowInput = document.createElement("input");
                this.shadowInput.setAttribute("class", "form-control");
                this.shadowInput.setAttribute("value", "");
                this.shadowInput.setAttribute("readonly", "true");

                this.expansibleInput = document.getElementById("expansible-form");
                this.expansibleInput.style.position = "fixed";
                this.expansibleInput.style.width = "300px";

                this.expansibleContainer = this.expansibleInput.parentNode;
                this.expansibleContainer.appendChild(this.shadowInput);
            }
        },
        inputContract() {
            this.mouseOverFlag = false; 
            if (this.shadowInput && this.expansibleContainer) {
                this.expansibleContainer.removeChild(this.shadowInput);
                this.shadowInput = null;
                this.expansibleInput.style.position = "static";
                this.expansibleInput.style.width = "230px";
            }
        },
        setEdition(){       
            this.editionActive = !this.editionActive;
            this.inputs = document.getElementsByClassName("form-control");
            for(let i = 0; i < this.inputs.length; i++){
                this.inputs[i].removeAttribute('readonly');
            }
        },
        revertEdition(){
            this.editionActive = false;
            this.inputs = document.getElementsByClassName("form-control");
            for(let i = 0; i < this.inputs.length; i++){
                this.inputs[i].setAttribute('readonly', '');
            }
        },
        fetchNewData(){
            this.store.updateItemQtd(this.item_index, this.inputs[4].value, this.item_route);
            this.revertEdition();
        }
    },
    props: {
        item_details: {
            type: Object
        },
        item_index:{
            type: Number
        },
        item_route:{
            type: String
        }
    },
    setup(){
        const store = useStorageStore();
        return {
            store
        }
    },
}
</script>

<style scoped>
.modal-header{
    background-color: red;
}
.close{
    position: relative;
    left: 20px;
}
.header-title{
    font-weight: semibold;
    margin: -1px 0 -1px 0;
    padding: 0;
}
.modal-btn{
    border-radius: 10px;
}

</style>