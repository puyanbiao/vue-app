<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">About</router-link>|
            <router-link to="/home">Home</router-link>|
            <router-link to="/form">Form</router-link>|

            <router-link to="/ele">模拟饿了么表单-input</router-link>
        </div> -->
        <van-tabbar route>
            <van-tabbar-item replace to="/home" icon="home-o">Home</van-tabbar-item>
            <van-tabbar-item replace to="/" icon="comment-o">About</van-tabbar-item>
            <van-tabbar-item replace to="/form" icon="notes-o">Form</van-tabbar-item>
            <van-tabbar-item replace to="/ele" icon="smile-o">饿了么表单</van-tabbar-item>
        </van-tabbar>

        <!-- <keep-alive> -->
        <router-view />
        <!-- </keep-alive> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
