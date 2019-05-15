<template>

     <div class="city-body">
         <div class="city-list" id="city">
<!--             <div class="city-hot">-->
<!--                 <h2>热门城市</h2>-->
<!--                 <ul class="fix">-->
<!--                     <li>天津</li>-->
<!--                     <li>北京</li>-->
<!--                     <li>上海</li>-->
<!--                     <li>广东</li>-->
<!--                     <li>深圳</li>-->
<!--                 </ul>-->
<!--             </div>-->
         </div>
     </div>
</template>

<script>
    export default {
        name: "index",
        mounted(){
            for(var k = 0;k<=25;k++){
                var z = String.fromCharCode((65+k));
                if(z == 'I' || z == 'U' || z == 'V'){
                        continue;
                 }
                document.getElementById("city").innerHTML+="<div id='"+z+"'>"+"<h2 style='text-indent: 10px;,height:30px;width: 100%;background-color:rgb(240,240,240);font-size: 15px;font-weight:400;line-height: 30px'>"+z+"</h2>"+"</div>"
                // document.getElementById("city").innerHTML+="<h3 style='width: 90%;border-bottom: 1px solid rgb(230,230,230);margin-left:5%;font-weight: 200;font-size: 20px'><p style='margin-bottom: 1px;margin-left: 20px'>dadas</p></h3>"
            }

            this.axios.get('http://localhost:8080/cities').then((res)=>{
                var cities = res.data;
                for(var i=0;i<cities.length;i++){
                        for(var k = 0;k<=25;k++){
                            var z = String.fromCharCode((65+k));
                            if(cities[i].city_pre == z){
                                document.getElementById(z).innerHTML+="<h3 class='cities' style='width: 90%;border-bottom: 1px solid rgb(230,230,230);margin-left:5%;font-weight: 200;font-size: 20px'><p style='margin-bottom: 1px;margin-left: 20px'>"+cities[i].city_name+"</p></h3>"
                            }
                        }
                }
            }).catch(function (error) {
                    alert(error)
                });
        },
        methods:{
            cityOnClick(){
                alert("OK")
            }
        }
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
