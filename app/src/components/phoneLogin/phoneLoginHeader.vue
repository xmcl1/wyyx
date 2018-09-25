<template>
  <div class="phone-login-header1">
  <!-- 头部 -->
  <div class="phone-login-header">
    <a href="#/loginChoose" class="phone-login-header-left">
      <img src="../../assets/img/img5/phoneloginzuo.jpg">
    </a>
    <span class="phone-login-header-mid">手机号登陆</span>
    <a href="#/phoneRegister" class="phone-login-header-right">
      <span>注册</span>
    </a>
  </div>
  <!-- logo -->
  <div class="phone-login-logo">
    <img src="../../assets/img/img5/phoneloginlogo.jpg">
  </div>
  </div>
</template>

<script>
    export default {
        name: "phoneLoginHeader"
    }
</script>

<style scoped>
  /* 头部 */
  .phone-login-header{
    width: 100%;
    height: 0.4rem;
    background: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #f1f1f1;
  }
  .phone-login-header-left{
    display: block;
    width: 0.28rem;
    height: 0.28rem;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-left: 0.1rem;
  }
  .phone-login-header-left img{
    width: 0.16rem;
    height: 0.16rem;
  }
  .phone-login-header-mid{
    color: #3a3a3a;
    font-size: 0.16rem;
  }
  .phone-login-header-right{
    display: block;
    width: 0.28rem;
    height: 0.28rem;
    color: #3a3a3a;
    font-size: 0.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.1rem;
  }

  /* logo */
  .phone-login-logo{
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.16rem;
  }
  .phone-login-logo img{
    width: 1.3rem;
    height: 0.55rem;
  }
</style>
