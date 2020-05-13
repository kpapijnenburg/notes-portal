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
          <md-list-item
            @click="selectedNote = note"
            v-for="note of notes"
            href="#"
            :key="note.id"
          >{{note.title}}</md-list-item>
          <md-divider></md-divider>
          <md-list-item>
            <md-button
              @click="handleClick"
              class="md-icon-button md-dense md-raised md-primary md-alignment-right"
            >
              <md-icon>+</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view></router-view>
        <!-- <div v-if="selectedNote">
          <note :note="selectedNote"></note>
        </div>
        <div v-if="!selectedNote">
          <create @created="handleCreate"></create>
        </div> -->
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import NotesService from "./services/NotesService";
// import Note from "./components/Note.vue";
// import Create from "./components/Create.vue";

export default {
  name: "App",
  // components: { Note, Create },
  data: () => {
    return {
      notes: [],
      selectedNote: undefined,
      service: new NotesService()
    };
  },
  methods: {
    handleClick() {
      this.selectedNote = undefined;
    },
    async handleCreate(note) {
      const created = await this.service.Create(note);
      console.log(created);
    }
  },
  async mounted() {
    this.notes = await this.service.Get();
    console.log(this.notes);
  }
};
</script>

<style >
</style>
