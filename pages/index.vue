<template>
  <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col sm="2">
        <v-card>
          <v-container>
        <v-text-field
                v-model="username"
                label="Логин"
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                label="Пароль"
              ></v-text-field>
              <v-btn @click="Login()">Войти</v-btn>
              <div v-if="isError">Ошибка!</div>
          </v-container>
        </v-card>
      </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: '',
      title: 'Vuetify.js',
      error: false
    }
  },
  methods: {
    Login() {
      this.$store.dispatch('AUTH', [this.username, this.password]);
    }
  },
  computed: {
    isError(){
      return this.$store.getters.ISERROR;
    }
  }
}
</script>
