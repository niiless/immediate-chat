<script setup lang="ts">
import { ref, reactive, defineEmits, h, onMounted, unref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

const emit = defineEmits(["closeContactManage"]);
const items = ref([
	{
		key: "sub1",
		icon: () => h(),
		label: "朋友权限",
		title: "朋友权限",
		children: [
			{
				key: "1",
				label: "仅聊天",
				title: "仅聊天",
			},
			{
				key: "2",
				label: "不让他（她）看",
				title: "不让他（她）看",
			},
			{
				key: "3",
				label: "不看他（她）",
				title: "不看他（她）",
			},
		],
	},
	{
		key: "sub2",
		icon: () => h(),
		label: "标签",
		title: "标签",
		children: [
			{
				key: "4",
				label: "无标签",
				title: "无标签",
			},
			{
				key: "5",
				label: "未命名",
				title: "未命名",
			},
		],
	},
]);
const state = reactive({
	rootSubmenuKeys: ["sub1", "sub2"],
	openKeys: ["sub1"],
	selectedKeys: [],
});
const onOpenChange = (openKeys: string[]) => {
	const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
	if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
		state.openKeys = openKeys;
	} else {
		state.openKeys = latestOpenKey ? [latestOpenKey] : [];
	}
};
const checkArr = ref([]);
const isShowAll = ref(true);
const lastChoseMenu = ref();
// 总好友
const userList = ref([
	{ id: 1, avatar: "./image/avator1.png", name: "张美丽", label: "不可见", remark: "IT", isCheck: false, auth: "lock" },
	{ id: 2, avatar: "./image/avator1.png", name: "王大帅", label: "不看他", remark: "朋友", isCheck: false, auth: "hide" },
	{ id: 3, avatar: "./image/avator1.png", name: "马小军", label: "仅聊天", remark: "同事", isCheck: false, auth: "chat" },
	{ id: 4, avatar: "./image/avator1.png", name: "伊斯拉姆·马哈切夫", label: "", remark: "", isCheck: false, auth: "lock" },
	{ id: 5, avatar: "./image/avator1.png", name: "查尔斯·奥利维拉", label: "", remark: "", isCheck: false, auth: "" },
	{ id: 6, avatar: "./image/avator1.png", name: "欧阳娜娜", label: "", remark: "隔壁小明", isCheck: false, auth: "lock" },
	{ id: 7, avatar: "./image/avator1.png", name: "李凯", label: "不可见", remark: "", isCheck: false, auth: "lock" },
	{ id: 8, avatar: "./image/avator1.png", name: "Nasty", label: "不可见", remark: "", isCheck: false, auth: "" },
	{ id: 9, avatar: "./image/avator1.png", name: "John Deep", label: "不可见", remark: "隔壁小明", isCheck: false, auth: "" },
	{ id: 10, avatar: "./image/avator1.png", name: "islam Mahachevo", label: "不可见", remark: "隔壁小明", isCheck: false, auth: "lock" },
	{ id: 11, avatar: "./image/avator1.png", name: "巴拉素", label: "", remark: "隔壁小明", isCheck: false, auth: "lock" },
	{ id: 12, avatar: "./image/avator1.png", name: "小明", label: "不可见", remark: "隔壁小明", isCheck: false, auth: "hide" },
	{ id: 13, avatar: "./image/avator1.png", name: "小红", label: "不可见", remark: "", isCheck: false, auth: "lock" },
	{ id: 14, avatar: "./image/avator1.png", name: "小绿", label: "", remark: "隔壁小明", isCheck: false, auth: "lock" },
	{ id: 15, avatar: "./image/avator1.png", name: "小黑", label: "不可见", remark: "隔壁小明", isCheck: false, auth: "lock" },
	{ id: 16, avatar: "./image/avator1.png", name: "小白", label: "不可见", remark: "", isCheck: false, auth: "hide" },
]);

