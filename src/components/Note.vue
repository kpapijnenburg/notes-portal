<template>
  <div>
    <div v-if="note">
      <h1 class="md-display-1">{{this.note.title}}</h1>
      <img src="https://ocr-demo.abtosoftware.com/uploads/handwritten2.jpg" alt />
      <div v-if="handwriting">
        <p v-for="sentence of sentences" :key="sentence.id">{{sentence}}</p>
        <p>Status: {{this.handwriting.state}}</p>
      </div>
      <p>Aangemaakt op: {{this.note.createdAt | localeDate}}</p>
      <p>Laats aangepast op: {{this.note.updatedAt | localeDate}}</p>
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
  },
};
</script>