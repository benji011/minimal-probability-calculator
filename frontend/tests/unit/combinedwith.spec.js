import { mount, shallowMount } from "@vue/test-utils";
import CombinedWith from "@/components/CombinedWith.vue";

describe("CombinedWith.vue", () => {
  test("renders a CombinedWith", () => {
    const testProps = {
      props: {
        probability: {
          first: 0,
          second: 0
        },
        result: 0
      }
    };
    const wrapper = mount(CombinedWith, testProps);
    const combinedWith = wrapper.get('[data-test="combined-with_header"]');
    expect(combinedWith.text()).toBe(
      "Probability calculator - CombinedWith: P(A)P(B)"
    );
  });

  test("renders set probability {first: 0.5, second: 0.5}", () => {
    const testProps = {
      props: {
        probability: {
          first: 0.5,
          second: 0.5
        },
        result: 0.25
      }
    };
    const wrapper = shallowMount(CombinedWith, testProps);
    const combinedWith = wrapper.get('[data-test="combined-with_el_main"]');
    expect(combinedWith.text()).toContain('"first": 0.5');
    expect(combinedWith.text()).toContain('"second": 0.5');
  });

  test("renders calculated probability to be '0.25'", () => {
    const testProps = {
      props: {
        probability: {
          first: 0.5,
          second: 0.5
        },
        result: 0.25
      }
    };
    const wrapper = shallowMount(CombinedWith, testProps);
    const combinedWith = wrapper.get(
      '[data-test="combined-with-result_el-main"]'
    );
    expect(combinedWith.text()).toBe("0.25");
  });
});
