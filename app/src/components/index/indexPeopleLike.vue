<template>
    <div class="peopleLike">
        <div class="top">
            <img src="../../assets/img/img2/idnex-secFivr-1.png" alt="">
            <div>
                <P><span>三石福利价</span></P>
                <P>玩趣彩虹四季拖鞋</P>
                <P>10种颜色可选，柔软好心情</P>
                <P>￥<span>14.9</span></P>
            </div>
        </div>
        <div class="bottom">
            <div>
                <img src="../../assets/img/img2/idnex-secFivr-down1.png" alt="">
                <p>
                    <span><b></b></span>
                </p>
            </div>
            <div>
                <img src="../../assets/img/img2/idnex-secFivr-down1.png" alt="">
                <p>
                    <span><b></b></span>
                </p>
            </div>
            <div>
                <img src="../../assets/img/img2/idnex-secFivr-down1.png" alt="">
                <p>
                    <span><b></b></span>
                </p>
            </div>
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
    }
    .peopleLike .bottom div{
        width: 1.07rem;
    }
</style>
