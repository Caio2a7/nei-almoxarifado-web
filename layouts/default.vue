<template>
  <div id="content">
    <Header />
    <div class="container-fluid d-block col-1">
      <NavbarNavSideBar id="sidebar"/>
      <Footer />
    </div>  
    <div id="content-wrap">
      <slot />
    </div>
  </div>
</template>

<style> 
  #content { 
    position: relative;
    min-height: 100vh;
  }

  #content-wrap { 
    padding-left: 3rem;
    padding-bottom: 18rem;
    padding-top: 9rem;  
  }
</style>
