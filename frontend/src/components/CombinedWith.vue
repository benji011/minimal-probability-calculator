<template>
  <el-container direction="vertical">
    <header data-test="combined-with_header">
      Probability calculator - CombinedWith: P(A)P(B)
    </header>
    <el-container>
      <el-aside width="200px" />
      <el-main>
        <div class="block">
          <el-slider
            data-cy="combined-with_first-slider"
            v-model="probability.first"
            :step="0.1"
            :min="0"
            :max="1"
            @change="onChange"
          />
          <el-slider
            data-cy="combined-with_second-slider"
            v-model="probability.second"
            :step="0.1"
            :min="0"
            :max="1"
            @change="onChange"
          />

          <el-container>
            <el-aside width="200px">
              <el-header>
                <h3>First & second probabilities</h3>
              </el-header>
              <el-main
                data-cy="combined-with_el-main"
                data-test="combined-with_el_main"
              >
                {{ probability }}
              </el-main>
            </el-aside>
            <el-container>
              <el-header>
                <h3>Result</h3>
              </el-header>
              <el-main
                data-cy="combined-with-result_el-main"
                data-test="combined-with-result_el-main"
                >{{ result }}</el-main
              >
            </el-container>
          </el-container>
        </div>
      </el-main>
      <el-aside width="200px" />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IProbability } from "@/interface/IProbability";
import { TYPES } from "@/constants";

@Options({
  props: {
    probability: IProbability,
    result: Number,
  },
  methods: {
    onChange() {
      this.$store.dispatch("calculateResult", TYPES.COMBINED_WITH);
      this.$store.dispatch("logCalculation", TYPES.COMBINED_WITH);
    },
  },
})
export default class CombinedWith extends Vue {
  probability!: typeof IProbability;
  result!: number;
}
</script>
