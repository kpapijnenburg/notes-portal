<template>
  <div v-if="note && handwriting">
    <md-card>
      <md-card-header>
        <div class="md-title">{{this.note.title}}</div>
      </md-card-header>
      <md-card-media>
        <img img src="https://via.placeholder.com/500x300" alt />
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