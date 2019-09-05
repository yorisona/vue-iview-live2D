<template>
    <div id="app">
        <div class="wrop-box">
            <transition name="fade" mode="out-in">
                <router-view class="view-box" />
            </transition>
            <loding v-if="this.$store.state.dataStatus.isLoding"></loding>
            <live2d></live2d>
        </div>
    </div>
</template>

<script>
import leftNav from "./components/leftNav";
import loding from "./components/Component/loding";
import Live2d from "./components/Component/Live2d"
export default {
    name: "App",
    components: {
        leftNav,
        loding,
        Live2d
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/normal.cur),
        auto;
}
.wrop-box {
    display: flex;
    align-items: left;
    width: 100%;
    height: calc( 100vh - 30px );
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 100ms
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
