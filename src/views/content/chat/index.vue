<script setup lang="ts">
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, reactive, nextTick } from "vue";
import PageHeader from "@/views/header/index.vue";
import dayJs from "dayjs";
// 好友列表
const friendList = ref([
	{
		id: 1,
		name: "小明",
		content: [
			{
				date: "2023年10月30日 10:38",
				msgList: [
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "recive", msg: "没有了，谢谢" },
				],
			},
			{
				date: "2023年10月30日 10:52",
				msgList: [
					{ type: "send", msg: "好的" },
					{ type: "recive", msg: "嗯嗯" },
				],
			},
		],
		avatar: "./image/avator1.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 2,
		name: "隔壁邻居",
		content: [
			{ date: "2023年10月30日 10:38", msgList: [{ type: "send", msg: "你好，有什么可以帮你的吗？" }] },
			{
				date: "2023年10月30日 10:52",
				msgList: [
					{ type: "send", msg: "好的" },
					{ type: "recive", msg: "嗯嗯" },
				],
			},
		],
		avatar: "./image/avator4.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 3,
		name: "小红",
		content: [
			{
				date: "2023年10月30日 10:38",
				msgList: [
					{ type: "send", msg: "你好，有什么可以帮你的吗？" },
					{ type: "recive", msg: "没有了，谢谢" },
				],
			},
			{
				date: "2023年10月30日 10:52",
				msgList: [
					{ type: "send", msg: "好的" },
					{ type: "recive", msg: "嗯嗯" },
				],
			},
		],
		avatar: "./image/avator2.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 4,
		name: "CITY SUPER",
		content: [
			{ date: "2023年10月30日 10:38", msgList: [{ type: "send", msg: "你好，有什么可以帮你的吗？" }] },
			{
				date: "2023年10月30日 10:52",
				msgList: [
					{ type: "send", msg: "好的" },
					{ type: "recive", msg: "嗯嗯" },
				],
			},
		],
		avatar: "./image/avator3.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 5,
		name: "德云色DYS",
		content: [
			{ date: "2023年10月30日 10:38", msgList: [{ type: "send", msg: "你好，有什么可以帮你的吗？" }] },
			{
				date: "2023年10月30日 10:52",
				msgList: [
					{ type: "send", msg: "好的" },
					{ type: "recive", msg: "嗯嗯" },
				],
			},
		],
		avatar: "./image/avator5.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 6,
		name: "Vivian",
		content: [],
		avatar: "./image/avator6.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 7,
		name: "小明",
		content: [],
		avatar: "./image/avator7.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 8,
		name: "Sabastianes",
		content: [],
		avatar: "./image/avator8.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 9,
		name: "卢本伟",
		content: [],
		avatar: "./image/avator4.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 10,
		name: "莣丶叻i彡",
		content: [],
		avatar: "./image/avator2.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 11,
		name: "Andy Nasty",
		content: [],
		avatar: "./image/avator1.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 12,
		name: "Blastic",
		content: [],
		avatar: "./image/avator1.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 13,
		name: "胜利",
		content: [],
		avatar: "./image/avator6.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
	{
		id: 14,
		name: "光辉",
		content: [],
		avatar: "./image/avator8.png",
		lastMsg: { date: "昨天", msg: "嗯嗯" },
	},
]);
// 当前聊天好友
let activeItem = reactive({ id: 0, name: "", content: [], avatar: "" });
// 选择好友
function handleClickFriend(user: any) {
	activeItem.id = user.id;
	activeItem.name = user.name;
	activeItem.content = user.content;
	activeItem.avatar = user.avatar;
	nextTick(() => {
		const box: any = document.querySelector("#msgBox");
		box.scrollTop = box.scrollHeight;
	});
}

