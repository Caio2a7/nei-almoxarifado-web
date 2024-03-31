<template>
    <ModalItemDetails v-if="filteredItemsSize > 0" :item_index="itemIndex" :item_route="currentRoute" :item_details="currentItem" />
    <ModalItemHistory v-if="filteredItemsSize > 0" :item_history="currentItem"/>
    <Popup :isPopup="isPopup"/>
    <div class="row d-block">
        <TablesTable>
            <template v-slot:title>Almoxarifado Funcionários</template>
            <template v-slot:search>
                <input v-model="searchInput" class="table-searchbar form-control" placeholder="Pesquisar"/>
            </template>
            <template v-slot:items>
            <tr v-if="filteredItemsSize > 0" v-for="(item, index) in filteredItems" :key="index">
               <th scope="row"><p>{{ item.name }}</p></th>
               <th>
                    <p v-if="item.sipac">{{ item.sipac }}</p>
                    <p v-else>nenhum</p>
               </th>
                <th>
                    <p>{{ item.type }}</p>
                </th>
               <th>
                <p>{{ item.qtd }}</p>
            </th>
               <th><p>{{ item.history[0]}}</p></th>
               <th class="end">
                    <button class="table-btn btn btn-primary" @click="showDetails(index)" data-bs-toggle="modal" data-bs-target="#itemDetailing">
                        Detalhes
                    </button>
                    <button class="table-btn btn btn-primary" @click="showHistory(index)" data-bs-toggle="modal" data-bs-target="#itemHistory">
                        Histórico
                    </button>
                </th>
             </tr>
             <div v-else class="warning-text d-flex aling-items-center justify-content-center">
                 <p class="text-dark-emphasis fs-5 opacity-50">Inventário vazio.</p>
             </div>
            </template>
        </TablesTable>
        <nav aria-label="Page navigation d-flex">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link bg-primary text-light" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span></a></li>
                <li class="page-item"><a class="page-link bg-primary text-light" href="#">1</a></li>
                <li class="page-item"><a class="page-link bg-primary text-light" href="#">2</a></li>
                <li class="page-item"><a class="page-link bg-primary text-light" href="#">3</a></li>
                <li class="page-item"><a class="page-link bg-primary text-light" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStorageStore } from '../../stores/storage';
import { ref, computed, onMounted, onUpdated} from 'vue';

const router = useRoute();
const store = useStorageStore();
const items = ref(store.items); 
const searchInput = ref("");

const isPopup = computed(() => {
    return store.popupActive
})
const currentRoute = useRoute().fullPath.split('/')[2];

onMounted(() => {
    store.deleteMode = false,
    store.editMode = false
});


const filteredItems = computed(() => items.value.filter(item => item.storage.includes("almoxarifado-funcionarios") && item.name.includes(searchInput.value)));
const filteredItemsSize = computed(() => filteredItems.value.length);


const itemIndex = ref(0);
const currentItem = computed(() => filteredItems.value[itemIndex.value]);

const showDetails = (index) => {
    itemIndex.value = index;
}

const showHistory = (index) => {
    itemIndex.value = index;
}
</script>

<style scoped>
.container{
    margin-left: 0px; 
    padding: 0px;
}

th{
    padding: 16px 0 16px 0;
    text-decoration: none;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
p{
    padding: 0;
    margin: 0;
}
.action-btn{
    margin-right: 10px;
}
.table-searchbar{
    margin-left: 190px;
    width: 240px;
}
.btn-outline-primary{
    color: rgb(51,51,51, 0.7);
}
.btn-outline-primary:hover{
    color: white !important;  
}
.end{
    position: relative;
    text-align: end;
    padding: 0;
}
.table-btn{
    font-size: 15px;
    opacity: 0%;
    margin-top: 8px;
    margin-right: 10px;
    padding: 5px 5px 5px 5px;
}
.mode-btn{
    margin: 0;
    z-index: 1000;
    display: none;
    position: absolute;
    margin-top: -28px;
    margin-left: 210px;
    opacity: 0%;
}
.warning-text{
    position: absolute;
    margin-top: 5%;
    margin-left: 35%;
}
tr:hover .mode-btn{
    display: block;
    opacity: 100%;
}

tr:hover .table-btn{
    opacity: 100%;
}
tr:hover p{
    opacity: 70%;
}
@media screen and (max-width: 1000px) {
    table {
        width: 70vw;
    }
    .col-title{
        font-size: 14px;
    }
    p{
        font-size: 12px;
    }
    .table-btn{
        font-size: 13px;
        opacity: 0%;
        margin-top: 11px;
        margin-right: 4px;
        padding: 3px 0px 3px 0px;
    }
}
@media screen and (max-width: 900px){
    .catalog-header{
        display: block !important;
        text-align: center;
    }
    .actions-buttons{
        justify-content: center;
        align-content: center;
    }
}
@media screen and (max-width: 820px) {
    .container{
        margin-left: 0px;
    }
    table {
        width: 50vw;
    }
    .col-title{
        font-size: 12px;
    }
    p{
        font-size: 11px;
    }
    .table-btn{
        font-size: 11px;
    }
}
</style>