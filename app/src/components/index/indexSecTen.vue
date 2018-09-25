<template>
<div>
    <div class="secTen" v-for="(n,secT) in secTen" :key="secT">
        <img :src="n.src" alt="">
        <ul>
            <li v-for="(m,sMsg) in n.small" :key="sMsg">
                <img :src="m.src" alt="">
                <p><span>{{m.title}}</span></p>
                <p>{{m.msg}}</p>
                <p><span>￥<b>{{m.price}}</b></span></p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        props:["secTen"],
        components: {

        }
    
    }
</script>

<style scoped>
    .secTen{
        width: 100%;
        margin-top: 0.1rem;
        display: flex;
        flex-direction: column;
        background: #fff;
    }
    .secTen ul{
        flex: 1;
        box-sizing: border-box;
        padding: 0.1rem;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    .secTen ul li{
        width: 0.98rem;
        margin: 0 0.05rem;
    }
    .secTen ul li p:first-of-type{
        margin-top: 0.05rem;
        padding: 0.05rem 0;
        display: flex;
    }
    .secTen ul li p:first-of-type span{
        display: block;
        background: #e57b7b;
        height: 0.16rem;
        font-size: 0.1rem;
        color: #fff;
        padding: 0 0.05rem;
    }
    .secTen ul li p:nth-of-type(2){
        font-size: 0.12rem;
        color: #2d2d2d;
    }
    .secTen ul li p:nth-of-type(3){
        font-size: 0.12rem;
        color: #ae272b;
    }
    .secTen ul li p:nth-of-type(3) b{
        font-weight: 500;
    }
</style>
