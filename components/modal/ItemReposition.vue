<template>
    <Modal id="itemReposition" tabindex="-1" aria-labelledby="scrollableModalLabel" aria-hidden="true" data-bs-backdrop="true">
        <template v-slot:header>
            <h6 class="header-title d-flex fw-medium justify-content-start align-items-center">Reposição do item</h6>
            <button class="btn btn-transparent text-light close-btn" type="button" data-bs-dismiss="modal">
                <IconsClose class="close ms-5 s-5" width="1.3em" height="1.3em"/>
            </button>
        </template>
        <template v-slot:body>
            <div class="row">
                <div class="mb-3"> 
                        <label class="form-label fw-bold">Quantidade a ser reposta </label>
						<input v-model="repositionQtd" class="form-control edit-control" type="number" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
				</div>
            </div>   
        </template>
        <template v-slot:footer>
            <div class="d-flex">
                <div class="container-fluid d-flex justify-content-center align-items-center">
                    <button @click="reposition" data-bs-dismiss="modal" type="button" class="btn mx-2 btn-light-success inset-shadow text-light">Confirmar</button>
                    <button data-bs-dismiss="modal" type="button" class="btn btn-light-alert text-light inset-shadow">Cancelar</button>
                </div>
            </div>
        </template>
    </Modal>
</template>

<script setup>
import { ref } from 'vue';
import { postCreateItem } from '../../services/items/itemsPOST';
import { useStorageStore } from '../../stores/storage';
import { usePopupStore } from '../../stores/popup';
import { useRoute } from 'vue-router';
const props = defineProps({
    itemName: {
        type: String,
        required: true
    },
    itemSipac: {
        type: Number,
    },
    itemType: {
        type: String,
        required: true
    },
    itemIndex: {
        type: Number,
        required: true
    }
})


const repositionQtd = ref(0);
const store = useStorageStore();
const popUpStore = usePopupStore();
const reposition = () => {
    if(repositionQtd.value === 0){
        popUpStore.throwPopup('Erro: Quantidade deve ser maior que 0', '#B71C1C')
        return 0
    }
    try{
        store.addItem({name: props.itemName, sipacCode: props.itemSipac === null? '': props.itemSipac, type: props.itemType, quantity: repositionQtd.value, storage: 'teste'})
        popUpStore.throwPopup(`Reposição de ${repositionQtd.value} ${props.itemName} feita com sucesso`, '#0B3B69')
    } catch(err){
        popUpStore.throwPopup('Erro: Algo de errado ocorreu, contate o suporte', '#B71C1C')
        return 0;
    }
}
</script>

<style scoped>
.inset-shadow{
    padding: 6px 10px 6px 10px;
    box-shadow: inset 1px 1px 15px 1px rgb(0, 0, 0, 0.2);
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
@media screen and (max-width: 424px){
    .form-label{
        font-size: 14px !important;
        font-weight: normal !important;
    }   
    .form-control{
        font-size: 12px !important;
    }
}
@media screen and (max-width: 360px){
    .form-label{
        font-size: 12px !important;
        font-weight: normal !important;
    }   
    .form-control{
        font-size: 12px !important;
    }
}
</style>
