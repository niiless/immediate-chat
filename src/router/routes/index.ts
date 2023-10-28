export const RootRoute = {
	path: "/",
	name: "Root",
	redirect: "",
	meta: {
		title: "Root",
	},
};

export const LeftMenu = {
	path: "/a",
	name: "A",
	component: () => import("/@/view/A.vue"),
	meta: {
		title: "A页面",
	},
};

export const BRoute = {
	path: "/b",
	name: "B",
	component: () => import("/@/view/B.vue"),
	meta: {
		title: "B页面",
	},
};

export const basicRoutes = [RootRoute];
