<template>
    <div class="index">
      <div class="contents">
        <product-header></product-header>
        <product-guige></product-guige>
        <product-pinglun></product-pinglun>
        <product-tuijian></product-tuijian>
      </div>
      <product-bottom-menu></product-bottom-menu>
    </div>
</template>

<script>
  import productHeader from "../components/productGoods/product-header"
  import productGuige from "../components/productGoods/product-guige"
  import productPinglun from "../components/productGoods/product-pinglun"
  import productTuijian from "../components/productGoods/product-tuijian"
  import productBottomMenu from "../components/productGoods/product-bottom-menu"
    export default {
        name: "productGoods",
        components:{
          productHeader,
          productGuige,
          productPinglun,
          productTuijian,
          productBottomMenu
        }
    }
</script>

<style scoped>
  *{
    font-size: 0.14rem;
  }
  .contents{
    flex: 1;
    overflow-y: scroll;
    background-color: #fff;
  }

  .index{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
