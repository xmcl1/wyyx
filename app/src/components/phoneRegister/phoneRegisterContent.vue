<template>
  <div class="phone-register-content-box1">
  <!-- 注册 -->
  <div class="phone-register-input">
    <div class="phone-register-input-box1">
      <span class="phone-register-input-box1-s1">+86</span>
      <input type="text" placeholder="请输入手机号码" class="phone-register-input-box1-a1">
      <img src="../../assets/img/img5/phonelogin-qingchu.jpg" class="phone-register-input-box1-a1-clear">
    </div>
    <div class="phone-register-input-box2">
      <input type="text" placeholder="请输入短信验证码" class="phone-register-input-box2-a2">
      <span class="phone-register-input-box2-s2">获取验证码</span>
    </div>
    <div class="phone-register-input-box3">
      <input type="password" placeholder="请输入密码" class="phone-register-input-box3-a3">
      <img src="../../assets/img/img5/phonelogin-qingchu.jpg" class="phone-register-input-box3-a3-clear">
    </div>
    <a href="jacascript::void(0)" class="phone-register-input-btn">
      注册
    </a>
  </div>
  <div class="phone-register-bot-a1">
    <span>用户注册代表同意<a href="#">《服务条款》</a>和<a href="#">《网易隐私政策》</a></span>
  </div>
  <div class="phone-register-bot-a2">
    <a href="#">
      <span>邮箱帐号注册</span>
      <img src="../../assets/img/img5/phoneregister-you.jpg">
    </a>
  </div>
  </div>
</template>

<script>
    export default {
        name: "phoneRegisterContent"
    }
</script>

<style scoped>
  /* 注册 */
  .phone-register-input-box1{
    width: 3.4rem;
    height: 0.46rem;
    border-bottom: 1px solid #c0c0c0;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin: 0 auto;
    line-height: 0.46rem;
  }
  .phone-register-input-box1-s1{
    color: #424242;
    font-size: 0.14rem;
    margin-left: 0.07rem;
  }
  .phone-register-input-box1-a1{
    /* display: block; */
    width: 2.7rem;
    height: 0.46rem;
    border: none;
    color: #c0c0c0;
    outline: none;
    font-size: 0.14rem;
    margin-left: 0.05rem;
  }
  .phone-register-input-box1-a1-clear{
    width: 0.15rem;
    height: 0.15rem;
    margin-left: 0.1rem;
    display: none;
  }

  .phone-register-input-box2 {
    width: 3.4rem;
    height: 0.46rem;
    border-bottom: 1px solid #c0c0c0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    /* line-height: 0.46rem; */
  }
  .phone-register-input-box2-a2{
    /* display: block; */
    width: 2.42rem;
    height: 0.46rem;
    border: none;
    color: #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    outline: none;
    font-size: 0.14rem;
    margin-left: 0.1rem;
  }
  .phone-register-input-box2-s2{
    color: #c0c0c0;
    font-size: 0.12rem;
    margin-right: 0.07rem;
    width: 0.74rem;
    height: 0.23rem;
    text-align: center;
    line-height: 0.23rem;
    border: 1px solid #c0c0c0;
    border-radius: 0.03rem;
  }
  .phone-register-input-box3{
    width: 3.4rem;
    height: 0.46rem;
    border-bottom: 1px solid #c0c0c0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }
  .phone-register-input-box3-a3{
    /* display: block; */
    width: 2.96rem;
    height: 0.46rem;
    border: none;
    color: #c0c0c0;
    outline: none;
    font-size: 0.14rem;
    margin-left: 0.1rem;
  }
  .phone-register-input-box3-a3-clear{
    width: 0.15rem;
    height: 0.15rem;
    margin-right: 0.07rem;
    display: none;
  }
  /* 注册按钮 */
  .phone-register-input-btn{
    display: block;
    width: 3.4rem;
    height: 0.48rem;
    background: #a53533;
    color: #c38786;
    font-size: 0.14rem;
    line-height: 0.48rem;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 0.15rem;
  }
  .phone-register-bot-a1{
    width: 3.4rem;
    display: flex;
    margin: 0 auto;
    /* justify-content:center;  */
    margin-bottom: 0.3rem;
  }
  .phone-register-bot-a1 span{
    color: #c0c0c0;
    font-size: 0.12rem;
  }
  .phone-register-bot-a1 span a{
    color: #4d4d4d;
    font-size: 0.12rem;
  }

  .phone-register-bot-a2{
    width: 100%;

  }
  .phone-register-bot-a2 a{
    color:#4d4d4d;
    font-size: 0.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .phone-register-bot-a2 img{
    width: 0.15rem;
    height: 0.15rem;
  }
</style>
