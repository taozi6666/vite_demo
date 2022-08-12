<template>
    <div class="login_container wh100">
        <div class="login_main">
            <h2 class="login_title">TIK 管理平台</h2>
            <div class="flex_center">
                <el-form :model="form" label-width="60px">
                    <el-form-item label="用户名:">
                        <el-input v-model="form.user" placeholder="请输入用户名..." />
                    </el-form-item>
                    <el-form-item label="密码:">
                        <el-input type="password" v-model="form.pwd" placeholder="请输入密码..." />
                    </el-form-item>
                    <el-form-item label-width="0">
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { getUserInfo } from "@/api/login";

class FormInline {
    user: string = "";
    pwd: string = "";
}

export default {
    setup() {
        const form = reactive(new FormInline);
        const route = useRouter();
        const onSubmit = async() => {
            const {data} = await getUserInfo(form);
            window.sessionStorage.setItem('token',data)
            route.push({ path: '/home' });
        }

        return {
            form,
            onSubmit
        }
    }
}
</script>

<style lang="less" scoped>
.login_container {
    background: url('@/assets/images/login_bg.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login_title {
        text-align: center;
        color: white;
    }

    .login_main {
        width: 500px;
        height: 300px;
        background-color: rgba(0, 0, 0, .2);
        border-radius: 10px;
        box-shadow: 0px 1px 8px white;
        border: 1px solid white;

        /deep/ .el-form-item__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /deep/ .el-form-item__label {
            color: white;
        }
    }
}
</style>