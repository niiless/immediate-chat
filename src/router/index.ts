import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes/index";
import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";

// app router
export const router = createRouter({
	history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
	routes: basicRoutes as unknown as RouteRecordRaw[],
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
	app.use(router);
}
