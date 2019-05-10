<template>
    <div class="search-body">
    <div id="Ininput" class="input-group">
        <input type="text" class="form-control" placeholder="输入想搜索的影片，试试看" />
        <span class="input-group-btn">
               <button type="submit" class="btn btn-info btn-search glyphicon glyphicon-search" style="margin-top: -1px;"></button>
        </span>
    </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .search-body{text-align:center;width: 100%;background-color: whitesmoke;height: 50px;vertical-align: middle}
    #Ininput{width: 95%; margin:0  auto;margin-top: 8px}

</style>
