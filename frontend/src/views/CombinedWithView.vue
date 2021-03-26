<template>
  <div class="home">
    <CombinedWith
      v-bind:probability="getProbabilityCombinedWith"
      v-bind:result="getResultCombinedWith"
    />
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Options, Vue } from "vue-class-component";
import CombinedWith from "@/components/CombinedWith.vue"; // @ is an alias to /src

@Options({
  components: {
    CombinedWith
  },
  computed: {
    ...mapGetters(["getProbabilityCombinedWith", "getResultCombinedWith"])
  }
})
export default class CombinedWithView extends Vue {}
</script>
