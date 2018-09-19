<template>
    <div class="">
        <footer>
            <a href="#/index" class="checked">
                <i class="iconfont icon-shouye"></i>
                <span>首页</span>
            </a>
            <a href="#/fenlei">
                <i class="iconfont icon-chouti"></i>
                <span>分类</span>
            </a>
            <a href="#/shiwu">
                <i class="iconfont icon-top"></i>
                <span>识物</span>
            </a>
            <a href="#/shoppingcart">
                <i class="iconfont icon-tubiaozhizuomoban"></i>
                <span>购物车</span>
                <b></b>
            </a>
            <a href="#/index">
                <i class="iconfont icon-geren"></i>
                <span>个人</span>
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
    
        data() {
    
            return {

            }
    
        },
    
        components: {

        }
    
    }
</script>

<style scoped>
    @import "../assets/icon/font/iconfont.css";
    footer{
        height:0.52rem;
        width: 100%;
        display: flex;
        background: #fff;
        border-top: 1px solid #e3e3e3;
    }
    footer a{
        display: block;
        width: 20%;
        height: 100%;
        color: #9a9a9a;
        position: relative;
    }
    footer a .iconfont{
        display: block;
        width: 100%;
        font-size: 0.19rem;
        text-align: center;
        padding-top: 0.08rem;
    }
    footer a span{
        display: block;
        width: 100%;
        text-align: center; 
        font-size: 0.12rem;
        line-height: 0.22rem;
    }
    footer .checked{
        color: #ad1316;
    }
</style>
