<template>
    <div>
      <!--product-guige-->
      <div class="product-guige">
        <a href="#"><span>规格参数选择</span> <span><img src="../../assets/img/img4/product-dayuhao.png" alt="" /></span></a>
        <a href="#">
          <span><em>领券</em> <img  style="display: inline-block;" src="../../assets/img/img4/product-youhui-0.png" alt="" />  <img  style="display: inline-block;" src="img/product-youhui-1.png" alt="" /> </span>
          <span><img src="../../assets/img/img4/product-dayuhao.png" alt="" /></span>
        </a>
        <a href="#">
		<span>
			<em>支持30天无忧退货</em>
			<em>48小时快速退款</em>
			<em>满88元免邮费	</em>
			<em>网易自营品牌</em>
			<em>国内部分地区不配送</em>
		</span>
          <span><img style="display: inline-block" src="../../assets/img/img4/product-dayuhao.png" alt="" /></span>
        </a>
      </div>
      <div class="huise"></div>
    </div>
</template>

<script>
    export default {
        name: "product-guige"
    }
</script>

<style scoped>
  *{
    font-style: normal!important;
  }
  .product-guige{
    display: flex;
    flex-direction: column;
    padding-left: 0.15rem;
  }
  .product-guige > a{
    display: flex;
    justify-content: space-between;
    padding-right: 0.15rem;
    padding-top: 0.18rem;
    padding-bottom: 0.18rem;
    border-bottom: 1px solid #f4f4f4;
    flex-wrap: wrap;
  }
  .product-guige > a > span em,
  .product-guige > a > span{
    color: #5a5a5a;
    display: flex;
    align-items: center;
  }
  .product-guige > a:nth-of-type(2) > span:nth-of-type(1) > img{
    margin-left: 0.12rem;
  }
  .product-guige > a:nth-of-type(3) > span:nth-of-type(1){
    width: 3.23rem;
    display: flex;
    flex-wrap: wrap;
  }
  .product-guige > a:nth-of-type(3) > span:nth-of-type(1) > em{
    display: inline-block;
    padding-right: 0.14rem;
    font-size: 0.12rem;
    position: relative;

  }
  .product-guige > a:nth-of-type(3) > span:nth-of-type(1) > em:nth-of-type(n+3){
    padding-top: 0.1rem;
  }
  .product-guige > a:nth-of-type(3) > span:nth-of-type(1) > em:before{
    content: "";
    display: inline-block;
    line-height: 0.12rem;
    width: 5px;
    height:5px;
    background-color: #b30e15;
    border-radius: 50%;
    margin-bottom: 0.01rem;
    margin-right: 0.03rem;
  }
</style>
