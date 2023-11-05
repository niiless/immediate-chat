<script setup lang="ts">
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
const isHide = ref(false)
const isLock = ref(false)
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
			<span class="title">通过朋友验证</span>
			<div class="input-box">
				<div class="label">备注名</div>
				<a-input size="large" v-model="info.remarkName" placeholder="风"></a-input>
			</div>
			<div class="input-box">
				<div class="label">标签</div>
				<a-input size="large" v-model="info.label" placeholder="搜索、添加标签"></a-input>
				<div class="label-item">
					<div class="items">朋友</div>
					<div class="items">同事</div>
				</div>
			</div>
			<div class="input-box">
				<div class="label">设置朋友权限</div>
				<div class="select-box">
				<div class="select-item bb-grey">
					<div class="icon-box">
						<img src="/src/assets/image/zone.png" alt="">
					</div>
						<span>聊天、朋友圈、微信运动等</span>
						<div class="checkIcon">
							<img src="" alt="">
						</div>
				</div>
				<div class="select-item">
					<div class="icon-box">
						<img src="/src/assets/image/chat.png" alt="">
					</div>
						<span>仅聊天</span>
						<div class="checkIcon">
							<img src="" alt="">
						</div>
				</div>
			</div>
		</div>
			<div class="input-box mt-33">
				<div class="select-box">
				<div class="select-item bb-grey">
					<div class="icon-box">
						<img src="/src/assets/image/lock.png" alt="">
					</div>
						<span>不让他(她)看</span>
						<div class="check-box">
							<a-switch v-model:checked="isLock"></a-switch>
						</div>
				</div>
				<div class="select-item">
					<div class="icon-box">
						<img src="/src/assets/image/hide.png" alt="">
					</div>
						<span>不看他(她)</span>
						<div class="check-box">
							<a-switch v-model:checked="isHide"></a-switch>
						</div>
				</div>
			</div>
			</div>
			<div class="btn-box">
				<div class="sure">确定</div>
				<div class="cancel">取消</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.container {
	width: 100%;
	height: 100%;
	// display: flex;
	// justify-content: center;
	// align-items: center;
	// background: #ededed;
	.item-box {
		position: fixed;
		width: 390px;
		min-height: 613px;
		box-shadow: -1px 1px 1px 2px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding: 15px 24px;
		text-align: center;
		box-sizing: border-box;
		left: calc(50% - 195px);
		top: calc(50% - 306.5px);
	}
	.title{
		display: block;
		font-size: 16px;
		font-weight: 400;
		color: #161616;
		margin-bottom: 26px;
	}
	.input-box {
		width: 337px;
		// min-height: 84px;
		text-align: left;
		color: #9E9E9E;
		font-size: 16px;
		margin-bottom: 20px;
		.label{
			margin-bottom: 10px;
		}
		.label-item{
			display: flex;
			flex-wrap: wrap;
			margin-top: 10px;
			width: 337px;
			.items{
				border-radius: 15px;
				background-color: #C8C7C6;
				letter-spacing: 2px;
				padding: 2px 10px;
				color: #000;
				font-size: 17px;
				font-weight: 400;
				margin-right: 10px;
				box-sizing: border-box;
				cursor: pointer;
			}
		}
		.select-box{
			background: #fff;
				border-radius: 5px;
		}
		.select-item{
			width: 337px;
			height: 44px;
			display: flex;
			align-items: center;
				color:#000;
				font-size: 16px;
			.icon-box{
				width: 16px;
				margin: 0 14px;
				img{
					width: 100%;
				}
			}
		}
	}
	.btn-box{
		position: absolute;
		bottom: 17px;
		width: 337px;
		display: flex;
		align-items: center;
		justify-content: center;
		.sure{
			width: 108px;
			height: 35px;
			background: #3B7FFF;
			border-radius: 5px;
			font-size: 18px;
			line-height: 35px;
			color:#fff;
			cursor: pointer;
			margin-right: 13px;
		}
		.cancel{
			width: 108px;
			height: 35px;
			border-radius: 5px;
			font-size: 18px;
			line-height: 35px;
			background: #E1E1E1;
			color:#3B7FFF;
			cursor: pointer;
		}
	}
}
.mt-33{
	margin-top: 33px !important;
}
.bb-grey{
	border-bottom: 1px solid #F2F2F2;
}
:deep(.ant-switch :focus-visible){
	border: 0;
	outline: none;
	box-shadow: none;
}
</style>
