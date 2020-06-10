<template>
  <div class="page-container">
    <md-app class="md-app">
      <md-app-toolbar class="md-primary">
        <a href="/create">
          <span class="md-title" style="flex: 1">Notities</span>
        </a>
        <a href="/login">
          <md-button>Login</md-button>
        </a>
        <span>|</span>
        <md-button v-on:click="logout">Logout</md-button>
      </md-app-toolbar>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import NotesService from "./services/NotesService";
import UserService from "./services/UserService";

export default {
  name: "App",
  data: () => {
    return {
      service: new NotesService(),
      userService: new UserService()
    };
  },
  async mounted() {
    this.$store.state.notes = await this.service.Get();
  },
  methods: {
    logout() {
      this.userService.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style >
</style>
