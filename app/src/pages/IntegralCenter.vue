<template>
    <div class="IntegralCenter">
        <header>
            <a href="#/index"><i class="iconfont icon-chaicon"></i></a>
            <span>积分中心</span>
            <span>积分指南</span>
        </header>
        <section>
            <div class="secOne">
                <div class="top">
                    <div class="person">
                        <div class="left"><img src="../assets/img/img2/person.png" alt=""></div>
                        <div class="center">
                            <p>你的可用积分：<span>0</span></p>
                            <a>普通会员<i class="iconfont icon-youjiantou"></i></a>
                        </div>
                        <div class="right">
                            <span></span>
                            <span><i class="iconfont icon-mulu"></i>明细</span>
                        </div>
                    </div>
                </div>
                <div class="SignIn">
                    <p><span>签到日历</span><span>收起<i class="iconfont icon-xiangshangjiantou"></i></span></p>
                    <div>
                        <p></p>
                        <p><span>+1</span><span>+1</span><span>+1</span><span>+2</span><span>+2</span><span>+3</span><span>+5</span></p>
                        <p><span>1天</span><span>2天</span><span>3天</span><span>4天</span><span>5天</span><span>6天</span><span>7天</span></p>
                    </div>
                    <button>签到</button>
                </div>
            </div>
            <div class="secTwo">
                <p>积分轻松得</p>
                <div class="numGet">
                    <div>
                        <img src="../assets/img/img2/getNum01.png" alt="">
                        <h4>超级会员</h4>
                        <p>购物享双倍积分</p>
                    </div>
                    <div>
                        <img src="../assets/img/img2/getNum02.png" alt="">
                        <h4>超级会员</h4>
                        <p>购物享双倍积分</p>
                    </div>
                    <div>
                        <img src="../assets/img/img2/getNum03.png" alt="">
                        <h4>超级会员</h4>
                        <p>购物享双倍积分</p>
                    </div>
                </div>
            </div>
            <integ-one></integ-one>
            <integ-two></integ-two>
            <integ-three></integ-three>
            <integ-four></integ-four>
        </section>
    </div>
</template>

<script>
    import IntegOne from '../components/IntegralCenter/integOne.vue';
    import integTwo from '../components/IntegralCenter/integTwo.vue';
    import integThree from '../components/IntegralCenter/integThree.vue';
    import integFour from '../components/IntegralCenter/integFour.vue';
    export default {
        components: {
            IntegOne,
            integTwo,
            integThree,
            integFour,
        }
    
    }
