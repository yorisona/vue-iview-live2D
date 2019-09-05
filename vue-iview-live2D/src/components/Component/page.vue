<template>
    <div>
        <Page :total="totalPages" :page-size="pageSize" :current="1" show-total @on-change="changepage"></Page>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datas: [],
        };
    },
    props:[
        'dataProp',
        'pageSize',
        'totalPages'
    ],
    methods: {
        changepage(index) {
            // this.page = index;
            // let _start = (index - 1) * this.pageSize;
            // let _end = index * this.pageSize;
            // this.datas = this.dataProp.slice(_start, _end);
            this.$emit('change',index)
        },
        functionFun(e,t) {
            // this.pp = s;
            console.log(e,t,'11111');
        }
    },
    created() {
        if (this.dataProp.length > this.pageSize) {
            this.datas = this.dataProp.slice(0, this.pageSize);
        }
    }
};
</script>