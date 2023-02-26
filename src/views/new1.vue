<template>
	<div>页面1
		<el-button @click="test">哈哈</el-button>
	</div>
</template>

<script>
import ce from "../api/ce";
export default {
        
	    data() {
	      return {
              data1:"data11"
	      };
	    },
	    methods: {
            // 跳转方法
	        test(){
              ce.test1({userId:this.data1})
			  .then(res=>{
				  console.log("res:"+res.data)
			  });
            },
	    },
        created () {
        }
	  }
</script>

<style>
</style>
