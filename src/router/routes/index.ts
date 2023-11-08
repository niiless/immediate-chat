import Layout from "@/views/layout/index.vue";

export const RootRoute = {
	path: "/",
	name: "index",
	component: Layout,
	meta: {
		title: "index",
	},
	children: [
		{
			path: "/chat",
			component: () => import("@/views/content/chat/index.vue"),
			name: "Chat",
		},
		{
			path: "/friend",
			component: () => import("@/views/content/friends/index.vue"),
			name: "Friends",
		},
		{
			path: "/collect",
			component: () => import("@/views/content/collect/index.vue"),
			name: "Collect",
		},
	],
};

export const basicRoutes = [RootRoute];
