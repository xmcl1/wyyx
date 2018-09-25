<template>
  <div class="phone-register-header1">
  <!-- 头部 -->
  <div class="phone-register-header">
    <a href="#/loginchoose">
      <img src="../../assets/img/img5/register-fanhui.jpg">
    </a>
  </div>
  <div class="phone-register-header-p1">
    <p>手机号注册</p>
  </div>
  </div>
</template>

<script>
    export default {
        name: "phoneRegisterHeader"
    }
</script>

<style scoped>
  /* 头部 */
  .phone-register-header{
    width: 100%;
    height: 0.4rem;
    display: flex;
    align-items: center;
  }
  .phone-register-header-a1{
    width: 100%;
  }
  .phone-register-header a{
    width: 0.28rem;
    height: 0.28rem;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-left: 0.1rem;
  }
  .phone-register-header img{
    width: 0.16rem;
    height: 0.16rem;
  }
  .phone-register-header-p1{
    width: 100%;
    text-align: center;
    margin-bottom: 0.38rem;
  }
  .phone-register-header-p1 p{
    font-size: 0.22rem;
    color: #050505;
  }

</style>
