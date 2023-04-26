<template>
   <div class="menu">
    <ul>
  <li class="coffe"><a href="#home">Coffe</a></li>
  <li><a href="#news">Tea</a></li>
  <li><a href="#contact">Menu</a></li>
  <li><a href="#news">About Us</a></li>
  <li><a href="#contact">Card</a></li>  
</ul>
  </div>
  </template>
  
  <style  scoped lang="scss">
  .menu{
position: absolute;
width: 483px;
height: 24px;
// left: 812px;
top: 10px;
right: 130px;

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
  padding: 0;
  margin-right: 10px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.coffe{
    a {
  display: block;
  color: #B37C43;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover:not(.active) {
 border-bottom: 5px #00704A solid;
}
} 

li a:hover:not(.active) {
 border-bottom: 5px #ffffff solid;
}

.active {
  background-color: #04AA6D;
}
}  
  </style>
  