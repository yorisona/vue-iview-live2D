<template>
    <div>
        <div class="header-box">
            <p style="text-align: left;">LoGo</p>
            <Button
                icon="logo-twitter"
                style="float: right;margin-bottom: 15px;"
                @click="clearTk"
            >退出</Button>
        </div>
        <div class="wrop-box">
            <leftNav class="left-nav"></leftNav>
            <router-view class="view-box" />
        </div>
    </div>
</template>

<script>
import leftNav from "./leftNav";
export default {
    components: {
        leftNav
    },
    data() {
        return {};
    },
    methods: {
        clearTk() {
            window.sessionStorage.removeItem("access_token");
            this.$router.push("/login");
        }
    },
    created(){
        
    }
};
</script>

<style lang='scss'>
.header-box {
    height: 65px;
    overflow: hidden;
}
.wrop-box {
    display: flex;
    align-items: left;
    width: 100%;
    height: calc( 100vh - 65px );
}
.left-nav {
    background: #2c3e50;
}
.view-box {
    width: 100%;
}
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #eee;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
    background-color: #eee;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    background: #fe9600;
}
::selection {
    background: #444;
    color: #fff;
}
</style>
