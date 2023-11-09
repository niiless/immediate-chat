<script setup lang="ts">
import { ref, reactive, defineEmits, h, onMounted, unref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

const emit = defineEmits(["closeCollectNote"]);
// 点击关闭
function closeBox() {
	emit("closeCollectNote");
}
</script>
<template>
	<div class="container">
		<div class="header">
			<div class="top-edit">
				<div class="title">笔记</div>
				<div class="edit-btn">
					<div class="btn-item">
						<img :src="`./chat-icon/shrink.png`" class="reduce-btn" alt="" />
					</div>
					<div class="btn-item">
						<img :src="`./chat-icon/fullScreen.png`" alt="" />
					</div>
					<div class="btn-item" @click="closeBox">
						<img :src="`./chat-icon/close.png`" alt="" />
					</div>
				</div>
			</div>
			<div class="edit-group">
				<div class="left-btn">
					<div class="item">
						<img :src="`./collect/file.png`" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/bold.png`" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/italic.png`" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/underLine.png`" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/highlight.png`" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/g-cricle.png`" class="h-16" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/g-num.png`" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/line.png`" alt="" />
					</div>
					<div class="item">
						<img :src="`./collect/todo.png`" alt="" />
					</div>
				</div>
				<div class="right-btn">
					<div class="item">
						<img :src="`./collect/upload.png`" class="upload" alt="添加文件" />
					</div>
					<div class="item">
						<img :src="`./collect/label.png`" alt="添加文件" />
					</div>
					<div class="item">
						<img :src="`./collect/export.png`" alt="添加文件" />
					</div>
				</div>
			</div>
		</div>
		<div class="content-box" contenteditable="true"></div>
	</div>
</template>

<style lang="less" scoped>
.container {
	position: fixed;
	display: flex;
	flex-direction: column;
	width: 692px;
	height: 800px;
	left: calc(50% - 346px);
	top: calc(50% - 400px);
	overflow: hidden;
	background-color: #f5f5f5;
	border: 1px solid #d6d6d6;
	box-shadow: -1px 1px 1px 2px rgba(0, 0, 0, 0.1);
	.header {
		width: 692px;
		height: 97px;
		.top-edit {
			width: 100%;
			display: flex;
			justify-content: space-between;
			.title {
				font-size: 20px;
				color: #999999;
				padding: 10px;
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
		.edit-group {
			display: flex;
			align-items: center;
			margin: 0 auto;
			width: 620px;
			height: 60px;
			border-bottom: 1px solid #e7e7e7;
			justify-content: space-between;
			.left-btn {
				width: 450px;
				display: flex;
			}
			.right-btn {
				display: flex;
				width: 150px;
				text-align: right;
			}
			.item {
				width: 50px;
				img {
					height: 20px;
					cursor: pointer;
				}
			}
		}
	}
	.content-box {
		width: 690px;
		height: 690px;
		margin: 20px auto;
		padding: 0 30px;
		font-size: 16px;
		overflow: hidden;
		overflow-y: scroll;
	}
	.content-box:focus-visible {
		outline: none;
	}
	.content-box::-webkit-scrollbar {
		height: 6px;
		width: 6px;
		display: none;
	}
	/* 两个滚动条交接处 -- x轴和y轴 */
	.content-box::-webkit-scrollbar-corner {
		background-color: transparent;
		opacity: 0.5;
	}

	/* 滚动条滑块 */
	.content-box::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: transparent;
	}

	/* 滚动条轨道 */
	.content-box::-webkit-scrollbar-track {
		background: transparent;
		opacity: 0.5;
	}
	.content-box:hover::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px #c5c4c4;
		-webkit-box-shadow-opacity: 0.5;
		background: #c5c4c4;
	}
	.content-box:hover::-webkit-scrollbar {
		display: block;
	}
}
.h-16 {
	height: 16px !important;
}
.upload {
	width: 24px !important;
	height: 24px !important;
	margin-top: -2px;
}
</style>
