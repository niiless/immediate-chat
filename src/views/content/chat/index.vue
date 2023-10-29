<script setup lang="ts">
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import dayJs from 'dayjs'
// 搜索框
const search = ref("");
// 好友列表
const friendList = ref([
	{ id: 1, name: "小明", content: [{date:'2023年10月30日 10:38',msgList:[{type:'send',msg:'你好，有什么可以帮你的吗？'}]},{date:'2023年10月30日 10:52',msg:[{type:'send',msg:'好的'},{type:'recive',msg:'嗯嗯'}]}], avatar: "/src/assets/image/avator1.png", lastMsg: {date:'昨天',msg:'嗯嗯'} },
	{ id: 3, name: "小明", content: [{date:'2023年10月30日 10:38',msgList:[{type:'send',msg:'你好，有什么可以帮你的吗？'}]},{date:'2023年10月30日 10:52',msg:[{type:'send',msg:'好的'},{type:'recive',msg:'嗯嗯'}]}],  avatar: "/src/assets/image/avator2.png",lastMsg:  {date:'昨天',msg:'嗯嗯'} },
	{ id: 4, name: "小明", content: [{date:'2023年10月30日 10:38',msgList:[{type:'send',msg:'你好，有什么可以帮你的吗？'}]},{date:'2023年10月30日 10:52',msg:[{type:'send',msg:'好的'},{type:'recive',msg:'嗯嗯'}]}], avatar: "/src/assets/image/avator4.png", lastMsg:  {date:'昨天',msg:'嗯嗯'} },
	{ id: 2, name: "小明", content: [{date:'2023年10月30日 10:38',msgList:[{type:'send',msg:'你好，有什么可以帮你的吗？'}]},{date:'2023年10月30日 10:52',msg:[{type:'send',msg:'好的'},{type:'recive',msg:'嗯嗯'}]}], avatar: "/src/assets/image/avator3.png", lastMsg:  {date:'昨天',msg:'嗯嗯'} },
	{ id: 5, name: "小明", content: [{date:'2023年10月30日 10:38',msgList:[{type:'send',msg:'你好，有什么可以帮你的吗？'}]},{date:'2023年10月30日 10:52',msg:[{type:'send',msg:'好的'},{type:'recive',msg:'嗯嗯'}]}], avatar: "/src/assets/image/avator5.png", lastMsg:  {date:'昨天',msg:'嗯嗯'} },
]);
// 当前聊天好友
let activeItem = reactive({id: 0, name: "", content:[], avatar:'' });
// 选择好友
function handleClickFriend(user: any) {
	activeItem.id = user.id
	activeItem.name = user.name
	activeItem.content = user.content
	activeItem.avatar = user.avatar
}
// 发送时间
const sendTime = ref(dayJs().format('YYYY年MM月DD日 HH:mm:ss'))
</script>
<template>
	<div class="chat-box">
		<div class="left-box">
			<div class="header">
				<a-input v-model="search" class="search-input">
					<template #prefix><SearchOutlined class="s-22" /></template>
				</a-input>
				<div class="add-btn flex-center finger">
					<PlusOutlined class="s-22" />
				</div>
			</div>
			<div class="content">
				<div class="chat-item finger" :class="activeItem.id == user.id ? 'active-chat' : ''" v-for="user in friendList" :key="user.id" @click="handleClickFriend(user)">
					<img :src="user.avatar" />
					<div class="info">
						<span class="name">{{ user.name }}</span>
						<span class="chat">{{ user.lastMsg.msg }}</span>
					</div>
					<span class="chat-date">{{ user.lastMsg.date }}</span>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-header">
				<div class="friend-name">
					{{ activeItem.name }}
				</div>
				<div class="edit-btn">
					<div class="top-land">
						
					</div>
				</div>
			</div>
			<div class="chat-content">
				<div class="chat-msg-item" v-for="(item, index) in activeItem.content" :key="index">
					<div class="msg-date">{{ item.date  }}</div>
					<!-- 好友发送信息样式 此处div作为消息内容父盒子，用户v-if判断-->
					<div v-for="msgs in item.msgList" :key="msgs">
					<div v-if="msgs.type == 'send'">
					<div class="msg-content">
						<div class="chat-avatar">
							<img :src="activeItem.avatar" alt="">
						</div>
						<div class="chat-msg-box">
							<div class="item">{{ msgs.msg }}</div>
						</div>
					</div>
					</div>
					<!-- 用户发送消息框样式 此处div作为消息内容父盒子，用户v-if判断-->
					<div v-if="msgs.type == 'recive'"> 
					<div class="msg-content my-msg">
						<div class="chat-msg-box">
							<div class="my-item">{{ msgs.msg}}</div>
						</div>
						<div class="chat-avatar">
							<img :src="activeItem.avatar" alt="">
						</div>
					</div>
				</div>
				</div>
			</div>
			</div>
			<div class="edit-content"></div>
		</div>
	</div>
