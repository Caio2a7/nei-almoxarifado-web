<template>
    <div class="card popup bg-primary text-light" :style="{'display': showPopup ? 'block' : 'none'}">
        <div class="progress bg-light-emphasis" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style="width: 100%"></div>
        </div>
        <div class="card-body">
            <div class="d-flex align-items-center justify-content-start mb-1">
                <IconsInformation class="mb-2 me-2" />
                <h5 class="card-title">Aviso</h5>
            </div>
            <p class="card-text mb-1 d-flex justify-content-start">Item Cadastrado</p>
        </div>
    </div>
</template>

<script lang="ts">

export default{
    data(){
        return{
            popUp: Object,
            showPopup: false,
            activePopup: 1,
        };
    },
    props: {
        isPopup: {
            type: Boolean,
            required: true
        }
    },
    methods: {
    },
    mounted(){
        const popUpDom = document.getElementsByClassName('card')[0];
        this.popUp = popUpDom;
    },
    updated(){
        const popUpdestruction = () => {
            this.popUp.classList.remove('d-block');
            this.popUp.classList.add('d-none');
            this.activePopup = 1;
        }
        if(this.activePopup == 1){ 
            if(this.isPopup == false){
                this.showPopup = true;
            }else{
                this.showPopup = this.isPopup;
            }
            this.popUp.style.opacity = '100%';
            this.popUp.classList.remove('d-none');
            this.popUp.classList.add('d-block');
            const disablePopup = () => {
                this.popUp.style.opacity = '0';
                setTimeout(popUpdestruction, 1000);
            };
            if(this.showPopup == true){
                setTimeout(disablePopup, 6500)
            }
        }
        this.activePopup = 0;
    },
}
</script>

<style scoped>
@keyframes example {
  0% {height: 0;}
  100% {height: 100px;}
}
@keyframes example2{
    0% {width: 0%;}
    100% {width: 100%;}
}
.popup{
    transition: opacity 0.5s ease-in-out;
    height: 100px;
    width: 16rem;
    position: fixed;
    bottom: 10px;
    right: 30px;
    animation-name: example;
    animation-duration: 1.3s;
    z-index: 3000;
}
.progress-bar{
    animation: example2 6.5s;
    color: red;
}
</style>