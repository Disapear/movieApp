<template>
    <div>
        <Header title="个人中心"/>
          <router-view/>
        <TabBar/>
    </div>

</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    export default {
        name: "index",
        components:{
            Header,
            TabBar
        }
    }
</script>

<style scoped>

</style>
