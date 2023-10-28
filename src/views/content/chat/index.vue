<script setup lang="ts">
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
const search = ref("");
const userList = ref([
	{ id: 1, name: "小明", content: "你好", avatar: "/src/assets/image/avator1.png", date: "昨天" },
	{ id: 3, name: "小明", content: "你好", avatar: "/src/assets/image/avator2.png", date: "昨天" },
	{ id: 2, name: "小明", content: "你好", avatar: "/src/assets/image/avator3.png", date: "昨天" },
	{ id: 4, name: "小明", content: "你好", avatar: "/src/assets/image/avator4.png", date: "昨天" },
	{ id: 5, name: "小明", content: "你好", avatar: "/src/assets/image/avator5.png", date: "昨天" },
]);
const activeItem = reactive({ name: "", id: 0 });
function handleClickFriend(user: any) {
	activeItem.id = user.id;
	activeItem.name = user.name;
}
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
				<div class="chat-item finger" :class="activeItem.id == user.id ? 'active-chat' : ''" v-for="user in userList" :key="user.id" @click="handleClickFriend(user)">
					<img :src="user.avatar" />
					<div class="info">
						<span class="name">{{ user.name }}</span>
						<span class="chat">{{ user.content }}</span>
					</div>
					<span class="chat-date">{{ user.date }}</span>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-header">{{ activeItem.name }}</div>
			<div class="chat-content"></div>
			<div class="edit-content"></div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.chat-box {
	display: flex;
	width: 1840px;
	height: 100vh;
	margin-left: 80px;
}
.left-box {
	width: 362px;
	height: 100vh;
	background-color: #eae7e6;
	overflow: hidden;
	.header {
		display: flex;
		align-items: center;
		width: 100%;
		height: 95px;
		background-color: #fff;
		.add-btn {
			width: 35px;
			height: 35px;
			background-color: #e2e2e2;
			border-radius: 6px;
		}
	}
	.content {
		.chat-item {
			display: flex;
			align-items: center;
			width: 362px;
			height: 95px;
			img {
				width: 58px;
				height: 58px;
				border-radius: 4px;
				margin-left: 17px;
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 212px;
				height: 58px;
				margin-left: 13px;
				overflow: hidden;
				text-overflow: ellipsis;
				.name {
					font-size: 20px;
					font-weight: bold;
				}
				.chat {
					font-size: 16px;
					color: #999999;
				}
			}
			.chat-date {
				height: 58px;
			}
		}
	}
}
.content {
	width: 1477px;
	height: 100vh;
	background-color: #f5f5f5;
	border-left: 1px solid #d6d6d6;
	.content-header {
		display: flex;
		align-items: center;
		width: 100%;
		height: 95px;
		padding-left: 37px;
		border-bottom: 1px solid #d6d6d6;
		background-color: #f5f5f5;
		font-size: 28px;
		font-weight: 400;
	}
}
.search-input {
	width: 275px;
	height: 35px;
	margin-left: 17px;
	margin-right: 17px;
}
.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.s-22 {
	font-size: 22px;
}
.finger {
	cursor: pointer;
}
.active-chat {
	background-color: #c5c4c4;
}
</style>
