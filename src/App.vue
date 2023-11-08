<script setup lang="ts"></script>

<template>
	<div><RouterView /></div>
</template>

<style lang="less" scoped>
:deep(.ant-menu-light .ant-menu-item-selected) {
	background-color: #d2d2d2;
	color: #000;
}
:deep(.ant-menu-submenu-title) {
	padding-left: 12px !important;
}
:deep(.ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title) {
	color: #000;
}
:deep(.ant-menu .ant-menu-item) {
	border-radius: 0;
	margin-inline: 0;
	padding-inline: 0;
	margin-block: 0;
	width: 100%;
	padding-left: 30px !important;
}
:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-menu-light:not(.ant-menu-horizontal) .ant-menu-submenu-title:hover) {
	background-color: transparent;
}
.ant-menu-light {
	color: #000;
	background: #f5f5f5;
	font-size: 16px;
}
:deep(.ant-menu-submenu-title) {
	padding-left: 0;
}
:deep(.ant-menu-submenu-arrow::after) {
	background-color: #a4a4a4;
}
:deep(.ant-menu-submenu-arrow::before) {
	background-color: #a4a4a4;
}
:deep(.ant-menu .ant-menu-item .ant-menu-item-icon + span) {
	margin-inline-start: 2px;
}
:deep(:where(.css-dev-only-do-not-override-185kyl0).ant-menu-light) {
	background: transparent;
}
</style>
