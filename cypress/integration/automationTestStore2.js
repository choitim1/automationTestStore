/// <reference types ='cypress'/>
describe("Registration", () => {
  let num = Math.floor(Math.random() * 1000 + 1);
  it("navigate to home page", () => {
    cy.visit("/");
    cy.url().should("equal", "https://automationteststore.com/");
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

  it("Your Personal Details", () => {
    cy.get("#AccountFrm_firstname").type("Timur");
    //.should("have.text", "Timur");
    cy.get("#AccountFrm_lastname").type("Choi");
    //.should("have.text", "Choi");
    cy.get("#AccountFrm_email").type(`choitim${num}@mail.ru`);
    //.should("not.be.empty");
    // assertion is not working
  });
  it("Your Address", function () {
    cy.get("#AccountFrm_address_1").type(" 1020 S West. Ave ");
    //.should("have.text", "1020 S West. Ave ");
    cy.get("#AccountFrm_country_id")
      .select("Kyrgyzstan")
      .should("have.value", "115");
    cy.get("#AccountFrm_zone_id").select("Bishkek");
    //.should("have.value", "1793");
    cy.get("#AccountFrm_city").type("Bishkek");
    //.should("have.text", "Bishkek");
    cy.get("#AccountFrm_postcode").type("720072");
    //.should("have.text", "720072");
  });
  it("Login Details", () => {
    cy.get("#AccountFrm_loginname").type(`choitim${num}`);
    //.should("not.be.empty");
    cy.get("#AccountFrm_password").type("test1");
    //.should("have.text", "test1");
    cy.get("#AccountFrm_confirm").type("test1");
    //.should("have.text", "test1");
  });
  it("Newsletter", () => {
    cy.get("#AccountFrm_newsletter0").click().should("be.checked");
  });
  it("Privacy Policy", () => {
    cy.get("#AccountFrm_agree").click().should("be.checked");
  });
  it("continue", () => {
    cy.get(".col-md-2 > .btn").click();
  });
  // it("Input password again", () => {
  //   cy.get("#AccountFrm_password").type("test1");
  //   cy.wait(2000);
  //   cy.get("#AccountFrm_confirm").type("test1");
  //   cy.wait(2000);
  //   cy.get(".col-md-2 > .btn").click();
  // });
  it("Your Account Has Been Created", () => {
    cy.get(".maintext")
      .click()
      .should("have.text", " Your Account Has Been Created!");
  });
});

//========> почему проверки не работают
//========> почему не  сохраняется пароль
//========> если вводить пароль в ручную и кликать на continue то все работает
