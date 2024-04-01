<template>
  <div id="content">
    <Header />
    <div class="d-flex"> 
      <div class="fluid-container">
        <NavbarNavSideBar /> 
      </div>
      <div class="main">
        <slot />
      </div> 
    </div>
    <div class="d-flex">
      <div class="flex-grow-1">
        <Footer />
      </div>
    </div>
  </div>
</template>
  
<script>


</script>
  
<style>
.main{
  height: 100%;
  width: 85vw;
  margin-left: 0;
  margin-right: 0;
  margin-top: 100px;
  margin-bottom: 3vw;
  padding-left: 25px;
} 
.fluid-container{
  position: static;
}
.teste{
  position: static;
}
@media screen and (max-width: 1050px){
  .main{
        width: 75vw;
    }
}
@media screen and (max-width: 930px){
  .container{
      width: 65vw;
  }
  .main{
    padding-left: 0px;
  }
}
</style>