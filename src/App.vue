<template>
  <div class="page-container">
    <md-app class="md-app">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Notities</span>
        <md-button class="md-icon-button" to="/login">
          <md-icon class="fa fa-user"></md-icon>
        </md-button>
      </md-app-toolbar>
      <side-bar></side-bar>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import NotesService from "./services/NotesService";
import SideBar from "./components/layout/SideBar.vue";

export default {
  name: "App",
  components: {
    "side-bar": SideBar
  },
  data: () => {
    return {
      service: new NotesService()
    };
  },
  async mounted() {
    this.$store.state.notes = await this.service.Get();
  }
};
</script>

<style >
</style>
