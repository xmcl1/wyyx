<template>
    <div class="secThree">
        <div class="numweek">
            <img src="../../assets/img/img2/IntegSec3-01.png" alt="">
            <p><span class="checked">本期强兑</span><span>下期预告</span></p>
        </div>
        <div class="numWeekOne">
            <p>距离本期结束还剩<span>12时12分57秒</span></p>
            <ul>
                <li>
                    <img src="../../assets/img/img2/IntegSec-s01.png" alt="">
                    <div>
                        <p>3D曲面软边钢化手机膜</p>
                        <p><span>99积分</span><span>￥<b>14.90</b></span></p>
                        <p><span><b></b></span><span>仅剩385件</span></p>
                        <button>马上抢</button>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/img2/IntegSec-s02.png" alt="">
                    <div>
                        <p>3D曲面软边钢化手机膜</p>
                        <p><span>99积分</span><span>￥<b>14.90</b></span></p>
                        <p><span><b></b></span><span>仅剩385件</span></p>
                        <button>马上抢</button>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/img2/IntegSec-s03.png" alt="">
                    <div>
                        <p>3D曲面软边钢化手机膜</p>
                        <p><span>99积分</span><span>￥<b>14.90</b></span></p>
                        <p><span><b></b></span><span>仅剩385件</span></p>
                        <button>马上抢</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
    
        components: {

        }
    
    }
</script>

<style scoped>
    .secThree{
        width: 100%;
        margin-top: 0.1rem;
        background: #fff;
    }
    .numweek{
        height: 0.97rem;
        width: 100%;
        background: #fffbef;
    }
    .numweek p{
        height: 0.36rem;
        box-sizing: border-box;
        padding: 0 0.15rem;
        display: flex;
        color: #ecd3b6;
        font-size: 0.13rem;
        justify-content: space-around;
    }
    .numweek p span{
        line-height: 0.34rem;
        border-bottom: 2px solid transparent;
    }
    .numweek p .checked{
        border-bottom-color: #b39d70;
        color: #b39d70;
    }
    .numWeekOne{
        display: flex;
        flex-direction: column;
    }
    .numWeekOne>p{
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        color: #818181;
        font-size: 0.13rem;
    }
    .numWeekOne>p span{
        color: #080808;
        padding-left: 0.1rem;
    }
    .numWeekOne ul{
        flex: 1;
        box-sizing: border-box;
        padding: 0 0.15rem;
    }
    .numWeekOne ul li{
        height: 1.4rem;
        margin-bottom: 0.2rem;
        display: flex;
    }
    .numWeekOne ul li img{
        padding-right: 0.15rem;
    }
    .numWeekOne ul li div{
        flex: 1;
    }
    .numWeekOne ul li div p:nth-of-type(1){
        font-size: 0.13rem;
        color: #3f3f3f;
        margin-top: 0.2rem;
    }
    .numWeekOne ul li div p:nth-of-type(2){
        font-size: 0.12rem;
        color: #a99361;
        line-height: 0.2rem;
    }
    .numWeekOne ul li div p:nth-of-type(2) span:last-of-type{
        color: #b5b5b5;
        font-size: 0.1rem;
    }
    .numWeekOne ul li div p:nth-of-type(2) span:last-of-type b{
        font-weight: 500;
    }
    .numWeekOne ul li div p:nth-of-type(3){
        font-size: 0.12rem;
        color: #606060;
        height: 0.3rem;
        display: flex;
        line-height: 0.3rem;
        margin-bottom: 0.05rem;
    }
    .numWeekOne ul li div p:nth-of-type(3) span:first-of-type{
        width: 1.06rem;
        height: 0.03rem;
        background: #e0e0e0;
        margin-top: 0.14rem;
        position: relative;
    }
    .numWeekOne ul li div p:nth-of-type(3) span:first-of-type b{
        position: absolute;
        display: block;
        z-index: 999;
        width: 76%;
        height: 0.02rem;
        background: #a99361;
    }
    .numWeekOne ul li div p:nth-of-type(3) span:last-of-type{
        padding-left: 0.1rem;
    }
    .numWeekOne ul li div button{
        font-size: 0.10rem;
        color: #f7fdeb;
        background: #b5a17c;
        display: block;
        width: 0.78rem;
        height: 0.28rem;
        border: 0; 
    }
</style>
