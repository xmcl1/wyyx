<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../static/css/swiper.css';
body,div,p,ol,ul,li,dl,dt,dd,form,table,tr,td,hr,h1,h2,h3,h4,h5,h6,fieldset,img,input,figure{
	margin:0;
	padding:0;
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
  font-size:.12rem;
	/* display: -webkit-flex; */
	/* -webkit-flex-direction:column; */
}
a{
	text-decoration: none;
  font-size:.12rem;
}
ul,ol{
	list-style: none;
}
/* img{
	border:none;
	display: block;
} */
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
