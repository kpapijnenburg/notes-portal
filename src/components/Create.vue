<template>
  <md-card>
    <md-card-header>
      <md-field>
        <label>Titel</label>
        <md-input v-model="title" type="text" />
      </md-field>
    </md-card-header>
    <md-card-media>
      <canvas
        width="500"
        height="300"
        @mousedown="startPainting"
        @mouseup="finishedPainting"
        @mousemove="draw"
        id="canvas"
      ></canvas>
    </md-card-media>
    <md-card-content>
      <md-button @click="handleAddClick" class="md-raised md-primary">Toevoegen</md-button>
      <md-button class="md-raised md-accent">Annuleren</md-button>
    </md-card-content>
  </md-card>
</template>

<script>
import NoteService from "../services/NotesService";

export default {
  name: "Create",
  data: () => {
    return {
      title: "",
      vueCanvas: null,
      canvas: null,
      ctx: null,
      painting: false,
      service: new NoteService()
    };
  },
  methods: {
    startPainting(e) {
      this.painting = true;
      this.draw(e);
    },
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath();
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = 3;
      this.ctx.lineCap = "round";

      this.ctx.lineTo(e.layerX, e.layerY);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(e.layerX, e.layerY);
    },
    async handleAddClick() {
      const note = {
        title: this.title,
        imageData: this.canvas.toDataURL()
      };

      const created = await this.service.Create(note);

      if (created) {
        this.$store.commit("add", created);
        this.$router.push({ path: `/view/${created.id}` });
      }
    }
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.vueCanvas = this.ctx;
  }
};
</script>

<style scoped>
.md-card {
  margin: auto;
  display: inline-block;
}
#canvas {
  border: 1px solid grey;
  height: 300px;
  width: 500px;
}
</style>