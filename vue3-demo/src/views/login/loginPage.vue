<template>
  <h1>登录</h1>
  <br />
  <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
    class="demo-ruleForm" :size="formSize" status-icon>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item prop="remember">
      <div class="flex-between">
        <el-checkbox v-model="remember" label="记住我" size="large" />
        <el-buttom>忘记密码 ？</el-buttom>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { onLogin } from '@/request/url'
import { useRouter } from 'vue-router'

type RuleForm = {
  username: string,
  password: string
}

const router = useRouter()

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '',
  password: ''
})

const remember = ref(false);

const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      onLogin(ruleForm).then((res) => {
        if (res) {
          localStorage.setItem('Authorization', res.data)
          router.push('/home/user')
        }
      })
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.demo-ruleForm .flex-between {
  width: 100%;

  el-buttom {
    color: dodgerblue;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
