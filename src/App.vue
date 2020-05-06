<template>
  <!-- <navbar></navbar>
      <h1 class="md-title">Notities</h1>
      <md-list>
        <md-list-item class="md-elevation-1" v-for="note of notes" :key="note.id" href="/">{{note.title}}</md-list-item>
  </md-list>-->
  <div class="page-container">
    <md-app class="md-app">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Notities</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="card">
        <md-toolbar class="md-transparent md-title" md-elevation="0">Mijn notities</md-toolbar>
        <md-list>
        <md-divider></md-divider>
          <md-list-item v-for="note of notes" :key="note.id" href="/">{{note.title}}</md-list-item>
          <md-divider></md-divider>
          <md-list-item>Nieuw</md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
//import NavBar from "./components/layout/NavBar";
import NotesService from "./services/NotesService";

export default {
  name: "App",
  components: {
    //navbar: NavBar
  },
  data: () => {
    return {
      notes: [],
      service: new NotesService()
    };
  },
  async mounted() {
    this.notes = await this.service.Get();
  }
};
</script>

<style scoped>
</style>
