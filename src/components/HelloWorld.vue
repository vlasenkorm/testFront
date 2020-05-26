<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="app">
      <v-app id="inspire">
        sort by name
        <v-list  v-for="item in items" :key="item.title">
          <v-card class="mx-auto" max-width="644" outlined>
            <v-list-item>
              
              <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title v-text="item.title" class="headline mb-1">Headline 5</v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar 
                tile size="80" color="grey">
              </v-list-item-avatar>

            </v-list-item>
            <v-card-actions>
                <v-btn text>Detail</v-btn>
              </v-card-actions>
          </v-card>
        </v-list>
      </v-app>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  items = [
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
  ];
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
