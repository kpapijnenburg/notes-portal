<template>
  <div id="app">
    <div v-for="note of notes" :key="note.id">
      <h2>{{note.title}}</h2>
      <p>{{note.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      notes: []
    }
  },
  async mounted() {
    this.notes = await fetch('/api/notes').then(res => res.json()).catch(err => { throw err} );
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
