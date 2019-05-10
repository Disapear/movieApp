<template>

     <div class="city-body">
         <div class="city-list">
             <div class="city-hot">
                 <h2>热门城市</h2>
                 <ul class="fix">
                     <li>天津</li>
                     <li>北京</li>
                     <li>上海</li>
                     <li>广东</li>
                     <li>深圳</li>
                 </ul>
             </div>
             <div class="city-sort">
                 <div>
                     <h2>A</h2>
                     <ul>
                         <li>阿拉善盟</li>
                         <li>鞍山</li>
                         <li>安庆</li>
                         <li>安阳</li>
                     </ul>
                     <h2>A</h2>
                     <ul>
                         <li>阿拉善盟</li>
                         <li>鞍山</li>
                         <li>安庆</li>
                         <li>安阳</li>
                     </ul>
                     <h2>A</h2>
                     <ul>
                         <li>阿拉善盟</li>
                         <li>鞍山</li>
                         <li>安庆</li>
                         <li>安阳</li>
                     </ul>
                     <h2>A</h2>
                     <ul>
                         <li>阿拉善盟</li>
                         <li>鞍山</li>
                         <li>安庆</li>
                         <li>安阳</li>
                     </ul>
                     <h2>A</h2>
                     <ul>
                         <li>阿拉善盟</li>
                         <li>鞍山</li>
                         <li>安庆</li>
                         <li>安阳</li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    ::-webkit-scrollbar {

        display:none
    }
    .city-body{width:100%;background-color:rgb(255,245,240) }
    h2{text-indent: 10px;,height:30px;width: 100%;background-color:rgb(240,240,240);font-size: 15px;font-weight:400;line-height: 30px}
    .fix{margin-left: 20px;margin-top: 20px;margin-right: 20px;margin-bottom:20px;height: 200px}
    .fix li{background-color: white;margin-top: 10px;width: 91px;text-align: center;height:30px;line-height: 30px;border: 1px solid #e6e6e6;border-radius:3px;float: left ; margin-right: 20px;margin-bottom: 10px}
    .city-sort div ul li{margin-top: 10px;margin-bottom: 10px;text-indent: 10px}
</style>
