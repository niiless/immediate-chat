<script setup lang="ts">
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, unref, reactive, onMounted } from "vue";
import PageHeader from "@/views/header/index.vue";
import Notes from "./components/notes.vue";
import Setting from "@/views/content/setting/index.vue";

// 当前点击的通讯录好友 或模块
const activeItem = ref<number | string>();
const state = reactive({
	rootSubmenuKeys: ["sub1"],
	openKeys: ["sub1"],
	selectedKeys: [],
});
const showNote = ref(false);
const collectItem = ref([
	{ id: 1, title: "课表", fileType: "pdf", size: "4.2K", source: "聊天来源", date: "9月03日", type: "file" },
	{ id: 2, title: "收货人：李木子 手机号：1235566555 所在地区", fileType: "", size: "", source: "聊天来源", date: "8月27日", type: "collect" },
	{ id: 3, title: "PPT", fileType: "ppt", size: "1.2M", source: "聊天来源", date: "7月05日", type: "file" },
	{ id: 4, title: "信息文档", fileType: "doc", size: "560K", source: "聊天来源", date: "7月04日", type: "file" },
	{ id: 6, title: "数据表格", fileType: "xlsx", size: "3M", source: "聊天来源", date: "5月01日", type: "file" },
	{ id: 5, title: "数据表格", fileType: "xlsx", size: "3M", source: "聊天来源", date: "5月01日", type: "file" },
]);
const filterList = ref([]);

onMounted(() => {
	filterList.value = unref(collectItem.value);
	activeItem.value = "all";
});

// 点击菜单选项
function handleClickCollectItem(type: string) {
	activeItem.value = type;
	if (type != "office") state.selectedKeys = [];
	if (type == "file") filterList.value = collectItem.value.filter((v) => v.type == "file");
	else if (type == "all") filterList.value = unref(collectItem.value);
	else filterList.value = [];
}
// 获取当前头部标题
function getHeaderTitle(val: any) {
	if (!val) return;
	switch (val) {
		case "office":
			return "office";
		case "all":
			return "全部收藏";
		case "recent":
			return "最近使用";
		case "file":
			return "文件";
		default:
			return "";
	}
}
function handleShowNote() {
	showNote.value = true;
}
// 关闭新建笔记
function closeCollectNote() {
	showNote.value = false;
}
</script>
<template>
	<div>
		<PageHeader :title="getHeaderTitle(activeItem)"></PageHeader>
		<div class="chat-box">
			<div class="left-box">
				<div class="content">
					<div class="manage-box flex-center" @click="handleShowNote">
						<img src="/src/assets/image/collect-add.png" alt="" />
						新建笔记
					</div>
					<div class="collect-item">
						<div class="item" :class="activeItem == 'all' ? 'active-style' : ''" @click="handleClickCollectItem('all')">
							<img src="/src/assets/image/collect-all.png" alt="" />
							<span>全部收藏</span>
						</div>
						<div class="item" :class="activeItem == 'recent' ? 'active-style' : ''" @click="handleClickCollectItem('recent')">
							<img src="/src/assets/image/collect-recent.png" alt="" />
							<span>最近使用</span>
						</div>
						<div class="item" :class="activeItem == 'file' ? 'active-style' : ''" @click="handleClickCollectItem('file')">
							<img src="/src/assets/image/collect-file.png" alt="" />
							<span>文件</span>
						</div>
						<a-menu v-model:selectedKeys="state.selectedKeys" mode="inline" :open-keys="state.openKeys">
							<a-sub-menu key="sub1" title="标签">
								<template v-slot:icon>
									<img src="/src/assets/image/collect-label.png" class="img-icon" alt="" />
								</template>
								<a-menu-item key="1" @click="handleClickCollectItem('office')"> office </a-menu-item>
							</a-sub-menu>
						</a-menu>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="collect-content" v-show="activeItem">
					<div class="file-item" v-for="item in filterList" :key="item.id">
						<div class="left">
							<div>
								<div class="title">
									{{ item.title }}
								</div>
								<div class="size">
									{{ item.fileType + " " + item.size }}
								</div>
							</div>
							<div class="source">
								{{ item.source }}
							</div>
						</div>
						<div class="right">
							<img :src="`/src/assets/file-icon/${item.fileType}Type.png`" alt="" />
							<span>{{ item.date }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Notes v-if="showNote" @closeCollectNote="closeCollectNote"></Notes>
		<Setting></Setting>
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
		// overflow-y: scroll;
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
				width: 18px;
				height: 18px;
				margin-right: 12px;
			}
		}
		.collect-item {
			width: 286px;
			.item {
				width: 100%;
				height: 47px;
				// background: #dfdfdf;
				font-size: 16px;
				padding-left: 24px;
				display: flex;
				align-items: center;
				img {
					width: 20px;
					margin-right: 14px;
				}
			}
			:deep(.ant-menu-title-content) {
				font-size: 16px;
			}
			:deep(.ant-menu .ant-menu-item) {
				border-radius: 0;
				margin-inline: 0;
				padding-inline: 0;
				margin-block: 0;
				width: 100%;
				padding-left: 54px !important;
				font-size: 16px;
			}
			:deep(.ant-menu-light .ant-menu-item-selected) {
				background: #dfdfdf;
			}
			:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline) {
				background: transparent;
			}
		}
	}
}
.content {
	flex: 1;
	height: 100%;
	overflow: hidden;
	.collect-content {
		height: 100%;
		overflow-y: scroll;
		.file-item {
			display: flex;
			width: 1022px;
			height: 138px;
			border-radius: 10px;
			margin: 18px auto;
			padding: 16px;
			background: #fff;
			.left {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;
				height: 106px;
				.title {
					width: 385px;
					font-size: 18px;
					font-weight: 400;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.size,
				.source {
					font-size: 14px;
					color: #b2b2b2;
				}
				.size {
					margin: 6px 0;
				}
			}
			.right {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-end;
				width: 70px;
				height: 106px;
				img {
					width: 100%;
				}
				span {
					color: #b2b2b2;
					font-size: 13px;
				}
			}
		}
	}
	.collect-content::-webkit-scrollbar {
		height: 8px;
		width: 8px;
	}
	/* 两个滚动条交接处 -- x轴和y轴 */
	.collect-content::-webkit-scrollbar-corner {
		background-color: transparent;
	}
	/* 滚动条滑块 */
	.collect-content::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: #c5c4c4;
	}
	/* 滚动条轨道 */
	.collect-content::-webkit-scrollbar-track {
		background: transparent;
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
.ml-none {
	margin-left: 0 !important;
}
.img-icon {
	width: 20px;
	height: 20px;
	margin-left: 8px;
}
.active-style {
	background: #dfdfdf;
}
</style>
