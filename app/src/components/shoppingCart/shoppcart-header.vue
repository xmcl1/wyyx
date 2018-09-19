<template>
  <!--shoppcart-header-->
  <div class="shoppcart-header">
    <p>
      购物车
    </p>
    <p>
      <a href="#">
        领卷
      </a>
      <a href="#">
        编辑
      </a>
      <a href="#"><img src="../../assets/img/img4/shoppcart-fenxiang.png" alt="" /></a>
    </p>
  </div>
</template>

<script>
    export default {
        name: "shoppcart-header"
    }
</script>

<style scoped>
  * {
    color: #000;
    font-size: 0.14rem;
    outline: none;
    font-style: normal;
  }
  .huise{
    width:100%;
    height: 0.12rem;
    background-color: #f4f4f4;
  }
  .tuijians{
    display: flex;
    justify-content: space-between;
  }
  .tuijians > a{
    display: block;
    overflow: hidden;
    width: 1.72rem;
  }
  /*shoppcart-header*/
  .shoppcart-header{
    width: 100%;
    padding: 0.12rem 0.15rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e4db;
    align-items: center;
  }
  .shoppcart-header > p:nth-of-type(1){
    font-size: 0.18rem;
  }
  .shoppcart-header > p:nth-of-type(2) > a:nth-of-type(1){
    color: #b51d24;
    line-height: 0.14rem;
  }
  .shoppcart-header > p:nth-of-type(2) > a{
    margin:0 0.12rem;
  }
  .shoppcart-header > p:nth-of-type(2)  img{
    display: inline-block;
    height: 0.18rem;
    vertical-align: middle;
  }
</style>