</template>

<style lang="less" scoped>
// 由于设计稿是1920 * 1080，比例为16：9 浏览器实际视图宽高比的影响，为尽量还原设计稿
// 将设计稿的尺寸缩放0.789倍 
.chat-box {
	display: flex;
	width: 1840px;
	height: 100vh;
	margin-left: 80px;
}
.left-box {
	width: 285px; // 365
	height: 100vh;
	background-color: #eae7e6;
	border-right: 1px solid #d6d6d6;
	overflow: hidden;
	.header {
		display: flex;
		align-items: center;
		width: 100%;
		height: 75px;
		background-color: #F7F7F7;
		border-bottom:1px solid #d6d6d6;
		.add-btn {
			width: 28px; //35
			height: 28px;
			background-color: #e2e2e2;
			border-radius: 6px;
		}
	}
	.content {
		.chat-item {
			display: flex;
			align-items: center;
			width: 285px; //362
			height: 75px;
			img {
				width: 46px;
				height: 46px;
				border-radius: 4px;
				margin-left: 13px;
			}
			.info {	
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 170px; //232
				height: 46px;
				margin-left: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				.name {
					font-size: 16px;
					font-weight: bold;
				}
				.chat {
					font-size: 13px;
					color: #999999;
				}
			}
			.chat-date {
				font-size: 14px;
				height: 46px;
			}
		}
	}
}
.content {
	width: 1554px;
	height: 100vh;
	background-color: #f5f5f5;
	.content-header {
		display: flex;
		align-items: center;
		width: 100%;
		height: 75px;
		padding-left: 37px;
		border-bottom: 1px solid #d6d6d6;
		background-color: #f5f5f5;
		font-size: 22px;
		font-weight: 400;
	}
	.chat-msg-item{
		position: relative;
		width: 100%;
		min-height: 122px;
		overflow: hidden;
		padding: 20px 35px;	
		.msg-date{
			width: 170px;
			height: 22px;
			margin: 0 auto;
			margin-bottom: 18px;
			background: #DADADA;
			border-radius: 3px;
			line-height: 22px;
			padding: 0 6px;
			font-size: 13px;
		}
		
		.msg-content,.my-msg{
			display: flex;
			align-items: center;
			padding: 8px 0;
			.chat-avatar{
				width: 38px;
				height: 38px;
				border-radius: 3px;
				img{
					width: 100%;
				}
			}
			.chat-msg-box{
			margin-left: 10px;
			.item,.my-item{
				position: relative;
				max-width: 590px;
				background: #fff;
				border-radius: 6px;
				font-size: 14px;
				padding: 9px;
			}
			.item::after{
					content: ' ';
					position: absolute;
					width: 8px;
					height: 8px;
					background-color: #fff;
					transform: rotate(45deg);
					top: calc(50% - 4px);
					left: -4px;
				}
			}
		}
		
	}
}
.my-msg{
	justify-content: flex-end;
	.chat-msg-box{
			margin-right: 10px;
			.my-item{
				position: relative;
				max-width: 590px;
				background: #3B7FFF !important;
				border-radius: 6px;
				font-size: 17px;
				padding: 9px;
				color: #fff;
			}
	.my-item::after{
					content: ' ';
					position: absolute;
					width: 8px;
					height: 8px;
					background-color: #3B7FFF;
					transform: rotate(45deg);
					top: calc(50% - 4px);
					right: -4px;
				}
			}
}
.search-input {
	width: 217px;
	height: 28px;
	margin-left: 13px;
	margin-right: 13px;
}
.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.s-22 {
	font-size: 17px;
}
.finger {
	cursor: pointer;
}
.active-chat {
	background-color: #c5c4c4;
}
 // 发送时间为 yyyy年mm月dd日 00：00 宽度
.w-170{
	width: 170px;
}
 // 发送时间为 00：00 宽度
.w-70{
	width: 70px;
}
 // 发送时间为 昨天：00：00 宽度
.w-95{
	width: 76px;
}

</style>
