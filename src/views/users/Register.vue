<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h1>宠物商城管理端-注册</h1>
            </el-header>
            <el-main>
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                    class="demo-ruleForm">
                    <el-form-item label="手机号">
                        <el-input autocomplete="off" v-model="ruleForm.phonenum" />
                    </el-form-item>
                    <el-form-item label="设置密码">
                        <el-input autocomplete="off" v-model="ruleForm.setpass" />
                    </el-form-item>
                    <el-form-item label="再次输入">
                        <el-input autocomplete="off" v-model="ruleForm.repass" />
                    </el-form-item>
                    <el-form-item class="text1">
                        <el-button color="#42493A" plain type="primary" @click="submitForm(ruleFormRef)"
                            class="submitbtn">注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-link :underline="false" style="margin-right: 280px;" @click="toLogin()">已有帐号，去登录</el-link>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const ruleFormRef = ref()
const ruleForm = reactive({
    phonenum: '',
    setpass: '',
    repass: '',
})

//点击跳转到登录页
const router = useRouter()
const toLogin = () => {
    router.push('/login')
}
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>

<style lang="scss" scoped>
.common-layout {
    background: #F4FCE9;
    height: 700px;
}



.el-header {
    height: 100px;
    background: #84976D;
}

.el-header h1 {
    color: #F8FFF8;
    font-size: 30px;
    line-height: 100px;
}

.demo-ruleForm {
    width: 600px;
    margin: 20px auto;
}

.submitbtn {
    background: #84976D;
    width: 100px;
}

.text1 .el-link {
    margin-right: 20px;
}

.el-form .el-form-item .el-form-item__content {
    justify-content: space-between;
}
</style>