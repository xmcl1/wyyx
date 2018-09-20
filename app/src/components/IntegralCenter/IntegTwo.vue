<template>
    <div class="secFour">
        <p>精选积分兑换</p>
        <ul>
            <li>
                <img src="../../assets/img/img2/IntegSec3-s01.png" alt="">
                <p>卤汁牛肉 180g</p>
                <p>420积分 <span>￥32.00</span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/IntegSec3-s02.png" alt="">
                <p>卤汁牛肉 180g</p>
                <p>420积分 <span>￥32.00</span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/IntegSec3-s03.png" alt="">
                <p>卤汁牛肉 180g</p>
                <p>420积分 <span>￥32.00</span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/IntegSec3-s04.png" alt="">
                <p>卤汁牛肉 180g</p>
                <p>420积分 <span>￥32.00</span></p>
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
    .secFour{
        margin-top: 0.1rem;
        background: #fff;
    }
    .secFour>p:first-of-type{
        line-height: 0.58rem;
        height: 0.58rem;
        text-align: center;
        font-size: 0.16rem;
        color: #1b1b1b;
    }
    .secFour ul{
        width: 100%;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .secFour ul li{
        width: 1.65rem;
        height: 2.39rem;
        border: 0.01rem solid #e1e1e1;
        margin-bottom: 0.1rem;
    }
    .secFour ul li img{
        width: 100%;
    }
    .secFour ul li p:first-of-type{
        font-size: 0.14rem;
        color: #525252;
        padding-top: 0.2rem;
        text-indent:.1rem;
        line-height: 0.22rem;
    }
    .secFour ul li p:last-of-type{
        font-size: 0.13rem;
        color: #c4a18e;
        text-indent:.1rem;
        line-height: 0.22rem;
    }
    .secFour ul li p:last-of-type span{
        font-size: 0.1rem;
        color: #adadad;
        text-decoration: line-through;
    }
    .secFour>p:last-of-type{
        line-height: 0.58rem;
        height: 0.58rem;
        text-align: center;
        font-size: 0.16rem;
        color: #1b1b1b;
    }
    .secFour>p:last-of-type i{
        padding-left: 0.1rem;
        font-size: 0.2rem;
        vertical-align: middle;
    }
</style>