</script>
<style scoped>
    @import "../assets/icon/font/iconfont.css";
    .IntegralCenter{
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    header{
        height: 0.45rem;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: space-between;
    }
    header a{
        display: block;
    }
    header .iconfont{
        font-size: 0.16rem;
        width: 0.45rem;
        height: 100%;
        line-height: 0.45rem;
        text-align: center;
        display: block;
    }
    header span:first-of-type{
        font-size: 0.18rem;
        color: #222023;
        line-height: 0.45rem;
    }
    header span:last-of-type{
        font-size: 0.14rem;
        color: #080809;
        line-height: 0.45rem;
        padding-right:0.14rem;  
    }
    section::-webkit-scrollbar {    
            width: 0px;
    }
    section{
        height: 8rem;
        width: 100%;
        flex: 1;
        overflow-y: scroll;
    }
    .secOne{
        position: relative;
        background: #fff;
    }
    .secOne .top{
        width: 100%;
        height: 1.58rem;
        background: url(../assets/img/img2/IntegCen-01.png) top center;
        overflow: hidden;
        /* float: left; */
        background-size: 100% 100%;
    }
    .person{
        margin: 0.35rem 0;
        width: 100%;
        height: 0.5rem;
        display: flex;
    }
    .person .left{
        width: 0.41rem;
        height: 0.41rem;
        border: 0.01rem solid #fff;
        border-radius: 50%;
        margin-left: 0.14rem;
        overflow: hidden;
    }
    .person .left img{
        width: 100%;
        height: 100%;
    }
    .person .center{
        flex: 1;
        padding-left:0.07rem;
    }
    .person .center p{
        font-size: 0.17rem;
        color: #fff;
        line-height: 0.35rem;
    }
    .person .center p span{
        font-size: 0.2rem;
    }
    .person .center a{
        color: #fff;
        display: block;
        height: 0.18rem;
        width: 0.7rem;
        background: #dcae5f;
        font-size: 0.12rem;
        text-align: center;
    }
    .person .center a i{
        font-size: 0.12rem;
        color: #fff;
    }
    .person .right{
        width: 0.7rem;
        height: 0.3rem;
        /* background: #fff; */
        display: flex;
        margin-top: 0.1rem;
    }
    .person .right span:first-of-type{
        height: 0.3rem;
        width: 0.15rem;
        border-bottom-left-radius: 0.12rem;
        border-top-left-radius: 0.12rem;
        background: #fff;
    }
    .person .right span:last-of-type{
        height: 0.3rem;
        width: 0.55rem;
        background: #fff;
        font-size:0.12rem;
        color: #d4b175;
        line-height: 0.3rem;
    }
    .person .right span:last-of-type i{
        font-size: 0.12rem;
        padding-right: 0.07rem;
    }
    .SignIn{
        width: 3.45rem;
        height: 2.15rem;
        background: url(../assets/img/img2/IntegCen-bg.png) ;
        border-radius: 0.1rem;
        margin: 0 auto;
        position: relative;
        top: -0.4rem;
    }
    .SignIn>p{
        font-size: 0.15rem;
        display: flex;
        color: #fff;
        justify-content: space-between;
        line-height: 0.5rem;
        box-sizing: border-box;
        padding: 0 0.15rem;
    }
    .SignIn>div{
        box-sizing: border-box;
        padding: 0 0.1rem;
        width: 100%;
        height: 0.9rem;
        overflow: hidden;
    }
    .SignIn>div>p:first-of-type{
        height: 0.03rem;
        width: 100%;
        background: #c3a352;
        margin-top: 0.4rem;
    }
    .SignIn>div>p:nth-of-type(2){
        display: flex;
        justify-content: space-around;
        position: relative;
        top: -0.12rem;
    }
    .SignIn>div>p:nth-of-type(2) span{
        display: inline-block;
        height: 0.22rem;
        width: 0.22rem;
        border-radius: 50%;
        background: #d5b673;
        overflow: hidden;
        color: #fff;
        font-size: 0.08rem;
        line-height: 0.24rem;
        text-align: center;
        text-indent: -0.03rem;
    }
    .SignIn>div>p:nth-of-type(3){
        font-size:0.12rem;
        display: flex;
        color: #fff;
        justify-content: space-around;
    }
    .SignIn button{
        width: 2.1rem;
        height: 0.4rem;
        display: block;
        background: #fff;
        border: 0;
        font-size: 0.15rem;
        color: #e6d0ad;
        line-height: 0.4rem;
        text-align: center;
        border-radius: 0.05rem;
        margin: 0.1rem auto;
    }
    .secTwo{
        width: 100%;
        margin-top: -0.2rem;
        background: #fff;
        position: relative;
        z-index: 999;
    }
    .secTwo p{
        font-size: 0.15rem;
        color: #080808;
        text-align: center;
    }
    .numGet{
        padding: 0.3rem 0;
        display: flex;
        justify-content: space-around;
    }
    .numGet div{
        width: 0.85rem;
    }
    .numGet div img{
        margin: 0 auto;
    } 
    .numGet div h4{
        font-size: 0.14rem;
        color: #4b4b4b;
        text-align: center;
        line-height: 0.28rem;
        padding-top: 0.1rem;
    }
    .numGet div p{
        font-size: 0.12rem;
        color: #9a9a9a;
        text-align: center;
    }
</style>
