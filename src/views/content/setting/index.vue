<script setup lang="ts">
import { ref, reactive, defineEmits, h, onMounted, unref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

const activeKey = ref("1");
const emit = defineEmits(["closeSetting"]);
// 点击关闭
function closeBox() {
	emit("closeSetting");
}
</script>
<template>
	<div class="container">
		<div class="header">
			<div class="title">设置</div>
			<div class="edit-btn">
				<div class="btn-item">
					<img src="/src/assets/chat-icon/shrink.png" class="h-2" alt="" />
				</div>
				<div class="btn-item" @click="closeBox">
					<img src="/src/assets/chat-icon/close.png" alt="" />
				</div>
			</div>
		</div>
		<div class="content">
			<div class="left-content">
				<a-tabs v-model:activeKey="activeKey" tab-position="left" :style="{ height: '530px' }">
					<a-tab-pane key="1" tab="账号设置"></a-tab-pane>
					<a-tab-pane key="2" tab="通用设置"></a-tab-pane>
					<a-tab-pane key="3" tab="文件管理"></a-tab-pane>
					<a-tab-pane key="4" tab="消息通知"></a-tab-pane>
					<a-tab-pane key="5" tab="快捷键"></a-tab-pane>
					<a-tab-pane key="6" tab="关于微信"></a-tab-pane>
				</a-tabs>
			</div>
			<div class="right-content">
				<div class="count-setting">
					<div class="info-card">
						<img src="/src/assets/image/myAvatar.png" alt="" />
						<div>小刘爱设计</div>
					</div>
					<div class="auto-login">
						<div class="setting-name">自动登录</div>
						<div class="setting-content">
							<div class="module">未开启</div>
							<div class="tips">开启后，在本机登录微信将无需手机确认。<br />可在手机上开启。</div>
						</div>
					</div>
					<div class="logout-btn">退出登录</div>
				</div>
				<div class="msg-setting"></div>
				<div class="common-setting"></div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.container {
	position: fixed;
	display: flex;
	flex-direction: column;
	width: 752px;
	height: 640px;
	left: calc(50% - 376px);
	top: calc(50% - 320px);
	overflow: hidden;
	background-color: #f5f5f5;
	border: 1px solid #d6d6d6;
	box-shadow: -1px 1px 1px 2px rgba(0, 0, 0, 0.1);
	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.title {
			font-size: 20px;
			color: #a2a2a2;
			padding: 14px;
		}
		.edit-btn {
			width: 84px;
			height: 44px;
			display: flex;
			.btn-item {
				width: 42px;
				height: 32px;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 13px;
				}
			}
			.btn-item:hover {
				background-color: #c5c4c4;
			}
			.btn-item:last-of-type:hover {
				background-color: #ff7777;
			}
		}
	}
}
.content {
	display: flex;
	width: 100%;
	height: 530px;
	margin-top: 60px;
	.right-content {
		width: 100%;
		.count-setting {
			width: 100%;
		}
		.info-card {
			display: flex;
			align-items: center;
			width: 480px;
			height: 168px;
			background: #fff;
			border-radius: 10px;
			font-size: 26px;
			margin: 0 auto;
			img {
				width: 50px;
				height: 50px;
				border-radius: 5px;
				margin: 0 40px;
			}
		}
		.auto-login {
			display: flex;
			font-size: 19px;
			margin-top: 50px;
			.setting-name {
				margin-left: 98px;
				margin-right: 32px;
			}
			.setting-content {
				.tips {
					margin-top: 16px;
					font-size: 16px;
					color: #bfbfbf;
				}
			}
		}
		.logout-btn {
			width: 150px;
			height: 44px;
			font-size: 18px;
			margin: 0 auto;
			margin-top: 77px;
			background: #e9e9e9;
			border-radius: 5px;
			text-align: center;
			line-height: 44px;
		}
	}
}
.h-2 {
	height: 2px;
}
:deep(.ant-tabs-tab-btn) {
	font-size: 20px;
	color: #a2a2a2;
}
:deep(.ant-tabs-tab .ant-tabs-tab-active) {
	color: #3b7fff;
}
:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-tabs-left > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab) {
	margin: 0;
}
:deep(.ant-tabs-content-holder) {
	display: none;
}
</style>
