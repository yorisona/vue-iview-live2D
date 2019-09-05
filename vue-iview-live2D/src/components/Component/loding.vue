<style>
    /* .demo-spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    } */
    .ivu-spin-fix{
        z-index: 900;
    }
</style>
<template>
    <div class="demo-spin-container">
        <Spin fix></Spin>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        methods:{
        },
        created(){
            // console.log('启动')
            // setTimeout(()=>{
            //     this.$store.state.dataStatus.isLoding = false
            //     console.log(this,'销毁中')
            // },3000)
        }
    }
</script>
