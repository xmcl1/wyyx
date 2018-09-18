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
        <div class="secOne">
            <p><a href="javascripy:;">品牌制造商提供</a><a href="javascripy:;">更多<i class="iconfont icon-youjiantou"></i></a></p>
            <index-section-one></index-section-one>
        </div>
        <div class="secTwo">
            <img src="../../assets/img/img2/index-secTwo.png" alt="">
            <index-section-one></index-section-one>
        </div>
        <div class="secThree">
            <p><a href="javascript:;">限时购<span>12</span>:<span>00</span>:<span>00</span></a>
            <a href="javascripy:;">更多<i class="iconfont icon-youjiantou"></i></a></p>
            <index-time-limit></index-time-limit>
        </div>
        <div class="secFour">
            <img src="../../assets/img/img2/index-secFour-1.png" alt="">
            <img src="../../assets/img/img2/index-secFour-2.png" alt="">
            <img src="../../assets/img/img2/index-secFour-3.png" alt="">
            <img src="../../assets/img/img2/index-secFour-4.png" alt="">
        </div>
        <div class="secFive">
            <p><a href="javascripy:;">品牌制造商提供</a><a href="javascripy:;">更多<i class="iconfont icon-youjiantou"></i></a></p>
            <index-people-like></index-people-like>
        </div>
    </div>
</template>

<script>
    import indexSwiper from '../index/indexSwiper.vue';
    import indexTimeLimit from '../index/indexTimeLimit.vue';
    import indexSectionOne from '../index/indexSectionOne.vue';
    import indexPeopleLike from '../index/indexPeopleLike.vue';
    export default {
        components: {
            indexSwiper,
            indexSectionOne,
            indexTimeLimit,
            indexPeopleLike
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
    .secOne{
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.16rem 0.16rem;
        background: #fff;
    }
    .secOne p{
        display: block;
        width:100%;
        line-height: 0.52rem;
        font-size: 0.15rem;
        display: flex;
        justify-content: space-between;
    }
    .secOne p a{
        color: #444444;
    }
    .secOne p a i{
        color: #444444;
    }
    .secOne>div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .secTwo{
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.16rem 0.16rem;
        background: #fff;
        margin-top: 0.1rem;
    }
    .secTwo>img{
        width: 100%;
        padding-top: 0.1rem;
        padding-bottom: 0.15rem;
    }
    .secTwo>div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .secThree{
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.16rem 0.16rem;
        background: #fff;
        margin-top: 0.1rem;
    }
    .secThree p{
        display: block;
        width:100%;
        line-height: 0.52rem;
        font-size: 0.15rem;
        display: flex;
        justify-content: space-between;
    }
    .secThree p a{
        color: #444444;
    }
    .secThree p a i{
        color: #444444;
    }
    .secThree p span{
        width: 0.2rem;
        height: 0.2rem;
        background: #333333;
        color: #fff;
        display: inline-block;
        text-align: center;
        line-height: 0.2rem;
        margin: 0 0.02rem;
        border-radius: 0.02rem;
        font-size: 0.1rem;
    }
    .secThree p span:first-of-type{
        margin-left: 0.05rem;
    }
    .secFour{
        margin-top: 0.1rem;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0.16rem;
        background: #fff;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .secFour img{
        margin-bottom: 0.02rem;
    }
    .secFive{
        margin-top: 0.1rem;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0 0.16rem 0.16rem;
        background: #fff;
        flex-direction: column;
    }
    .secFive p{
        display: block;
        width:100%;
        line-height: 0.52rem;
        font-size: 0.15rem;
        display: flex;
        justify-content: space-between;
    }
    .secFive p a{
        color: #444444;
    }
    .secFive p a i{
        color: #444444;
    }
</style>
