<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto" max-width="644" outlined>
        <v-list-item>
          <v-list-item-content>
            <div class="overline mb-4">Detail Card</div>
            <v-list-item-title class="headline mb-1">{{
              `${detailData.name.title}  ${detailData.name.first} ${detailData.name.last}`
            }}</v-list-item-title>

            <div class="styleFlex" style="padding-top: 20px;">
              <div>Email :</div>
              <div>{{ `${detailData.email}` }}</div>
            </div>
            <div class="styleFlex">
              <div>Username :</div>
              <div>{{ `${detailData.login.username}` }}</div>
            </div>
            <div class="styleFlex">
              <div>Gender:</div>
              <div>{{ `${detailData.gender}` }}</div>
            </div>
            <div class="styleFlex">
              <div>Age:</div>
              <div>{{ `${detailData.dob.age}` }}</div>
            </div>
            <div class="styleFlex">
              <div>Phone:</div>
              <div>{{ `${detailData.phone}` }}</div>
            </div>
            <div class="styleFlex">
              <div>Country:</div>
              <div>{{ `${detailData.location.country}` }}</div>
            </div>
            <div class="styleFlex">
              <div>Nationality:</div>
              <div>{{ `${detailData.nat}` }}</div>
            </div>
            <div class="styleFlex">
              <div>City:</div>
              <div>{{ `${detailData.location.city}` }}</div>
            </div>
          </v-list-item-content>

          <v-list-item-avatar tile size="200">
            <v-img
              height="200"
              width="200"
              :src="detailData.picture.large"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import users from "../store/modules/users";
@Component
export default class HomePage extends Vue {
  detailData: any = {};

  mounted() {
    this.detailData = users.user;
  }
}
</script>

<style>
.styleFlex {
  display: flex;
  justify-content: space-between;
}
</style>
