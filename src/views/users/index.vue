<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="19">
                        <h1>宠物商城管理端-首页</h1>
                    </el-col>
                    <el-col :span="5" class="userPic">
                        <el-avatar :size="40"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <el-dropdown @command="handleCommand">
                            
                            <span class="el-dropdown-link">
                                当前用户：{{ username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item command="a" @click="toCenter()">个人中心</el-dropdown-item>
                                    <el-dropdown-item command="b">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-col :span="24">
                        <el-menu default-active="/pet" unique-opened router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                            <el-menu-item index="/pet">
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
                                    <el-menu-item index="/cat">猫猫</el-menu-item>
                                    <el-menu-item index="/dog">狗狗</el-menu-item>
                                    <el-menu-item index="/fly">天上飞</el-menu-item>
                                    <el-menu-item index="/swim">水里游</el-menu-item>
                                    <el-menu-item index="/strangepet">奇怪的小宠</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="2-2">
                                    <template #title>宠物用品</template>
                                    <el-menu-item index="/toy">玩具</el-menu-item>
                                    <el-menu-item index="/other">其他</el-menu-item>
                                </el-sub-menu>
                                <el-menu-item index="3">
                                    <span>宠物零食</span>
                                </el-menu-item>
                            </el-sub-menu>

                        </el-menu>
                    </el-col>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                    <!-- 未登录时，这里显示组件notLoggedIn的内容 -->
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
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command) => {
  ElMessage(`click on item ${command}`)
}

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}

const router = useRouter()

const toCenter = () => {
    router.push('/center')
}
</script>

<style lang="scss" scoped>
div.common-layout {
    background: #F4FCE9;
    height: 100%;
    // height: 200px;
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

.userPic {
    align-self: center;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  outline: none;
}
.el-dropdown-link {
    color: #F4FCE9;
    margin-left: 20px;
    margin-top: 10px;
    outline: #F4FCE9;
    font-size: 16px;
}
</style>