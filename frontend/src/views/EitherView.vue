<template>
  <div class="either">
    <Either
      v-bind:probability="getProbabilityEither"
      v-bind:result="getResultEither"
    />
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Options, Vue } from "vue-class-component";
import Either from "@/components/Either.vue";

@Options({
  components: {
    Either
  },
  computed: {
    ...mapGetters(["getProbabilityEither", "getResultEither"])
  }
})
export default class EitherView extends Vue {}
</script>
