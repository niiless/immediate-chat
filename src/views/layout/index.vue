<script setup lang="ts">
import { ref } from "vue";
import Menu from "@/views/menu/index.vue";
import Setting from "@/views/content/setting/index.vue";
import Zone from "@/views/content/zone/index.vue";

const showSetting = ref(false);
const showZone = ref(false);
const currentKey = ref(1);

function closeSetting() {
	showSetting.value = false;
}
function closeFriendZone() {
	showZone.value = false;
}
function clickSettingMenu() {
	showSetting.value = true;
}
function clickZoneMenu() {
	showZone.value = true;
}
</script>

<template>
	<div style="display: flex">
		<Menu @clickSettingMenu="clickSettingMenu" @clickZoneMenu="clickZoneMenu" />
		<RouterView />
		<Setting v-if="showSetting" @closeSetting="closeSetting"></Setting>
		<Zone v-if="showZone" @closeFriendZone="closeFriendZone"></Zone>
	</div>
</template>

<style lang="less" scoped></style>
