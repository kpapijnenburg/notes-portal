<template>
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
        <note></note>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Note from "./components/Note.vue";
import NotesService from "./services/NotesService";

export default {
  name: "App",
  components: {
    note: Note
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

<style >
</style>
