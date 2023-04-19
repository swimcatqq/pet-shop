<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h1>宠物商城管理端-登录</h1>
            </el-header>
            <el-main>
                <!-- ref="ruleFormRef" 作用是进行组件实例化的获取，在下面传给登录按钮的点击事件 -->
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                    class="demo-ruleForm" v-if="!ruleForm.useCaptcha">
                    <el-form-item label="账号" prop="phonenum">
                        <!-- 做校验要在这里加个prop，是校验的名字 -->
                        <el-input autocomplete="off" v-model="ruleForm.phonenum" placeholder="请输入手机号" />
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" autocomplete="off" v-model="ruleForm.pass" placeholder="请输入密码" />
                    </el-form-item>

                    <el-form-item class="text1">
                        <el-link :underline="false" style="margin-right: 280px;" @click="useCaptcha()">手机验证码登录</el-link>
                        <el-button color="#42493A" plain type="primary" @click="submitForm(ruleFormRef)"
                            class="submitbtn">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-link :underline="false" style="margin-right: 280px;" @click="toRegister()">还没有账号？立即注册</el-link>
                        <el-link :underline="false" @click="findPassword()">忘记密码点这里吧~</el-link>
                    </el-form-item>
                </el-form>
                <!-- 使用验证码登录样式 -->
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                    class="demo-ruleForm" v-else>
                    <!-- :rules="rules"  这里的rules就是校验规则，用rules来做校验 -->
                    <el-form-item label="手机号" prop="phonenum">
                        <el-input autocomplete="off" v-model="ruleForm.phonenum" placeholder="请输入手机号" />
                    </el-form-item>
                    <el-form-item label="验证码" prop="captcha">
                        <el-row :gutter="43">
                            <el-col :span="16">
                                <el-input type="password" autocomplete="off" v-model="ruleForm.captcha"
                                    placeholder="请输入四位验证码" class="yzmele" />
                            </el-col>
                            <el-col :span="8">
                                <el-button @click="sendYzm()" v-if="!isClicked">点击发送验证码</el-button>
                                <el-button v-else>{{ count }}s后再次发送</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item class="text1">
                        <el-link :underline="false" style="margin-right: 280px;" @click="usePassword()">账号密码登录</el-link>
                        <el-button color="#42493A" plain type="primary" @click="submitForm(ruleFormRef)"
                            class="submitbtn">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-link :underline="false" style="margin-right: 280px;" @click="toRegister()">还没有账号？立即注册</el-link>
                    </el-form-item>
                </el-form>

            </el-main>
        </el-container>
    </div>
</template>

<script setup>
//引入ref和computed函数并调用它们来创建一个响应式变量和一个计算属性，用于保存倒计时的时间和计算剩余时间
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
//从http中引入封装的login请求方法
import { login } from '@/api/users'

const ruleFormRef = ref()  //把ruleFormRef跟ref关联到一起，组合式的写法，不然下面submit按钮那里会获取不到ref
const ruleForm = reactive({  //响应式数据，一个对象，用来收集用户输入
    phonenum: '',
    pass: '',
    useCaptcha: false,
    captcha: ''
})
const isClicked = ref(false)  //用来记录发送验证码按钮是否被点击
const originTime = ref(10) //倒计时初始值为10
const count = computed(() => {
    return originTime.value > 0 ? originTime.value : '再次发送'

})
//验证码发送倒计时
const sendYzm = () => {
    isClicked.value = true
    originTime.value = 10
    const timer = setInterval(() => {
        originTime.value--
        if (originTime.value <= 0) {
            clearInterval(timer)
            isClicked.value = false
        }
    }, 1000)
}


const router = useRouter()
// const findPassword = () => {
//     router.push('/findPassword')
// }
const toRegister = () => {
    router.push('/register')
}

//点击登录按钮时
const submitForm = (formEl) => {
    //判断这个按钮存在
    if (!formEl) return
    formEl.validate((valid, fields) => {
        //如果校验成功，走这里
        if (valid) {
            console.log('点击了登录按钮!', ruleForm)
            ElMessage('登录成功！3s后跳转到首页')
            setTimeout(() => {
                router.push('/')
                //目前跳转到没有详情的首页，即未登录的首页，之后要跳到有商品详情的首页
            }, 3000)
            //把用户填写的信息发到后端，拿到返回值
            // login(ruleForm).then((res) => {
            //     console.log(res)
            //     if (res.data.Code === 200) {
            //         // 添加到状态管理和本地存储中
            //         // userTokenStore.updateToken(res.data.token)
            //         ElMessage.success('登录成功', ruleForm)
            //         router.push('/')
            //     }
            //     else {
            //         ElMessage.error('登录失败', fields)
            //     }
            // })
        }
        //校验失败走这里
        else {
            console.log('error submit!', fields)
            return false
        }
    })
}
function useCaptcha() {
    ruleForm.useCaptcha = true
}

function usePassword() {
    ruleForm.useCaptcha = false
}


//rules校验规则
const rules = reactive({
    //校验手机号
    phonenum: [
        //1·校验不为空
        //required: true 表示是必填项  message是提示信息 
        //trigger表示触发的时机，blur表示在失去焦点时触发
        { required: true, message: '不能为空哦🤷‍♀️，请填写手机号或用户名', trigger: 'blur' },
        //检验手机号是否合法，pattern是正则，message是正则校验不通过时，弹出的提示信息
        {
            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$|^[\u4E00-\u9FA5\w]{4,16}$/,
            message: '请检查输入的手机号格式是否有误',
            trigger: 'blur'
        }
    ],
    //校验密码
    pass: [
        { required: true, message: '密码可不兴空啊🤦‍♀️', trigger: 'blur' }
    ],
    //校验验证码
    captcha: [
        { required: true, message: '验证码不能为空！', trigger: 'blur' },
        //定义校验码位数
        { min: 4, max: 4, message: '请输入4位验证码', trigger: 'blur' }
    ]
})

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

//验证码输入框的样式
.yzmele {
    width: 345px;
}
</style>