<template>
  <div v-if="note && handwriting">
    <md-card>
      <md-card-header>
        <div class="md-title">{{this.note.title}}</div>
      </md-card-header>
      <md-card-media>
        <img v-bind:src="'data:image/png;base64, ' + this.handwriting.image" alt="Geen image" />
      </md-card-media>
      <md-card-content>
        <p class="md-body-2" v-for="sentence of sentences" :key="sentence.id">{{sentence}}</p>
      </md-card-content>
    </md-card>
    <div v-if="!note">Selecteer een notitie...</div>
  </div>
</template>

<script>
import HandwritingService from "../services/HandwritingService";
import NoteService from "../services/NotesService";

export default {
  name: "Note",
  data: () => {
    return {
      handwriting: undefined,
      note: undefined,
      sentences: [],
      noteService: new NoteService(),
      handwritingService: new HandwritingService()
    };
  },
  watch: {
    async note() {
      if (this.note !== undefined) {
        this.handwriting = (
          await this.handwritingService.GetByNoteId(this.note.id)
        )[0];
        this.sentences = this.handwriting.content.split(/\r?\n/g);
      }
    },
    async $route() {
      this.note = await this.noteService.getById(this.$route.params.id);
    }
  },
  filters: {
    localeDate(value) {
      return new Date(value).toLocaleDateString("nl-NL");
    }
  }
};
</script>

<style scoped>
.md-card {
  margin: auto;
  display: inline-block;
}
</style>