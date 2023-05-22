<template>
    <page-main>
        <div>
            <el-radio v-model="radio1" label="1" :border="true">备选项1</el-radio>
            <el-radio v-model="radio1" label="2" :border="true">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px;">
            <el-radio v-model="radio2" label="1" :border="true" size="medium">备选项1</el-radio>
            <el-radio v-model="radio2" label="2" :border="true" size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px;">
            <el-radio-group v-model="radio3" size="small">
                <el-radio label="1" :border="true">备选项1</el-radio>
                <el-radio label="2" :border="true" disabled>备选项2</el-radio>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px;">
            <el-radio-group v-model="radio4" size="mini" disabled>
                <el-radio label="1" :border="true">备选项1</el-radio>
                <el-radio label="2" :border="true">备选项2</el-radio>
            </el-radio-group>
        </div>
    </page-main>
</template>
  
<script>
export default {
    data() {
        return {
            radio1: '1',
            radio2: '1',
            radio3: '1',
            radio4: '1'
        }
    }
}
</script>