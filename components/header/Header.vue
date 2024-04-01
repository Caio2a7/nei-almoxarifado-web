<template>
    <div class="header container-fluid d-flex justify-content-between align-items-center bg-primary p-0">  
      <div class="d-flex align-items-center">
        <Brand class="ms-3"/>
      </div> 
      <div class="d-flex justify-content-end align-items-center">
        <SearchBar />
        <ModalSearch />
        <ThemeSwitch />
        <Profile />
      </div>     
    </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Brand from "./Brand.vue";
import ThemeSwitch from "./ThemeSwitch.vue";
import Profile from "./Profile.vue";
export default{
    components: { SearchBar, Brand, ThemeSwitch, Profile },
}

</script>

<style scoped>
.header{
  position: fixed;
  z-index: 1050;
}
</style>
