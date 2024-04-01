<template>
    <Modal id="scrollableModal" tabindex="-1" aria-labelledby="scrollableModalLabel" aria-hidden="true" data-bs-backdrop="true" @keyup.down="SearchDown()" @keyup.up="SearchUp()" @keyup.enter="Navigate()">
        <template v-slot:header>
            <div class="search-bar d-flex mx-1">
                <form class="d-flex align-items-center" role="search">
                  <label>
                    <IconsSearchGlass class="search-icon p-1" width="40px" height="41px" style="border: 1px solid rgb(51, 51, 51, 0.2); border-right: 0;"/>
                  </label>
                  <input class="form-control outline-warning p-0" v-model="searchQuery" @input="handleSearch" type="search" placeholder="Pesquisar" autofocus>
                </form>
            </div>
        </template>
        <template v-slot:body>
          <template v-if="showResults">
            <ul class="list-group">
              <a class="text-decoration-none search-select" v-for="result in searchResults" :href="`/inventario/${result.storage}`" :key="result.name">
                <li class="searchResult list-group-item list-group-item-action d-flex justify-content-between align-items-center" tabindex="0"> 
                  {{ result.name }} 
                  <span class="badge bg-primary rounded-pill" v-if="result"> {{ result.qtd }} </span>
                </li>
              </a>
            </ul>
          </template>
          <p class="d-flex justify-content-center align-items-center pt-3" v-else>Nenhum Resultado Encontrado.</p>
        </template>
        <template v-slot:footer>
            <p class="fs-6"><IconsEnter class="bg-primary text-light" style="border-radius: 3px;"/> para selecionar <IconsBottomArrow class="bg-primary text-light" style="border-radius: 3px;"/> <IconsUpArrow class="bg-primary text-light" style="border-radius: 3px;"/> para navegar e <span class="bg-primary text-light" style="border-radius: 3px;">esc</span> para fechar</p>
        </template>
    </Modal>

</template>

<script>
import { useStorageStore } from '../../stores/storage';

export default{
    data() {
        return {
            searchQuery: "",
            searchCount: 0,
            searchResults: [],
            showResults: false,
        };
    },
    methods: {
        SearchDown() {
            let searchResult = document.getElementsByClassName("searchResult");
            if ((this.searchCount) === (searchResult.length)) {
                this.searchCount = 1;
            }
            else {
                this.searchCount++;
            }
            document.getElementsByClassName("search-select")[0].focus();
            searchResult[this.searchCount - 1].focus();
        },
        SearchUp() {
            let searchResult = document.getElementsByClassName("searchResult");
            if (this.searchCount <= 1) {
                this.searchCount = (searchResult.length);
            }
            else {
                this.searchCount--;
            }
            searchResult[this.searchCount - 1].focus();
        },
        Navigate(){
          let searchResult = document.getElementsByClassName("searchResult");
          searchResult[this.searchCount - 1].click();
        },
        handleSearch() {
          this.searchResults = this.store.items.filter(result => result.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
          this.showResults = true; 
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
.search-icon{
  border-right: 0;
  color: #333333;
  background-color: white;
}
.form-control{
    border: 1;
    border-left: 0;
    height: 41px;
    width: 420px;
    border-radius: 0px 4px 4px 0px;
}
.form-control::placeholder{
  font-size: 19px;
}
.form-control{
    border: 1;
    border-left: 0;
    height: 41px;
    width: 420px;
    border-radius: 0px 4px 4px 0px;
}
.form-control::placeholder{
  font-size: 19px;
}

</style>