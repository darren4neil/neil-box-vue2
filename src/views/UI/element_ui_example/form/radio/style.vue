<template>
    <page-main>
        <div v-for="(item, index) in styles" :key="index" style="margin: 30px;">
            <el-radio-group v-model="radio1" :index="index" :size="item">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
    </page-main>
</template>

<script>
export default {
    data() {
        return {
            styles: ['', 'medium', 'small', 'mini'],
            radio1: '上海',
            radio2: '上海',
            radio3: '上海',
            radio4: '上海'
        }
    }
}
</script>