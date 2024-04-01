<template>
    <div class="d-flex search-bar mx-5" tabindex="-1">
            <button class="d-flex btn btn-search  align-items-center ps-0" type="button" tabindex="-1" data-bs-target="#scrollableModal" data-bs-toggle="modal">
              <IconsSearchGlass />
              <span class="ms-1">Pesquisar</span>
            </button>
        </div>
</template>


<style scoped>
.search-bar{
  outline: none;
  height: 27px;
  width: 210px;
}
.btn-search{
  outline: none;
}
.btn-search span{
  margin-right: 110px;
}
.search-icon{
  border-right: 0;
  color: #333333;
  background-color: white;
}
.btn-search:active{
    background-color: #FED51E;
    color: white;
    border-color: #FED51E;
}

</style>