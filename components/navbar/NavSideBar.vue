<template>
    <div class="nav-sidebar bg-light-emphasis offcanvas offcanvas-start show" :class="{ 'collapsed': isCollapsed }" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-body">
            <ul class="list-group-flush container d-block ">
                <a class="text-decoration-none" href="/" aria-current="true">
                    <div class="item-bg active py-2">
                        <IconsHome />
                        <span class="list-group-item">Home</span>
                    </div>
                </a>
                <a class="text-decoration-none" href="/controle-de-acesso" aria-current="true">
                    <div class="item-bg text-dark-emphasis py-2">
                        <IconsControl />
                        <span class="list-group-item">Controle de Acesso</span>
                    </div>
                </a>
                <a class="text-decoration-none" href="/inventario" aria-current="true">
                    <div class="item-bg text-dark-emphasis py-2">
                        <IconsSpreadSheet />
                        <span class="list-group-item">Inventário</span>
                    </div>
                </a>
                <a class="text-decoration-none" href="/configuracoes-de-inventario" aria-current="true"> 
                    <div class="item-bg text-dark-emphasis py-1">
                        <IconsOrganizingTables />
                        <span class="list-group-item">Organizar Inventário</span>
                    </div>
                </a>
                <a class="text-decoration-none" href="/registro" aria-current="true">
                    <div class="item-bg text-dark-emphasis py-2">
                        <IconsDirectory />
                        <span class="list-group-item">Registro</span>
                    </div>
                </a>
                <a class="text-decoration-none" href="/configuracoes" aria-current="true">
                    <div class="item-bg text-dark-emphasis py-2">
                    <IconsSettings width="25px" height="25px"/>
                        <span class="list-group-item">Configurações</span>
                    </div>
                </a>
                <a class="text-decoration-none" href="/sobre" aria-current="true">
                    <div class="item-bg d-inline-block text-start text-dark-emphasis py-2">
                        <IconsInformation />
                        <span class="d-inline-block list-group-item">Sobre</span>
                    </div>
                </a>
            </ul>
        </div>
        <div class="offcanvas-footer d-flex align-items-center justify-content-center">
            <button class="btn bg-gray-light text-dark" @click="sidebarColapse" type="button" id="sideBareColapse" style="width: 298px; border-radius: 0%; height: 55px;">
                <IconsCloseArrow :style="{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0)' }" class="rotate-arrow"/>
            </button>
        </div>
    </div>
</template>

<script >
export default {
  data() {
    return {
      isCollapsed: false
    }
  },
  methods: {
    sidebarColapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>

<style scoped>
.nav-sidebar{
    z-index: 0;
     display: flex;
    width: 14.5%;
    transition: width 0.6s ease-in-out;
}
.list-group-item{
    display: inline-block;
    font-size: 13px;
    margin-left: 7px;
    padding-top: 8px;
    text-decoration: none;
    transition: opacity 0.9s ease-in-out;
}
.collapsed {
  width: 50px; 
  overflow: hidden;
}
.collapsed .list-group-item{
    visibility: hidden;
    opacity: 0;
}
.collapsed .item-bg{
    width: 35px;
    height: 50px;
}
.rotate-arrow{
    transition: transform 0.6s ease-in-out;
}
.list-group-flush{
    margin-left: -25px;
}
.item-bg{
    overflow: hidden;
    transition: width 0.32s, height 0.6s ease-in-out;
    margin-top: 15px;
    padding-left: 4px;
    height: 52px;
    width: 190px;
}
.active{
    color: white;
    background: #0B3B69;
    border-radius: 9px;
}
.item-bg:hover{
    background: #D9D9D9;
    color: #333333;
    border-radius: 9px;
}
</style>