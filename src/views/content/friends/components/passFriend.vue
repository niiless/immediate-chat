<script setup lang="ts">
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
let info = reactive({
	remarkName: "",
	label: "",
	auth: [],
	status: "",
});
</script>
<template>
	<div class="container">
		<div class="item-box">
			<span>通过朋友验证</span>
			<div class="input-box">
				<span>备注名</span>
				<a-input v-model="info.remarkName"></a-input>
			</div>
			<div class="input-box">
				<span>标签</span>
				<a-input v-model="info.label"></a-input>
				<div class="label-item"></div>
			</div>
			<div class="input-box">
				<span>设置朋友权限</span>
				<div></div>
			</div>
			<div class="input-box">
				<span>朋友圈状态</span>
				<div></div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.container {
	width: 100%;
	height: 100%;
	padding: 17px 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ededed;
	.item-box {
		width: 337px;
		min-height: 613px;
		box-shadow: -1px 1px 1px 2px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
	}
	.input-box {
		width: 337px;
		min-height: 104px;
		padding: 20px 0;
	}
}
</style>
