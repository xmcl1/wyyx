<template>
    <div class="peopleLike">
        <div class="top">
            <img :src="peopleLike.top.src" alt="">
            <div>
                <P><span>{{peopleLike.top.msg.Welfare}}</span></P>
                <P>{{peopleLike.top.msg.title}}</P>
                <P>{{peopleLike.top.msg.color}}</P>
                <P>￥{{peopleLike.top.msg.price}}</P>
            </div>
        </div>
        <div class="bottom">    
            <div  v-for="(n,peoLike) in peopleLike.bottom" :key="peoLike">
                <img :src="n.src" alt="">
                <p>{{n.title}}<span>￥<b>{{n.price}}</b></span></p>
            </div>
            <!-- <div>
                <img src="../../assets/img/img2/idnex-secFivr-down1.png" alt="">
                <p>即食燕窝 70g*6瓶 30%<span>￥<b>258</b></span></p>
            </div>
            <div>
                <img src="../../assets/img/img2/idnex-secFivr-down1.png" alt="">
                <p>网易云音乐苹果速数据线MF...<span>￥<b>258</b></span></p>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        props:["peopleLike"],
        components: {

        },    
    }
</script>

<style scoped>
    .peopleLike{
        width: 100%;
    }
    .peopleLike .top{
        width: 100%;
        height: 1.4rem;
        background: #fdf0df;
        display: -webkit-flex;
    }
    .peopleLike .top div{
        flex: 1;
        box-sizing: border-box;
        padding-left: 0.15rem;
    }
    .peopleLike .top div p:first-of-type span{
        font-size: 0.08rem;
        height: 0.16rem;
        line-height: 0.16rem;
        text-align: center;
        margin:0.16rem 0.23rem 0.1rem  0 ;
        background: #e77a7b;
        color: #fff;
        display: block;
        width: 0.7rem;
        border-radius: 0.02rem;
    }
    .peopleLike .top div p:nth-of-type(2){
        color: #3f3f3f;
        font-size: 0.14rem;
        line-height: 0.26rem;
    }
    .peopleLike .top div p:nth-of-type(3){
        color: #9f958b;
        font-size: 0.12rem;
        line-height: 0.26rem;
    }
    .peopleLike .top div p:nth-of-type(4){
        padding-top:0.1rem;
        color: #ae0a12;
        font-size: 0.12rem;
    }
    .peopleLike .bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
    }
    .peopleLike .bottom div{
        width: 1.07rem;
    }
    .peopleLike .bottom div p{
        width: 100%;
        color: #909090;
        font-size: 0.11rem;
        /* display: flex;  */
    }
    .peopleLike .bottom div p span{
        color: #bc3b40;
    }
</style>
