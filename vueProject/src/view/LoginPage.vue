<template>
<div class="login-page">
  <input type="text" name="" value="" placeholder="账号"><br>
  <input type="password" name="" value="" placeholder="密码"><br>
  <a href="#/registe">新用户注册</a><br>
  <a href="#" v-on:click="login()">登录</a>
</div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login: function() {
        this.$http.post('http://127.0.0.1:12345/user/login',{username:'qiushangzhe'}).then(function(data){
            console.log(data.body);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
