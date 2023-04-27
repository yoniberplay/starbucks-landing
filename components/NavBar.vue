<template>
   <div class="menu">
    <ul>
  <li class="coffe"><a href="#coffe">Coffe</a></li>
  <li><a href="#Tea">Tea</a></li>
  <li><a href="#Menu">Menu</a></li>
  <li><a href="#About">About Us</a></li>
  <li><a href="#Card">Card</a></li>  
</ul>
  </div>
  </template>
  
  <style  scoped lang="scss">
  .menu{
position: absolute;
width: 483px;
height: 24px;
left: 812px;
top: 10px;
// right: 250px;

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
//   width: 483px;
//   height: 24px;
//   font-weight: bold;
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
  