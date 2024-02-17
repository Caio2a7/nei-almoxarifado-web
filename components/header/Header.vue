<template>
    <div class="fixed-top container-fluid d-flex justify-content-between align-items-center bg-primary">  
      <div class="d-flex align-items-center">
        <div class="logo">
          <a class="navbar-brand" href="/">
            <svg class="d-flex align-items-center" width="53" height="55">
              <image class="custom-logo" xlink:href="/logo.svg" width="52" height="52"/>
            </svg>
          </a>
        </div>
        <div class="d-flex search-bar mx-5">
            <button class="search-button d-flex btn btn-outline-success align-items-center" type="button" data-bs-target="#scrollableModal" data-bs-toggle="modal">
              <IconsSearchGlass width="25px" height="25px"/>
              <span class="ms-3">Pesquisar</span>
            </button>
        </div>
        <div class="modal fade" id="scrollableModal" tabindex="-1" aria-labelledby="scrollableModalLabel" aria-hidden="true" data-bs-backdrop="true">
          <div class="modal-dialog moda-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <div class="search-bar d-flex mx-1">
                  <form class="d-flex align-items-center" role="search">
                    <label>
                      <IconsSearchGlass class="search-icon p-1" width="40px" height="41px" style="border: 1px solid rgb(51, 51, 51, 0.2); border-right: 0;"/>
                    </label>
                    <input class="form-control outline-warning" type="search" placeholder="Pesquisar" id="search-bar">
                  </form>
                </div>
              </div>
              <div class="modal-body">
                <ul class="list-group">
                  <a class="text-decoration-none" href="/inventario">
                    <li class="list-group-item list-group-item-action">Inventário</li>
                  </a>
                  <a class="text-decoration-none" href="/controle-de-acesso">
                    <li class="list-group-item list-group-item-action">Controle de Acesso</li>
                  </a>
                  <a class="text-decoration-none">
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                      Computador
                      <span class="badge bg-primary rounded-pill">2</span>
                    </li>
                  </a>
                  <a class="text-decoration-none">
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                      Teclado
                      <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                  </a>
                  <a class="text-decoration-none" href="/configuracoes">
                    <li class="list-group-item list-group-item-action">Tamanho da Fonte</li>
                  </a>
                </ul>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <p class="fs-6">esc para fechar, setas para se mover e enter para selecionar</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="d-flex justify-content-end align-items-center">
        <div class="form-check form-switch">
          <input class="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault"> 
        </div>
        <div class="d-flex profile align-items-center mx-3">
          <div class="nav-item dropdown">
            <button class="svg-button bg-primary px-2" data-bs-toggle="dropdown" data-bs-offset="20,15" aria-expanded="false">
                <img src="/bell.svg" with="16px" height="16px">
            </button>
            <ul class="dropdown-menu py-2">
              <li class="dropdown-item text-dark-emphasis" style="background-color: white;">Nenhuma notificação enviada.</li>
            </ul>
          </div>
            <div class="nav-item dropdown">
              <button class="svg-button  d-flex bg-primary align-items-center" @click="rotate" data-bs-toggle="dropdown" data-bs-offset="10,10" data-bs-auto-close="outside" aria-expanded="false">
                  <p class="profile-drop user-text text-light fw-light px-1 m-0">Amauri</p>
                  <IconsDownArrow class="rotate-arrow" :style="{ transform: isRoted ? 'rotate(180deg)' : 'rotate(0deg)'}" width="24px" height="24px"/>
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-item info">Amauri Junior Lima da Silva</li>
                <li><a class="dropdown-item d-flex align-items-center justify-content-between" href="/perfil">
                  Perfil
                  <IconsProfile />
                </a></li>
                <li><a class="dropdown-item d-flex align-items-center justify-content-between" href="/configuracoes">
                  Configurações
                  <IconsSettings />
                </a></li>  
                <li><a class="exit-options dropdown-item d-flex align-items-center justify-content-between" href="/login">
                  Sair
                  <IconsExit />
                </a></li>
              </ul>
            </div>
        </div>
      </div>     
    </div>
</template>

<script>
export default{
  data(){
    return{
      isRoted: false
    }
  },
  methods:{
    rotate(){
      this.isRoted = !this.isRoted;
    } 
  }
}

</script>

<style scoped>
.rotate-arrow{
  transition: transform 0.3s ease-in-out;
}
.custom-logo{
    transition: transform 0.3s ease-in-out;
}
.search-button{
    border-radius: 4px;
}
.search-button span{
  margin-right: 110px;
}
.search-icon{
  border-right: 0;
  background-color: white;
}
.search-bar{
    height: 27px;
    width: 210px;
}
.form-control{
    height: 41px;
    width: 420px;
    border-radius: 0px 4px 4px 0px;
}
.svg-button{
    border: none;
    padding: 0;
    margin: 0;
    background: none;
}
.user-text {
    font-size: 24px;
    font-weight: 100; /* 200 é o valor para a fonte ExtraLight da família Roboto */
}
.search-button:active{
  background: rgba(254, 213, 30, 0.9);
}
.custom-logo:hover{
  transform: scale(1.07);
}
.svg-button:hover img{
  transition: filter 0.3s ease-in-out;
  filter: drop-shadow(0px 0px 7px rgba(254, 213, 30, 1));
}
.profile-drop:hover{
  transition: filter 0.3s ease-in;
  filter: drop-shadow(0px 1px 1px rgba(254, 213, 30, 1));
}
</style>