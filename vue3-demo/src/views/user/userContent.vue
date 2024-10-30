<template>
    <MainContent>
        <template #header>
            <div class="headerTitle">基本信息</div>
        </template>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="auto"
            class="demo-ruleForm">
            <el-form-item prop="username" label="用户名">
                <el-input v-model="ruleForm.username" disabled />
            </el-form-item>
            <el-form-item prop="nickname" label="昵称">
                <el-input v-model="ruleForm.nickname" />
            </el-form-item>
            <el-form-item prop="email" label="邮箱">
                <el-input v-model="ruleForm.email" type="email" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)"> 提交 </el-button>
                <el-button @click="resetForm(ruleFormRef)"> 重置 </el-button>
            </el-form-item>
        </el-form>
    </MainContent>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/request/url'
import useStores from '@/stores'
import { ref, reactive, onMounted } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { updateUserInfo } from '@/request/url'

type FormData = {
    username: string,
    nickname: string | null,
    email: string | null
}

const ruleFormRef = ref<FormInstance>()

const stores = useStores();

let ruleForm = ref<FormData>({
    username: "",
    nickname: "",
    email: ""
});

onMounted(() => {
    setUserInfo();
})

const setUserInfo = async () => {
    const res = await getUserInfo();
    stores.useUserStore.userInfo = res.data;
    ruleForm.value = {
        username: stores.useUserStore.username,
        nickname: stores.useUserStore.nickname,
        email: stores.useUserStore.email
    }
    ruleFormRef.value?.resetFields();
}



const rules = reactive<FormRules<typeof ruleForm>>({
    nickname: [{ required: true, message: '请输入昵称', trigger: 'change' }],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'change' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
        if (valid) {
            const res = await updateUserInfo({ ...ruleForm.value, id: stores.useUserStore.id })
            stores.useUserStore.userInfo = res.data;
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>

<style scoped>
.headerTitle {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>