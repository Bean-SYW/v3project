<template>
  <el-menu default-active="4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <el-icon>
        <document />
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <setting />
      </el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon>
          <UserFilled />
        </el-icon>
        <span>个人中心</span>
      </template>
      <el-menu-item index="4-1"><template #title>
          <el-icon>
            <User />
          </el-icon>
          <span>个人资料</span>
        </template></el-menu-item>
      <el-menu-item index="4-2"><template #title>
          <el-icon>
            <Picture />
          </el-icon>
          <span>更换头像</span>
        </template></el-menu-item>
      <el-menu-item index="4-3"><template #title>
          <el-icon>
            <EditPen />
          </el-icon>
          <span>重置密码</span>
        </template></el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, EditPen, Setting, UserFilled, User, Picture } from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>



<style scoped></style>