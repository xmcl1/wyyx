<template>
      <div class="fenleiMenu">
        <div class="fenlei-left">
          <div class="fenlei-left-content">
            <p class="sign">推荐专区</p>
            <p>精品区</p>
            <p>秋季专场</p>
            <p>居家</p>
            <p>鞋包配饰</p>
            <p>服装</p>
            <p>电器</p>
            <p>洗护</p>
            <p>饮食</p>
            <p>餐厨</p>
            <p>婴童</p>
            <p>文体</p>
            <p>特色区</p>
          </div>
        </div>
        <div class="fenlei-right">
          <div class="fenlei-right-content">
            <div  style="display: none;"  class="tuijianzhuanqu">
              <div>
                  <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-00.png" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-0.png" alt="" />
                  <span>配件低至2折</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-1.png" alt="" />
                  <span>服装低至2折</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-2.png" alt="" />
                  <span>餐厨99元任选6件</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-3.png" alt="" />
                  <span>居家2件85折</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-4.png" alt="" />
                  <span>婴童中秋特惠</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-5.png" alt="" />
                  <span>实用电器低至8折</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-6.png" alt="" />
                  <span>美食中秋特惠</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-7.png" alt="" />
                  <span>中秋好礼</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-8.png" alt="" />
                  <span>丁磊的好货推荐</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-tuijian-9.png" alt="" />
                  <span>999+好评</span>
                </a>
              </div>
            </div>
            <div  class="baopinqu">
              <div>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-11.png" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-0.png" alt="" />
                  <span>居家床品</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-1.png" alt="" />
                  <span>功能箱包</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-2.png" alt="" />
                  <span>女装</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-3.png" alt="" />
                  <span>男装</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-4.png" alt="" />
                  <span>男鞋女鞋</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-5.png" alt="" />
                  <span>保健养生</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-6.png" alt="" />
                  <span>清洁日用</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-7.png" alt="" />
                  <span>宝贝专用</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-8.png" alt="" />
                  <span>游戏周边</span>
                </a>
                <a href="#">
                  <img src="../../assets/img/img4/fenlei-baopin-9.png" alt="" />
                  <span>海外好物</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "fenlei-content-menu"
    }
</script>

<style scoped>
  /*fenleiMenu*/
  .fenleiMenu{
    width: 100%;
    height: 100%;
    display:  flex;
    border-top: 1px solid #e7e7e7;
    box-sizing: border-box;
  }
  .fenleiMenu > div:nth-of-type(1){
    overflow-y: scroll;
    width: 0.76rem;
    border-right: 1px solid #e7e7e7;
    background-color: #fff;
  }
  .fenleiMenu > div:nth-of-type(2){
    overflow-y: scroll;
    flex: 1;
    box-sizing: border-box;
    margin: 0.16rem;
  }
  .fenleiMenu .fenlei-left-content{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .fenleiMenu .fenlei-left-content > p{
    width: 100%;
    text-align: center;
    margin: 0.06rem 0;
    padding: 0.07rem 0;
    box-sizing: border-box;
    border-left: 4px solid transparent;
  }
  .fenleiMenu .fenlei-left-content .sign{
    border-left: 2px solid #b51d24;
    color: #b51d24;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(1) img{
    width: 2.7rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2){
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2) > a:nth-of-type(1),
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2) > a:nth-of-type(2),
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2) > a:nth-of-type(3){
    margin-top: 0.32rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2) > a{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.37rem;
    width: 0.75rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2) > a > span{
    display: inline-block;
    max-width: 0.75rem;
    font-size: 0.12rem;
    padding-top: 0.15rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2) > a > img{
    width: 0.62rem;
    height: 0.54rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(n+2) > a > img{
    width: 0.55rem;
    height: 0.54rem;
    border-radius: 50%;
  }
</style>
