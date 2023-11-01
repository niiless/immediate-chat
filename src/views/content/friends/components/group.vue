<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps({
	list: {
		type: Array,
		default: [],
	},
});
const groupList = computed(() => props.list);
</script>

<template>
	<div class="group-chat">
		<div class="group-item" v-for="group in groupList" :key="group.id">
			<img :src="group.avatar" alt="" />
			<div class="group-name">
				{{ group.name }}
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.group-chat {
	width: 84%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	.group-item {
		width: 104px;
		height: 140px;
		padding: 16px 12px;
		margin-top: 20px;
		border-radius: 3px;
		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
		.group-name {
			width: 100%;
			text-align: center;
			margin-top: 10px;
			font-size: 16px;
			color: #999;
		}
	}
	.group-item:hover {
		background-color: #e7e7e7;
	}
}
</style>
