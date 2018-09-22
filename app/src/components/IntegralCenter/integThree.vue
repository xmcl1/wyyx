<template>
    <div class="secFive">
        <p>为你推荐</p>
        <h4><span>精选超值年购</span></h4>
        <ul>
            <li>
                <img src="../../assets/img/img2/IntegSec5-s01.png" alt="">
                <div>
                    <p> 奇亚籽燕麦片季度套餐，每月*3次邮达</p>
                    <p>奇亚籽谷物脆水果燕麦片，健康代餐，浓郁果香，季度分三次包邮到家</p>
                    <p>￥135.00/3期</p>
                    <p>购买最高可获13积分</p>
                </div>
            </li>
            <li>
                <img src="../../assets/img/img2/IntegSec5-s02.png" alt="">
                <div>
                    <p> 奇亚籽燕麦片季度套餐，每月*3次邮达</p>
                    <p>奇亚籽谷物脆水果燕麦片，健康代餐，浓郁果香，季度分三次包邮到家</p>
                    <p>￥135.00/3期</p>
                    <p>购买最高可获13积分</p>
                </div>
            </li>
        </ul>
        <p>查看全部<i class="iconfont icon-youjiantou"></i></p>
    </div>
</template>

<script>
    export default {

        components: {

        }
    
    }
</script>

<style scoped>
    @import "../../assets/icon/font/iconfont.css";
    .secFive{
        margin-top: 0.1rem;
        background: #fff;
    }
    .secFive>p:first-of-type{
        line-height: 0.58rem;
        height: 0.58rem;
        text-align: center;
        font-size: 0.16rem;
        color: #1b1b1b;
    }
    .secFive h4{
        height: 0.3rem;
        overflow: hidden;
    }
    .secFive h4 span{
        border-left: 3px solid #0e0e0e;
        margin-left: 0.15rem;
        font-size: 0.14rem;
        display: block;
        height: 0.15rem;
        vertical-align: middle;
        padding-left: 0.05rem;
        margin-top: 0.08rem;
    }
    .secFive ul{
        margin-top: 0.18rem;
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.15rem;
    }
    .secFive ul li{
        height: 1.4rem;
        width: 100%;
        margin-bottom: 0.28rem;
        display: flex;
    }
    .secFive ul li img{
        padding-right: 0.14rem;
    }
    .secFive ul li div{
        flex: 1;
        overflow: hidden;
    }
    .secFive ul li div p:first-of-type{
        font-size: 0.13rem;
        color: #3a3a3a;
        line-height: 0.3rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .secFive ul li div p:nth-of-type(2){
        font-size: 0.12rem;
        color: #b4b4b4;
        line-height: 0.14rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .secFive ul li div p:nth-of-type(3){
        margin-top: 0.2rem;
        font-size: 0.14rem;
        color: #c2b084;
        line-height: 0.2rem;
    }
    .secFive ul li div p:nth-of-type(4){
        font-size: 0.12rem;
        color: #c2b084;
        line-height: 0.18rem;
    }    
    .secFive ul li:last-of-type{
        margin: 0;
    }
    .secFive>p:last-of-type{
        line-height: 0.58rem;
        height: 0.58rem;
        text-align: center;
        font-size: 0.16rem;
        color: #1b1b1b;
    }
    .secFive>p:last-of-type i{
        padding-left: 0.1rem;
        font-size: 0.2rem;
        vertical-align: middle;
    }
    .secFive{
        border-bottom: 0.02rem solid #ececec;
    }
</style>
