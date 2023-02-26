<template>

	<el-table
    :data="tableData"
    style="width: 100%"
	row-key="id"
	:tree-props="{children: 'children', hasChildren: 'hasChildren'}">
		<el-table-column type="expand" label="操作">
			<template slot-scope="props">
				<el-form label-position="left" inline class="demo-table-expand">
				<el-form-item label="商品名称">
					<span>{{ props.row.name }}</span>
				</el-form-item>
				<el-form-item label="所属店铺">
					<span>{{ props.row.shop }}</span>
				</el-form-item>
				<el-form-item label="商品 ID">
					<span>{{ props.row.id }}</span>
				</el-form-item>
				<el-form-item label="店铺 ID">
					<span>{{ props.row.shopId }}</span>
				</el-form-item>
				<el-form-item label="商品分类">
					<span>{{ props.row.category }}</span>
				</el-form-item>
				<el-form-item label="店铺地址">
					<span>{{ props.row.address }}</span>
				</el-form-item>
				<el-form-item label="商品描述">
					<span>{{ props.row.desc }}</span>
				</el-form-item>
				</el-form>
			</template>
		</el-table-column>

		<!-- <el-table-column type="expand" label="操作" prop="children" name="bb">
			<template slot-scope="props2">
				<el-table
				:data="props2.row.children">
					<el-table-column
					label="商品 ID"
					prop="id">
					</el-table-column>
					<el-table-column
					label="商品名称"
					prop="name">
					</el-table-column>
					<el-table-column
					label="描述"
					prop="desc">
					</el-table-column>
				</el-table>
			</template>
    	</el-table-column> -->

		

		<el-table-column
		label="商品 ID"
		prop="id">
		</el-table-column>
		<el-table-column
		label="商品名称"
		prop="name">
		</el-table-column>
		<el-table-column
		label="描述"
		prop="desc">
		</el-table-column>
  	</el-table>
</template>

<script>
export default {
	data() {
	    return {
            tableData: [{
				id: '1',
				name: '好滋好味鸡蛋仔1',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333',
				children:[{
					id: '11',
					name: '好滋好味鸡蛋仔11',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				},
				{
					id: '12',
					name: '好滋好味鸡蛋仔12',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				},
				{
					id: '13',
					name: '好滋好味鸡蛋仔12',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}
				]
			},
			{
				id: '2',
				name: '好滋好味鸡蛋仔2',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333'
			},
			{
				id: '3',
				name: '好滋好味鸡蛋仔3',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333'
			},
			{
				id: '4',
				name: '好滋好味鸡蛋仔4',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333'
			}]
	      };
	},
	methods: {
           	
	},
    created () {
    }
}
</script>

<style>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
