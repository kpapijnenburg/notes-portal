<template>
  <div>
    <div v-if="note && handwriting">
      <h1 class="md-headline">{{this.note.title}}</h1>
      <div class="md-layout">
        <p
          class="md-caption md-layout-item md-size-20"
        >Aangemaakt op: {{this.note.createdAt | localeDate}}</p>
        <p
          class="md-caption md-layout-item md-size-20"
        >Laats aangepast op: {{this.note.updatedAt | localeDate}}</p>
        <p class="md-caption md-layout-item md-size-20">Status: {{this.handwriting.state}}</p>
      </div>
      <md-card class="md-elevation-2">
        <md-card-media>
          <img src="https://via.placeholder.com/300x200" alt />
        </md-card-media>
      </md-card>
      <div v-if="handwriting">
        <p
          class="md-display-1 md-layout md-alignment-center"
          v-for="sentence of sentences"
          :key="sentence.id"
        >{{sentence}}</p>
      </div>
    </div>
    <div v-if="!note">Selecteer een notitie...</div>
  </div>
</template>

<script>
import HandwritingService from "../services/HandwritingService";

export default {
  name: "Note",
  props: ["note"],
  components: {},
  data: () => {
    return {
      handwriting: undefined,
      sentences: [],
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