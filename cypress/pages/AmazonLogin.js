class LoginPage {
    visit() {
        cy.visit("https://www.amazon.in/s?k=join+amazon+prime&adgrpid=1327112148528381&hvadid=82944775541359&hvbmt=bb&hvdev=c&hvlocphy=157689&hvnetw=o&hvqmt=b&hvtargid=kwd-82945393014646%3Aloc-90&hydadcr=5626_2377281&mcid=3861a9d242543041b997efa1f39279d3&msclkid=c099b4ff045d1c944006dd557475a908&tag=msndeskstdin-21&ref=pd_sl_9ntprzamt3_b");
        cy.get("#nav-link-accountList-nav-line-1").click();
        cy.get("#ap_email_login").should("be.visible");
    }


    username(username) {
        cy.get("#ap_email_login").type(username);
        cy.get("#continue").click();
    }
    password(password) {
        cy.get("#ap_password").type(password);
    }
    submit() {
        cy.get("#signInSubmit").click();
    }
}
export default new LoginPage();