<template>
    <div class="dropdown">
        <button @focusin="colorFocus" @focusout="colorUnfocus" class="action-btn d-flex btn btn-light text-dark-emphasis border-0" data-bs-toggle="dropdown" data-bs-offset="0,2" data-bs-auto-close="outsite" aria-expanded="false">
            Filtro
            <IconsFilter class="mx-1" width="1.5em" height="1.5em"/>
        </button>
        <ul class="dropdown-menu">
            <li class="dropdown-item">
                <button class="btn btn-transparent border-0" type="button">Mais recentes</button>
            </li>
            <li class="dropdown-item">
                <button class="btn btn-transparent border-0" type="button">Mais antigos</button>
            </li>
            <li class="dropdown-item">
                <button class="btn btn-transparent border-0" type="button">Disponíveis</button>
            </li>
            <li class="dropdown-item">
                <button class="btn btn-transparent border-0" type="button">Indisponíveis</button>
            </li> 
        </ul>
    </div>  
</template>


<style scoped>
.btn-light:hover{
    color: white !important; 
    background-color: #0B3B69 !important; 
}
</style>