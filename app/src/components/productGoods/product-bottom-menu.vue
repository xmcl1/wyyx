<template>
  <div>
    <div class="productgood" @click="removeAdd()">
       <div class="productcontent">
            <p><img @click="removeAdd()" src="../../assets/img/img4/pro-cuohao.png" alt=""></p>
            <div>
              <img :src="xiangqings.img[0]" alt=""/>
              <p>
                <span>价格:￥<em>{{ xiangqings.price }}</em></span>
                <span>请选择规格属性</span>
              </p>
            </div>
            <div>
              <p>规格</p>
              <p>
                <span>10克(两盏)</span>
                <span>30克(六盏)</span>
              </p>
            </div>
            <div>
              <p>数量</p>
              <p>
                <em data-v-7f3ea0ef="" class="colors">-</em>
                <input data-v-7f3ea0ef="" value="1" type="text"/>
                <em data-v-7f3ea0ef="">+</em>
              </p>
            </div>
       </div>
    </div>
    <div class="jiaru">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#">立即购买</a>
      <a @click="addGood()" href="javascript:;">加入购物车</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "product-bottom-menu",
        props:["xiangqings"],
        methods:{
          addGood(){
            // $(".productgood").fadeToggle(800)
            $(".productgood").animate({
              width:"100%",
              height: '52%',
              opacity: 'show'
            },300);
          },
          removeAdd(){
            $(".productgood").animate({
              width: '0%',
              height: '0%'
            },100);
          }
        }
    }
</script>

<style scoped>
  /*productgood*/ 
  .productgood{
    transition: all 1s;
    display: none;
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.2);
    bottom: 1.07rem;
    overflow: hidden;
  }
  .productgood > div{
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    padding-top: 0.2rem;
    padding-bottom: 0.3rem;
    border-top: 1px solid #e3e3e3;
  }
  .productgood > div > p:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
  }
  .productgood > div > p:nth-of-type(1)  > img{
    height: 0.18rem;
  }
  .productgood > div > div:nth-of-type(1){
    display: flex;
    align-items: flex-end;
    margin-bottom: 0.22rem;
  }
  .productgood > div > div:nth-of-type(1) > img{
    height: 1.02rem;
  }
  .productgood > div > div:nth-of-type(1) > p:nth-of-type(1){
    display: flex;
    flex-direction: column;
    vertical-align: bottom;
    padding-left: 0.07rem;
  }
  .productgood > div > div:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(1) em,
  .productgood > div > div:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(1){
    color: #a9181e;
  }
  .productgood > div > div:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(1) em{
    font-weight: bold;
  }
  .productgood > div > div:nth-of-type(2){
    margin-bottom: 0.22rem;
  }
  .productgood > div > div:nth-of-type(2) > p:nth-of-type(1){
    margin-bottom: 0.12rem;
  }
  .productgood > div > div:nth-of-type(2) > p:nth-of-type(2) > span{
    display: inline-block;
    padding: 0.1rem 0.12rem;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    font-size: 0.12rem;
  }
  .productgood > div > div:nth-of-type(2) > p:nth-of-type(2) > span:nth-of-type(n+2){
    margin-left: 0.15rem;
  }
  .productgood > div > div:nth-of-type(3) > p:nth-of-type(1){
    margin-bottom: 0.12rem;
  }
  .productgood > div > div:nth-of-type(3) > p:nth-of-type(2) {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.1rem 0;
  }
  .productgood > div > div:nth-of-type(3) > p:nth-of-type(2) > em:nth-of-type(1){
    border-right: 1px solid #ccc;
    padding: 0.1rem 0.18rem;
  }
  .productgood > div > div:nth-of-type(3) > p:nth-of-type(2) > em:nth-of-type(2){
    border-left: 1px solid #ccc;
    padding: 0.1rem 0.18rem;
  }
  .productgood > div > div:nth-of-type(3) > p:nth-of-type(2) > input{
    border: none;
    width: 0.64rem;
    text-align: center;
  }
  *{
      font-style: normal!important;
      outline: none;
    }
  .jiaru{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 0.55rem;
    line-height: 0.52rem;
    border-top: 1px solid #e3e3e3;
    overflow: hidden;
    background-color: #fff;
  }
  .jiaru > a:nth-of-type(1),
  .jiaru > a:nth-of-type(2),
  .jiaru > a:nth-of-type(3){
    display: inline-block;
    width:0.22rem;
    height: 100%;
    padding: 0 0.12rem;
    border-right: 1px solid #e3e3e3;
    height: 100%;
    background-size: 0.22rem auto;
    background-position: center;
    background-repeat: no-repeat;
  }
  .jiaru > a:nth-of-type(1){
    background-image: url("../../assets/img/img4/product-ico-0.png")
  }
  .jiaru > a:nth-of-type(2){
    background-image: url("../../assets/img/img4/product-ico-1.png")
  }
  .jiaru > a:nth-of-type(3){
    background-image: url("../../assets/img/img4/product-ico-1.png")
  }
  .jiaru > a:nth-of-type(n+4){
    padding: 0 0.24rem;
  }
  .jiaru > a:nth-last-of-type(1){
    background-color: #a9181e;
    color: #fff;
    font-weight: bold;
    height: 100%;
  }

</style>
