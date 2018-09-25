<template>
    <div class="sec9">
        <div v-for="(n,secNinth) in secNine" :key="secNinth">
            <img :src="n.src" alt="">
            <div>
                <p>{{n.title}}</p>
                <p><span>￥<b>{{n.price}}</b></span> 起</p>
                <p><span><a><b></b></a></span><span>{{n.percent}}</span></p>
                <p>{{n.people}}</p>
            </div>
        </div>                                                                                                                                                                                                                              
    </div>
</template>

<script>
    export default {
        props:["secNine"],
        components: {
            
        }
    
    }
</script>

<style scoped>
    .sec9{
        width: 100%;
        box-sizing: border-box;
        padding: 0.16rem;
    }
    .sec9>div{
        width: 100%;
        height: 1.09rem;
        display: flex;
        margin-bottom: 0.15rem;
    }
    .sec9>div img{
        height: 100%;
    }
    .sec9>div div{
        flex: 1;
        box-sizing: border-box;
        padding-left: 0.15rem;
    }
    .sec9>div:last-of-type{
        margin-bottom: 0;
    }
    .sec9>div div p:first-of-type{
        padding-top: 0.06rem;
        font-size: 0.14rem;
        color: #353535;
        line-height: 0.25rem;
    }
    .sec9>div div p:nth-of-type(2){
        font-size: 0.12rem;
        color: #833c40;
        line-height: 0.25rem;
        display: flex;
    }
    .sec9>div div p:nth-of-type(2) span{
        font-size: 0.14rem;
    }
    .sec9>div div p:nth-of-type(2) span b{
        font-weight: 500;
    }
    .sec9>div div p:nth-of-type(3){
        height: 0.3rem;
        display: flex;
    }
    .sec9>div div p:nth-of-type(3) span:nth-of-type(1){
        flex: 1;
    }
    .sec9>div div p:nth-of-type(3) span:nth-of-type(2){
        width: 0.4rem;
        font-size: 0.12rem;
        height: 100%;
        text-align: center;
        line-height: 0.3rem;
        color: #939393;
    }
    .sec9>div div p:nth-of-type(3) span:nth-of-type(1) a{
        display: block;
        height: 0.03rem;
        width: 95%;
        background: #d2d2d2;
        margin-top: 0.13rem;
        position: relative;
    }
    .sec9>div div p:nth-of-type(3) span:nth-of-type(1) a b{
        display: block;
        position: absolute;
        z-index: 99;
        height: 0.03rem;
        width: 73%;
        background: #ff971b;
    }
    .sec9>div div p:nth-of-type(4) {
        font-size: 0.12rem;
        color: #a5a5a5;
    }
</style>
