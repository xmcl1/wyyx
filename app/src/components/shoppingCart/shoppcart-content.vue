<template>
  <div>
    <!--包邮-->
    <div class="shoppcart-baoyou">
      <p class="baoyou"><span>已满足体条件</span></p>
      <p class="weixuanzhong"> <span><em></em>30天无忧退货</span> <span><em></em>48小时快速退款</span> <span><em></em>满88元免邮费</span> </p>
    </div>
    <!--manjian-->
    <div class="shoppcart-manjian">
      <div class="manjianqian">
        <p>
          <span>全场满赠</span>
          <span>已满足满<em>649</em>元领取赠品 <img style="display: inline-block" src="img/shoppcart-zuo.png" alt="" /></span>
        </p>
        <p>
          <a href="#">更换赠品</a>
        </p>
      </div>
      <div class="zengpin">
        <p><img src="../../assets/img/img4/shoppcart-zengpin.png" alt="" /></p>
        <div>
          <p>
            <span>赠品<em>圆形护颈苦荞麦枕</em> </span>
            <span>x<em>1</em></span>
          </p>
          <p>圆形</p>
        </div>
      </div>
    </div>
    <div class="huise"></div>
    <!--shoppcart-goods-->
    <div class="shoppcart-goods">
      <div>
        <p>
          <input class="goos" type="checkbox" name="" id="for" value="" /><label class="gooss" for="for"></label>
        </p>
        <a href="#" >
          <p>
            <img style="display: inline-block;" src="../../assets/img/img4/shoppcart-shangpin-gouwuche.png" alt="" />
          </p>
          <div>
            <p>
              <span>花鸟集四件套</span>
              <span>蓝色（床单款）;1.5m</span>
            </p>
            <p class="jiage"><span>￥<em>339.00</em></span> <span><em>-</em><input type="text" value="1" /><em>+</em></span></p>
          </div>
        </a>
      </div>
      <div>
        <p>
          <input class="goos" type="checkbox" name="" id="fors" value="" /><label class="gooss" for="fors"></label>
        </p>
        <a href="#" >
          <p>
            <img style="display: inline-block;" src="../../assets/img/img4/shoppcart-shangpin-gouwuche.png" alt="" />
          </p>
          <div>
            <p>
              <span>花鸟集四件套</span>
              <span>蓝色（床单款）;1.5m</span>
            </p>
            <p class="jiage"><span>￥<em>339.00</em></span> <span><em>-</em><input type="text" value="1" /><em>+</em></span></p>
          </div>
        </a>
      </div>
    </div>
    <div class="huise"></div>
  </div>
</template>

