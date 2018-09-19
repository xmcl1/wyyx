<template>
  <div class="fenleiheader">
    <a href="#">
      <span></span>
      <span>搜索商品，共13941款好物</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "fenlei-header"
    }
</script>

<style scoped>
  *{
    font-size: 0.14rem;
    font-style: normal;
    outline: none;
  }
  .fenleiheader{
    box-sizing: border-box;
    padding: 0.08rem;
    display: flex;
    justify-content: center;
  }
  .fenleiheader > a{
    display: block;
    width: 3.4rem;
    text-align: center;
    padding: 0.1rem 0;
    border-radius: 4px;
    background-color: #EEEDEB;
  }
  .fenleiheader span:nth-of-type(1){
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    vertical-align: bottom;
    background-image: url(../../assets/img/img4/feilei-sousuo.png);
    background-size: 100%;
  }
  .fenleiheader span{
    color:#9a9a9a;
  }
</style>
