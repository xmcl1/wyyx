<template>
  <div class="recBox1">
    <div class="recBox1_img"><img :src="bo.pic"></div>
    <div class="recBox1_txt">
      <p>{{bo.p1}}</p>
      <p>{{bo.p2}}</p>
      <p>{{bo.p3}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "wyyxNewProRecBoxOne",
        props:["bo"]
    }
</script>

<style scoped>

  .recBox1{
    display: -webkit-flex;
    border: 1px solid #dcdcdc;
  }
  .recBox1 .recBox1_img{
    width: 44%;
  }
  .recBox1 .recBox1_txt{
    flex: 1;
    padding-top: 0.42rem;
    background: url("../../assets/img/img3/yinhao.png") no-repeat left 0.31rem;
    background-size: 0.14rem 0.12rem;
  }
  .recBox1 .recBox1_txt p{
    line-height: 0.26rem;
    font-size:0.16rem;
    color: #343434;
  }
  .recBox1 .recBox1_txt p:first-child{
    font-size: 0.13rem;
    color: #a7a7a7;
    letter-spacing: 1px;
  }
  .recBox1 .recBox1_txt p:last-child{
    color: #a70d29;
  }
</style>