// 发送内容
const sendMsg = ref<any>();
const showTips = ref(false);
// 发送
function handleSendMsg() {
	if (!sendMsg.value || !sendMsg.value.trim()) {
		showTips.value = true;
		setTimeout(() => {
			showTips.value = false;
		}, 2000);
		return;
	}
	const sendTime = dayJs(Date.now()).format("HH:mm");
	const index = friendList.value.findIndex((v) => v.id == activeItem.id);
	if (friendList.value[index].content.length > 0) {
		const len = friendList.value[index].content.length;
		const lastMsgDate = friendList.value[index].content[len - 1].date;
		console.log(lastMsgDate, sendTime);

		if (lastMsgDate == sendTime) {
			friendList.value[index].content[len - 1].msgList.push({ type: "recive", msg: sendMsg.value });
		} else {
			friendList.value[index].content.push({
				date: sendTime,
				msgList: [{ type: "recive", msg: sendMsg.value }],
			});
		}
	} else {
		friendList.value[index].content.push({
			date: sendTime,
			msgList: [{ type: "recive", msg: sendMsg.value }],
		});
	}
	nextTick(() => {
		const box: any = document.querySelector("#msgBox");
		box.scrollTop = box.scrollHeight;
	});
	sendMsg.value = "";
}
</script>
<template>
	<div>
		<PageHeader :activeMenu="1" :title="activeItem.name"></PageHeader>
		<div class="chat-box">
			<div class="left-box">
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
			<div class="content" v-show="activeItem.name">
				<div class="chat-content" id="msgBox">
					<div class="chat-msg-item" v-for="(item, index) in activeItem.content" :key="index">
						<div class="msg-date" :class="item.date.includes('年') ? 'w-150' : item.date.includes('昨天') ? 'w-95' : 'w-50'">{{ item.date }}</div>
						<!-- 好友发送信息样式 此处div作为消息内容父盒子，用户v-if判断-->
						<div v-for="msgs in item.msgList" :key="msgs">
							<div v-if="msgs.type == 'send'">
								<div class="msg-content">
									<div class="chat-avatar">
										<img :src="activeItem.avatar" alt="" />
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
										<div class="my-item">{{ msgs.msg }}</div>
									</div>
									<div class="chat-avatar"><img :src="`./image/myAvatar.png`" alt="" /></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="edit-content">
					<div class="edit-module">
						<div class="left-module">
							<div class="module-box"><img :src="`./chat-icon/emoji-normal.png`" alt="" /></div>
							<div class="module-box"><img :src="`./chat-icon/file-normal.png`" alt="" /></div>
							<div class="module-box"><img :src="`./chat-icon/slice-normal.png`" alt="" /></div>
							<div class="module-box"><img :src="`./chat-icon/record-noraml.png`" alt="" /></div>
						</div>
						<div class="right-module">
							<div class="module-box"><img :src="`./chat-icon/phone-normal.png`" alt="" /></div>
							<div class="module-box"><img :src="`./chat-icon/video-normal.png`" alt="" /></div>
						</div>
					</div>
					<div class="edit-msg flex-center">
						<a-textarea class="textarea-style" v-model:value="sendMsg" :auto-size="{ minRows: 2, maxRows: 2 }" />
					</div>
					<div class="send-btn-box finger">
						<div></div>
						<div class="tips" v-show="showTips">不能发送空白信息</div>
						<div class="send-btn finger" @click="handleSendMsg">发送(S)</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
