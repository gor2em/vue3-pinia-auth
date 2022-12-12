import { defineStore } from "pinia";
import router from "../router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    loading: false,
  }),

  //login logout
  actions: {
    handleLogin(data) {
      if (!data.username || !data.password) {
        return alert("boşlukları doldurun");
      }

      this.loading = true;

      setTimeout(() => {
        delete data.password;
        this.user = data;
        this.loading = false;
        router.push({ name: "home" });
      }, 1000);
    },

    handeLogout() {
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

  //localStorage
  persist: true,
});
