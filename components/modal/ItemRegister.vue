<template>
    <Modal id="itemRegistration" tabindex="-1" aria-labelledby="scrollableModalLabel" aria-hidden="true" data-bs-backdrop="true">
        <template v-slot:header>
            <h5 class="header-title d-flex justify-content-start align-items-center">Cadastro de Item</h5>
            <button class="btn btn-transparent text-light close-btn" type="button" data-bs-dismiss="modal">
                <IconsClose class="close mt-1 ms-5 s-5" width="1.7em" height="1.7em"/>
            </button>
        </template> 
        <template v-slot:body> 
            <div class="mb-3">
                <label for="item-name">Nome do item</label> 
                <input class="form-control" v-model="itemName" type="text">
            </div>
            <div class="sipac-container mb-3" :style="{opacity: itemSipac ? '100%' : '50%'}">
               <label for="item-sipac">Código Sipac <span class="text-light-emphasis ms-3">*opcional*</span></label> 
               <input class="form-control" v-model="itemSipac" type="text">
            </div>
            <div class="mb-3 d-flex">
                <div class="d-block">
                    <label for="item-qtd">Tipo Unitário</label> 
                    <select v-model="itemType" class="form-select me-5" aria-label="Default select">
                        <option selected>Selecione o tipo</option>
                        <option value="unidade">unidade</option>
                        <option value="sacola">sacola</option>
                        <option value="unidade">caixa</option>
                    </select>
                </div>
                <div class="d-block ms-5">
                    <label for="item-qtd">Quantidade</label> 
                    <input class="form-control" v-model="itemQtd" type="number" pattern="[0,9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div class="container-fluid d-flex justify-content-center align-items-center">
                <button type="button" @click="itemRegister" class="btn btn-light-success text-light mx-3" data-bs-dismiss="modal">Cadastrar</button>
                <button type="button" class="btn btn-light-alert text-light mx-3" data-bs-dismiss="modal">Cancelar</button>
            </div>
        </template>
    </Modal>

</template>

<script>
import { sipacHandeling } from '../../composables/inputHandler';
import { useStorageStore } from '../../stores/storage';
export default{
    data() {
        return{
            itemName: '',
            itemSipac: '',
            itemType: '',
            itemQtd: 0
        }
    },
    methods: {
        itemQtdHandler(quantity){
            if(this.itemQtd == 0){
                //acionar notificação de aviso
            }
        },
        itemRegister(){
            this.store.addItem({name: this.itemName, sipac: sipacHandeling(this.itemSipac), type: this.itemType, /*Faltando o handler de qtd*/  qtd: this.itemQtd, history: '', storage: this.$route.path.split('/')[2]})
            this.store.throwPopup();
        },
        itemRemove(){
            this.store.deleteItem();
        }
    },
    setup(){
        const store = useStorageStore();
        return{
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
.btn{
    border-radius: 10px;
}
.close-btn{
    border: none;
}
.sipac-container:hover{
    opacity: 100% !important;
}
.sipac-container:active {
    opacity: 100% !important;
}
</style>