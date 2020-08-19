<template>
 <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col sm="3" cols="12">
        <v-card>
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="128"
            tile
          >
            <v-img :src="'/'+getUser.avatar"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">{{getUser.name}}</v-list-item-title>
               <v-list-item-subtitle>{{getUser.email}}</v-list-item-subtitle>
              <v-list-item-subtitle>{{getUser.bdate}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        </v-card>
      </v-col>
  </v-row>
</v-container>
</template>


<script>

export default {
  middleware: 'auth',
  data () {
    return {

    }
  },
  computed: {
    getUser(){
      return this.$store.getters.USER;
    }
  }
}
</script>
