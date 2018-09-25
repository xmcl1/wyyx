<template>
    <div class="sec8">
        <div v-for="(n,secEig) in secEight" :key="secEig">
            <img :src="n.src" alt="">
            <p>{{n.title}}</p>
            <p>{{n.discount}}</p>
        </div>
        <!-- <div>
            <img src="../../assets/img/img2/index-secEight-1.png" alt="">
            <p>不好吃的月饼，不适合上推荐热卖</p>
            <p> 茗月夜月饼礼盒，限时8折优惠</p>
        </div>
        <div>
            <img src="../../assets/img/img2/index-secEight-1.png" alt="">
            <p>不好吃的月饼，不适合上推荐热卖</p>
            <p> 茗月夜月饼礼盒，限时8折优惠</p>
        </div> -->
    </div>
</template>

<script>
    export default {
        props:["secEight"],
        components: {

        }
    
    }
</script>

<style scoped>
    .sec8{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    .sec8 div{
        width: 2.5rem;
        margin-right: 0.15rem;
        background: #f5f5f5;
        flex-shrink: 0;
        border-radius: 0.05rem;
        overflow: hidden;
    }
    .sec8 div:last-of-type{
        padding: 0;
    }
    .sec8 div img{
        width: 100%;
    }
    .sec8 div p:first-of-type{
        font-size: 0.14rem;
        color: #363636;
        line-height: 0.22rem;
        padding-top: 0.07rem;
        text-indent: 0.12rem;
    }
    .sec8 div p:last-of-type{
        font-size: 0.12rem;
        color: #9e9e9e;
        line-height: 0.22rem;
        padding-bottom: 0.07rem;
        text-indent: 0.12rem;
    }
</style>
