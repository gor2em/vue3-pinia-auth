import { createPinia } from "pinia";
import { markRaw } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "../router";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

pinia.use(piniaPluginPersistedstate);

export default pinia;
