<template>
    <div>
      <div class="product-dajiazaikan">
        <div>
          <a href="#">大家都在看</a>
          <a href="#">24小时热销</a>
        </div>
        <div class="shangpin">
          <div>
            <div class="tuijians">
              <a href="#">
                <p>
                  <img src="../../assets/img/img4/shoppcartcart-shangpin-0.png" alt="" />
                </p>
                <p class="tejia"><span class="te te0">加价购</span></p>
                <p>玩趣彩虹四季拖鞋</p>
                <p>￥<em>12.9</em></p>
              </a>
              <a href="#">
                <p>
                  <img src="../../assets/img/img4/shoppcartcart-shangpin-0.png" alt="" />
                </p>
                <p class="tejia"> <span class="te te1">爆款</span><span class="te te0">加价购</span></p>
                <p>玩趣彩虹四季拖鞋</p>
                <p>￥<em>12.9</em></p>
              </a>
              <a href="#">
                <p>
                  <img src="../../assets/img/img4/shoppcartcart-shangpin-0.png" alt="" />
                </p>
                <p class="tejia"> <span class="te te0">加价购</span></p>
                <p>玩趣彩虹四季拖鞋</p>
                <p>￥<em>12.9</em></p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="huise"></div>
    </div>
</template>

<script>
    export default {
        name: "product-tuijian"
    }
</script>

<style scoped>
  *{
    font-style: normal!important;
  }
  .tuijians{
    display: flex;
    justify-content: space-between;
  }
  .tuijians > a{
    display: block;
    overflow: hidden;
    width: 1.18rem;
  }
  .tuijians > a > p:nth-of-type(1){
    position: relative;
  }
  .tuijians > a   > p:nth-of-type(1) > img{
    width: 1.18rem;
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
  /*product-dajiazaikan*/
  .product-dajiazaikan {
    padding-bottom: 0.12rem;
  }
  .product-dajiazaikan > div:nth-of-type(1){
    display: flex;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    align-items: center;
    border-bottom: 1px solid #f4f4f4;
    justify-content: center;
    margin-bottom: 0.12rem;
  }
  .product-dajiazaikan > div:nth-of-type(1) > a{
    display: inline-block;
    padding: 0 0.1rem;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    height: 100%;
  }
  .product-dajiazaikan > div:nth-of-type(1) > a:nth-of-type(2){
    margin-left: 0.55rem;
  }
  .product-dajiazaikan > div:nth-of-type(1) > a:nth-of-type(1){
    color: #a9181e;
    border-bottom-color: #a9181e;
  }
  .product-dajiazaikan > .shangpin{
    width:100%;
    padding-left: 0.15rem;
    box-sizing: border-box;
    overflow-x: scroll;
  }
  .product-dajiazaikan > .shangpin .tuijians > a{
    margin-right: 0.14rem;
  }
  .product-dajiazaikan > .shangpin > div{
    display: flex;
  }
</style>
