<template>
  <!-- 登陆按钮 -->
  <div class="login-choose-button">
    <a href="#/phonelogin" class="login-choose-phone">
      <img src="../../assets/img/img5/longinphone.jpg">
      <span>手机号登陆</span>
    </a>
    <a href="#" class="login-choose-mail">
      <img src="../../assets/img/img5/longinmail.jpg">
      <span>邮箱帐号登陆</span>
    </a>
    <a href="#/phoneRegister" class="login-choose-phone-register">
      <span>手机号快捷注册</span>
      <img src="../../assets/img/img5/loginyou.jpg">
    </a>
  </div>
</template>

<script>
    export default {
        name: "loginChooseContent"
    }
</script>

<style scoped>
  /* 登陆按钮 */
  .login-choose-button{
    width: 100%;
    background: #f3f5f4;
    padding-bottom: 0.38rem;
  }
  .login-choose-phone{
    display: block;
    width: 3.4rem;
    height: 0.44rem;
    background: #b4272d;
    margin: 0 auto;
    color: #fff;
    font-size: 0.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-bottom: 0.14rem;
  }
  .login-choose-phone img{
    width: 0.2rem;
    height: 0.2rem;
    margin-right:0.08rem;
  }
  .login-choose-mail{
    display: block;
    width: 3.4rem;
    height: 0.44rem;
    background: #f3f5f4;
    border:1px solid #dcbebd;
    margin: 0 auto;
    color: #ad4a49;
    font-size: 0.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-bottom: 0.14rem;
  }
  .login-choose-mail img{
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.08rem;
    margin-top: 0.01rem;
  }
  .login-choose-phone-register{
    display: block;
    /* width: 1.2rem; */
    height: 0.2rem;
    color: #2b2b2b;
    font-size: 0.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .login-choose-phone-register span{
    margin-left: 0.1rem;
  }
  .login-choose-phone-register img{
    width: 0.2rem;
    height: 0.2rem;
  }

</style>
