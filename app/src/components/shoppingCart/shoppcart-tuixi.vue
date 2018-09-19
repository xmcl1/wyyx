<template>
    <div>
      <div class="shoppcart-tuijian">
        <p><img src="../../assets/img/img4/shoppcart-shangpin-gouwuche.png" alt="" /><span style="display: block;">看了该商品的人还买了</span></p>
        <div class="tuijians">
          <a href="#">
            <p>
              <img src="../../assets/img/img4/shoppcartcart-shangpin-0.png" alt="" />
              <span>10种颜色可选，柔软好心情</span>
            </p>
            <p class="tejia"><span class="te te0">三石福利特价</span><span class="te te1">爆款</span><span class="te te0">加价购</span></p>
            <p>玩趣彩虹四季拖鞋</p>
            <p>￥<em>12.9</em></p>
          </a>
          <a href="#">
            <p>
              <img src="../../assets/img/img4/shoppcartcart-shangpin-0.png" alt="" />
              <span>10种颜色可选10种颜色可选，柔软好心情</span>
            </p>
            <p class="tejia"><span class="te te0">三石福利价</span><span class="te te1">爆款</span><span class="te te0">加价购</span></p>
            <p>玩趣彩虹四季拖鞋</p>
            <p>￥<em>12.9</em></p>
          </a>
        </div>
      </div>
      <div class="huise"></div>
      <!--shoppcart6-carnixihuan-->
      <div class="shoppcart-cainixihuan">
        <p><span>猜你喜欢</span></p>
        <div class="tuijians">
          <a href="#">
            <p>
              <img src="../../assets/img/img4/shoppcartcart-shangpin-0.png" alt="" />
              <span>10种颜色可选，柔软好心情</span>
            </p>
            <p class="tejia"><span class="te te0">三石福利特价</span><span class="te te1">爆款</span><span class="te te0">加价购</span></p>
            <p>玩趣彩虹四季拖鞋</p>
            <p>￥<em>12.9</em></p>
          </a>
          <a href="#">
            <p>
              <img src="../../assets/img/img4/shoppcartcart-shangpin-0.png" alt="" />
              <span>10种颜色可选10种颜色可选，柔软好心情</span>
            </p>
            <p class="tejia"><span class="te te0">三石福利价</span><span class="te te1">爆款</span><span class="te te0">加价购</span></p>
            <p>玩趣彩虹四季拖鞋</p>
            <p>￥<em>12.9</em></p>
          </a>
        </div>
      </div>
      <div class="huise"></div>
    </div>
</template>

<script>
    export default {
        name: "shoppcart-tuixi"
    }
</script>

<style scoped>
  * {
    color: #000;
    font-size: 0.14rem;
    outline: none;
    font-style: normal;
  }
  .huise{
    width:100%;
    height: 0.12rem;
    background-color: #f4f4f4;
  }
  .tuijians{
    display: flex;
    justify-content: space-between;
  }
  .tuijians > a{
    display: block;
    overflow: hidden;
    width: 1.72rem;
  }
  .tuijians > a > p:nth-of-type(1){
    position: relative;
  }
  .tuijians > a   > p:nth-of-type(1) > img{
    width: 1.72rem;
  }
  .tuijians > a  > p:nth-of-type(1) > span{
    display: block;
    width: 100%;
    font-size: 0.12rem;
    color: #a08c64;
    bottom: 0;
    background-color: rgba(142,118,72,.5);
    padding:0.12rem 0.07rem;
    box-sizing: border-box;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .tuijians > a  > p:nth-of-type(n+2){
    margin: 0.08rem 0;
  }
  .tuijians > a  > p:nth-of-type(4) em,
  .tuijians > a  > p:nth-of-type(4){
    color: #a9181e;
    font-weight: bold;
  }
  .tuijians > a  > .tejia{
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }
  .tuijians > a  > .tejia > .te{
    display: inline-block;
    padding: 0.02rem 0.03rem;
    color: #Fff;
    font-size:  0.1rem;
    margin: 0 0.02rem;
  }
  .tuijians > a  > .tejia > .te0{
    background-color: #e67979;
    border: 1px #e06464 solid;
  }
  .tuijians > a  > .tejia > .te1{
    background-color: #cab693;
    border: 1px #bfa983 solid;
  }
  .goos{
    display: none;
  }
  .gooss{
    width: 0.2rem;
    height: 0.2rem;
    display: inline-block;
    line-height: 50px;
    position: relative;
    text-align: center;
  }
  .gooss:after{
    content: "";
    width: 0.2rem;
    height: 0.2rem;
    left: 0;
    top: 0;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    background-image: url("../../assets/img/img4/shppingcart-util.png");
    background-size: 0.2rem auto;
    background-position: 0 0.2rem;
  }
  .goos:checked+label:after{
    background-position: 0 1.54rem;
  }
  /*shoppcart-tuijian*/
  .shoppcart-tuijian {
    padding: 0rem 0.1rem 0.1rem 0.1rem;
  }
  .shoppcart-tuijian > p{
    display: flex;
    align-items: center;
    margin: 0.14rem 0;
  }
  .shoppcart-tuijian > p > span{
    padding-left: 0.1rem;
  }
  .shoppcart-tuijian > p  > img{
    height: 0.38rem;
  }
  /*shoppcart-cainixihuan*/
  .shoppcart-cainixihuan{
    padding: 0rem 0.1rem 0.1rem 0.1rem;

  }
  .shoppcart-cainixihuan  > p{
    display: flex;
    justify-content: center;
    margin: 0.14rem 0;
  }
</style>
