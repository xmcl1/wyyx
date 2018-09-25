<template>
  <div class="jiaru">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#">立即购买</a>
    <a href="#">加入购物车</a>
  </div>
</template>

<script>
    export default {
        name: "product-bottom-menu"
    }
</script>

<style scoped>
    *{
      font-style: normal!important;
    }
  .jiaru{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 0.55rem;
    line-height: 0.52rem;
    border-top: 1px solid #e3e3e3;
    overflow: hidden;
    background-color: #fff;
  }
  .jiaru > a:nth-of-type(1),
  .jiaru > a:nth-of-type(2),
  .jiaru > a:nth-of-type(3){
    display: inline-block;
    width:0.22rem;
    height: 100%;
    padding: 0 0.12rem;
    border-right: 1px solid #e3e3e3;
    height: 100%;
    background-size: 0.22rem auto;
    background-position: center;
    background-repeat: no-repeat;
  }
  .jiaru > a:nth-of-type(1){
    background-image: url("../../assets/img/img4/product-ico-0.png")
  }
  .jiaru > a:nth-of-type(2){
    background-image: url("../../assets/img/img4/product-ico-1.png")
  }
  .jiaru > a:nth-of-type(3){
    background-image: url("../../assets/img/img4/product-ico-1.png")
  }
  .jiaru > a:nth-of-type(n+4){
    padding: 0 0.24rem;
  }
  .jiaru > a:nth-last-of-type(1){
    background-color: #a9181e;
    color: #fff;
    font-weight: bold;
    height: 100%;
  }

</style>
