<template>
    <div class="wh100">
        <el-container class="wh100">
            <el-header style="padding:0;display:flex;">
                <div style="width:200px;height:100%;background-color:#ccc;">
                    TIK 管理平台
                </div>
                <div style="flex:1;background-color:green">

                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="1-1-1" style="height:100%" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Calendar />
                                </el-icon>
                                <span>导航1</span>
                            </template>
                            <el-sub-menu index="1-1">
                                <template #title>
                                    <el-icon>
                                        <Calendar />
                                    </el-icon>
                                    <span>子导航1</span>
                                </template>
                                <el-menu-item index="1-1-1">item one</el-menu-item>
                            </el-sub-menu>
                            <el-sub-menu index="1-2">
                                <template #title>
                                    <el-icon>
                                        <Calendar />
                                    </el-icon>
                                    <span>子导航2</span>
                                </template>
                                <el-menu-item index="1-2-1">item one</el-menu-item>
                            </el-sub-menu>
                            <el-sub-menu index="1-3">
                                <template #title>
                                    <el-icon>
                                        <Calendar />
                                    </el-icon>
                                    <span>子导航3</span>
                                </template>
                                <el-menu-item index="1-3-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-menu-item index="2">
                            <el-icon><Menu></Menu></el-icon>
                            <span>菜单2</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <el-icon>
                                <setting />
                            </el-icon>
                            <span>设置</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    111 <el-icon>
                        <BottomRight />
                    </el-icon>111
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
const handleOpen = () => { };
const handleClose = () => { };
</script>

<style lang="scss" scoped>
</style>