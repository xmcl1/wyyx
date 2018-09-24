<template>
  <div class="pro">
    <div class="pro_left"><img :src="ps.pic"></div>
    <div class="pro_right">
      <p>{{ps.p1}}</p>
      <p>{{ps.p2}}</p>
      <p>
        <span>限时价 <b>{{ps.b1}}</b></span>
        <span>原价 <b>{{ps.b2}}</b></span>
      </p>
      <p>
        <span><i>{{ps.i}}</i></span>
        <a href="">{{ps.a}}</a>
      </p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "wyyxLimitProdetailPros",
        props:["ps"]
    }
</script>

<style scoped>

  .detailBox .pro{
    width: 100%;
    display: -webkit-flex;
    background: #ffffff;
    margin-top: 0.08rem;
  }
  .pro_left{
    width: 1.65rem;
  }
  .pro_left img{
    width: 100%;
  }
  .pro_right{
    /*flex:1;*/
    width: 2.1rem;
    box-sizing: border-box;
    padding: 0.22rem 0;
    padding-right:0.15rem;
  }
  .pro_right p{
    line-height: 0.25rem;
    font-size: 0.13rem;
    color: #020202;
  }
  .pro_right p:first-child{
    font-size: 0.15rem;
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pro_right p:nth-child(2){
    color: #989898;
    width: 93%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pro_right p:nth-child(3){
    line-height: 0.33rem;
  }
  .pro_right p:nth-child(3) span:first-child b{
    color: #b4272d;
    font-size: 0.13rem;
  }
  .pro_right p:nth-child(3) span:last-child{
    color: #989898;
    margin-left: 0.15rem;
  }
  .pro_right p:nth-child(3) span:last-child b{
    text-decoration: line-through;
  }
  .pro_right p:last-child{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  .pro_right p:last-child span{
    width: 0.88rem;
    height: 0.16rem;
    background: #ffffff;
    border: 2px solid #e97600;
    border-radius:10px;
    overflow: hidden;
  }
  .pro_right p:last-child span i{
    float: left;
    width: 85%;
    height: 100%;
    line-height: 0.16rem;
    text-align: center;
    background: #feeede;
    font-style: normal;
    color: #e97600;
    font-size: 0.1rem;
    letter-spacing: 1px;
  }
  .pro_right p a{
    display: block;
    width: 0.8rem;
    height: 0.27rem;
    line-height: 0.27rem;
    color: #ffffff;
    text-align: center;
    background: #f49018;
    font-size: 0.13rem;
    border-radius:4px;
  }
</style>
