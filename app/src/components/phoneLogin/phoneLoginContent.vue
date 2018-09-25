<template>
  <div class="phone-login-input1">
  <!-- 手机登陆 -->
  <div class="phone-login-input">
    <div class="phone-login-input-a1-box">
      <input type="text" placeholder="输入手机号" class="phone-login-input-a1">
      <img src="../../assets/img/img5/phonelogin-qingchu.jpg" class="phone-login-input-a1-clear">
    </div>
    <div class="phone-login-input-a2-box">
      <input type="text" placeholder="短信验证码" class="phone-login-input-a2">
      <span class="phone-login-input-a2-code">获取验证码</span>
    </div>
    <div class="phone-login-input-switchover">
      <span class="phone-login-input-switchover-s1">使用密码登陆</span>
    </div>
    <a href="jacascript::void(0)" class="phone-login-input-btn">
      登陆
    </a>
  </div>
  <div class="phone-login-box-bot">
    <a href="#">遇到问题?</a>
  </div>
  </div>
</template>

<script>
    export default {
        name: "phoneLoginContent"
    }
</script>

<style scoped>
  /* 手机登陆 */
  .phone-login-input{
    width: 100%;
    /* display: flex; */
  }
  .phone-login-input-a1-box{
    width:3.4rem;
    height: 0.46rem;
    border-bottom: 1px solid #c0c0c0;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .phone-login-input-a1{
    display: block;
    width:2.96rem;
    height: 0.46rem;
    border:none;
    color: #c0c0c0;
    outline: none;
    font-size: 0.14rem;
    margin-left: 0.1rem;
  }
  .phone-login-input-a1::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #c0c0c0;
  }
  /* 清除 */
  .phone-login-input-a1-clear{
    width: 0.15rem;
    height: 0.15rem;
    margin-right: 0.07rem;
    display: none;
  }
  .phone-login-input-a2-box {
    width: 3.4rem;
    height: 0.46rem;
    border-bottom: 1px solid #c0c0c0;
    /* display: flex; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .phone-login-input-a2{
    display: block;
    width:2.42rem;
    height: 0.46rem;
    border:none;
    color: #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    outline: none;
    font-size: 0.14rem;
    margin-left: 0.1rem;
  }
  .phone-login-input-a2::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #c0c0c0;
  }
  .phone-login-input-a2-code{
    color:#c0c0c0;
    font-size: 0.12rem;
    margin-right: 0.07rem;
    width: 0.74rem;
    height: 0.23rem;
    text-align: center;
    line-height: 0.23rem;
    border: 1px solid #c0c0c0;
    border-radius: 0.03rem;
  }
  /* 密码切换 */
  .phone-login-input-switchover{
    width: 3.4rem;
    height: 0.58rem;
    margin: 0 auto;
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .phone-login-input-switchover-s1{
    color: #565656;
    font-size: 0.14rem;
  }
  .phone-login-input-btn{
    display: block;
    width: 3.4rem;
    height: 0.48rem;
    background: #a53533;
    color: #c38786;
    font-size: 0.14rem;
    line-height: 0.48rem;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2.3rem;
  }
  .phone-login-box-bot{
    width:100%;
    display: flex;
    justify-content: center;
  }
  .phone-login-box-bot a{
    color: #c0c0c0;
    font-size: 0.14rem;

  }
</style>
