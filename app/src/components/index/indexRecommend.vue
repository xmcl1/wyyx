<template>
    <div class="recommend">
        <index-swiper></index-swiper>
        <div class="knowWyyx">
            <p>
                <span><i class="iconfont icon-duigou"></i>网易自营品牌</span>
                <span><i class="iconfont icon-duigou"></i>30天无忧退货</span>
                <span><i class="iconfont icon-duigou"></i>48小时快速退款</span>
            </p>
            <img src="../../assets/img/img2/index-know-wyyx.png" alt="">
        </div>
        <div class="newVipEnjoy">
            <p>
                <span>—</span>
                <span>新人专享礼</span>
                <span>—</span>
            </p>
            <div class="newVipPresent">
                <div>
                    <img src="../../assets/img/img2/index-newVip-1.png" alt="">
                    <p>现金礼</p>
                </div>
                <div>
                    <img src="../../assets/img/img2/index-newVip-2.png" alt="">
                    <p><span>￥<b>23.8</b></span><span>￥<b>38.8</b></span></p>
                </div>
                <div>
                    <img src="../../assets/img/img2/index-newVip-3.png" alt=""> 
                    <p><span>￥<b>207.2</b></span><span>￥<b>222.2</b></span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import indexSwiper from '../index/indexSwiper.vue';
    export default {
        components: {
            indexSwiper,
        }
    
    }
</script>

<style scoped>  
@import '../../assets/icon/font/iconfont.css';
    .recommend{
        overflow-y: scroll;
    }
    .knowWyyx{
        width: 100%;
        background: #fff;
    }
    .knowWyyx p{
        width: 100%;
        height: 0.36rem;
        padding-bottom: 0.06rem;
        display: -webkit-flex;
        line-height: 0.36rem;
        justify-content: space-evenly;
    }
    .knowWyyx p span{
        font-size: 0.11rem;
        color: #bf8889;
    }
    .knowWyyx p span i{
        font-size: 0.12rem;
        color: #bf8889;
        padding-right: 0.06rem;
    }
    .knowWyyx img{
        margin: 0 auto;
    }
    .newVipEnjoy{
        height: 2.05rem;
        width: 100%;
        background: #fff;
    }
    .newVipEnjoy p{
        font-size:0.16rem;
        line-height: 0.36rem;
        padding-top: 0.11rem;
        text-align: center;
    }
    .newVipEnjoy p span:nth-of-type(1),.newVipEnjoy p span:nth-of-type(3){
        font-weight: 900;
    }
    .newVipEnjoy p span:nth-of-type(2){
        padding: 0 0.1rem;
    }
    .newVipPresent{
        height: 1.6rem;
        width: 100%;
        box-shadow: 0 -15px 10px #f0f7f2;
        background: #f0f7f2;
        padding: 0 0.16rem 0.16rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.1rem;
    }
    .newVipPresent div{
        width: 1.11rem;
        height: 100%;
        background: #fff;
    }
    .newVipPresent div p{
        width: 100%;
        height: 0.2rem;
        text-align: center;
        font-size: 0.13rem;
        padding: 0;
        line-height: 0.2rem;
    }
    .newVipPresent div p:nth-of-type(2){
        display: flex;
    }
    .newVipPresent div p:nth-of-type(3){
        display: flex;
    }
    .newVipPresent div p span:first-of-type{
        color: #ad171c;
    }
    .newVipPresent div p span:last-of-type{
        color: #9c9c9c;
        font-size: 0.1rem;
        text-decoration: line-through;
    }
    .newVipPresent div p span b{
        font-weight:500;
    }
</style>
