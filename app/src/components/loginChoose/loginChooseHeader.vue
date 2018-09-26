<template>
  <div class="login-choose-header1">
  <!-- 头部 -->
  <div class="login-choose-header">
    <a href="#/" class="appear">
      <img src="../../assets/img/img5/longinclose.jpg">
    </a>
    <img src="../../assets/img/img5/loginlogo.jpg" class="header-login">
  </div>
  <!-- 轮播图 -->
  <div class="login-choose-banner">
    <img src="../../assets/img/img5/loginbanner1.jpg">
  </div>
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "loginChooseHeader",
      methods:{
        appear(){
          $('.appear').click(function () {
            $('footer').css({'display':'flex'})
            $('footer a').eq(0).addClass("checked").siblings().removeClass("checked");
          })
        }
      },
      mounted(){
        this.appear()
      }
    }
</script>

<style scoped>
  /* 头部 */
  .login-choose-header{
    width: 100%;
    /* height: 0.3rem; */
    background: #f2f4f4;
  }
  .login-choose-header a{
    display: block;
    width: 0.18rem;
    height: 0.18rem;
    margin-left: 0.16rem;
    padding-top: 0.1rem;
  }
  .login-choose-header a img{
    width: 100%;
    height: 100%;
  }
  .header-login{
    width: 1.3rem;
    height: 0.55rem;
    margin: 0 auto;
    margin-top: 0.05rem;
  }

  /* 轮播图 */
  .login-choose-banner{
    width: 100%;
    height: 3.44rem;
    background: pink;
  }
  .login-choose-banner img{
    width: 100%;
    height: 100%;
  }
</style>
