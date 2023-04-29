<template>
    <nav phone>
        <v-navigation-drawer app v-model="drawer" class="indigo" right>
            <div class="d-flex flex-row-reverse"> <v-icon @click="mostrarOcultar" x-large class="ma-5"
                    color="cerrarModalPhone">mdi-close</v-icon> </div>

            <p>test</p>
        </v-navigation-drawer>

    </nav>
</template>
  
<script>
export default {
    computed: {
    drawer() {
       return this.$store.state.userManager.drawer;
    }
  },
    methods: {
    mostrarOcultar() {
        this.$store.commit('userManager/setdrawer');
    }
  },

}
</script>
  
<style lang="scss" scoped>
@media only screen and (max-width: 768px) {

    /* For mobile phones: */
    .phone {
        display: none;
    }

}
</style>