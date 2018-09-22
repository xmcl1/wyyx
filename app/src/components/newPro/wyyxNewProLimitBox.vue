<template>
  <div class="limitBox">
    <div class="box_left"><img :src="lb.pic"></div>
    <div class="box_right">
      <p class="firstP">{{lb.firstP}}</p>
      <p class="secondP">{{lb.secondP}}</p>
      <div class="thirdTxt">
        <p>
          <span>{{lb.span1}}</span>
          <span>今日价</span>
        </p>
        <p>
          <span>{{lb.span2}}</span>
          <span>明日价</span>
        </p>
        <p>
          <span>{{lb.span3}}</span>
          <span>原价</span>
        </p>
      </div>
      <a href="javascript:;">{{lb.a}}</a>
    </div>
  </div>

</template>

<script>
    export default {
        name: "wyyxNewProLimitBox",
        props:["lb"]
    }
</script>

<style scoped>
  .limitBox{
    display: -webkit-flex;
    border-top: 1px solid #dadada;
  }
  .limitBox:first-child{
    border-top: 2px solid #dadada;
  }
  .limitBox .box_left{
    width: 1.65rem;
  }
  .limitBox .box_right{
    /*flex: 1;*/
    width: 2.1rem;
    padding: 0.22rem 0;
  }

  .box_right .firstP{
    font-size: 0.15rem;
    width: 92%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #060606;
    line-height: 0.25rem;
  }
  .box_right .secondP{
    width: 92%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #767676;
    line-height: 0.21rem;
  }
  .box_right .thirdTxt{
    display: -webkit-flex;
    margin: 0.1rem 0;
  }
  .box_right .thirdTxt p{
    width: 33.3%;
    color: #767676;
    text-align: center;
    background: url("../../assets/img/img3/line.png") no-repeat right center;
    background-size: 2px 0.21rem;
  }
  .box_right .thirdTxt p:last-child{
    background: none;
  }
  .box_right .thirdTxt p:first-child{
    text-align: left;
  }
  .box_right .thirdTxt p span{
    display: block;
    line-height: 0.18rem;
  }
  .box_right .thirdTxt p:first-child span:first-child{
    color: #b72b46;
  }
  .box_right .thirdTxt p:first-child span:last-child{
    color: #2f2f2f;
  }
  .box_right .thirdTxt p:nth-child(2) span:first-child{
    text-align: left;
    text-indent: 0.16rem;
  }
  .box_right a{
    display: block;
    width: 1.05rem;
    height: 0.29rem;
    text-align: center;
    line-height: 0.29rem;
    background: #f49119;
    color: #fafff0;
    font-size: 0.13rem;
    letter-spacing: 1px;
    border-radius: 4px;
  }
</style>
