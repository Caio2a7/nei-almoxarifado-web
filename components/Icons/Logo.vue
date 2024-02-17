<template> 
  <svg class="d-flex align-items-center"> 
    <image class="custom-logo" xlink:href="/logo.svg" />
  </svg>
</template>

<script lang="ts"> 
export default { 
  name: 'MaterialLogo'
}
</script>

<style scoped> 
  .custom-logo { 
    transition: transform 0.3s ease-in-out;
  }
  .custom-logo:hover {
    transform: scale(1.07);
  }
</style>
