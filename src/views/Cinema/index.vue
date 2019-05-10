<template>
    <div>
        <Header title="影院选择"/>
        <div class="cinema_bar">
            <router-link to="/cinema/allCity" tag="div" class="item">
                <span>全城</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link to="/cinema/allCityBrand" tag="div" class="item">
                <span>品牌</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link to="/cinema/allCityNews" tag="div" class="item">
                <span>特色</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
        </div>
        <router-view/>

        <TabBar/>
    </div>

</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    export default {
        name: "index",
        components: {
            Header,
            TabBar,

        }
    }
</script>

<style scoped>

    .cinema_bar{width: 100%;border-bottom: 2px solid rgb(240,240,240);height: 50px;}
    .item {width:33%;float: left;text-align: center;font-size: 16px;font-weight: 400;line-height: 50px;}
    .item.router-link-active{color: red}
</style>
