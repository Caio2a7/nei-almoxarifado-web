<template>
<div class="container d-block" style="margin-left: 0px;">
    <div class="container d-block" style="margin-left: 0px;">
        <div class="catalog-header d-flex align-items-center">
        <h2>Controle de Acesso</h2>
        </div>
        <hr>
        <div class="containerf-fluid d-flex justify-content-center aligm-items-center">
        <div class="card me-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card mx-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card mx-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
    </div>
    <div class="container d-block mt-5" style="margin-left: 0px;">
        <div class="catalog-header d-flex align-items-center">
        <h2>Almoxarifados</h2>
        </div>
        <hr>
        <div class="containerf-fluid d-flex justify-content-center aligm-items-center">
        <div class="card me-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card mx-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card mx-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
    </div>
    <div class="container d-block mt-5" style="margin-left: 0px;">
        <div class="catalog-header d-flex align-items-center">
        <h2>Registro</h2>
        </div>
        <hr>
        <div class="containerf-fluid d-flex justify-content-center aligm-items-center">
        <div class="card me-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card mx-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card mx-2 rounded-3" style="width: 34rem;">
          <img src="/almo.png" class="card-img-top" alt="...">
          <div class="card-body text-dark-emphasis">
            <a href="/inventario/almoxarifado-escolar" class="fs-5 stretched-link text-dark-emphasis" style="text-decoration: none;">Almoxarifado Escolar</a>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
    </div>
</div>
</template>
feat: adicionado responsividade e media querys nas páginas #26
Adicionado responsividade e media querys no layout default, corrigido alguns erros de estilização nos botões de filtro, configure, profile dropdown e sidebar.
<style scoped>
h2{
    font-weight: 300;
    color: rgb(51,51,51, 0.8);
}
.catalog-header{
    justify-content: space-between;
}
.card{
    padding: 0px;
    transition: transform 0.5s ease-in-out;
}
.card-img-top{
    transition: opacity 0.5s ease-in-out;
    opacity: 90%;
}
.card-body{
    transition: color, background-color 0.4s ease-in-out;
}
.card:hover{
    transform: scale(1.04);
}
.card:hover .card-img-top{
    opacity: 100%;
}
.card:hover .card-body{
    background-color: #0B3B69;
    color: white !important;
}
.card:hover .stretched-link{
    color: white !important;
}


</style>