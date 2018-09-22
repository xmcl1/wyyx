<template>
  <div class="product">
    <div class="proTop">
      <img src="../../assets/img/img3/spec_one.png" alt="">
      <p>一缕霞光杯中留，缥缈如烟似旧人</p>
    </div>
    <div class="proBottom">
      <p class="status">
        <span class="first">新品</span>
      </p>
      <p>2只装 日本制造 渐变色凉水杯</p>
      <p>￥189</p>
    </div>
    <img src="../../assets/img/img3/madeInJapan.png" class="pos_img">
  </div>
  <!--<div class="product">-->
    <!--<div class="proTop">-->
      <!--<img src="../assets/img/img3/spec_two.png" alt="">-->
      <!--<p>一缕霞光杯中留，缥缈如烟似旧人</p>-->
    <!--</div>-->
    <!--<div class="proBottom">-->
      <!--<p class="status">-->
        <!--<span class="first">新品</span>-->
        <!--<span class="second">N元任选</span>-->
      <!--</p>-->
      <!--<p>2只装 日本制造 渐变色凉水杯</p>-->
      <!--<p>￥189</p>-->
    <!--</div>-->
    <!--<img src="../assets/img/img3/madeInJapan.png" class="pos_img">-->
  <!--</div>-->
  <!--<div class="product">-->
    <!--<div class="proTop">-->
      <!--<img src="../assets/img/img3/spec_three.png" alt="">-->
      <!--<p>一缕霞光杯中留，缥缈如烟似旧人</p>-->
    <!--</div>-->
    <!--<div class="proBottom">-->
      <!--<p>2只装 日本制造 渐变色凉水杯</p>-->
      <!--<p>￥189</p>-->
    <!--</div>-->
    <!--<img src="../assets/img/img3/madeInJapan.png" class="pos_img">-->
  <!--</div>-->
  <!--<div class="product">-->
    <!--<div class="proTop">-->
      <!--<img src="../assets/img/img3/spec_four.png" alt="">-->
      <!--<p>一缕霞光杯中留，缥缈如烟似旧人</p>-->
    <!--</div>-->
    <!--<div class="proBottom">-->
      <!--<p class="status">-->
        <!--<span class="first">新品</span>-->
      <!--</p>-->
      <!--<p>2只装 日本制造 渐变色凉水杯</p>-->
      <!--<p>￥189</p>-->
    <!--</div>-->
    <!--<img src="../assets/img/img3/madeInJapan.png" class="pos_img">-->
  <!--</div>-->
  <!--<div class="product">-->
    <!--<div class="proTop">-->
      <!--<img src="../assets/img/img3/spec_five.png" alt="">-->
      <!--<p>一缕霞光杯中留，缥缈如烟似旧人</p>-->
    <!--</div>-->
    <!--<div class="proBottom">-->
      <!--<p class="status">-->
        <!--<span class="second">新品尝鲜价</span>-->
      <!--</p>-->
      <!--<p>2只装 日本制造 渐变色凉水杯</p>-->
      <!--<p>￥189</p>-->
    <!--</div>-->
    <!--<img src="../assets/img/img3/madeInJapan.png" class="pos_img">-->
  <!--</div>-->
  <!--<div class="product">-->
    <!--<div class="proTop">-->
      <!--<img src="../assets/img/img3/spec_six.png" alt="">-->
      <!--<p>一缕霞光杯中留，缥缈如烟似旧人</p>-->
    <!--</div>-->
    <!--<div class="proBottom">-->
      <!--<p>2只装 日本制造 渐变色凉水杯</p>-->
      <!--<p>￥189</p>-->
    <!--</div>-->
    <!--<img src="../assets/img/img3/madeInJapan.png" class="pos_img">-->
  <!--</div>-->
  <!--<div class="product">-->
    <!--<div class="proTop">-->
      <!--<img src="../assets/img/img3/spec_eight.png" alt="">-->
      <!--<p>一缕霞光杯中留，缥缈如烟似旧人</p>-->
    <!--</div>-->
    <!--<div class="proBottom">-->
      <!--<p>2只装 日本制造 渐变色凉水杯</p>-->
      <!--<p>￥189</p>-->
    <!--</div>-->
    <!--<img src="../assets/img/img3/madeInJapan.png" class="pos_img">-->
  <!--</div>-->
  <!--<div class="product">-->
    <!--<div class="proTop">-->
      <!--<img src="../assets/img/img3/spec_sev.png" alt="">-->
      <!--<p>一缕霞光杯中留，缥缈如烟似旧人</p>-->
    <!--</div>-->
    <!--<div class="proBottom">-->
      <!--<p class="status">-->
        <!--<span class="first">新品</span>-->
        <!--<span class="second">限时购</span>-->
      <!--</p>-->
      <!--<p>2只装 日本制造 渐变色凉水杯</p>-->
      <!--<p>￥189</p>-->
    <!--</div>-->
    <!--<img src="../assets/img/img3/madeInJapan.png" class="pos_img">-->
  <!--</div>-->
</template>

<script>
    export default {
        name: "wyyxSpecialPros"
    }
</script>

<style scoped>

  .productBox .recBox2 .product:nth-of-type(1),.productBox .recBox2 .product:nth-of-type(2){
    margin-top: 0.1rem;
  }
  .recBox2 .product{
    width: 48.5%;
    margin-top: 0.15rem;
    box-sizing: border-box;
    position: relative;
  }
  .product .pos_img{
    position: absolute;
    left: 0.05rem;
    top: 0.05rem;
    width: 0.16rem;
    height: 0.61rem;
  }
  .recBox2 .product:last-child, .recBox2 .product:nth-last-child(2){
    margin-bottom: 0.15rem;
  }
  .recBox2 .product:nth-of-type(2n+1){
    margin-right: 1.5%;
  }
  .recBox2 .product:nth-of-type(2n){
    margin-left: 1.5%;
  }
  .recBox2 .product .proTop{
    background: #f4f4f4;
  }
  .recBox2 .product .proTop p{
    background: #f0ece1;
    height: 0.35rem;
    line-height: 0.35rem;
    letter-spacing: 1px;
    padding: 0 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #a49983;
  }
  .status{
    padding: 0.1rem  0.05rem 0;
    display: -webkit-flex;
  }
  .status span{
    display: block;
    height: 0.16rem;
    color: #f9ffed;
    line-height: 0.16rem;
    text-align: center;
    border-radius:1px;
    padding: 0 0.1rem;
  }
  .status .first{
    background: #cab693;
    margin-right: 0.06rem;
  }
  .status .second{
    background: #e97b7e;
  }
  .recBox2 .product .proBottom p:nth-last-child(2){
    line-height: 0.32rem;
    letter-spacing: 1px;
    padding: 0 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recBox2 .product .proBottom p:last-child{
    color: #b8303a;
    font-weight: bold;
    padding: 0 0.05rem;
  }
</style>
