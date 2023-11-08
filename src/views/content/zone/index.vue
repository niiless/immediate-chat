<script lang="ts" setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["closeFriendZone"]);
const zoneList = ref([
	{
		id: 1,
		name: "小明",
		avatar: "/src/assets/image/avator1.png",
		content: '<span style="color:#576B95">#Meerkathhujilebu</span><br><div>昨日萌新&进阶 两片场</div>',
		imgList: [
			"/src/assets/image/avator1.png",
			"/src/assets/image/avator2.png",
			"/src/assets/image/avator3.png",
			"/src/assets/image/avator4.png",
			"/src/assets/image/avator5.png",
			"/src/assets/image/avator6.png",
		],
	},
	{
		id: 2,
		name: "小明",
		avatar: "/src/assets/image/avator2.png",
		content: "<p>今天天气真好！</p>",
		imgList: [
			"/src/assets/image/avator1.png",
			"/src/assets/image/avator2.png",
			"/src/assets/image/avator3.png",
			"/src/assets/image/avator4.png",
			"/src/assets/image/avator5.png",
			"/src/assets/image/avator6.png",
		],
	},
]);
const noticeList = ref([
	{
		id: 1,
		name: "立",
		avatar: "/src/assets/image/avator2.png",
		content: "不错",
		date: "刚刚",
		zoneImg: "/src/assets/image/avator1.png",
	},
	{ id: 2, name: "Blastic Kavanovski Antipofuss", avatar: "/src/assets/image/avator4.png", content: "好看好看", date: "10:36", zoneImg: "/src/assets/image/avator1.png" },
]);

function handleCloseFriendZone() {
	emit("closeFriendZone");
}
</script>

<template>
	<div class="container">
		<div class="top-btn">
			<div class="left-btn">
				<a-popover placement="bottom" trigger="click">
					<template #content>
						<div class="notice-box">
							<div class="top">
								<div class="title">消息</div>
								<div class="clear">清空</div>
							</div>
							<div class="content">
								<div class="item" v-for="item in noticeList" :key="item.id">
									<div class="avatar">
										<img :src="item.avatar" alt="" />
									</div>
									<div class="notice-info">
										<div class="name">{{ item.name }}</div>
										<div class="content">{{ item.content }}</div>
									</div>
									<div class="obj">
										<div class="date">{{ item.date }}</div>
										<div class="notice-img">
											<img :src="item.zoneImg" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
					<template #title> </template>
					<div class="btn">
						<img src="/src/assets/chat-icon/notice.png" alt="" />
					</div>
				</a-popover>
				<div class="btn">
					<img src="/src/assets/chat-icon/reload.png" alt="" />
				</div>
			</div>
			<div class="right-btn">
				<div class="btn">
					<img src="/src/assets/chat-icon/fixed-zone.png" class="h-22" alt="" />
				</div>
				<div class="btn">
					<img src="/src/assets/chat-icon/shrink-zone.png" class="w-18" alt="" />
				</div>
				<div class="btn hover-red" @click="handleCloseFriendZone">
					<img src="/src/assets/chat-icon/close-zone.png" class="h-13" alt="" />
				</div>
			</div>
		</div>
		<div class="user-info">
			<img src="/src/assets/image/myAvatar.png" class="bg-zone" alt="" />
			<div class="info">
				<div class="name">小刘爱设计</div>
				<img src="/src/assets/image/myAvatar.png" alt="" />
			</div>
		</div>
		<div class="zone-record">
			<div class="item" v-for="item in zoneList" :key="item.id">
				<div class="avatar">
					<img :src="item.avatar" alt="" />
				</div>
				<div class="info">
					<span class="name">{{ item.name }}</span>
					<div class="zone-content" v-html="item.content"></div>
					<div class="grid-container">
						<div class="grid-item" v-for="img in item.imgList" :key="img"><img :src="img" alt="" /></div>
						<div class="edit-btn">
							<a-popover
								placement="left"
								trigger="click"
								:getPopupContainer="
									(triggerNode) => {
										return triggerNode.parentNode;
									}
								"
							>
								<template #content>
									<div class="zone-btn">
										<div class="like"><img src="/src/assets/image/like.png" alt="" />喜欢</div>
										<div class="comment"><img src="/src/assets/image/comment.png" alt="" />评论</div>
									</div>
								</template>
								<div class="btn">
									<img src="/src/assets/chat-icon/split.png" alt="" />
								</div>
							</a-popover>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.container {
	position: fixed;
	width: 690px;
	height: 800px;
	left: calc(50% - 345px);
	top: calc(50% - 400px);
	overflow: hidden;
	overflow-y: scroll;
	background-color: #f5f5f5;
	border: 1px solid #d6d6d6;
	box-shadow: -1px 1px 1px 2px rgba(0, 0, 0, 0.1);
	.top-btn {
		position: sticky;
		display: flex;
		justify-content: space-between;
		top: 0;
		width: 690px;
		height: 38px;
		z-index: 99;
		background: rgba(0, 0, 0, 0);
		.left-btn {
			display: flex;
			width: 74px;
			height: 37px;
			img {
				height: 16px;
			}
		}
		.right-btn {
			display: flex;
			width: 111px;
			height: 37px;
			margin-right: 6px;
		}
		.btn {
			width: 37px;
			height: 37px;
			line-height: 37px;
			text-align: center;
			cursor: pointer;
		}
		.btn:hover {
			background-color: #707070;
		}
		.hover-red:hover {
			background-color: #ff7777;
		}
	}
	.user-info {
		position: relative;
		width: 690px;
		height: 430px;
		.bg-zone {
			position: absolute;
			top: -38px;
			object-fit: cover;
			width: 100%;
			height: 430px;
			overflow: hidden;
		}
		.info {
			position: absolute;
			display: flex;
			justify-content: flex-end;
			width: 300px;
			height: 75px;
			bottom: 20px;
			right: 32px;
			font-size: 18px;
			color: #fff;
			.name {
				margin-top: 10px;
				margin-right: 23px;
			}
			img {
				width: 75px;
				height: 75px;
				border-radius: 5px;
				cursor: pointer;
			}
		}
	}
	.zone-record {
		width: 690px;
		padding: 16px 30px;
		.item {
			width: 100%;
			margin-bottom: 40px;
			display: flex;
			.avatar {
				width: 45px;
				height: 45px;
				border-radius: 5px;
				margin-right: 17px;
				img {
					width: 100%;
					cursor: pointer;
				}
			}
			.info {
				font-size: 18px;
				.name {
					color: #576b95;
				}
				.zone-content {
					margin: 10px 0;
				}
			}
			.edit-btn {
				width: 570px;
				.btn {
					width: 33px;
					height: 20px;
					float: right;
					img {
						width: 100%;
						cursor: pointer;
					}
				}
			}
		}
	}
}
.zone-btn {
	display: flex;
	align-items: center;
	width: 152px;
	height: 34px;
	.like,
	.comment {
		width: 76px;
		text-align: center;
		color: #fff;
		cursor: pointer;
	}
	.like {
		border-right: 1px solid #707070;
	}
	img {
		width: 22px;
		margin-right: 2px;
	}
}

