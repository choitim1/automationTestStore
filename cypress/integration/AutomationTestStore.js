/// <reference types ='cypress'/>
describe("navigate to main page", () => {
  it("it should to access to page", function () {
    cy.visit("/");
    cy.url().should("eq", "https://automationteststore.com/");
    cy.get("#customer_menu_top > li >a").click();
    cy.get(".newcustomer > .heading2").should(
      "have.text",
      "I am a new customer."
    );
    cy.get("#accountFrm > fieldset > .btn").click();
    cy.url().should(
      "equal",
      "https://automationteststore.com/index.php?rt=account/create"
    );
  });
});
describe("CREATE ACCOUNT", () => {
  let num = Math.floor(Math.random() * 1000 + 1);

  before(function () {
    cy.visit("/index.php?rt=account/create");
  });
  it("Your Personal Details", () => {
    cy.get("#AccountFrm_firstname").type("Timur");
    cy.get("#AccountFrm_lastname").type("Choi");
    cy.get("#AccountFrm_email").type(`choitim${num}@mail.ru`);
    cy.get("#AccountFrm_address_1").type(" 1020 S West. Ave ");
    cy.get("#AccountFrm_country_id")
      .select("Kyrgyzstan")
      .should("have.value", "115");
    cy.get("#AccountFrm_zone_id")
      .select("Bishkek")
      .should("have.value", "1793");
    cy.get("#AccountFrm_city").type("Bishkek");
    cy.get("#AccountFrm_postcode").type("720072");
    cy.get("#AccountFrm_loginname", { timeout: 2000 }).type(`choitim${num}`);
    cy.get("#AccountFrm_password", { timeout: 2000 }).type("test1");
    cy.get("#AccountFrm_confirm", { timeout: 2000 }).type("test1");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree", { timeout: 2000 }).click().should("be.checked");
    cy.get(".col-md-2 > .btn", { timeout: 2000 }).click();
    cy.get(".maintext").should("have.text", " Your Account Has Been Created!");
  });
});
// ====> если убрать beforeEach то не работает
// ====> если разбить на it то не работает
