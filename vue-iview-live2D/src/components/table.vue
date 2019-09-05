<template>
    <div>
        <Table class="table1" :columns="columns1" :data="datas"></Table>
        <Pages :dataProp="data2" :totalPages="totalPages" :pageSize="pageSize" @change="changepage"></Pages>
        <!-- <Page :total="100" :page-size="pageSize" :current="1" show-total @on-change="changepage"></Page> -->
    </div>
</template>
<script>
import Pages from './Component/page'
export default {
    data() {
        return {
            columns1: [
                {
                    title: "Name",
                    key: "name"
                },
                {
                    title: "Age",
                    key: "age",
                    sortable: true
                },
                {
                    title: "Address",
                    key: "address"
                },
                {
                    title: "操作",
                    render: (h, params) => {
                        // 重点
                        let _this = this;
                        let s = params;
                        return h("i-switch", {
                            //按钮的话是：button自行替换
                            props: {
                                value: params.row.isSwitch === 1 //这里可以设置它的属性
                                //设置它的值比如：true或false
                                // 设置是否可以操作，变灰
                            },
                            on: {
                                //操作事件
                                input: function(event) {
                                    //这里会起到监听的作用
                                    _this.functionFun(event,s);
                                },
                                "on-change": function(event) {
                                    //值发生了改变调用方法
                                    // 方法自定义
                                }
                            }
                        });
                    }
                }
            ],
            data2: [
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03",
                    isSwitch:1
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01",
                    isSwitch:2
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02",
                    isSwitch:2
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04",
                    isSwitch:2
                },
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03",
                    isSwitch:2
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01",
                    isSwitch:2
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02",
                    isSwitch:2
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04",
                    isSwitch:2
                }
            ],
            datas: [],
            pageSize: 5,
            totalPages:''
        };
    },
    components:{
        Pages
    },
    methods: {
        changepage(index) {
            // 当前页码
            this.page = index;
            let _start = (index - 1) * this.pageSize;
            let _end = index * this.pageSize;
            this.datas = this.data2.slice(_start, _end);
            // this.$store.dispatch("lodingFn", {delay:1000});
            console.log(_start, _end);
        },
        functionFun(e,t) {
            // this.pp = s;
            t.row.isSwitch = e
            console.log(t,'11111');
        }
    },
    created() {
        this.totalPages = this.data2.length
        if (this.data2.length > this.pageSize) {
            this.datas = this.data2.slice(0, this.pageSize);
        }
    }
};
</script>
<style lang="scss">
.table1 {
    width: 100%;
    height: 85vh;
}
</style>
