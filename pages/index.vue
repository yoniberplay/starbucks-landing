<template>

<div class="principal d-flex flex-column">

  <div class="menu">
    <ul>
  <li><a href="#home">Coffe</a></li>
  <li><a href="#news">Tea</a></li>
  <li><a href="#contact">Menu</a></li>
  <li><a href="#news">About Us</a></li>
  <li><a href="#contact">Card</a></li>  
</ul>
  </div>

  <v-row>
 <v-col cols="12" md="10">
  <div class="whiteZone">

</div>
 </v-col>
 <v-col cols="12" md="2">
 
</v-col>

  </v-row>


</div>

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped lang="scss">
.principal{
  position: relative;  
  background-color:#00704A;

.menu{
position: absolute;
width: 483px;
height: 24px;
left: 812px;
top: 10px;

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
  padding: 0;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
 border-bottom: 5px #ffffff solid;
}

.active {
  background-color: #04AA6D;
}
}

  


.whiteZone{
  background-color: #ffffff;
  height: 980px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
.greenZone{
  background-color:#00704A;
  height: 980px;
  

}
}


</style>
