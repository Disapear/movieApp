<template>
    <div class="cinema_list">
        <div class="cinema-body">
            <div class="cinema_item">
            <div class="item_left">
                <div class="title">
                    <h4>保利国际影城(天安门店)&nbsp<strong class="price">34</strong>&nbsp<small class="price">元起</small></h4>
                    <small>西城区煤市街廊坊头条交叉口东北角北京坊东区B1-B2层</small>
                </div>
                <div class="tag">折扣卡</div>
                <div class="tag">小吃</div>
            </div>
        </div>
            <div class="item_right">
                <p>小于600m</p>
            </div>
        </div>

        <div class="cinema-body">
            <div class="cinema_item">
                <div class="item_left">
                    <div class="title">
                        <h4>保利国际影城(天安门店)&nbsp<strong class="price">34</strong>&nbsp<small class="price">元起</small></h4>
                        <small>西城区煤市街廊坊头条交叉口东北角北京坊东区B1-B2层</small>
                    </div>
                    <div class="tag">折扣卡</div>
                    <div class="tag">小吃</div>
                </div>
            </div>
            <div class="item_right">
                <p>小于600m</p>
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
    .cinema-body{height:125px;width: 90%;border-bottom: 2px solid rgb(230,230,230);margin: 0 auto;}
    .cinema_item{float: left;width:70%}
    .title{margin-top:25px;}
    .tag{margin-right:10px;font-size:10px;border:1px solid;width: 45px;text-align: center;float: left;margin-top: 10px;border-radius: 5px;color: darkorange}
    .price{color: red}
    .item_right{margin-left:80%;line-height: 125px}
</style>
