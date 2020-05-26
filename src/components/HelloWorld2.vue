<template>
  <div class="hello">
    <div id="app">
      <v-app id="inspire">
        <v-card>
          <v-card-title>
            Frend List
            <v-spacer></v-spacer>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="apiData"
            :search="search"
            @click:row="handleClick"
          >
            <template slot="headers" slot-scope="props">
              <tr class="grey lighten-3">
                <th>
                  <v-icon>filter_list</v-icon>
                </th>
                <th v-for="header in props.headers" :key="header.text">
                  <div v-if="filters.hasOwnProperty(header.value)">
                    <v-select
                      flat
                      hide-details
                      small
                      multiple
                      clearable
                      :items="columnValueList(header.value)"
                      v-model="filters[header.value]"
                    >
                    </v-select>
                  </div>
                </th>
              </tr>
            </template>
            <template v-slot:item.picture="{ item }">
              <v-avatar>
                <img :src="item.picture.thumbnail" />
              </v-avatar>
            </template>
          </v-data-table>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import router from "../router";
import users from "../store/modules/users";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  handleClick(value: any) {
    console.log("click", value);
    users.SET_SIMPLE_USER(value);
    router.push("About");
  }

  async getData(url: string) {
    const response = await fetch(url);
    return await response.json();
  }
  mounted() {
    this.getData("https://randomuser.me/api/?results=100").then(data => {
      this.apiData = data.results;
      console.log("Start", data); // JSON data parsed by `response.json()` call
    });
  }

  search?: string = "";
  apiData: Array<Record<string, any>> = [];
  slots: Array<string> = [
    "body",
    "item.data-table-select",
    "item.<name>",
    "no-data",
    "no-results"
  ];
  filters: Record<string, any> = {
    Age: [],
    Name: []
  };
  headers: Array<Record<string, any>> = [
    {
      text: "Name",
      align: "start",
      sortable: true,
      value: "name.first"
    },
    { text: "Avatar", value: "picture" },
    { text: "Age", value: "dob.age" },
    { text: "Email", value: "email" },
    { text: "Phone", value: "phone" },
    { text: "City", value: "location.city" }
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
