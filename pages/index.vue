<template>
  <div class="principal d-flex ">
    <MenuRightPhone ></MenuRightPhone>
    <NavBarMobile ></NavBarMobile>
    <NavBar></NavBar>
    
    <img class="imgNarLeft" src="../static/image 1.svg" alt="">
   

    <v-row>

      <v-col cols="12" md="9" xs="12" sm="12">
        <div class="whiteZone d-flex flex-column justify-center align-center">

          <div class="d-flex flex-column content">
            <div class="d-flex "> <span class="OurCoffee">Our Coffee</span></div>
            <p>Since 1971, it always has been and will</p>
            <p>always be about quality. We’re passionate</p>
            <p>about ethically sourcing only the finest</p>
            <p>Arabica coffee beans and roasting them</p>
            <p>with great care. Our passion for coffee is</p>
            <p>rivaled only by our love of sharing it.</p>

            <div class="clasbtn">
              <v-btn class="btnlearMore mt-4" x-large color="primarioStarBuck" dark>
                Learn More
              </v-btn>
            </div>
          </div>

        </div>
      </v-col>
      <v-col cols="12" md="3" xs="12" sm="12" class="seccion2">
        <img class="imgfrappe" src="../static/frappe 1.svg" alt="">
        <SocialNet />
      </v-col>

    </v-row>

    <div class="greenScreenPhone">
      <!-- <img src="../static/frappe 1.svg" alt=""> -->
    </div>

  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue';
import SocialNet from '../components/SocialNet.vue';
import NavBarMobile from '../components/NavBarMobile.vue';
import MenuRightPhone from '../components/MenuRightPhone.vue';

export default {
  name: 'IndexPage',
  mounted() { },
  created() {

  },
  components: {
    NavBar,
    SocialNet,
    NavBarMobile,
    MenuRightPhone
  },

}
</script>

<style scoped lang="scss">
.btnlearMore {
  width: 166px;
height: 75px;
  box-shadow: 20px 20px 40px #E5E5E5;
}

.clasbtn{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  margin-bottom: 20px;
}

div .OurCoffee{
  display: flex;
  align-items: center;
  justify-content: center;
}

.principal {
  position: relative;
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  align-items: center;
  // background-color: red ;
}

.greenScreenPhone{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
   height: 150px;
  //  width: auto;
   background-color: #00704A;
   border-top-right-radius: 100%;
  border-top-left-radius: 100%;

  }

.imgNarLeft {
  position: absolute;
  width: 73px;
  height: 61px;
  left: 40px;
  top: 18px;
}




.OurCoffee {
  width: 349px;
  height: 70px;
  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 42px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
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
    // font-weight: 400;
    font-size: 19px;
    line-height: 30px;
    display: flex;
align-items: center;
text-align: center;
// letter-spacing: 0.05em;
    /* or 200% */


    // letter-spacing: 0.05em;

    color: #000000;
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.imgNarLeft{
  position: absolute;
  width: 73px;
  height: 61px;
  left: 10px;
  top: 18px;
}

.seccion2{
    // position: relative;
    display: flex;
    justify-content: center;
    // align-items: center;
}

    .imgfrappe {
  // position: absolute;
  width: 305.28px;
  height: 296.9px;
  margin-bottom: -50%;
  // margin-left: -75%;
  // top: 50%;
  // left: 0;
  // transform: translate(0, -50%);
  // left: 50%;
  // right: 0%;
  // top: 691.03px;
  // bottom: 60px;
  filter: drop-shadow(10px 40px 30px rgba(0, 0, 0, 0.25));
  transform: rotate(-30deg);
  z-index: 3;
}


.content{
  // margin-right: 2px;
}

}

@media only screen and (min-width: 768px) {

  /* For desktop: */


  .seccion2{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btnlearMore {

width: 263px;
height: 89px;
box-shadow: 20px 20px 40px #E5E5E5;
}

  .whiteZone {
    background-color: #ffffff;
    height: 980px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;

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
  .clasbtn{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
}

  .principal {
    position: relative;
    background-color: #00704A;
  }

  .imgfrappe {
    // position: absolute;
    width: 510px;
    height: 496px;
    // left: 860px;
    // top: 242px;
    filter: drop-shadow(50px 0px 50px rgba(0, 0, 0, 0.25));
    transform: none;
    

    // .imgfrappe {
  // position: absolute;
  // width: 305.28px;
  // height: 296.9px;
  margin-left: -75%;
  // top: 50%;
  // left: 0;
  // transform: translate(0, -50%);
  // // left: 50%;
  // // right: 0%;
  // // top: 691.03px;
  // // bottom: 60px;
  // filter: drop-shadow(10px 40px 30px rgba(0, 0, 0, 0.25));
  // transform: rotate(-30deg);
  // z-index: 3;
// }
  }
  .greenScreenPhone{
    display: none;
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

  div .OurCoffee{
  display: flex;
  align-items: center;
  justify-content: left;
}

}
</style>
