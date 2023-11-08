<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineEmits, ref, onMounted } from "vue";
const emit = defineEmits(["clickSettingMenu", "clickZoneMenu"]);
const router = useRouter();
const activeKey = ref(1);

function handleToModule(type: number) {
	activeKey.value = type;
	switch (type) {
		case 1:
			router.push("/chat");
			break;
		case 2:
			router.push("/friend");
			break;
		case 3:
			router.push("/collect");
			break;
		case 4:
			break;
		case 5:
			emit("clickZoneMenu");
			break;
		case 6:
			break;
		case 7:
			break;
		case 8:
			break;
		case 9:
			break;
		case 10:
			break;
		case 11:
			emit("clickSettingMenu");
			break;
	}
}

onMounted(() => {
	router.push("/chat");
});
</script>

<template>
	<div class="menu">
		<div class="user-avatar flex-center">
			<img src="/src/assets/image/myAvatar.png" alt="" />
		</div>
		<div class="menu-item-box flex-center">
			<div class="item" :class="activeKey == 1 ? 'active-style' : ''" @click="handleToModule(1)">
				<img :src="`/src/assets/menuIcon/chat-${activeKey == 1 ? 'active' : 'normal'}.png`" alt="" />
			</div>
			<div class="item" :class="activeKey == 2 ? 'active-style' : ''" @click="handleToModule(2)">
				<img :src="`/src/assets/menuIcon/collect-${activeKey == 2 ? 'active' : 'normal'}.png`" alt="" />
			</div>
			<div class="item" :class="activeKey == 3 ? 'active-style' : ''" @click="handleToModule(3)">
				<img :src="`/src/assets/menuIcon/file-${activeKey == 3 ? 'active' : 'normal'}.png`" alt="" />
			</div>
			<div class="item" :class="activeKey == 4 ? 'active-style' : ''" @click="handleToModule(4)">
				<img :src="`/src/assets/menuIcon/friend-${activeKey == 4 ? 'active' : 'normal'}.png`" alt="" />
			</div>
			<div class="item" :class="activeKey == 5 ? 'active-style' : ''" @click="handleToModule(5)">
				<img :src="`/src/assets/menuIcon/zone-${activeKey == 5 ? 'active' : 'normal'}.png`" alt="" />
			</div>
			<div class="item" :class="activeKey == 6 ? 'active-style' : ''" @click="handleToModule(6)">
				<img :src="`/src/assets/menuIcon/video-${activeKey == 6 ? 'active' : 'normal'}.png`" alt="" />
			</div>
			<div class="item" :class="activeKey == 7 ? 'active-style' : ''" @click="handleToModule(7)">
				<img :src="`/src/assets/menuIcon/secret-${activeKey == 7 ? 'active' : 'normal'}.png`" class="h-17" alt="" />
			</div>
			<div class="item" :class="activeKey == 8 ? 'active-style' : ''" @click="handleToModule(8)">
				<img :src="`/src/assets/menuIcon/weather-${activeKey == 8 ? 'active' : 'normal'}.png`" class="h-26" alt="" />
			</div>
		</div>
		<div class="menu-item-box flex-center bottom-menu">
			<div class="item" :class="activeKey == 9 ? 'active-style' : ''" @click="handleToModule(9)">
				<img :src="`/src/assets/menuIcon/app-${activeKey == 9 ? 'active' : 'normal'}.png`" class="h-20" alt="" />
			</div>
			<div class="item" :class="activeKey == 10 ? 'active-style' : ''" @click="handleToModule(10)">
				<img :src="`/src/assets/menuIcon/wifi-${activeKey == 10 ? 'active' : 'normal'}.png`" class="h-26" alt="" />
			</div>
			<div class="item" :class="activeKey == 11 ? 'active-style' : ''" @click="handleToModule(11)">
				<img :src="`/src/assets/menuIcon/setting-${activeKey == 11 ? 'active' : 'normal'}.png`" class="h-17" alt="" />
			</div>
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
		cursor: pointer;
	}
}
.menu-item-box {
	width: 100%;
	flex-direction: column;
	.item {
		width: 40px;
		height: 40px;
		border-radius: 5px;
		margin-bottom: 11px;
		cursor: pointer;
		text-align: center;
		line-height: 40px;
		img {
			height: 22px;
		}
	}
}
.h-17 {
	height: 17px !important;
}
.h-20 {
	height: 20px !important;
}
.h-26 {
	height: 26px !important;
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
.active-style {
	background-color: #5d95ff;
}
</style>
