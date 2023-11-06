<script setup lang="ts">
import { PlusOutlined, SearchOutlined, CheckOutlined } from "@ant-design/icons-vue";
import { ref, reactive, defineEmits } from "vue";
const isHide = ref(false);
const isLock = ref(false);
const onlyChat = ref(false);
let info = reactive({
	remarkName: "",
	label: "",
	auth: [],
	status: "",
});
const emit = defineEmits(["closePassFriend"]);

function passFriend() {
	emit("closePassFriend");
}
function handleCancel() {
	emit("closePassFriend");
}
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
					<div class="select-item bb-grey" @click="onlyChat = false">
						<div class="flex">
							<div class="icon-box">
								<img src="/src/assets/image/zone.png" alt="" />
							</div>
							<span>聊天、朋友圈、微信运动等</span>
						</div>
						<div class="checkIcon" v-show="!onlyChat">
							<CheckOutlined style="font-size: 22px; color: #3b7fff" />
						</div>
					</div>
					<div class="select-item" @click="onlyChat = true">
						<div class="flex">
							<div class="icon-box">
								<img src="/src/assets/image/chat.png" alt="" />
							</div>
							<span>仅聊天</span>
						</div>
						<div class="checkIcon" v-show="onlyChat">
							<CheckOutlined style="font-size: 22px; color: #3b7fff" />
						</div>
					</div>
				</div>
			</div>
			<div class="input-box mt-33" v-if="!onlyChat">
				<div class="label">朋友圈状态</div>
				<div class="select-box">
					<div class="select-item bb-grey">
						<div class="flex">
							<div class="icon-box">
								<img src="/src/assets/image/lock.png" alt="" />
							</div>
							<span>不让他(她)看</span>
						</div>
						<div class="check-box">
							<!-- <a-switch v-model:checked="isLock"></a-switch> -->
							<div class="switch-btn" :class="isLock ? 'switch-active' : 'switch-normal'" @click="isLock = !isLock">
								<div class="swtich-cricle" :class="isLock ? 'to-active' : 'to-normal'"></div>
							</div>
						</div>
					</div>
					<div class="select-item">
						<div class="flex">
							<div class="icon-box">
								<img src="/src/assets/image/hide.png" alt="" />
							</div>
							<span>不看他(她)</span>
						</div>
						<div class="check-box">
							<!-- <a-switch v-model:checked="isHide"></a-switch> -->
							<div class="switch-btn" :class="isHide ? 'switch-active' : 'switch-normal'" @click="isHide = !isHide">
								<div class="swtich-cricle" :class="isHide ? 'to-active' : 'to-normal'"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="btn-box">
				<div class="sure" @click="passFriend">确定</div>
				<div class="cancel" @click="handleCancel">取消</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.container {
	width: 100%;
	height: 100%;
	.item-box {
		position: fixed;
		width: 390px;
		// min-height: 633px;
		box-shadow: -1px 1px 1px 2px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding: 15px 24px;
		padding-bottom: 0;
		text-align: center;
		box-sizing: border-box;
		left: calc(50% - 195px);
		top: calc(50% - 306.5px);
		input:focus,
		input:hover {
			border-color: #d9d9d9;
			box-shadow: none;
		}
	}
	.title {
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
		color: #9e9e9e;
		font-size: 16px;
		margin-bottom: 20px;
		overflow: hidden;
		.label {
			margin-bottom: 10px;
		}
		.label-item {
			display: flex;
			flex-wrap: wrap;
			margin-top: 10px;
			width: 337px;
			.items {
				border-radius: 15px;
				background-color: #c8c7c6;
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
		.select-box {
			background: #fff;
			border-radius: 5px;
		}
		.select-item {
			width: 337px;
			height: 44px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #000;
			font-size: 16px;
			padding: 0 15px;
			cursor: pointer;
			.icon-box {
				width: 16px;
				margin-right: 14px;
				img {
					width: 100%;
				}
			}
		}
	}
	.btn-box {
		position: relative;
		bottom: 17px;
		width: 337px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 60px;
		overflow: hidden;
		.sure {
			width: 108px;
			height: 35px;
			background: #3b7fff;
			border-radius: 5px;
			font-size: 18px;
			line-height: 35px;
			color: #fff;
			cursor: pointer;
			margin-right: 13px;
		}
		.cancel {
			width: 108px;
			height: 35px;
			border-radius: 5px;
			font-size: 18px;
			line-height: 35px;
			background: #e1e1e1;
			color: #3b7fff;
			cursor: pointer;
		}
	}
}
.mt-33 {
	margin-top: 33px !important;
}
.bb-grey {
	border-bottom: 1px solid #f2f2f2;
}
.switch-btn {
	display: flex;
	align-items: center;
	width: 43px;
	height: 24px;
	background-color: #fff;
	border-radius: 15px;
	padding: 1px;
	.swtich-cricle {
		width: 22px;
		height: 22px;
		background-color: #d8d8d8;
		border-radius: 50%;
	}
}
.switch-normal {
	border: 1px solid #e5e5e5;
	background-color: #e5e5e5;
	.swtich-cricle {
		background-color: #fff;
	}
	transition: 0.3s all ease-in-out;
}
.switch-active {
	border: 1px solid #d8d8d8;
	background-color: #3b7fff;
	.swtich-cricle {
		background-color: #fff;
	}
	transition: 0.3s all ease-in-out;
}
.to-active {
	transform: translateX(18px);
	transition: 0.3s all ease-in-out;
}
.to-normal {
	transform: translateX(0);
	transition: 0.3s all ease-in-out;
}
.flex {
	display: flex;
}
</style>
