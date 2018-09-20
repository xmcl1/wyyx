<template>
  <div class="my-conten">
  <!-- 我的订单 -->
  <a href="#" class="my-order">
    <div class="my-order-box-top">
      <span>我的订单</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
  </a>
  <div class="my-order-box-bot">
    <a href="#">
      <img src="../../assets/img/img5/fukuan1.jpg">
      <p>&nbsp;待付款&nbsp;</p>
    </a>
    <a href="#">
      <img src="../../assets/img/img5/fukuan2.jpg">
      <p>&nbsp;待发货&nbsp;</p>
    </a>
    <a href="#">
      <img src="../../assets/img/img5/fukuan3.jpg">
      <p>&nbsp;已发货&nbsp;</p>
    </a>
    <a href="#">
      <img src="../../assets/img/img5/fukuan4.jpg">
      <p>&nbsp;待评价&nbsp;</p>
    </a>
    <a href="#">
      <img src="../../assets/img/img5/fukuan5.jpg">
      <p>退换/售后</p>
    </a>
  </div>
  <!-- 空盒子 -->
  <div class="null-box"></div>
  <!-- 网易严选合伙人 -->
  <a href="#" class="my-order">
    <div class="my-order-box-top">
      <span>网易严选合伙人</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
  </a>
  <div class="wyyx-box">
    <a href="#">
      <img src="../../assets/img/img5/wyyx.jpg">
    </a>
  </div>
  <!-- 空盒子 -->
  <div class="null-box"></div>
  <!-- 我的服务 -->
  <div class="my-fuwu">
    <div class="my-fuwu-box">
      我的服务
    </div>
  </div>
  <!-- F16 -->
  <div class="F16">
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-1.jpg">
      <p>拼团订单</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-2.jpg">
      <p>众筹订单</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-3.jpg">
      <p>邀请好友</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-4.jpg">
      <p>&nbsp;优惠卷&nbsp;</p>
    </a>
  </div>
  <!-- F16 -->
  <div class="F16">
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-5.jpg">
      <p>&nbsp;&nbsp;&nbsp;红包&nbsp;&nbsp;&nbsp;</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-6.jpg">
      <p>&nbsp;优先购&nbsp;</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-7.jpg">
      <p>&nbsp;礼品卡&nbsp;</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-8.jpg">
      <p>会员俱乐部</p>
    </a>
  </div>
  <!-- F16 -->
  <div class="F16">
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-9.jpg">
      <p>积分中心</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-10.jpg">
      <p>我的甄选家</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-11.jpg">
      <p>&nbsp;&nbsp;&nbsp;足迹&nbsp;&nbsp;&nbsp;</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-12.jpg">
      <p>&nbsp;&nbsp;&nbsp;收藏&nbsp;&nbsp;&nbsp;</p>
    </a>
  </div>
  <!-- F16 -->
  <div class="F16">
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-13.jpg">
      <p>&nbsp;&nbsp;&nbsp;地址&nbsp;&nbsp;&nbsp;</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-14.jpg">
      <p>帮助与客服</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-15.jpg">
      <p>商务合作</p>
    </a>
    <a href="#" class="F16-a1">
      <img src="../../assets/img/img5/f16-16.jpg">
      <p>&nbsp;&nbsp;&nbsp;设置&nbsp;&nbsp;&nbsp;</p>
    </a>
  </div>
  <!-- 空盒子 -->
  <div class="null-box"></div>
  </div>
</template>

<script>
    export default {
        name: "gerenContent"
    }
</script>

<style scoped>
  @import '../../assets/icon/font/iconfont.css';
  /* 空盒子 */
  .null-box{
    width: 100%;
    height: 0.1rem;
    background: #f4f4f4;
  }
  .my-conten{
    width: 100%;
  }
  /* 我的订单 */
  .my-order{
    display: block;
    width:100%;
    height: 0.6rem;
    background: #fff;
  }
  .my-order-box-top{
    width: 3.55rem;
    height: 0.6rem;
    float: right;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .my-order-box-top span{
    color: #000;
    font-size: 0.16rem;
  }
  .my-order-box-top i{
    color: #000;
    font-size: 0.18rem;
    margin-right: 0.1rem;
  }

  .my-order-box-bot{
    width: 100%;
    height: 0.8rem;
    background: #fff;
    display: flex;
  }
  .my-order-box-bot img{
    width: 0.3rem;
    height: 0.3rem;
  }
  .my-order-box-bot a{
    width:20%;
    height: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.14rem;
    justify-content: center;
    align-items: center;
    color: #333333;
  }
  .my-order-box-bot p{
    margin-top: -0.15rem;
  }

  /* 网易严选合伙人 */
  .partner{
    width: 100%;
    height: 0.6rem;
    background: red;
  }
  .partner-box{
    width: 3.55rem;
    height: 0.6rem;
    background: #fff;
    float: right;
  }
  .wyyx-box{
    width: 100%;
    height: 1.1rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items:center;
    /*margin-bottom: 0.1rem;*/
  }
  .wyyx-box img{
    width: 3.4rem;
    height: 0.8rem;
  }
  /* 我的服务 */
  .my-fuwu{
    width: 100%;
    height: 0.6rem;
    background: #fff;
  }
  .my-fuwu-box{
    width: 3.55rem;
    height: 0.6rem;
    float: right;
    color:#000;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
  }
  /* F16 */
  .F16{
    width: 100%;
    height: 1rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    border-bottom:1px solid #d9d9d9;
  }
  .F16-a1{
    width:0.8rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .F16-a1 img{
    width: 0.3rem;
    height: 0.3rem;
    margin-top: -0.01rem;
  }
  .F16-a1 p{
    color:#000;
    font-size: 0.14rem;
    margin-top: -0.35rem;
  }
</style>
