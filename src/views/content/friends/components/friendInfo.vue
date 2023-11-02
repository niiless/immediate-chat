<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps({
	info: {
		type: Object,
		default: {},
	},
});
const friendInfo = computed(() => props.info);
</script>

<template>
	<div class="info-box">
		<div class="userInfo">
			<div class="avatar">
				<img src="/src/assets/image/avator1.png" alt="" />
			</div>
			<div class="intro">
				<div class="name">
					<div class="name-text">立</div>
					<img src="/src/assets/image/female.png" alt="" />
				</div>
				<div class="wechat-No">微信号：UZ112544</div>
				<div class="area">地区：湖蓝</div>
			</div>
			<div class="ellipsis">
				<img src="/src/assets/chat-icon/ellipsis.png" alt="" />
			</div>
		</div>
		<div class="remark-box">
			<div class="text-box">备注</div>
			<div class="content">点击添加备注</div>
		</div>
		<div class="other-info">
			<div class="item">
				<div class="text">个性签名</div>
				<div class="content">A</div>
			</div>
			<div class="item">
				<div class="text">来源</div>
				<div class="content">通过搜索QQ添加</div>
			</div>
		</div>
		<div class="btn-group">
			<div class="btn">
				<img src="/src/assets/image/user-record.png" alt="" />
				<div class="mt-5">发消息</div>
			</div>
			<div class="btn">
				<img src="/src/assets/image/user-phone.png" alt="" />
				<div class="mt-5">语音聊天</div>
			</div>
			<div class="btn">
				<img src="/src/assets/image/user-video.png" alt="" />
				<div class="mt-5">视频聊天</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.info-box {
	position: relative;
	width: 420px;
	height: 380px;
	// border: 2px solid #eaeaea;
	margin: 0 auto;
	padding-top: 32px;
	.userInfo {
		display: flex;
		justify-content: space-between;
		width: 420px;
		height: 108px;
		border-bottom: 2px solid #eaeaea;
		padding: 20px 0;
		.avatar {
			width: 88px;
			height: 68px;
			border-radius: 5px;
			img {
				width: 68px;
			}
		}
		.intro {
			flex: 1;
			.name {
				display: flex;
				align-items: center;
				height: 26px;
				.name-text {
					max-width: 260px;
					font-size: 18px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				img {
					width: 13px;
					height: 15px;
					margin-left: 10px;
				}
			}
			.wechat-No,
			.area {
				height: 20px;
				font-size: 14px;
				font-weight: 400;
				color: #9e9e9e;
			}
		}
		.ellipsis {
			width: 20px;
			height: 100%;
			img {
				width: 100%;
			}
		}
	}
	.remark-box {
		display: flex;
		align-items: center;
		width: 420px;
		height: 70px;
		border-bottom: 2px solid #eaeaea;
		font-size: 16px;
		color: #9e9e9e;
		.text-box {
			width: 88px;
		}
		.content {
			width: 332px;
		}
	}
	.other-info {
		width: 420px;
		height: 88px;
		padding: 16px 0;
		font-size: 16px;
		border-bottom: 2px solid #eaeaea;
		.item {
			display: flex;
			width: 420px;
			height: 24px;
			line-height: 24px;
			color: #9e9e9e;
			.text {
				width: 88px;
			}
			.content {
				width: 332px;
				color: #000;
			}
		}
	}
}
.btn-group {
	width: 420px;
	height: 105px;
	padding-top: 47px;
	display: flex;
	justify-content: center;
	.btn {
		width: 100px;
		padding: 0 10px;
		text-align: center;
		color: #576b95;
		img {
			width: 26px;
			height: 26px;
		}
	}
}
.mt-5 {
	margin-top: 5px;
}
</style>