const filterList = ref([]);
onMounted(() => {
	filterList.value = unref(userList.value);
});
// 点击子菜单
function handleClickMenuItem(item: any) {
	if (lastChoseMenu.value != item.key) cancelSelect();
	lastChoseMenu.value = item.key;
	isShowAll.value = false;
	switch (item.key) {
		case "1":
			filterList.value = userList.value.filter((v) => v.auth == "chat");
			break;
		case "2":
			filterList.value = userList.value.filter((v) => v.auth == "lock");
			break;
		case "3":
			filterList.value = userList.value.filter((v) => v.auth == "hide");
			break;
		case "4":
			filterList.value = userList.value.filter((v) => !v.label);
			break;
		case "5":
			filterList.value = [];
			break;
	}
}
// 获取对应权限有多少好友
function getAuthMember(key: number | string) {
	switch (key) {
		case "1":
			return userList.value.filter((v) => v.auth == "chat").length;
		case "2":
			return userList.value.filter((v) => v.auth == "lock").length;
		case "3":
			return userList.value.filter((v) => v.auth == "hide").length;
		case "4":
			return userList.value.filter((v) => !v.label).length;
		case "5":
			return 0;
	}
}
function handleChangeCheck(e: boolean, id: any) {
	if (e) checkArr.value.push(id);
	else checkArr.value = checkArr.value.filter((v) => v != id);
}
function showAllFriend() {
	isShowAll.value = true;
	filterList.value = userList.value;
	state.selectedKeys = [];
}
// 取消选择
function cancelSelect() {
	checkArr.value = [];
	filterList.value.forEach((v) => {
		v.isCheck = false;
	});
}
// 点击关闭
function closeContactManage() {
	emit("closeContactManage");
}
</script>
<template>
	<div class="container">
		<div class="menu">
			<div class="box-title">通讯录管理</div>
			<div class="menu-box" @click="showAllFriend" :class="isShowAll ? 'check-style' : ''">
				全部<span>({{ userList.length }})</span>
			</div>
			<div class="box-title pb-0">筛选</div>
			<a-menu v-model:selectedKeys="state.selectedKeys" mode="inline" :open-keys="state.openKeys" @openChange="onOpenChange">
				<a-sub-menu v-for="item in items" :key="item.key" :title="item.title">
					<template v-slot:title>
						<span>{{ item.title }}</span>
					</template>
					<a-menu-item v-for="childItem in item.children" :key="childItem.key" @click="handleClickMenuItem(childItem)">
						<template v-slot:icon v-if="childItem.key == 1">
							<img :src="`./image/chat.png`" class="img-icon" alt="" />
						</template>
						<template v-slot:icon v-if="childItem.key == 2">
							<img :src="`./image/lock.png`" class="img-icon" alt="" />
						</template>
						<template v-slot:icon v-if="childItem.key == 3">
							<img :src="`./image/hide.png`" class="img-icon" alt="" />
						</template>
						{{ childItem.label }}<span class="num-style"> ({{ getAuthMember(childItem.key) }})</span>
					</a-menu-item>
				</a-sub-menu>
			</a-menu>
		</div>
		<div class="content">
			<div class="header">
				<div class="search-box">
					<a-input size="small" placeholder="搜索">
						<template #prefix><SearchOutlined class="s-22" /></template>
					</a-input>
				</div>
				<div class="edit-btn">
					<div class="btn-item">
						<img :src="`./chat-icon/shrink.png`" class="reduce-btn" alt="" />
					</div>
					<div class="btn-item">
						<img :src="`./chat-icon/fullScreen.png`" alt="" />
					</div>
					<div class="btn-item" @click="closeContactManage">
						<img :src="`./chat-icon/close.png`" alt="" />
					</div>
				</div>
			</div>
			<div class="table">
				<div class="t-header">
					<div class="check">
						<div></div>
					</div>
					<div class="name"></div>
					<div class="remark">备注</div>
					<div class="label">标签</div>
					<div class="auth">朋友权限</div>
				</div>
				<div class="t-body">
					<div class="user-item" v-for="item in filterList" :key="item.id" :class="item.isCheck ? 'check-style' : ''">
						<div class="userCheck">
							<a-checkbox v-model:checked="item.isCheck" @change="handleChangeCheck($event.target.checked, item.id)"></a-checkbox>
						</div>
						<div class="userName">
							<img :src="item.avatar" alt="" />
							<div class="name">{{ item.name }}</div>
						</div>
						<div class="userRemark">{{ item.remark }}</div>
						<div class="userLabel">{{ item.label }}</div>
						<div class="userAuth">
							<img v-if="item.auth == 'hide'" :src="`./image/hide.png`" alt="" />
							<img v-if="item.auth == 'lock'" :src="`./image/lock.png`" alt="" />
							<img v-if="item.auth == 'chat'" :src="`./image/chat.png`" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="change-box" v-show="checkArr.length > 0">
				<div class="checkCount">
					已选 <span>{{ checkArr.length }}</span> 人 <span class="finger" @click="cancelSelect">取消选择</span>
				</div>
				<div class="btn-group">
					<div class="btns">
						<img :src="`./image/auth-lock.png`" alt="" />
						<span>修改权限</span>
					</div>
					<div class="btns">
						<div class="circle-radius">
							<img :src="`./image/auth-label.png`" alt="" />
						</div>
						<span>添加标签</span>
					</div>
					<div class="btns">
						<img :src="`./image/auth-delete.png`" alt="" />
						<span>删除</span>
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
	width: 860px;
	height: 638px;
	left: calc(50% - 420px);
	top: calc(50% - 319px);
	overflow: hidden;
	background-color: #f5f5f5;
	border: 1px solid #d6d6d6;
	box-shadow: -1px 1px 1px 2px rgba(0, 0, 0, 0.1);
}
.menu {
	width: 210px;
	height: 638px;
	background-color: transparent;
	border-right: 1px solid #e2e2e2;
	.box-title {
		padding: 10px 12px;
		padding-bottom: 25px;
		color: #b9b9b9;
		font-size: 16px;
	}
	.menu-box {
		width: 210px;
		height: 36px;
		line-height: 24px;
		padding: 6px 12px;
		font-size: 14px;
		box-sizing: border-box;
		span {
			color: #999999;
		}
	}
}
.content {
	position: relative;
	flex: 1;
	background-color: #fff;
	.header {
		width: 100%;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 25px;
		.search-box {
			width: 200px;
		}
		.edit-btn {
			width: 126px;
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
	.table {
		margin-top: 12px;
		width: 100%;
		height: 100%;
		.t-header {
			width: 100%;
			display: flex;
			font-size: 16px;
			padding-bottom: 10px;
			border-bottom: 1px solid #ebebeb;
			.check {
				width: 52px;
				height: 22px;
				display: flex;
				align-items: center;
				padding-left: 26px;
				border-right: 2px solid #e1e1e1;
				div {
					width: 14px;
					height: 14px;
					background: #e1e1e1;
					border-radius: 5px;
				}
			}
			.name,
			.label,
			.remark {
				margin-left: 10px;
				width: 150px;
				border-right: 2px solid #e1e1e1;
			}
			.auth {
				margin-left: 10px;
				flex: 1;
			}
		}
		.t-body {
			width: 100%;
			height: calc(100% - 88px);
			overflow: hidden;
			overflow-y: scroll;
			.user-item {
				width: 100%;
				height: 55px;
				display: flex;
				align-items: center;
				font-size: 16px;
				.userCheck {
					width: 52px;
					height: 22px;
					display: flex;
					align-items: center;
					padding-left: 26px;
					div {
						width: 14px;
						height: 14px;
						background: #e1e1e1;
						border-radius: 5px;
					}
				}
				.userName,
				.userLabel,
				.userRemark {
					margin-left: 10px;
					width: 150px;
				}
				.userAuth {
					margin-left: 10px;
					text-align: right;
					width: 70px;
					img {
						width: 16px;
						margin-left: 5px;
					}
				}
				.userName {
					display: flex;
					align-items: center;
					img {
						width: 32px;
						border-radius: 5px;
						margin-right: 12px;
					}
					.name {
						width: 100px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
			.user-item:hover {
				background-color: #d2d2d2;
			}
		}
		.t-body::-webkit-scrollbar {
			height: 6px;
			width: 6px;
			display: none;
		}
		/* 两个滚动条交接处 -- x轴和y轴 */
		.t-body::-webkit-scrollbar-corner {
			background-color: transparent;
			opacity: 0.5;
		}

		/* 滚动条滑块 */
		.t-body::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background: transparent;
		}

		/* 滚动条轨道 */
		.t-body::-webkit-scrollbar-track {
			background: transparent;
			opacity: 0.5;
		}
		.t-body:hover::-webkit-scrollbar-thumb {
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 5px #c5c4c4;
			-webkit-box-shadow-opacity: 0.5;
			background: #c5c4c4;
		}
		.t-body:hover::-webkit-scrollbar {
			display: block;
		}
	}
	.change-box {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 127px;
		background-color: #f5f5f5;
		border-top: 1px solid #e2e2e2;
		display: flex;
		justify-content: space-between;
		.checkCount {
			width: 200px;
			height: 22px;
			font-size: 16px;
			padding-left: 24px;
			margin-top: 84px;
			span {
				color: #3b7fff;
			}
		}
		.btn-group {
			// flex: 1;
			display: flex;
			height: 127px;
			padding: 24px 0;
			margin-right: 22px;
			.btns {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 80px;
				height: 100%;
				font-size: 16px;
				cursor: pointer;
				img {
					width: 53px;
					height: 53px;
				}
				span {
					margin-top: 6px;
				}
			}
		}
	}
}
.flex {
	display: flex;
}
.check-style {
	background-color: #d2d2d2;
}
.finger {
	cursor: pointer;
}
.circle-radius {
	width: 53px;
	height: 53px;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 20px !important;
		height: 20px !important;
	}
}
.pb-0 {
	padding-bottom: 0 !important;
}
.img-icon {
	width: 15px;
}
.num-style {
	color: #999999;
}
.reduce-btn {
	width: 16px !important;
	height: 2px !important;
}
/deep/ .ant-input {
	&::placeholder {
		color: #696969;
	}
}
.ant-input-affix-wrapper:focus {
	border-color: #d9d9d9;
	box-shadow: none;
}
.ant-input-affix-wrapper {
	border-color: #d9d9d9;
	box-shadow: none;
}
.ant-input-affix-wrapper:focus {
	border-color: #d9d9d9;
	box-shadow: none;
}
.ant-input-affix-wrapper:hover {
	border-color: #d9d9d9;
	box-shadow: none;
}
</style>
