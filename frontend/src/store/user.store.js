import userService from "../services/user-service";

export const userStore = {
  state: {
    user: null,
    isDarkMode: false,
  },
  getters: {
    loggedInUser(state) {
      return state.user;
    },
    darkMode(state) {
      return state.isDarkMode;
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
    logoutUser(state) {
      state.users = null;
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      document.body.classList.toggle("theme-dark", state.isDarkMode);
      localStorage.setItem("theme-dark", state.isDarkMode.toString());
    },
    initializeDarkMode(state) {
      const darkModeSetting = localStorage.getItem("theme-dark");
      if (darkModeSetting) {
        state.isDarkMode = darkModeSetting === "true";
        document.body.classList.toggle("theme-dark", state.isDarkMode);
      }
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit("toggleDarkMode");
    },
    async loadUser({ commit }, { userId }) {
      const user = await userService.getById("5fc5fd32768787be41a9a627");
      commit({ type: "setUser", user });
    },
  },
};
