<template>
    <div class="limit">
        <div v-for="(m,timeli) in timeLimit" :key="timeli">
            <img :src="m.src" alt="">
            <p>
                <span>￥<b>{{m.newPrice}}</b></span><span>￥<b>{{m.newPrice}}</b></span>
            </p>
        </div>
        <!-- <div>
            <img src="../../assets/img/img2/timeLimit-1.png" alt="">
            <p>
                <span>￥<b>69</b></span><span><b>79</b></span>
            </p>
        </div>
        <div>
            <img src="../../assets/img/img2/timeLimit-1.png" alt="">
            <p>
                <span>￥<b>69</b></span><span>￥<b>79</b></span>
            </p>
        </div> -->
    </div>
</template>

<script>
    export default {
        props:["timeLimit"],
        components: {

        }
    
    }
</script>

<style scoped>
    .limit{
        width:100%;
        display: flex;
        justify-content: space-between;
    }
    .limit div{
        width: 1.07rem;
    }
    .limit div p{
        line-height: 0.3rem;
        height: 0.3rem;
        display: flex;
        text-align: center;
        justify-content: center;
    }
    .limit div p span:first-of-type{
        font-size: 0.12rem;
        color: #c1333b;
    }
    .limit div p span:last-of-type{
        font-size: 0.08rem !important;
        color: #767676;
        padding-left: 0.02rem;
        text-decoration: line-through;
    }
    .limit div p span b{
        font-weight: 500;
    }
</style>
