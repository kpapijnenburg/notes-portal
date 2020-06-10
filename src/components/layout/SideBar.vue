<template>
  <md-app-drawer md-permanent="card">
    <md-toolbar class="md-transparent md-title" md-elevation="0">Mijn Notities</md-toolbar>
    <md-list>
      <md-divider></md-divider>
      <md-list-item
        v-for="note of $store.state.notes"
        :to="`/view/${note.id}`"
        :key="note.id"
      >{{note.title}}</md-list-item>
      <md-divider></md-divider>
      <md-list-item>
        <md-button
          to="/create"
          class="md-icon-button md-dense md-raised md-primary md-alignment-right"
        >
          <md-icon>+</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </md-app-drawer>
</template>

<script>
export default {
  data: () => {
    return {
      loggedIn: true
    };
  }
};
</script>

<style>
</style>