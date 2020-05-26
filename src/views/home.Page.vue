<template>
  <div class="home">
    <HelloWorld2 msg="Home Page" />
    <v-btn text small>End</v-btn>
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld2 from "@/components/HelloWorld2.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    HelloWorld2
  }
})
export default class HomePage extends Vue {
  
}
</script>
