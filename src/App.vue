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
          <md-list-item  @click="selectedNote = note" v-for="note of notes" href="#" :key="note.id">{{note.title}}</md-list-item>
          <md-divider></md-divider>
          <md-list-item>Nieuw</md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <note :note="selectedNote"></note>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import NotesService from "./services/NotesService";
import Note from "./components/Note.vue";

export default {
  name: "App",
  components: { Note },
  data: () => {
    return {
      notes: [],
      selectedNote: undefined,
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
