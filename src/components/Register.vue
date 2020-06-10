<template>
  <div class="container">
    <form @submit.prevent>
      <h2>Registeren</h2>
      <md-field>
        <label for="username">Gebruikersnaam</label>
        <md-input type="text" v-model="username" name="username"></md-input>
      </md-field>
      <span v-show="submitted && !username" class="invalid-feedback">Gebruikersnaam is benodigd</span>
      <md-field>
        <label for="password">Wachtwoord</label>
        <md-input type="password" v-model="password" name="password"></md-input>
      </md-field>
        <span v-show="submitted && !password" class="invalid-feedback">Wachtwoord is benodigd</span>
      <div>
        <md-button v-on:click="handleSubmit" class="md-raised md-primary">Registreer</md-button>
      </div>
      <hr />
      <span>
        Al een account? Klik
        <a href="/login">hier</a> om in te loggen.
      </span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      const { dispatch } = this.$store;

      if (username && password) {
        dispatch("authentication/register", { username, password });
      }
    }
  }
};
</script>

<style>
.invalid-feedback {
  color: red;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>