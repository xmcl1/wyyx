<template>
  <div class="login-choose-f4">
    <a href="#" class="login-choose-f4-a1 a1">
      <img src="../../assets/img/img5/loginf1.jpg">
      <span>微信</span>
    </a>
    <a href="#" class="login-choose-f4-a1 a2">
      <img src="../../assets/img/img5/loginf2.jpg">
      <span>QQ</span>
    </a>
    <a href="#" class="login-choose-f4-a1 a3">
      <img src="../../assets/img/img5/loginf3.jpg">
      <span>微博</span>
    </a>
    <a href="#" class="login-choose-f4-a1 a4">
      <img src="../../assets/img/img5/loginf4.jpg">
      <span>易业邮</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "loginChoosebot"
    }
</script>

<style scoped>
  /* F4 */
  .login-choose-f4{
    width: 100%;
    /* flex: 1; */
    background: #f3f5f4;
    display: flex;
    justify-content: center;
  }
  .login-choose-f4-a1{
    display: block;
    font-size: 0.14rem;
    width: 0.88rem;
    height: 0.18rem;

    color: #7f7f7f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .a1,.a2,.a3{
    border-right: 1px solid #7f7f7f;
  }
  .login-choose-f4-a1 img{
    width: 0.21rem;
    height: 0.16rem;
    margin-right: 0.05rem;
  }
</style>
