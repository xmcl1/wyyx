<template>
  <div class="set-content-box1">
  <!-- 空盒子 -->
  <div class="null-box"></div>
  <!-- 内容 -->
  <div class="set-content">
    <a href="#" class="set-content-a1">
      <span>消息推送设置</span>
      <div class="set-content-p1">
        <p>已开启</p>
        <img src="../../assets/img/img5/phoneregister-you.jpg">
      </div>
    </a>
    <a href="#" class="set-content-a1">
      <span>清除缓存</span>
      <div class="set-content-p1">
        <p class="set-content-p2">0.0 M</p>
      </div>
    </a>
    <a href="#" class="set-content-a1">
      <span>意见反馈</span>
      <div class="set-content-p1">
        <img src="../../assets/img/img5/phoneregister-you.jpg">
      </div>
    </a>
    <a href="#" class="set-content-a1">
      <span>关于我们</span>
      <div class="set-content-p1">
        <img src="../../assets/img/img5/phoneregister-you.jpg">
      </div>
    </a>
    <a href="#" class="set-content-a1">
      <span>分享APP</span>
      <div class="set-content-p1">
        <img src="../../assets/img/img5/phoneregister-you.jpg">
      </div>
    </a>
  </div>
  <!-- 空盒子 -->
  <div class="null-box"></div>
  <!-- 退出登陆 -->
  <div class="set-out">
    <a href="#/loginChoose">
      退出登陆
    </a>
  </div>
  </div>
</template>

<script>
    export default {
        name: "shezhiContent"
    }
</script>

<style scoped>
  /* 空盒子 */
  .null-box{
    width: 100%;
    height: 0.08rem;
    background: #f3f3f3;
    float: left;
  }
  /* 内容 */
  .set-content{
    width: 100%;
    background: #fff;
    float: left;
  }
  .set-content-a1{
    display: block;
    width: 3.62rem;
    height: 0.46rem;
    background: #fff;
    border-bottom: 1px solid #f6f6f6;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .set-content-a1 span{
    font-size: 0.14rem;
    color: #444444;
  }
  .set-content-p1{
    height: 0.46rem;
    display: flex;
    align-items: center;
  }
  .set-content-p1 p{
    font-size: 0.14rem;
    color: #969696;
    display: flex;
    align-items: center;
  }
  .set-content-p1 img{
    width: 0.14rem;
    height: 0.14rem;
    margin-right: 0.15rem;
    margin-top: 0.02rem;
  }
  .set-content-p2{
    margin-right: 0.15rem;
  }

  /* 退出登陆 */
  .set-out{
    width: 100%;
    height: 0.46rem;
    float: left;
    background: #fff;
  }
  .set-out a{
    display: block;
    width: 100%;
    height: 100%;
    color: #3b3b3b;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.46rem;
  }
</style>
