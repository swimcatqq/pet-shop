<template>
    <div>
        <!-- 未登录的时候，显示下面内容 -->
        <el-empty description="登录之后可以看到更多内容哦~😊" :image-size="200">
            <el-button color="#42493A" plain type="primary" @click="toLogin()" class="submitbtn">点我去登录</el-button>
        </el-empty>
    </div>
</template>

<script setup>
const router = useRouter()
const toLogin = () => {
    router.push('/login')
}
</script>

<style scoped></style>