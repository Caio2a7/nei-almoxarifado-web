<script setup> </script>
<template>
    <div class="card">
	<div class="card-header"> 
		<slot name="header" />	
	</div>
	<div class="card-body">
		<slot> </slot>
	</div>
	<div class="card-footer">
		<slot name="footer"/>
	</div>
    </div>
</template>

<style scoped> 
</style>
