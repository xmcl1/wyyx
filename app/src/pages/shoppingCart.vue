<template>
    <div class="index">
      <shoppcart-header></shoppcart-header>
      <div class="contents">
        <shoppcart-content></shoppcart-content>
        <shoppcart-tuijian></shoppcart-tuijian>
       </div>
      <shoppcart-jiesuan></shoppcart-jiesuan>
    </div>
</template>

<script>
      import shoppcartHeader from '../components/shoppingCart/shoppcart-header';
      import shoppcartContent from '../components/shoppingCart/shoppcart-content';
      import shoppcartTuijian from '../components/shoppingCart/shoppcart-tuixi';
      import shoppcartJiesuan from '../components/shoppingCart/shoppcart-jiesuan';
    export default {
        name: "shoppingCart" ,
        components:{
          shoppcartHeader,
          shoppcartContent,
          shoppcartTuijian,
          shoppcartJiesuan
        }
    }
</script>

<style scoped>
.index {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.contents{
  height: 100%;
  overflow-y: scroll;
}
</style>
