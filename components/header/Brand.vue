<template>
    <div class="logo">
          <a class="navbar-brand d-flex align-items-center" href="/">
            <svg class="d-flex align-items-center" width="50" height="50">
              <image class="custom-logo" xlink:href="/logo.svg" width="45" height="45"/>
            </svg>
            <h5 class="almo-title text-light m-0 ms-2 p-0">Administração NEI</h5>
          </a>
        </div>
</template>

<style scoped>
h5{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.navbar-brand{
  transition: transform 0.3s ease-in-out;
  padding-right: 20px;
}
.navbar-brand:hover{
  border-radius: 15px;
  transform: scale(1.07);
}
</style>