<template>
    <div>
      <div class="huise"></div>
      <div class="product-yonghupingjia">
        <a href="#">
          <span>用户评论(<em>{{ xiangqings.productDetails.pro.userComment.length }}</em>)</span>
          <span>产看全部<img style="display: inline-block" src="../../assets/img/img4/product-dayuhao.png" alt="" /></span>
        </a>
        <div class="pingluns">
          <div  v-for="(value,index) in xiangqings.productDetails.pro.userComment" v-if="index<1">
            <div>
              <img src="../../assets/img/img4/product-touxiang.png" alt="" />
              <p>{{ value.userName }}</p>
              <img src="../../assets/img/img4/product-dengji.png" alt="" />
              <p>
                <span v-for="(val1) in value.daxing"></span>
              </p>
            </div>
            <p><em>{{ value.time }}</em></p>
            <p>
              {{ value.comment }}
            </p>
            <p>
              <img v-for="(val02,index) in value.photo" :key="index" :src="val02" alt="" />
            </p>
          </div>
        </div>
      </div>
      <div class="huise"></div>
    </div>
</template>

<script>
    export default {
        name: "product-pinglun",
        props:["xiangqings"]
    }
</script>

<style scoped>
  *{
    font-style: normal!important;
  }
  /*product-yonghupingjia*/
  .product-yonghupingjia{
    padding-left: 0.15rem;
  }
  .product-yonghupingjia > a{
    display: flex;
    justify-content: space-between;
    padding-right: 0.15rem;
    padding-top: 0.18rem;
    padding-bottom: 0.18rem;
    border-bottom: 1px solid #f4f4f4;
  }
  .product-yonghupingjia > a > span > img{
    margin-left: 0.05rem;
  }
  .pingluns > div > div{
    display: flex;
    align-items: center;
    padding:0.15rem 0;
  }
  .pingluns > div > div > img:nth-of-type(1){
    height: 0.34rem;
    width: 0.34rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
  .pingluns > div > div > p:nth-of-type(1){
    font-size: 0.12rem;
  }
  .pingluns > div > div > img:nth-of-type(2){
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 4px;
    margin-left: 0.06rem;
  }
  .pingluns > div > div > p:nth-of-type(2) > span{
    display: inline-block;
    width: 0.14rem;
    height: 0.14rem;
    background-image: url("../../assets/img/img4/product-pingluns-pingjia.png");
    background-size: 100%;
    margin: 0 0.04rem;
  }
  .pingluns > div > p:nth-of-type(1) em,
  .pingluns > div > p:nth-of-type(1){
    color: #5a5a5a;
  }
  .pingluns > div > p:nth-of-type(1){
    padding-bottom: 0.14rem;
  }
  .pingluns > div > p:nth-of-type(2){
    padding-bottom: 0.1rem;
  }
  .pingluns > div > p:nth-of-type(3){
    display: flex;
    flex-wrap: wrap;
  }
  .pingluns > div > p:nth-of-type(3) > img{
    height: 0.8rem;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .huise{
    width: 100%;
    height: 0.12rem;
    background-color: #f4f4f4;
  }
</style>
