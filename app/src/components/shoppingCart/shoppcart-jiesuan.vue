<template>
  <div class="shoppingcart-jiesuan">
    <div>
      <p>
        <input class="goos" type="checkbox" name="" id="for01" value="" /><label class="gooss" for="for01"></label>
      </p>
      <p>已选(<em>2</em>)</p>
    </div>
    <div>
      <p>
        <span>合计:￥<em>838.00</em></span>
        <span>活动优惠:￥<em>69.00</em></span>
      </p>
      <a style="display: block;" href="#">
        {{ temp }}
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shoppcart-jiesuan",
      props:["temp"]

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
  .shoppingcart-jiesuan{
    overflow: hidden;
    border-top: 1px solid #e4e4e4;
    padding: 0 0 0 0.15rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shoppingcart-jiesuan > div:nth-of-type(1){
    display: flex;
    height: 0.2rem;
  }
  .shoppingcart-jiesuan > div:nth-of-type(1) > p:nth-of-type(2){
    padding-left: 0.1rem;
    color: #5a5a5a;
    font-size: 0.16rem;
  }
  .shoppingcart-jiesuan > div:nth-of-type(1) > p:nth-of-type(2) em{
    color: #5a5a5a;
    font-size: 0.16rem
  }
  .shoppingcart-jiesuan > div:nth-of-type(2){
    display: flex;
    height: 100%;
    align-items: center;
  }
  .shoppingcart-jiesuan > div:nth-of-type(2) > p > span{
    display: block;
  }
  .shoppingcart-jiesuan > div:nth-of-type(2) > p > span:nth-of-type(1) em,
  .shoppingcart-jiesuan > div:nth-of-type(2) > p > span:nth-of-type(1){
    font-size: 0.16rem;
    color: #a9181e;
    font-weight: bold;
  }
  .shoppingcart-jiesuan > div:nth-of-type(2) > p > span:nth-of-type(2) em,
  .shoppingcart-jiesuan > div:nth-of-type(2) > p > span:nth-of-type(2){
    font-size: 0.12rem;
    color: #5a5a5a;
  }
  .shoppingcart-jiesuan > div:nth-of-type(2) > a{
    height: 100%;
    width: 1rem;
    background-color: #b4272d;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
    border: 1px solid #b9353a;
    font-size: 0.16rem;
    margin-left: 0.05rem;
  }

</style>
