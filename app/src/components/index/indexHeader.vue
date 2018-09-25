<template>
    <div class="header">
        <header>
            <div><i class="iconfont icon-saoyisao"></i><span>扫一扫</span></div>
            <div><span><i class="iconfont icon-sousuo"></i>搜索商品, 共13926款好物</span></div>
            <div><i class="iconfont icon-xiaoxi"></i><span>消息</span></div>
        </header>
         <div class="indexList">
            <span class="show">推荐</span>
            <span>新品</span>
            <span>福利社</span>
            <span>限购</span>
            <router-link to="/jujia"><span>居家</span></router-link>
            <span>鞋包配饰</span>
            <span>服装</span>
            <span>电器</span>
            <span>洗护</span>
            <span>饮食</span>
            <span>餐厨</span>
            <span>婴童</span>
            <span>文体</span>
            <span>特色区</span>
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
    @import "../../assets/icon/font/iconfont.css";
    .header{
        height: 0.84rem;
        width: 100%;
    }
    header{
        height: 0.42rem;
        width: 100%;
        background: #fff;
        padding: 0.04rem;
        box-sizing: border-box;
        display: flex;
    }
    header div{
        width: 0.44rem;
        height: 100%;
    }
    header input{
        height: 100%;
        color: #858585;
    }
    header div:nth-of-type(2){
        flex: 1;
    }
    header div:nth-of-type(2) span{
        width: 100%;
        height: 100%;
        display: block;
        border: 0;  
        border-radius: 0.04rem;
        background: #ededed;
        outline: none;
        text-align: center;
        font-size: 0.13rem;
        line-height: 0.34rem;
        color: #858585;
    }
    header div:nth-of-type(2) span i{
        vertical-align: top;
        font-size: 0.16rem;
        display: inline-block;
        padding-right: 0.03rem;
    }
    header div:nth-of-type(1) span,header div:nth-of-type(3) span{
        font-size: 0.1rem;
        width: 100%;
        text-align: center;
        line-height: 0.14rem;
        display: block;
        color: #b4b4b4;
    }
    header div:nth-of-type(1) i,header div:nth-of-type(3) i{
        font-size: 0.19rem;
        display: block;
        text-align: center;
        color: #b4b4b4;
    }
    header div:nth-of-type(1) i{
        font-size: 0.16rem;
        margin-top: 0.03rem;
    }
    .indexList{
        padding-top: 0.15rem;
        background: #fff;
        width: 100%;
        height: 0.27rem;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    .indexList span{
        height: 0.24rem;
        border-bottom: 0.03rem solid transparent;
        margin: 0 0.04rem;
        padding: 0 0.09rem;
        display: block;
        font-size: 0.14rem;
        white-space: nowrap;
        color: #464646;
    }
    .indexList .show{
        color: #8d0108;
        border-bottom: 0.03rem solid #8d0108;
    }
</style>
