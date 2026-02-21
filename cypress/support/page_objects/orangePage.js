class OrangePage {
  // Lokator: Menyimpan alamat tombol/input
  get usernameInput() { return 'input[name="username"]'; }
  get passwordInput() { return 'input[name="password"]'; }
  get loginButton() { return 'button[type="submit"]'; }
  get forgotPasswordLink() { return '.orangehrm-login-forgot-header'; }
  get menuDirectory() { return 'a[href*="directory"]'; }

  // Action: Fungsi untuk melakukan sesuatu
  login(user, pass) {
    cy.get(this.usernameInput).type(user);
    cy.get(this.passwordInput).type(pass);
    cy.get(this.loginButton).click();
  }
}
export default new OrangePage();