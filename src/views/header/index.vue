<script lang="ts" setup>
import { PlusOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { defineProps, ref, defineEmits } from "vue";
// 搜索框
const search = ref("");
const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	showBack: {
		type: Boolean,
		default: false,
	},
	activeMenu: {
		type: Number,
		default: 1,
	},
});
const emit = defineEmits(["closeFriendInfo"]);
function handleBack() {
	emit("closeFriendInfo");
}
</script>

<template>
	<div class="header-box">
		<div class="header">
			<a-input v-model="search" class="search-input" :class="props.activeMenu == 3 ? 'w-100' : ''">
				<template #prefix><SearchOutlined class="s-22" /></template>
			</a-input>
			<div class="add-btn flex-center finger" v-if="props.activeMenu != 3">
				<PlusOutlined class="s-22" v-show="props.activeMenu == 1" />
				<img :src="`./image/friend-add.png`" alt="" v-show="props.activeMenu == 2" />
			</div>
		</div>
		<div class="content">
			<div class="content-header">
				<div class="friend-name" v-show="!showBack">
					{{ props.title }}
				</div>
				<div class="back-btn finger" v-show="showBack">
					<img :src="`./image/back.png`" alt="" @click="handleBack" />
				</div>
				<div class="edit-btn">
					<div class="top-land flex-center">
						<div class="btn-item">
							<img class="w-20" :src="`./chat-icon/fixed.png`" alt="" />
						</div>
						<div class="btn-item">
							<img :src="`./chat-icon/shrink.png`" alt="" />
						</div>
						<div class="btn-item">
							<img :src="`./chat-icon/fullScreen.png`" alt="" />
						</div>
						<div class="btn-item">
							<img :src="`./chat-icon/close.png`" alt="" />
						</div>
					</div>
					<div class="bottom-land">
						<div class="btn-item">
							<img :src="`./chat-icon/ellipsis.png`" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.header-box {
	display: flex;
	width: 1856px;
	height: 75px;
	// margin-left: 64px;
	background-color: #f5f5f5;
}
.header {
	display: flex;
	align-items: center;
	width: 286px;
	height: 75px;
	background-color: #f7f7f7;
	border-bottom: 1px solid #d6d6d6;
	border-right: 1px solid #d6d6d6;
	.add-btn {
		width: 28px; //35
		height: 28px;
		background-color: #e2e2e2;
		border-radius: 6px;
		img {
			width: 28px; //35
			height: 28px;
		}
	}
}
.content {
	flex: 1;
	// width: 1580px;
	height: 100vh;
	// background-color: #f5f5f5;
	.content-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 75px;
		padding-left: 30px;
		border-bottom: 1px solid #d6d6d6;
		background-color: #f5f5f5;
		font-size: 22px;
		font-weight: 400;
		.edit-btn {
			width: 192px;
			height: 100%;
			// background-color: red;
			.top-land {
				width: 100%;
				height: 50%;
				display: flex;
				.btn-item {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 48px;
					height: 100%;
					cursor: pointer;
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
			.bottom-land {
				width: 100%;
				height: 50%;
				display: flex;
				justify-content: flex-end;
				.btn-item {
					width: 48px;
					height: 100%;
					text-align: center;
					cursor: pointer;
					img {
						margin-top: -5px;
						width: 22px;
					}
				}
			}
		}
	}
}
.search-input {
	width: 217px;
	height: 28px;
	margin-left: 13px;
	margin-right: 13px;
	background-color: #e2e2e2;
	outline: none;
	.ant-input-affix-wrapper:focus {
		border-color: #d9d9d9;
		box-shadow: none;
	}
	// /deep/ .ant-input-affix-wrapper:hover) {
	// 	border-color: #d9d9d9;
	// 	box-shadow: none;
	// }
}
/deep/ .ant-input,
.ant-input:focus,
.ant-input:hover {
	box-shadow: none;
	border-color: none;
	background-color: transparent;
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
.w-20 {
	width: 20px !important;
}
.a {
	display: flex;
}
.back-btn {
	width: 20px;
	height: 100%;
	display: flex;
	align-items: center;
	img {
		width: 20px;
		height: 14px;
	}
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
.w-100 {
	width: 100%;
}
</style>