:deep(.edit-btn :where(.css-dev-only-do-not-override-185kyl0).ant-popover .ant-popover-inner) {
	background: #8f8f8f;
	padding: 0;
}
:deep(.edit-btn :where(.css-dev-only-do-not-override-185kyl0).ant-popover .ant-popover-arrow:before) {
	background-color: #8f8f8f;
}
.grid-container {
	display: flex;
	width: 570px;
	flex-wrap: wrap;
}
.grid-item {
	width: 182px;
	height: 182px;
	margin-right: 8px;
	margin-bottom: 8px;
	img {
		object-fit: cover;
		width: 100%;
		cursor: pointer;
	}
}
.notice-box {
	position: relative;
	width: 284px;
	height: 324px;
	overflow: hidden;
	.top {
		width: 284px;
		height: 30px;
		border-bottom: 1px solid #e0e0e0;
		padding-bottom: 12px;
		.title {
			width: 28px;
			font-size: 14px;
			text-align: center;
			margin: 0 auto;
		}
		.clear {
			position: absolute;
			width: 28px;
			top: 0;
			right: 0;
			color: #576b95;
			cursor: pointer;
		}
	}
	.content {
		width: 100%;
		.item {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			width: 100%;
			height: 52px;
			border-bottom: 1px solid #e0e0e0;
			padding: 12px;
			font-size: 12px;
			cursor: pointer;
			.avatar,
			.notice-img {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 28px;
				height: 40px;
				img {
					width: 100%;
				}
			}
			.notice-info {
				flex: 1;
				height: 40px;
				margin-left: 5px;
				margin-top: -5px;
				.name,
				.content {
					width: 150px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.name {
					color: #576b95;
				}
			}
			.obj {
				display: flex;
				height: 40px;
				align-items: flex-start;
				.date {
					margin-top: -5px;
					margin-right: 5px;
				}
			}
		}
	}
}
.notice-box::-webkit-scrollbar {
	display: none;
}
.w-18 {
	width: 18px;
}
.h-13 {
	height: 13px;
}
.h-22 {
	height: 22px;
}
.container::-webkit-scrollbar {
	height: 6px;
	width: 6px;
	display: none;
}
/* 两个滚动条交接处 -- x轴和y轴 */
.container::-webkit-scrollbar-corner {
	background-color: transparent;
	opacity: 0.5;
}

/* 滚动条滑块 */
.container::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background: transparent;
}

/* 滚动条轨道 */
.container::-webkit-scrollbar-track {
	background: transparent;
	opacity: 0.5;
}
.container:hover::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 5px #c5c4c4;
	-webkit-box-shadow-opacity: 0.5;
	background: #c5c4c4;
}
.container:hover::-webkit-scrollbar {
	display: block;
}
</style>
