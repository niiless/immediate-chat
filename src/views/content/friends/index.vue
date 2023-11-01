<script setup lang="ts">
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import PageHeader from "@/views/header/index.vue";
import Group from "@/views/content/friends/components/group.vue";
// 当前点击的通讯录好友 或模块
const activeItem = ref<number | string>(0);
function handleChoseItem(friend: any) {
	activeItem.value = friend.id;
}
// 好友列表
const directory = ref([
	{
		id: 1,
		category: "A",
		userList: [
			{
				id: "001",
				name: "A",
				avatar: "/src/assets/image/avator1.png",
			},
			{
				id: "002",
				name: "ANSWE",
				avatar: "/src/assets/image/avator2.png",
			},
			{
				id: "003",
				name: "爱茶",
				avatar: "/src/assets/image/avator3.png",
			},
			{
				id: "004",
				name: "爱可以包容一切爱可以包容一切爱可以包容一切",
				avatar: "/src/assets/image/avator4.png",
			},
		],
	},
	{
		id: 2,
		category: "B",
		userList: [
			{
				id: "005",
				name: "百度网站",
				avatar: "/src/assets/image/avator4.png",
			},
			{
				id: "006",
				name: "Boom",
				avatar: "/src/assets/image/avator5.png",
			},
		],
	},
	{
		id: 3,
		category: "C",
		userList: [
			{
				id: "007",
				name: "Cardi B",
				avatar: "/src/assets/image/avator4.png",
			},
			{
				id: "008",
				name: "蔡文姬",
				avatar: "/src/assets/image/avator5.png",
			},
		],
	},
]);
// 新的朋友列表
const newFriendList = ref([
	{ id: 1, name: "小红", intro: "你好，我是小红", avatar: "/src/assets/image/avator1.png", isFriend: false,sex:1,area:'德国 奥格斯堡' },
	{ id: 2, name: "小明", intro: "好久不见，老同学！", avatar: "/src/assets/image/avator2.png", isFriend: true },
	{ id: 3, name: "小兰", intro: "你好，我是小兰", avatar: "/src/assets/image/avator3.png", isFriend: true },
	{ id: 4, name: "新一", intro: "你好，我是来自名侦探柯南的工藤新一", avatar: "/src/assets/image/avator4.png", isFriend: true },
]);
// 群聊列表
const groupChatList = ref([
	{ id: 1, name: "群聊1", avatar: "/src/assets/image/avator1.png" },
	{ id: 2, name: "群聊2", avatar: "/src/assets/image/avator1.png" },
	{ id: 3, name: "群聊3", avatar: "/src/assets/image/avator1.png" },
	{ id: 4, name: "群聊4", avatar: "/src/assets/image/avator1.png" },
	{ id: 5, name: "群聊5", avatar: "/src/assets/image/avator1.png" },
	{ id: 6, name: "群聊6", avatar: "/src/assets/image/avator1.png" },
	{ id: 7, name: "群聊7", avatar: "/src/assets/image/avator1.png" },
	{ id: 8, name: "群聊8", avatar: "/src/assets/image/avator1.png" },
	{ id: 9, name: "群聊9", avatar: "/src/assets/image/avator1.png" },
	{ id: 10, name: "群聊10", avatar: "/src/assets/image/avator1.png" },
	{ id: 11, name: "群聊11", avatar: "/src/assets/image/avator1.png" },
	{ id: 12, name: "群聊12", avatar: "/src/assets/image/avator1.png" },
	{ id: 13, name: "群聊13", avatar: "/src/assets/image/avator1.png" },
	{ id: 14, name: "群聊14", avatar: "/src/assets/image/avator1.png" },
]);
</script>
<template>
	<div class="a">
		<PageHeader :title="'新的朋友'"></PageHeader>
		<div class="chat-box">
			<div class="left-box">
				<div class="content">
					<div class="manage-box flex-center">
						<img src="/src/assets/image/userIcon.png" alt="" />
						通讯录管理
					</div>
					<div class="friends-item">
						<div class="item-title">新的朋友</div>
						<div class="item-content" :class="activeItem == 'new' ? 'active-style' : ''" @click="handleChoseItem({ id: 'new' })">
							<img src="/src/assets/image/newFriend.png" alt="" />
							<span>新的朋友</span>
						</div>
					</div>
					<div class="friends-item">
						<div class="item-title">群聊</div>
						<div class="item-content" :class="activeItem == 'group' ? 'active-style' : ''" @click="handleChoseItem({ id: 'group' })">
							<img src="/src/assets/image/group.png" alt="" />
							<span>群聊</span>
						</div>
					</div>
					<div class="friends-item" v-for="item in directory" :key="item.id">
						<div class="item-title">{{ item.category }}</div>
						<div
							class="item-content"
							:class="activeItem == friend.id ? 'active-style' : ''"
							v-for="friend in item.userList"
							:key="friend.id"
							@click="handleChoseItem(friend)"
						>
							<img :src="friend.avatar" alt="" />
							<div class="name-box">{{ friend.name }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="box-content" v-show="activeItem == 'new'">
					<!-- <div>
					<div class="newFriend-box" v-for="item in newFriendList" :key="item.id">
						<div class="info">
							<img :src="item.avatar" alt="" />
							<div class="intro-box">
								<span class="f-name">{{ item.name }}</span>
								<span class="f-intro">{{ item.intro }}</span>
							</div>
							<div class="isFriend-box" v-show="activeItem == 'group'">
								<span v-if="item.isFriend" class="add-style">已添加</span>
								<div v-else class="add-btn">接受</div>
							</div>
						</div>
					</div>
				</div> -->
				<div>
				<div class="check-friend">
					<div class="add-info">
						<img src="/src/assets/image/avator1.png" alt="">
						<div class="info">
							<div class="name-box">
								<div class="name">立</div>
								<img src="/src/assets/image/female.png" alt="">
							</div>
							<div class="area">地区：德国 奥格斯堡</div>
						</div>
					</div>
					<div class="check-intro">
							<div class="f-intro">立：我是立</div>
							<div class="reply">回复</div>
						</div>
				</div>
				<div class="check-btn">前往验证</div>
			</div>
				</div>
				<Group :list="groupChatList" />
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.chat-box {
	display: flex;
	width: 1856px;
	height: calc(100vh - 75px);
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
		.manage-box {
			width: 260px;
			height: 43px;
			background-color: #fff;
			border-radius: 4px;
			font-size: 17px;
			margin: 13px;
			margin-bottom: 16px;
			cursor: pointer;
			img {
				width: 12px;
				height: 15px;
				margin-right: 14px;
			}
		}
		.friends-item {
			width: 286px;
			min-height: 128px;
			padding: 20px 0;
			box-sizing: border-box;
			.item-title {
				font-size: 14px;
				height: 18px;
				line-height: 18px;
				color: #a1a1a1;
				margin-left: 15px;
			}
			.item-content {
				display: flex;
				align-items: center;
				width: 100%;
				height: 70px;
				padding: 15px;
				cursor: pointer;
				img {
					width: 40px;
					height: 40px;
				}
				span {
					margin-left: 14px;
					font-size: 17px;
					font-weight: 400;
				}
				.name-box {
					width: 200px;
					margin-left: 14px;
					font-size: 17px;
					font-weight: 400;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
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
	height: 100%;
	overflow: hidden;
	// background-color: #f5f5f5;
	.box-content {
		height: 100%;
		overflow-y: scroll;
	}
	.box-content::-webkit-scrollbar {
		height: 8px;
		width: 8px;
	}
	/* 两个滚动条交接处 -- x轴和y轴 */
	.box-content::-webkit-scrollbar-corner {
		background-color: transparent;
	}
	/* 滚动条滑块 */
	.box-content::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: #c5c4c4;
	}
	/* 滚动条轨道 */
	.box-content::-webkit-scrollbar-track {
		background: transparent;
	}
	.newFriend-box {
		width: 84%;
		height: 100px;
		margin: 0 auto;
		border-bottom: 2px solid #e7e7e7;
		display: flex;
		align-items: center;
		.info {
			width: 100%;
			height: 60px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.intro-box {
				flex: 1;
				height: 50px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.f-name {
					font-size: 17px;
					font-weight: 500;
				}
				.f-intro {
					font-size: 15px;
					color: #999;
				}
			}
			img {
				width: 60px;
				height: 60px;
				margin-right: 13px;
			}
			.isFriend-box {
				width: 72px;
				text-align: center;
				.add-style {
					color: #999;
					font-size: 15px;
				}
				.add-btn {
					width: 60px;
					height: 26px;
					background: #3b7fff;
					border-radius: 5px;
					color: #fff;
					text-align: center;
					line-height: 26px;
					font-size: 16px;
					cursor: pointer;
				}
			}
		}
	}
	.check-friend{
		position: relative;
		width: 422px;
		min-height: 176px;
		margin: 0 auto;
		margin-top: 164px;
		border-bottom: 2px solid #EAEAEA;
		.add-info{
			width: 100%;
			height: 84px;
			display: flex;
			img{
				width: 68px;
				height: 68px;
				border-radius: 5px;
			}
		}
		.info{
			
			.name-box{
				margin-left: 20px;
				display: flex;
				align-items: center;
				.name{
					max-width: 300px;
					font-size: 20px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					
				}
				img{
					width: 15px;
					height: 18px;
					margin-left: 8px;
				}
			}
			.area{
				margin: 5px 20px;
				color: #9E9E9E;
				font-size: 16px;
			}
		}
		.check-intro{
			.f-intro{
				color: #9E9E9E;
				font-size: 16px;
				padding: 6px;
			}
			.reply{
				color: #576B95;
				font-size: 16px;
				padding: 6px;
			}
		}
	}
	.check-btn{
		width: 128px;
		height: 38px;
		background: #3B7FFF;
		border-radius: 5px;
		margin: 0 auto;
		margin-top: 38px;
		font-size: 18px;
		line-height: 38px;
		text-align: center;
		color: #fff;
	}
}
.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.finger {
	cursor: pointer;
}
.active-style {
	background-color: #c8c7c6;
}
</style>
