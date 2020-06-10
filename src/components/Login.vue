<template>
  <div class="container">
    <form @submit.prevent>
      <h2>Inloggen</h2>
      <md-field>
        <label for="email">Email adres</label>
        <md-input type="text" v-model="email" name="email"></md-input>
      </md-field>
      <span v-show="submitted && !email" class="invalid-feedback">Emailadres is benodigd</span>
      <md-field>
        <label for="password">Wachtwoord</label>
        <md-input type="password" v-model="password" name="password"></md-input>
      </md-field>
      <div v-show="submitted && !password" class="invalid-feedback">Wachtwoord is benodigd</div>
      <div>
        <div v-if="alert.message" class="invalid-feedback">
          <span>{{alert.message}}</span>
        </div>
        <md-button
          v-on:click="handleSubmit"
          class="md-raised md-primary"
          :disabled="loggingIn"
        >Inloggen</md-button>
        <img
          v-show="loggingIn"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
      </div>
      <hr />
      <span>
        Nog geen account? Klik
        <a href="/register">hier</a> om te registreren
      </span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false
    };
  },
  computed: {
    alert() {
      return this.$store.state.alert;
    },
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    }
  },
  watch: {
    $route() {
      this.$store.dispatch("alert/clear");
    }
  },
  created() {
    // reset login status
    this.$store.dispatch("authentication/logout");
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { email, password } = this;
      const { dispatch } = this.$store;

      if (email && password) {
        dispatch("authentication/login", { email, password });
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