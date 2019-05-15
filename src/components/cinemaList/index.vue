<template>
    <div id="cinema_list">


    </div>
</template>

<script>
    export default {
        name: "index",
        mounted() {
            //ajax 请求
            this.axios.get('http://localhost:8080/cinemas').then((res)=>{
                var cinemas = res.data;
                for(var i=0;i<=cinemas.length;i++){
                    document.getElementById("cinema_list").innerHTML+="<div class=\"cinema-body\" style=\"height:150px;width: 90%;border-bottom: 2px solid rgb(230,230,230);margin: 0 auto;\">\n" +
                        "            <div class=\"cinema_item\" style=\"float: left;width:70%\">\n" +
                        "            <div class=\"item_left\">\n" +
                        "                <div class=\"title\" style=\"margin-top:25px;\">\n" +
                        "                    <h4>"+cinemas[i].cinemaName+"&nbsp<strong class=\"price\" style=\"color: red\">34</strong>&nbsp<small class=\"price\">元起</small></h4>\n" +
                        "                    <small>"+cinemas[i].address+"</small>\n" +
                        "                </div>\n" +
                        "                <div class=\"tag\" style=\"margin-right:10px;font-size:10px;border:1px solid;width: 45px;text-align: center;float: left;margin-top: 10px;border-radius: 5px;color: darkorange\">折扣卡</div>\n" +
                        "                <div class=\"tag\" style=\"margin-right:10px;font-size:10px;border:1px solid;width: 45px;text-align: center;float: left;margin-top: 10px;border-radius: 5px;color: darkorange\">小吃</div>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "            <div class=\"item_right\" style=\"margin-left:80%;line-height: 150px\">\n" +
                        "                <p>"+cinemas[i].distance+"m</p>\n" +
                        "            </div>\n" +
                        "        </div>"
                }
            })

        }

    }
</script>

<style scoped>
</style>
