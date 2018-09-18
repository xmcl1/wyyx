<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./pages/footer"
export default {
 components:{
   Footer
 }
}
</script>

<style>
@import '../static/css/swiper.css';
body,div,p,ol,ul,li,dl,dt,dd,form,table,tr,td,hr,h1,h2,h3,h4,h5,h6,fieldset,img,input,figure{
	margin:0;
	padding:0;
}
div::-webkit-scrollbar {
  display: none;
}
html{
	font-size: 26.67vw;
}
html,body{
	height: 100%;
}
body{
	font-family: "Microsoft Yahei",Arial;
	background: #f6f6f6;
}
a{
	text-decoration: none;
}
ul,ol{
	list-style: none;
}
img{
	border:none;
	display: block;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
