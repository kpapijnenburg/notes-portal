<template>
  <div>
    <h1 class="md-display-1">{{this.note.title}}</h1>
  </div>
</template>

<script>
import NotesService from "../services/NotesService";

export default {
  name: "Note",
  components: {},
  data: () => {
    return {
      note: {},
      service: new NotesService()
    };
  },
  async mounted() {
    this.note = await this.service.GetById(1);
  }
};
</script>