import { createRouter, createWebHistory } from "vue-router";

import root from "./root.js";

export default createRouter({
  history: createWebHistory(),
  routes: [root],
});
