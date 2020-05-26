<template>
  <div class="hello">
    <div id="app">
      <v-app id="inspire">
        <v-card>
          <v-card-title>
            Frend List
            <v-spacer></v-spacer>

        
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="apiData"
            :search="search"
            item-key="name.first"
            @click:row="handleClick"
          >
            <template v-slot:body.prepend>
              <tr>
                <td>
                  <v-text-field
                    v-model="name"
                    type="text"
                    label="Name"
                  ></v-text-field>
                </td>
                <td></td>
                <td>
                  <v-text-field
                    v-model="age"
                    type="number"
                    label="Less than"
                  ></v-text-field>
                </td>
                <td></td>
                <td>
                  <v-text-field
                    v-model="phone"
                    type="text"
                    label="Exact number"
                  ></v-text-field>
                </td>
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

  handleClick(value: Record<string, any>) {
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
    });
  }

  search?: string = "";
  apiData: Array<Record<string, any>> = [];
  phone?: string = "";
  email?: string = "";
  name?: string = "";
  age?: string = "";

  get headers() {
    return [
      {
        text: "Name",
        align: "start",
        sortable: true,
        value: "name.first",
        filter: (f: string) => {
          return (f + "").toLowerCase().includes(this.name.toLowerCase());
        }
      },
      { text: "Avatar", value: "picture" },
      {
        text: "Age",
        value: "dob.age",
        filter: (value: number) => {
          if (!this.age) return true;
          return value < parseInt(this.age);
        }
      },
      {
        text: "Email",
        value: "email"
      },
      {
        text: "Phone",
        value: "phone",
        filter: (value: string) => {
          if (!this.phone) return true;
          return value === this.phone;
        }
      },
      { text: "City", value: "location.city" }
    ];
  }
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
