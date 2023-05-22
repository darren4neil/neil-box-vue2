<template>
    <page-main>
        <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </page-main>
</template>
<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: true
        }
    }
}