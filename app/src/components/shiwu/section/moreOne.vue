<template>
    <div class="moreOne">
        <div>
            <img :src="more.img" alt="">
        </div>
        <h3>{{more.h3}}</h3>
        <p>{{more.p}}</p>
    </div>
</template>

<script>
export default {
    name:'',
    props:["more"],
    components:{
    }
}

</script>
<style scoped>
.moreOne{
    width:100%;
    padding-bottom: .22rem;
}
.moreOne img{
    width:3.45rem;
    height:2.03rem;
}
.moreOne h3{
    font-size:.16rem;
    color:#5b5b5b;
    margin-top:.03rem;
}
.moreOne p{
    color: #9f9f9f;
    line-height: .2rem;
}
</style>