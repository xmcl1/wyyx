<template>
    <div class="likes">
        <h3>猜你喜欢</h3>
        <ul>
            <li v-for="(n,smsg) in maybeLike" :key="smsg">
                <div>
                    <img :src="n.src" alt="">
                    <p>{{n.picdesc}}</p>
                </div>
                <div>
                    <p>{{n.desc}}</p>
                    <p>{{n.peice}}</p>
                </div>
            </li>
            <!-- <li>
                <div>
                    <img src="../../assets/img/img2/IntegSec6-s02.png" alt="">
                    <p>浓香纯肉，猫咪喜欢</p>
                </div>
                <div>
                    <p>轻薄便捷羽绒服</p>
                    <p>￥9.9</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/img2/IntegSec6-s03.png" alt="">
                    <p>浓香纯肉，猫咪喜欢</p>
                </div>
                <div>
                    <p>轻薄便捷羽绒服</p>
                    <p>￥9.9</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/img2/IntegSec6-s04.png" alt="">
                    <p>浓香纯肉，猫咪喜欢</p>
                </div>
                <div>
                    <p>轻薄便捷羽绒服</p>
                    <p>￥9.9</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/img2/IntegSec6-s05.png" alt="">
                    <p>浓香纯肉，猫咪喜欢</p>
                </div>
                <div>
                    <p>轻薄便捷羽绒服</p>
                    <p>￥9.9</p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/img2/IntegSec6-s06.png" alt="">
                    <p>浓香纯肉，猫咪喜欢</p>
                </div>
                <div>
                    <p>轻薄便捷羽绒服</p>
                    <p>￥9.9</p>
                </div>
            </li> -->
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
        props:["maybeLike"],
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
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .likes li{
        width: 1.7rem;
        margin-bottom: 0.15rem;
    }
    .likes li div:first-of-type{
        height: 2.08rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 0.05rem;
        overflow: hidden;
    }
    .likes li div:first-of-type img{
        width: 100%;
    }
    .likes li div:first-of-type p{
        flex: 1;
        font-size: 0.11rem;
        color: #b5aa85;
        line-height: 0.34rem;
        background: #f8efe7;
        text-indent: 0.05rem;
    }
    .likes li div:last-of-type p:first-of-type{
        line-height: 0.26rem;
        font-size: 0.14rem;
        color: #5b5b5b;
        padding-top: 0.07rem;
    }
    .likes li div:last-of-type p:nth-of-type(2){
        line-height: 0.26rem;
        font-size: 0.12rem;
        color: #bb0001;
    }
    .likes li div:last-of-type p:nth-of-type(3){
        line-height: 0.26rem;
        font-size: 0.12rem;
        color: #b8a980;
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
