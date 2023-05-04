<template>
    <div class="d-flex flex-column align-end MenuRightPhone" @click="mostrarOcultar">

        <div class="barraL"></div>
        <div class="barraS"></div>
        <div class="barraL"></div>


    </div>
</template>
  
<script>
export default {
    methods: {
    mostrarOcultar() {
        this.$store.commit('userManager/setdrawer');
    }
  },

}
</script>
  
<style lang="scss" scoped>
.MenuRightPhone {
    display: none;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */


    .MenuRightPhone {

        display: inline-block;
        position: absolute;
        // top: 27px;
        right: 10%;
        top: 40px;
        width: 73px;
        height: 61px;
        z-index: 3;

        .barraL {
            width: 49px;
            height: 7px;
            background: #00704A;
            border-radius: 20px;
        }

        .barraS {
            width: 33px;
            height: 7px;
            background: #00704A;
            border-radius: 20px;
            margin: 5px;
        }
    }


}
</style>