<template>
  <md-card>
    <md-card-header>
      <md-field>
        <label>Titel</label>
        <md-input v-model="title" type="text" />
      </md-field>
    </md-card-header>
    <md-card-media>
      <canvas width="500" height="300" @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw" id="canvas"></canvas>
    </md-card-media>
    <md-card-content>
      <md-button @click="handleAddClick" class="md-raised md-primary">Toevoegen</md-button>
      <md-button class="md-raised md-accent">Annuleren</md-button>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "Create",
  data: () => {
    return {
      title: "",
      vueCanvas: null,
      canvas: null,
      ctx: null,
      painting: false
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
    handleAddClick() {
      const note = {
        title: this.title,
        imageData: this.canvas.toDataURL(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      
      this.$emit('created', note);
    }
  },
  mounted() {
    // Resize canvas
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.vueCanvas = this.ctx;
    // tutorial https://codesource.io/build-a-drawing-app-with-and-vuejs-html5-canvas/
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