// 由于设计稿是1920 * 1080，比例为16：9 浏览器实际视图宽高比的影响，为尽量还原设计稿
// 将设计稿的尺寸缩放0.789倍
.chat-box {
	display: flex;
	width: 1856px;
	height: calc(100vh - 75px);
	// margin-left: 64px;
	background-color: #f5f5f5;
}
.left-box {
	width: 286px; // 362
	height: calc(100vh - 75px);
	background-color: #eae7e6;
	border-right: 1px solid #d6d6d6;
	overflow: hidden;
	.content {
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		.chat-item {
			display: flex;
			align-items: center;
			width: 286px; //362
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
				white-space: nowrap;
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
	.content::-webkit-scrollbar {
		height: 6px;
		width: 6px;
		display: none;
	}
	/* 两个滚动条交接处 -- x轴和y轴 */
	.content::-webkit-scrollbar-corner {
		background-color: transparent;
		opacity: 0.5;
	}

	/* 滚动条滑块 */
	.content::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: transparent;
	}

	/* 滚动条轨道 */
	.content::-webkit-scrollbar-track {
		background: transparent;
		opacity: 0.5;
	}
	.content:hover::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px #c5c4c4;
		-webkit-box-shadow-opacity: 0.5;
		background: #c5c4c4;
	}
	.content:hover::-webkit-scrollbar {
		display: block;
	}
}
.content {
	flex: 1;
	// width: 1580px;
	height: calc(100vh - 240px);
	// background-color: #f5f5f5;
	.chat-content {
		height: calc(100vh - 240px);
		overflow-y: scroll;
	}
	.chat-msg-item {
		position: relative;
		width: 100%;
		min-height: 122px;
		overflow: hidden;
		padding: 0 35px;
		padding-top: 20px;
		.msg-date {
			width: 150px;
			height: 22px;
			margin: 0 auto;
			margin-bottom: 18px;
			background: #dadada;
			border-radius: 3px;
			line-height: 22px;
			padding: 0 6px;
			font-size: 13px;
		}

		.msg-content,
		.my-msg {
			display: flex;
			align-items: center;
			padding: 8px 0;
			.chat-avatar {
				width: 38px;
				height: 38px;
				border-radius: 3px;
				img {
					width: 100%;
				}
			}
			.chat-msg-box {
				margin-left: 10px;
				.item,
				.my-item {
					position: relative;
					max-width: 590px;
					background: #fff;
					border-radius: 6px;
					font-size: 14px;
					padding: 9px;
				}
				.item::after {
					content: " ";
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
.my-msg {
	justify-content: flex-end;
	.chat-msg-box {
		margin-right: 10px;
		.my-item {
			position: relative;
			max-width: 590px;
			background: #3b7fff !important;
			border-radius: 6px;
			font-size: 17px;
			padding: 9px;
			color: #fff;
		}
		.my-item::after {
			content: " ";
			position: absolute;
			width: 8px;
			height: 8px;
			background-color: #3b7fff;
			transform: rotate(45deg);
			top: calc(50% - 4px);
			right: -4px;
		}
	}
}
.edit-content {
	position: fixed;
	width: 1580px;
	height: 164px; //208
	border-top: 1px solid #d6d6d6;
	bottom: 0;
	.edit-module {
		display: flex;
		justify-content: space-between;
		height: 46px;
		padding: 12px 22px;
		.left-module,
		.right-module {
			display: flex;
		}
		.module-box {
			width: 42px;
			height: 26px;
			text-align: center;
			img {
				width: 26px;
				cursor: pointer;
			}
		}
	}
	.edit-msg {
		height: 66px;
		padding: 0 10px;
	}
	.send-btn-box {
		position: relative;
		display: flex;
		width: 1580px;
		height: 52px; // btn-width + margin-bottom
		justify-content: space-between;
		.send-btn {
			width: 116px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background-color: #e9e9e9;
			border-radius: 6px;
			font-size: 16px;
			font-weight: 600;
			color: #3b7fff;
			margin-right: 25px;
		}
		.send-btn:hover {
			background-color: #c5c4c4;
		}

		.tips {
			position: absolute;
			width: 140px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			top: -50px;
			right: 20px;
			background-color: #fff;
			border: 1px solid #e9e9e9;
			border-radius: 5px;
		}
		.tips::after {
			content: "";
			position: absolute;
			width: 10px;
			height: 10px;
			background-color: #fff;
			border-right: 1px solid #e9e9e9;
			border-bottom: 1px solid #e9e9e9;
			transform: rotate(45deg);
			left: calc(50% + 5px);
			bottom: -5px;
		}
	}
}
.textarea-style {
	border: none;
	background-color: transparent;
	outline: none;
	font-size: 16px;
}
/deep/ .textarea-style,
.ant-input:focus {
	box-shadow: none;
	border-color: initial;
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
.w-150 {
	width: 150px !important;
}
// 发送时间为 00：00 宽度
.w-50 {
	width: 50px !important;
}
// 发送时间为 昨天：00：00 宽度
.w-95 {
	width: 95px !important;
}
.w-16 {
	width: 16px !important;
}
</style>
