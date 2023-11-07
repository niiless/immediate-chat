<script setup lang="ts">
import { ref, reactive, defineEmits, h, onMounted, unref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

const activeKey = ref("4");
const newMsg = ref(false)
const media = ref(false)
const zone = ref(false)
const language = ref('简体中文')
const fastBtn = ref('Enter')
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
				<div class="count-setting" v-show="activeKey == '1'">
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
				<div class="msg-setting" v-show="activeKey == '2'">
					<div class="voice-setting">
						<div class="label">通知声音</div>
						<div class="item">
							<span>新消息通知声音</span>
							<div class="check-box">
							<div class="switch-btn" :class="newMsg ? 'switch-active' : 'switch-normal'" @click="newMsg = !newMsg">
								<div class="swtich-cricle" :class="newMsg ? 'to-active' : 'to-normal'"></div>
							</div>
						</div>
						</div>
						<div class="item">
							<span>语音和视频通话通知声音</span>
							<div class="check-box">
							<div class="switch-btn" :class="media ? 'switch-active' : 'switch-normal'" @click="media = !media">
								<div class="swtich-cricle" :class="media ? 'to-active' : 'to-normal'"></div>
							</div>
						</div>
						</div>
					</div>
					<div class="mark-setting">
						<span>通知标记</span>
						<div class="item">
							<span>朋友圈</span>
							<div class="check-box">
							<div class="switch-btn" :class="zone ? 'switch-active' : 'switch-normal'" @click="zone = !zone">
								<div class="swtich-cricle" :class="zone ? 'to-active' : 'to-normal'"></div>
							</div>
						</div>
						</div>
						<div class="tip">有内容更新时，侧边栏中该功能图标将出现标记提示。</div>
					</div>
				</div>
				<div class="common-setting" v-show="activeKey == '3'">
					<div class="box">
						<div class="item">
							<span>语言</span>
							<a-select
								v-model:value="language"
								:style="{width: '180px','text-align':'center'}"
							>
							<a-select-option value="zh">简体中文</a-select-option>
     					 <a-select-option value="en">英文</a-select-option>
							</a-select>
						</div>
						<div class="item">
							<span>通用</span>
							<div class="checkItem">
								<div class="check">
									<a-checkbox class="mr-8"></a-checkbox>有更新时自动升级
								</div> 
								<div class="check">
									<a-checkbox class="mr-8"></a-checkbox>开机时自动打开
								</div> 
								<div class="check">
									<a-checkbox class="mr-8"></a-checkbox>保留聊天记录
								</div> 
								<div class="check">
									<a-checkbox class="mr-8"></a-checkbox>显示网络搜索历史
								</div> 
								<div class="check">
									<a-checkbox class="mr-8"></a-checkbox>适配系统缩放比例
								</div> 
								<div class="check">
									<a-checkbox class="mr-8"></a-checkbox>使用系统默认浏览器打开网页
								</div> 
								<div class="check">
									<a-checkbox class="mr-8"></a-checkbox>聊天中的语音消息自动转成文字
								</div> 
								<div class="clear-record">
									清空聊天记录（2.4G)	
								</div>
								<div class="storage">
									存储空间管理
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="faster-setting">
					<div class="faster-item">
						<span>发送消息</span>
						<a-select
								v-model:value="fastBtn"
							>
							<a-select-option value="enter">Enter</a-select-option>
     					 <a-select-option value="ctrl">Ctrl+Enter</a-select-option>
							</a-select>
					</div>
					<div class="faster-item">
						<span>截取屏幕</span>
						<a-input value="Alt+A"></a-input>
					</div>
					<div class="faster-item">
						<span>打开微信</span>
						<a-input value="Ctrl+Alt+W"></a-input>
					</div>
					<div class="faster-item">
						<span>锁定微信</span>
						<a-input value="Ctrl+L"></a-input>
					</div>
					<div class="faster-item">
						<span>检查快捷键</span>
						<span>快捷键与其他软件冲突时提醒</span>
					</div>
					<div class="reset-btn">
						恢复默认设置
					</div>
				</div>
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
	overflow: hidden;
	.right-content {
		width: 100%;
		.count-setting {
			width: 100%;
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
		.msg-setting{
			width: 100%;
			padding: 18px 65px;
			.voice-setting{
				.label{
					font-size: 16px;
				color:#A2A2A2;
				margin-bottom: 20px;
				}
				.item{
					width: 413px;
					height: 32px;
					font-size: 19px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 20px 0;
				}
			}
			.mark-setting{
				padding-top: 20px;
				font-size: 16px;
				color:#A2A2A2;
				.item{
					width: 413px;
					height: 32px;
					font-size: 19px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 20px 0;
					span{
						color: #000 !important;
						margin-left: 37px;
					}
				}
			}
			
		}
		
	}
	.common-setting{
				width: 100%;
				padding-left: 135px;
				.box{
							display: flex;
							flex-direction:column;
							font-size: 20px ;
							.item{
								display:flex;
								margin-bottom: 35px;
								span{
								margin-right: 55px;
							}
							.checkItem{
								display:flex;
								flex-direction:column;
								.check{
									display:flex;
									margin-bottom: 10px;
								}
								.clear-record{
									width: 218px;
									height: 43px;
									border-radius: 5px;
									background: #E9E9E9;
									text-align: center;
									line-height: 43px;
									margin-top: 13px;
									margin-bottom: 16px;
									cursor: pointer;
								}
								.storage{
									width:148px;
									height: 43px;
									border-radius: 5px;
									background: #E9E9E9;
									text-align: center;
									line-height: 43px;
									cursor: pointer;
								}
							}
							}
							
						}
					
			}
			.faster-setting{
				width: 100%;
				padding: 16px 0;
				padding-left: 74px;
				display: flex;
				flex-direction: column;
				.faster-item{
					font-size: 20px;
					margin-bottom: 48px;
					span{
						margin-right: 70px;
					}
				}
				.reset-btn{
					width: 180px;
					height: 44px;
					line-height: 44px;
					text-align: center;
					background: #E9E9E9;
					border-radius: 5px;
					font-size: 20px;
					margin-left: 158px;
					cursor: pointer;
				}
			}
}
.h-2 {
	height: 2px;
}
.mr-8{
	margin-right: 8px;
}
.switch-btn {
	display: flex;
	align-items: center;
	width: 60px;
	height: 28px;
	background-color: #fff;
	border-radius: 15px;
	padding: 1px;
	.swtich-cricle {
		width: 28px;
		height: 28px;
		background-color: #d8d8d8;
		border-radius: 50%;
	}
}
.switch-normal{
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
	transform: translateX(29px);
	transition: 0.3s all ease-in-out;
}
.to-normal {
	transform: translateX(0);
	transition: 0.3s all ease-in-out;
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
:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn){
	text-shadow: none;
}
:deep(.ant-tabs-content-holder) {
	width: 1px;
}
:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-select-single .ant-select-selector){
	border-radius: 0;
	font-size: 20px;
	width: 180px;
	text-align: center;
}
:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-select .ant-select-arrow) {
		display: flex;
    align-items: center;
		justify-content: center;
    position: absolute;
    top: 0;
    inset-inline-end: 0;
		width: 40px;
    height: 100%;
    font-size: 12px;
    border-left: 1px solid #E4E4E4;
		margin-top:0;
}
.ant-input{
	width: 180px;
	font-size: 20px;
	text-align: center;
	border-radius: 0;
}
.ant-input:hover{
	border-color: #E4E4E4;
}
:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-select-single .ant-select-selector:hover){
	border-color: #E4E4E4;
}
</style>
