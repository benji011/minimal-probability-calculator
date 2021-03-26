import { shallowMount, mount } from "@vue/test-utils";
import Either from "@/components/Either.vue";

describe("Either.vue", () => {
  test("renders a Either", () => {
    const testProps = {
      props: {
        probability: {
          first: 0,
          second: 0
        },
        result: 0
      }
    };
    const wrapper = mount(Either, testProps);
    const combinedWith = wrapper.get('[data-test="either_header"]');
    expect(combinedWith.text()).toBe(
      "Probability calculator - Either:P(A) + P(B) - P(A)P(B)"
    );
  });

  test("renders 0.75 when probability {first: 0.5, second: 0.5} are passed", () => {
    const testProps = {
      props: {
        probability: {
          first: 0.5,
          second: 0.5
        },
        result: 0.75
      }
    };
    const wrapper = shallowMount(Either, testProps);
    const combinedWith = wrapper.get('[data-test="either_el_main"]');
    expect(combinedWith.text()).toContain('"first": 0.5');
    expect(combinedWith.text()).toContain('"second": 0.5');
  });

  test("renders calculated probability to be '0.75'", () => {
    const testProps = {
      props: {
        probability: {
          first: 0.5,
          second: 0.5
        },
        result: 0.75
      }
    };
    const wrapper = shallowMount(Either, testProps);
    const combinedWith = wrapper.get('[data-test="either-result_el-main"]');
    expect(combinedWith.text()).toBe("0.75");
  });
});
