<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h1>宠物商城管理端-注册</h1>
            </el-header>
            <el-main>
                <el-form ref="registerFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                    class="demo-ruleForm">
                    <el-form-item label="手机号" prop="phonenum">
                        <el-input autocomplete="off" v-model="ruleForm.phonenum" />
                    </el-form-item>
                    <el-form-item label="用户名" prop="username">
                        <el-input autocomplete="off" v-model="ruleForm.username" />
                    </el-form-item>
                    <el-form-item label="设置密码" prop="setpass">
                        <el-input autocomplete="off" v-model="ruleForm.setpass" />
                    </el-form-item>
                    <el-form-item label="再次输入" prop="repass">
                        <el-input autocomplete="off" v-model="ruleForm.repass" />
                    </el-form-item>
                    <el-form-item class="text1">
                        <el-button color="#42493A" plain type="primary" @click="submitForm(registerFormRef)"
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
import { ElMessage } from 'element-plus'

const registerFormRef = ref()
const ruleForm = reactive({
    phonenum: '',
    username: '',
    setpass: '',
    repass: '',
})

//点击跳转到登录页
const router = useRouter()
const toLogin = () => {
    router.push('/login')
}
// const submitForm = (formEl) => {
//     if (!formEl) return
//     formEl.validate((valid) => {
//         if (valid) {
//             console.log('submit!')
//         } else {
//             console.log('error submit!')
//             return false
//         }
//     })
// }

//验证再次输入的密码是否跟设置密码一致
const isSame = (rule, value) => {
    //rule表示当前校验规则对象，value表示当前输入框的值
    return new Promise((resolve, reject) => {
        if (value !== ruleForm.setpass) {
            // console.log('两次输入不一致')
          reject(rule, value);
        } else {
            // console.log('两次密码一致')
          resolve(rule, value);
        }
      });
}
//验证规则
const rules = reactive({
    //校验手机号
    phonenum: [
        //1·校验不为空
        //required: true 表示是必填项  message是提示信息 
        //trigger表示触发的时机，blur表示在失去焦点时触发
        { required: true, message: '手机号是验证身份的重要凭证，不能为空哦🤷‍♀️', trigger: 'blur' },
        //检验手机号是否合法，pattern是正则，message是正则校验不通过时，弹出的提示信息
        {
            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
            message: '请检查输入的手机号格式是否有误',
            trigger: 'blur'
        }
    ],
    //验证用户名
    username: [
        { required: true, message: '用户名是验证身份的重要凭证，不能为空哦🤷‍♀️', trigger: 'blur' },
        {
            pattern: /^[\u4E00-\u9FA5\w]{4,16}$/,
            message: '用户名不符合规范！用户名是由4~16位数字、字母、汉字和下划线组成的哦',
            trigger: 'blur'
        }
    ],
    //验证设置密码
    setpass: [
        { required: true, message: '设置你的密码！！！！！', trigger: 'blur' },
        {
            pattern: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
            message: '密码不符合规范！密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
            trigger: 'blur'
        }
    ],
    //验证再次输入是否一致
    repass: [
        { required: true, message: '值为空再次输入，确认密码', trigger: 'blur' },
        { validator: isSame, message: '两次输入不一致', trigger: 'blur' }
    ],
})
//注册按钮
//点击提交注册用户数据并跳转
const submitForm = (formEl) => {
    if(!formEl) return
    formEl.validate((valid) => {
        if (valid) {
          // 提交表单数据
          console.log('提交了表单数据，内容有：', formEl)
          ElMessage('注册成功！3s后跳转到登录页面')
          setTimeout(() => {
            router.push('/login')
          }, 3000)
        } else {
            console.log('验证没有通过，没有提交数据')
          return false;
        }
      });
    };
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