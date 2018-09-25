<template>
    <!-- 设置头部 -->
    <div class="set-header">
      <a href="#/geren">
        <img src="../../assets/img/img5/phoneloginzuo.jpg">
      </a>
      <span>设置</span>
      <div class="set-header-right"></div>
    </div>

</template>

<script>
    export default {
        name: "shezhiHeader"
    }
</script>

<style scoped>
  /* 设置头部 */
  .set-header{
    width: 100%;
    height: 0.4rem;
    background: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
  }
  .set-header a{
    display: block;
    width: 0.16rem;
    height: 0.16rem;
    margin-left: 0.1rem;
  }
  .set-header a img{
    width: 100%;
    height: 100%;
  }
  .set-header span{
    font-size: 0.16rem;
    color: #313131;
  }
  .set-header-right{
    width: 0.16rem;
    height: 0.16rem;
    margin-right: 0.1rem;
  }
</style>
