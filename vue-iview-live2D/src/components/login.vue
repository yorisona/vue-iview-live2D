<template>
    <div class="box">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" ref="fs" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form> 
        <p>{{ptext}}</p>
    </div>
</template>
<script>
import { resolve, reject } from "q";
import { hex_md5, uuid } from "../js/md5.js";
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    data() {
        return {
            isshow: true,
            formInline: {
                user: "",
                password: ""
            },
            ruleInline: {
                user: [
                    { required: true, message: "请填写用户名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        type: "string",
                        min: 6,
                        message:
                            "The password length cannot be less than 6 bits",
                        trigger: "blur"
                    }
                ]
            },
            ptext:{}
        };
    },
    components:{},
    methods: {
        handleSubmit(name) {
            // this.$refs[name].validate((valid) => {
            //     console.log(valid,'111')
            //     if (valid) {
            //         this.$Message.success('登入成功!');
            //     } else {
            //         this.$Message.error('用户名或密码错误!');
            //     }
            // })
            // let url = "http://www.esc.ashiliu.com/home/user/test";
            // this.axios.post(url).then(res => {
            //     console.log(res);
            // });
            let obj = { status: 1, text: "变更成功" };
            this.$store.dispatch("actionFn", obj);
            // window.localStorage.setItem('access_token','123456')
            // console.log(this.$store.state.dataStatus, this.g.apiUrl, "111");
            var app_id = "123456789"; // api访问id
            var app_secret = "123456789"; // api访问secret
            var device_id = uuid(8, 16); // 设备号,没有随便填
            var rand_str = "CJoIRT2bHN4L"; // 随机字符串(不含特殊符号,12位)
            var timestamp = new Date()
                .getTime()
                .toString()
                .substring(0, 10);
            var signature = hex_md5(
                "app_id=" +
                    app_id +
                    "&app_secret=" +
                    app_secret +
                    "&device_id=" +
                    device_id +
                    "&rand_str=" +
                    rand_str +
                    "&timestamp=" +
                    timestamp
            );
            this.axios
                .post(
                    "https://urlapi.youxi9.com/api/5bc5a5fc0e14d",
                    {
                        app_id: app_id,
                        signature: signature,
                        device_id: device_id,
                        timestamp: timestamp,
                        rand_str: rand_str
                    },
                    { headers: { version: "v3.0" } },
                    { async: false, dataType: "json" }
                )
                .then(data => {
                    window.sessionStorage.setItem(
                        "access_token",
                        data.data.data.access_token
                    );
                    // this.$router.push({ name: "Table" });
                });
        },
        getlg() {
            console.log("获取成功", Math.random() * 100, _.now());
        }
    },
    created: function() {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.dd = _.debounce(this.getlg, 500);
    },
    watch: {
        $route(to, old) {
            console.log(to, old, "route");
            var arr = Object.key(to.meta);
            if (arr.length == 0) {
                console.log("没有了");
            }
        },
        formInline: {
            handler(to, old) {
                // this.$router.push({path:'/tab',query:{id:1}})
                this.dd();
                console.log(to, old);
                // this.$refs.fs.focus()
            },
            deep: true
        },
        "formInline.user"(val, newval) {
            // console.log(val, newval);
        }
    }
};
</script>
<style lang="scss">
.box {
    width: 200px;
    height: 200px;
    margin: 0 auto;
}
</style>
