<template>
    <div class="sec10">
        <img src="../../assets/img/img2/index-secTen-1.png" alt="">
        <ul>
            <li>
                <img src="../../assets/img/img2/index-secTen-s01.png" alt="">
                <p><span>限时购</span></p>
                <p>小方管系列 哑光唇膏</p>
                <p><span>￥<b>71.2</b></span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/index-secTen-s02.png" alt="">
                <p><span>限时购</span></p>
                <p>小方管系列 哑光唇膏</p>
                <p><span>￥<b>71.2</b></span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/index-secTen-s03.png" alt="">
                <p><span>限时购</span></p>
                <p>小方管系列 哑光唇膏</p>
                <p><span>￥<b>71.2</b></span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/index-secTen-s04.png" alt="">
                <p><span>限时购</span></p>
                <p>小方管系列 哑光唇膏</p>
                <p><span>￥<b>71.2</b></span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/index-secTen-s05.png" alt="">
                <p><span>限时购</span></p>
                <p>小方管系列 哑光唇膏</p>
                <p><span>￥<b>71.2</b></span></p>
            </li>
            <li>
                <img src="../../assets/img/img2/index-secTen-s06.png" alt="">
                <p><span>限时购</span></p>
                <p>小方管系列 哑光唇膏</p>
                <p><span>￥<b>71.2</b></span></p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        components: {

        }
    
    }
</script>

<style scoped>
    .sec10{
        width: 100%;
        margin-top: 0.1rem;
        display: flex;
        flex-direction: column;
        background: #fff;
    }
    .sec10 ul{
        flex: 1;
        box-sizing: border-box;
        padding: 0.1rem;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    .sec10 ul li{
        width: 0.98rem;
        margin: 0 0.05rem;
    }
    .sec10 ul li p:first-of-type{
        margin-top: 0.05rem;
        padding: 0.05rem 0;
        display: flex;
    }
    .sec10 ul li p:first-of-type span{
        display: block;
        background: #e57b7b;
        height: 0.16rem;
        font-size: 0.1rem;
        color: #fff;
        padding: 0 0.05rem;
    }
    .sec10 ul li p:nth-of-type(2){
        font-size: 0.12rem;
        color: #2d2d2d;
    }
    .sec10 ul li p:nth-of-type(3){
        font-size: 0.12rem;
        color: #ae272b;
    }
    .sec10 ul li p:nth-of-type(3) b{
        font-weight: 500;
    }
</style>
