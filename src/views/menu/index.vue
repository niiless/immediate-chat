<script setup lang="ts"></script>

<template>
	<div class="menu">
		<div class="user-avatar flex-center">
			<img src="/src/assets/image/myAvatar.png" alt="" />
		</div>
		<div class="menu-item-box flex-center">
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
		</div>
		<div class="menu-item-box flex-center bottom-menu">
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.menu {
	position: relative;
	width: 64px;
	height: 100vh;
	background-color: #3b7fff;
}
.user-avatar {
	width: 100%;
	height: 115px;
	img {
		width: 43px;
		border-radius: 4px;
	}
}
.menu-item-box {
	width: 100%;
	flex-direction: column;
	.item {
		width: 40px;
		height: 40px;
		border-radius: 5px;
		background-color: #5d95ff;
		margin-bottom: 11px;
	}
}
.bottom-menu {
	position: absolute;
	bottom: 0;
}

.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
