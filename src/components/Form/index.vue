<template>
    <div>
        <!-- <PInput :value="val" @input="inputFn"></PInput> -->
        <!-- :value="val" @input="inputFn"   ==> 等价  v-model='val' -->

        <p-form :model="model" :rules="rules">
            <p-form-item label="用户名" prop="userName">
                <p-input v-model="model.userName"></p-input>
            </p-form-item>
            <p-form-item label="密码" prop="password">
                <p-input v-model="model.password" type="password"></p-input>
            </p-form-item>
        </p-form>

    </div>
</template>

<script>
import PInput from "./input";
import PFormItem from "./FormItem"
import PForm from './Form';
export default {
    // provide() {
    //     return {
    //         someval: '来自index.vue'
    //     }
    // },
    components: {
        PInput,
        PFormItem,
        PForm
    },
    data() {
        return {
            model: {
                userName: "",
                password: "",
            },
            rules: {
                userName: [
                    {
                        required: true,
                        message: '请输入用户名'
                    },
                    {
                        min: 6,
                        max: 10,
                        message: '请输入6-10位的用户名'
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码'
                    }, {
                        min: 8,
                        message: '请输入不小于8位的密码'
                    }
                ]
            },
            val: ""
        };
    },
    methods: {
        inputFn(val) {
            this.val = val
        }
    },
    watch: {
        'model.userName': {
            handler(newVal, oldVal) {
                console.log('newVal, oldVal', newVal, oldVal)
            },
            deep: true,
            immediate: true
        }
    },
};
</script>

<style  scoped>
</style>