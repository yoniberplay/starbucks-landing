<template>
    <nav class="phone">
        <v-navigation-drawer app v-model="drawer" class="white" @hidden="onHidden" right>
            <div class="d-flex flex-row-reverse"> <v-icon @click="mostrarOcultar" x-large class="mr-10 mt-2"
                    color="cerrarModalPhone">mdi-close</v-icon> </div>

            <ul class="botones">
                <li class="mt-10" ref="drawerWatch"><a href="#">Coffe</a></li>
                <li><a href="#">Tea</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Card</a></li>
            </ul>
        </v-navigation-drawer>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        drawer() {
            return this.$store.state.userManager.drawer;
        }
    },
    methods: {
        mostrarOcultar() {
            this.$store.commit('userManager/setdrawer');
        },
    },
    mounted() {

    },
    watch: {

    },

}
</script>
  
<style lang="scss" scoped>
.botones {
    list-style: none;
    padding: 0;
    margin: 0;
}

.botones li {
    //   display: inline-block;
    //   margin-right: 10px;
    // width: 100%
    margin-bottom: 5px;
}

// .botones li:last-child {
//   margin-right: 0;
// }

.botones li a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #B37C43;
    color: #fff;
    text-decoration: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
    width: 100%;
    text-align: center;
}

.botones li a:hover {
    background-color: #b37d438e;

}

@media only screen and (min-width: 768px) {

    /* For mobile phones: */
    .phone {
        display: none;
    }

}

</style>