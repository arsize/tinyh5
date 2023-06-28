import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("../Home.vue") },
]

export { routes }
