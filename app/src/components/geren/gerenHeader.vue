<template>
  <!-- 个人头部 -->
  <div class="my-header">
    <div class="my-header-code">
      <a href="#">
        <i class="iconfont icon-qr-code"></i>
      </a>
    </div>
    <div class="my-header-user">
      <a href="#" class="user-picture">
        <img src="../../assets/img/img5/touxiang.jpg">
      </a>
      <a href="#" class="user-name">
        <span>眯眯眼</span>
      </a>
      <a href="#" class="user-qd">
        <span>每日签到</span>
        <i class="iconfont icon-youjiantou"></i>
      </a>
      <a href="#" class="user-vip">
        <img src="../../assets/img/img5/vip1.jpg">
        <span>超级会员</span>
        <p>立即试用<i class="iconfont icon-you"></i></p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "gerenHeader"
    }
</script>

<style scoped>
  @import "../../assets/icon/font/iconfont.css";
  /* 个人头部 */
  .my-header{
    width: 100%;
    /*overflow: hidden;*/
    /*height: 1.7rem;*/
    background: #c1a46a;
    border-bottom:1px solid #f2ede2;
  }
  .my-header-code{
    width: 100%;
    height: 0.5rem;
  }
  .my-header-code a{
    display: block;
    width: 0.29rem;
    height: 0.29rem;
    float: right;
    margin-right: 0.18rem;
    margin-top: 0.1rem;
    background: #fff4cd;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
  }
  .my-header-code i{
    font-size: 0.25rem;
  }
  .user-picture{
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin-left: 0.2rem;
    overflow: hidden;
  }
  .my-header-user{
    width: 100%;
    margin-bottom: 0.4rem;
    display: flex;
    position: relative;
  }
  .user-picture img{
    width: 0.8rem;
    height: 0.8rem;
  }
  .user-name{
    color: #f4f2e9;
    font-size: 0.22rem;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    height: 0.3rem;
  }
  .user-qd{
    width: 0.7rem;
    height: 0.18rem;
    color:#f4f2e9;
    font-size: 0.1rem;
    background: #b49d6b;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: absolute;
    top: 0.48rem;
    left: 1.15rem;;
    line-height: 0.18rem;
  }
  .user-qd span{
    margin-left: 0.05rem;
  }
  .user-qd i{
    margin-left: -0.01rem;
  }
  .user-vip{
    display: block;
    width: 1.2rem;
    height: 0.52rem;
    background: #444444;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    position: absolute;
    right: 0;
    top:0.15rem;
    /* display: flex; */
    /* align-items: center; */
    color: #eee0c0;
    overflow: hidden;
  }
  .user-vip img{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    margin-left: 0.04rem;
    margin-top: 0.06rem;
  }
  .user-vip span{
    display: block;
    font-size: 0.16rem;
    width: 0.8rem;
    margin-top: -0.4rem;
    margin-left: 0.5rem;
  }
  .user-vip p{
    display: block;
    height: 0.2rem;
    font-size: 0.1rem;
    margin-left: 0.5rem;
    margin-top: -0.02rem;
    display: flex;
    line-height: 0.2rem;
  }
  .user-vip i{
    margin-left: 0.02rem;
  }
</style>
