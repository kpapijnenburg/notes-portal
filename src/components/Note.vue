<template>
  <div>
    <h1 class="md-display-1">{{this.title}}</h1>
    <img src="https://ocr-demo.abtosoftware.com/uploads/handwritten2.jpg" alt="">
    <p v-for="sentence of sentences" :key="sentence.id">{{sentence}}</p>
    <p>Status: {{this.status}}</p>
    <p>Aangemaakt op: {{this.createdAt}}</p>
    <p>Laats aangepast op: {{this.updatedAt}}</p>
  </div>
</template>

<script>
import NotesService from "../services/NotesService";
import HandwritingService from "../services/HandwritingService";

export default {
  name: "Note",
  components: {},
  data: () => {
    return {
      note: {},
      handwritings: [],
      title: "",
      createdAt: "",
      updatedAt: "",
      status: "",
      image: "",
      sentences: [],
      notesService: new NotesService(),
      handwritingService: new HandwritingService()
    };
  },
  methods: {
    processNote() {
        this.title = this.note.title,
        this.createdAt = (new Date(this.note.createdAt).toLocaleDateString('nl-NL')),
        this.updatedAt = (new Date(this.note.updatedAt).toLocaleDateString('nl-NL')),
        this.image = this.note.imageData
    },
    processHandwritings() {
        this.separeteSentences()
        this.status = this.handwritings[0].state;
    },
    separeteSentences() {
      this.handwritings.forEach(handwriting => {
        this.sentences = handwriting.content.split(/\r?\n/g);
      });
    }
  },
  async mounted() {
    this.note = await this.notesService.GetById(1);
    this.processNote()
    this.handwritings = await this.handwritingService.GetByNoteId(this.note.id);
    this.processHandwritings();
  }
};
</script>