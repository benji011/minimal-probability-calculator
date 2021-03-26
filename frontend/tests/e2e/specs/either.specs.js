describe("Either", () => {
  const firstSliderXPath =
    "/html/body/div[1]/div[2]/section/section/main/div/div[1]/div/div[2]/div";
  const secondSliderXPath =
    "/html/body/div[1]/div[2]/section/section/main/div/div[2]/div/div[2]/div";

  beforeEach(() => {
    cy.visit("/either");
  });

  it("Visits the app root url and checks 2 calculator sliders exist", () => {
    cy.getByDataCy("either_first-slider").should("be.visible");
    cy.getByDataCy("either_second-slider").should("be.visible");
  });

  it("Checks the first slider can be moved to 0.5", () => {
    cy.moveSlider(firstSliderXPath, 300, 100).then(() => {
      cy.getByDataCy("either-result_el-main").should("have.text", "0");
    });
  });

  it("Checks the second slider can be moved to 0.5", () => {
    cy.moveSlider(secondSliderXPath, 300, 100).then(() => {
      cy.getByDataCy("either-result_el-main").should("have.text", "0");
    });
  });

  it("Checks result is 0.25 after moving both sliders to 0.5", () => {
    cy.moveSlider(firstSliderXPath, 300, 100);
    cy.moveSlider(secondSliderXPath, 300, 100);
    cy.getByDataCy("either-result_el-main").should("have.text", "0.75");
  });

  it("Checks result is 1 after moving both sliders to 1", () => {
    cy.moveSlider(firstSliderXPath, 600, 100);
    cy.moveSlider(secondSliderXPath, 600, 100);
    cy.getByDataCy("either-result_el-main").should("have.text", "1");
  });
});
