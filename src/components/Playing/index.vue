<template>
<div class="movie_body" style="flex:1; overflow:auto;">
    <ul id="movieList" style="margin:0 12px; overflow: hidden;">


    </ul>
</div>
</template>

<script>
    export default {
        name: "index",
        mounted() {


            this.axios.get('http://localhost:8080/movies').then((res)=>{
                var cities = res.data
                for(var i=0;i<=cities.length;i++){
                    document.getElementById("movieList").innerHTML+="  <li style=\"margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;width: 100%;margin-right: 10%\">\n" +
                        "            <div class=\"pic_show\" style=\"width:64px; height: 90px;\"><img style=\"width:100%;\" src="+"\""+cities[i].pic_url+"\""+"/></div>\n" +
                        "            <div class=\"info_list\" style=\"margin-left: 10px; flex:1; position: relative;\">\n" +
                        "                <h2 style=\"font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;\">"+cities[i].movieName+"</h2>\n" +
                        "                <p style=\"font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;\">观众评价<span class=\"grade\">9.3</span></p>\n" +
                        "                <p style=\"font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;\">主演：任素汐</p>\n" +
                        "                <p style=\"font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;\">今天55家影院放映100场</p>\n" +
                        "            </div>\n" +
                        "            <div class=\"btn_mall\" style=\"width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;\">购买</div>\n" +
                        "        </li>"
                }

            })


        }
    }
</script>

<style scoped>
    .grade{
        margin-top: 10px;
    }
</style>
