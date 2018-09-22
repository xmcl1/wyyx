<template>
    <div class="likes">
        <h3>猜你喜欢</h3>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="bigLikes">
            <img src="../../assets/img/img2/index-end-1.png" alt="">
            <p>严选爆品进化论<span>49元起</span></p>
            <p>每一件商品都希望让你的生活更好一点</p>
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
    .likes{
        width: 100%;
        margin-top: 0.1rem;
        background: #ffffff;
        display: flex;
        flex-direction: column;
    }
    .likes h3{
        font-size: 0.14rem;
        color: #393939;
        text-align: center;
        line-height: 0.58rem;
    }
    .likes ul{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .likes ul li{
        width: 1.73rem;
        height: 2.5rem;
        background: #ac0;
        margin-bottom: 0.1rem;
    }
    .bigLikes{
        width: 100%;
        height: 2.63rem;
        box-sizing: border-box;
        width: 3.5rem;
        background: #f4f4f4;
        margin: 0 auto 0.1rem;
        border-radius: 0.08rem;
        overflow: hidden;
    }
    .bigLikes img{
        width: 100%;
    }
    .bigLikes p:first-of-type{
        color: #0b0b0b;
        font-size: 0.14rem;
        padding-top: 0.1rem;
        text-indent: 0.1rem;
        line-height: 0.22rem;
    }
    .bigLikes p:nth-of-type(2){
        color: #858585;
        font-size: 0.12rem;
        line-height: 0.22rem;
        text-indent: 0.1rem;
    }
</style>
