<template>
    <div class="d-flex flex-column align-end principal" @click="mostrarOcultar">

        <div class="barraL"></div>
        <div class="barraS"></div>
        <div class="barraL"></div>


    </div>
</template>
  
<script>
export default {
    methods: {
    mostrarOcultar() {
      console.log(1)
        this.$store.commit('userManager/setdrawer');
    }
  },

}
</script>
  
<style lang="scss" scoped>
.principal {
    display: none;

}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */


    .principal {

        display: inline-block;
        position: absolute;
        // top: 27px;
        left: 450px;
        top: 40px;
        width: 73px;
        height: 61px;

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