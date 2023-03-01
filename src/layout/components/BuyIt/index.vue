<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            location: {
                origin: location.origin
            }
        }
    },
    mounted() {
        
    },
    methods: {
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>

<style lang="scss" scoped>
.buy-it {
    position: fixed;
    z-index: 10;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    display: flex;
    flex-direction: column;
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 70px;
        text-align: center;
        color: #fff;
        border-bottom: 1px solid #fff;
        transition: 0.3s;
        opacity: 0.6;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
        &:first-child {
            border-top-left-radius: 5px;
        }
        &:last-child {
            border-bottom-left-radius: 5px;
            border-bottom: 0;
        }
        &:nth-child(1) {
            background-color: #ff4200;
        }
        &:nth-child(2) {
            background-color: #409eff;
        }
        &:nth-child(3) {
            background-color: #0fcc1a;
        }
        &:nth-child(4) {
            background-color: #343b42;
        }
        .svg-icon {
            display: block;
            margin: 0 auto;
            font-size: 20px;
        }
        .title {
            display: inline-block;
            font-size: 12px;
        }
    }
}
</style>
