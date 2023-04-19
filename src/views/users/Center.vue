<template>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon  label-width="120px"
                    class="demo-ruleForm">
                    <el-form-item label="用户昵称" >
                        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="Confirm" >
                        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="Age" >
                        <el-input v-model.number="ruleForm.age" />
                    </el-form-item>
                    <!-- <el-form-item> -->
                        <!-- <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                        <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
                    <!-- </el-form-item> -->
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
const ruleFormRef = ref()
// const router = useRouter()
// const goBack = () => {
//     router.push('/')
// }

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})
</script>

<style scoped>

</style>