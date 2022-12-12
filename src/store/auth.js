import { defineStore } from "pinia";
import router from "../router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    loading: false,
  }),

  actions: {
    handleLogin(data) {
      if (!data.username || !data.password) {
        return alert("boşlukları doldurun!");
      }

      this.loading = true;
      setTimeout(() => {
        this.user = data;
        this.loading = false;
        router.push({ name: "home" });
      }, 1000);
    },

    handleLogout() {
      this.user = null;
      router.push({ name: "login" });
    },
  },

  getters: {
    isAuth: (state) => state.user != null,
    getCurrentUser(state) {
      return state.user;
    },
  },

  persist: true,
});
