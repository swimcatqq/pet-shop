<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h1>宠物商城管理端-首页</h1>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                            <el-menu-item index="1">
                                <el-icon><icon-menu /></el-icon>
                                <span>首页</span>
                            </el-menu-item>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    <span>店铺商品详情</span>
                                </template>
                                <el-sub-menu index="2-1">
                                    <template #title>宠物</template>
                                    <el-menu-item index="2-1-1">猫猫</el-menu-item>
                                    <el-menu-item index="2-1-2">狗狗</el-menu-item>
                                    <el-menu-item index="2-1-3">天上飞</el-menu-item>
                                    <el-menu-item index="2-1-4">水里游</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="2-2">
                                    <template #title>宠物用品</template>
                                    <el-menu-item index="2-2-1">玩具</el-menu-item>
                                    <el-menu-item index="2-2-2">其他</el-menu-item>
                                </el-sub-menu>
                                <el-menu-item index="3">
                                    <span>宠物零食</span>
                                </el-menu-item>
                            </el-sub-menu>

                        </el-menu>
                    </el-col>
                </el-aside>
                <el-main>
                    <!-- 未登录的时候，显示下面内容 -->
                    <el-empty description="登录之后可以看到更多内容哦~😊" :image-size="200">
                        <el-button color="#42493A" plain type="primary" @click="toLogin()"
                            class="submitbtn">点我去登录</el-button>
                    </el-empty>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'  //引入useRouter函数，用来获取路由实例

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
//点击跳转到登录页
const router = useRouter()
const toLogin = () => {
    router.push('/login')
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

.el-aside {
    background: #A6AE9C;
    height: 600px;
}

.submitbtn {
    background: #84976D;
    width: 100px;
}
</style>