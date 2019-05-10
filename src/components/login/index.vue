<template>
    <div class="con" >
        <form role="form">
            <div class="form-group">
                <input type="text" class="form-control input"  placeholder="账户名/手机号/Email">
                <input type="text" class="form-control input"  placeholder="请输入您的密码">
            </div>
        </form>
    <div class="buttons">
        <a href="#" class="button button-block button-rounded button-highlight button-large">登录</a>
        <a href="#" class="button button-block button-rounded button-caution button-large">注册</a>
    </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .input{width: 100%;height: 40px;margin-bottom: 3px;}
    .button{width: 98%;margin-left:1%;margin-bottom: 20px}
</style>
