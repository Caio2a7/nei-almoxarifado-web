<template>
    <ModalItemRegister />
    <div class="catalog-header d-flex align-items-center">
        <h2><slot name="title"/></h2>
        <div class="d-block">
            <slot name="search" />
        </div>
        <div class="actions-buttons d-flex">
            <button class="action-btn d-flex btn btn-outline-primary border-0" data-bs-toggle="modal" data-bs-target="#itemRegistration">
                Novo
                <IconsPlus class="mx-1" width="1.5em" height="1.5em"/>
            </button>
            <ButtonsFilter />
            <ButtonsConfigure />
        </div>
     </div>
     <hr>
     <div class="col-xxl-12 table-responsive mt-4">
         <table class="table table-hover">
           <thead>
            <tr>
                <th class="col-title py-2" scope="col">Nome</th>
                <th class="col-title py-2" scope="col">Código Sipac</th>
                <th class="col-title py-2" scope="col">Tipo Unitário</th>
                <th class="col-title py-2" scope="col">Quantidade</th>
                <th class="col-title py-2" scope="col">Última atualização</th>
                <th class="col-title end"></th>
            </tr>
           </thead>
           <tbody>
            <slot name="items" />
           </tbody>
         </table>
     </div>
</template>

<script setup>
import { onMounted } from 'vue'; 

onMounted(() => {
  const itemModals = document.getElementsByClassName("modal-header");
  for (let i = 1; i < itemModals.length; i++) {
    itemModals[i].classList.add("small");
  }
});
</script>

<style scoped>
table{
    width: 85vw;
}
h2{
    font-weight: 300;
    color: rgb(51,51,51, 0.8);
}
.catalog-header{
    justify-content: space-between;
}

.col-title{
    font-size: 18px;
    opacity: 80%;
    font-weight: 400;
    margin-top: 0;
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
.btn-outline-primary{
    color: rgb(51,51,51, 0.7);
}
.btn-outline-primary:hover{
    color: white !important;  
}

.table-btn{
    font-size: 15px;
    opacity: 0%;
    margin-top: 8px;
    margin-right: 10px;
    padding: 5px 5px 5px 5px;
}
tr:hover .table-btn{
    opacity: 100%;
}
tr:hover p{
    opacity: 70%;
}
@media screen and (max-width: 1666px) {
    table {
        width: 80vw;
    }
}
@media screen and (max-width: 1300px) {
    table {
        width: 75vw;
    }
}
@media screen and (max-width: 1050px) {
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
@media screen and (max-width: 930px){
    table {
        width: 60vw;
    }
    .catalog-header{
        display: block !important;
        text-align: center;
    }
    .actions-buttons{
        justify-content: center;
        align-content: center;
    }
}
@media screen and (max-width: 880px) {
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