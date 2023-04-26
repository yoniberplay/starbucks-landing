<template>
  <div class="principal d-flex flex-column">
    <NavBar></NavBar>
    <img class="imgNarLeft" src="../static/image 1.svg" alt="">
    <img class="imgfrappe" src="../static/frappe 1.svg" alt="">

    <v-row>
      <v-col cols="12" md="10">
        <div class="whiteZone d-flex flex-column justify-center align-center">

          <div class="d-flex flex-column ">
            <span class="OurCoffee">Our Coffee</span>
            <p>Since 1971, it always has been and will</p>
            <p>always be about quality. We’re passionate</p>
            <p>about ethically sourcing only the finest</p>
            <p>Arabica coffee beans and roasting them</p>
            <p>with great care. Our passion for coffee is</p>
            <p>rivaled only by our love of sharing it.</p>

            <div class="btnlearMore">

            </div>
          </div>


        </div>
      </v-col>
      <v-col cols="12" md="2">

      </v-col>

    </v-row>


  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue';


export default {
  name: 'IndexPage',
  mounted() { },
  components: {
    NavBar,
  }
}
</script>

<style scoped lang="scss">
.principal {
  position: relative;
  background-color: #00704A;

  .whiteZone {
    background-color: #ffffff;
    height: 980px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .greenZone {
    background-color: #00704A;
    height: 980px;


  }
}

.imgNarLeft {
  position: absolute;
  width: 73px;
  height: 61px;
  left: 40px;
  top: 18px;
}

.imgfrappe {
  position: absolute;
  width: 510px;
  height: 496px;
  // left: 785px;
  right: -75px;
  top: 242px;


  filter: drop-shadow(50px 0px 50px rgba(0, 0, 0, 0.25));
}


.OurCoffee {
  width: 349px;
  height: 70px;

  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #000000;
}

.whiteZone {

  // width: 641px;
  // height: 367px;
  p {
    margin: 0;
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 60px;
/* or 200% */


letter-spacing: 0.05em;

    color: #000000;
  }



}
</style>