<script>
    export default {
        name: "shoppcart-content",
        props:["temp"],
        mounted(){
          this.temp = "asdaaaaaaaaaaaaaaaaaaaa"
        }
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
  /*shoppcart-baoyou*/
  .shoppcart-baoyou{
    width: 100%;
  }
  .shoppcart-baoyou .baoyou{
    display: none;
    padding: 0.16rem 0.15rem;
    width: 100%;
    height: 100%;
    background-color: #fef8d8;
  }
  .shoppcart-baoyou .baoyou > span{
    color: #eb9e35;
  }
  .shoppcart-baoyou .weixuanzhong{
    display: flex;
    justify-content: space-between;
    padding: 0.16rem 0.15rem;
    background-color: #f4f4f4;
  }
  .shoppcart-baoyou .weixuanzhong > span{
    font-size: 0.14rem;
    color: #2c2c2c;
  }
  .shoppcart-baoyou .weixuanzhong em{
    display: inline-block;
    width: 0.1rem;
    height: 0.1rem;
    background-image: url(../../assets/img/img4/shoppcart-quan.png);
    background-repeat: no-repeat;
    background-position: center;
    padding-right: 0.05rem;
  }
  /*shoppcart-manjian*/
  .shoppcart-manjian{
    padding-bottom: 0.16rem;
  }
  .shoppcart-manjian > .manjianqian{
    padding: 0 0.15rem;
    box-sizing: border-box;
    height: 0.48rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e4db;
  }
  .shoppcart-manjian > .manjianqian > p:nth-of-type(1) > span:nth-of-type(1){
    display: inline-block;
    color: #eb9e35;
    border: 1px solid #eb9e35;
    font-size: 0.12rem;
    padding: 0.03rem 0.05rem;
    border-radius: 4px;
    margin-right: 0.05rem;
  }
  .shoppcart-manjian > .manjianqian > p:nth-of-type(1) > span:nth-of-type(2) em{
    font-weight: bold;
  }
  .shoppcart-manjian > .manjianqian > p:nth-of-type(1) > span:nth-of-type(2) img{
    height: 0.14rem;
    vertical-align: middle;
  }
  .shoppcart-manjian > .manjianqian > p:nth-of-type(2) > a:nth-of-type(1){
    display: inline-block;
    padding-left: 0.1rem;
    height: 0.32rem;
    border-left: 1px solid #e7e7e7;
    line-height: 0.32rem;
  }
  .shoppcart-manjian .zengpin{
    padding: 0.08rem 0.15rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    height: 0.54rem;
  }
  .shoppcart-manjian .zengpin > p:nth-of-type(1) > img {
    height: 0.54rem;
  }
  .shoppcart-manjian .zengpin > div:nth-of-type(1){
    padding-left: 0.1rem;
    display: flex;
    flex-direction: column;
  }
  .shoppcart-manjian .zengpin > div:nth-of-type(1) > p:nth-of-type(1){
    display: flex;
    width: 2.46rem;
    justify-content: space-between;
  }
  .shoppcart-manjian .zengpin > div:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(1){
    color: #eb9e35;
    font-weight: bold;
  }
  .shoppcart-manjian .zengpin > div:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(1) > em{
    display: inline-block;
    padding-left: 0.14rem;
    color: #000;
    font-weight: normal;
  }
  .shoppcart-manjian .zengpin > div:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(2) em,
  .shoppcart-manjian .zengpin > div:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(2){
    font-weight: bold;
  }
  .shoppcart-manjian .zengpin > div:nth-of-type(1) > p:nth-of-type(2){
    padding-top: 0.08rem;
    color: #666;
  }
  /*shoppcart-goods*/
  .shoppcart-goods{
    padding-left: 0.15rem;
    box-sizing: border-box;
  }
  .shoppcart-goods > div{
    padding-top: 0.18rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .shoppcart-goods > div > p{
    width: 0.2rem;
    height: 0.2rem;
    position: relative;
    vertical-align: middle;
    align-self: center;
  }
  .shoppcart-goods > div > p > label{
    position: absolute;
    top: -10px;
    left: 0;
  }
  .shoppcart-goods > div > a:nth-of-type(1){
    flex: 1;
    height: 0.78rem;
    display: flex;
    padding-bottom:0.18rem;
    border-bottom: 1px solid #e6e4db;
  }
  .shoppcart-goods > div:nth-last-child(1) > a{
    border-bottom: none;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > p:nth-of-type(1){
    padding: 0 0.14rem;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > p:nth-of-type(1) > img{
    height: 0.84rem;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 0.84rem;

  }

  .shoppcart-goods> div > a:nth-of-type(1) > div > p:nth-of-type(1) > span:nth-of-type(1){
    display: block;
  }
  .shoppcart-goods> div > a:nth-of-type(1) > div > p:nth-of-type(1) > span:nth-of-type(2){
    display: inline-block;
    padding-top: 0.008rem;
    color: #666;
    font-size: 0.12rem;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > div > p:nth-of-type(2){
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 2.18rem;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > div > p:nth-of-type(2) > span:nth-of-type(2){
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    vertical-align: top;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > div .jiage > span:nth-of-type(2)  em{
    display: inline-block;
    width: 0.3rem;
    height: 0.25rem ;
    line-height: 0.25rem;
    text-align: center;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > div .jiage > span:nth-of-type(2) em:nth-of-type(1){
    border-right:1px solid #ccc;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > div .jiage > span:nth-of-type(2) em:nth-of-type(2){
    border-left:1px solid #ccc;
  }
  .shoppcart-goods > div > a:nth-of-type(1) > div .jiage > span:nth-of-type(2) > input{
    display: inline-block;
    width: 0.3rem;
    height: 0.25rem ;
    line-height: 0.25rem;
    border: none;
    text-align: center;
  }
  /*shoppcart-tuijian*/
  .shoppcart-tuijian {
    padding: 0rem 0.1rem 0.1rem 0.1rem;
  }
</style>
