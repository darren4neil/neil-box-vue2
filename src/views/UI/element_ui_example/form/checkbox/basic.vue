<template>
    <page-main>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">备选项</el-checkbox>
    </page-main>
</template>
<script>
export default {
    data() {
        return {
            checked: true
        }
    }
}
</script>