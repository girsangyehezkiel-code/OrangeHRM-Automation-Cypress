import orangePage from '../support/page_objects/orangePage';

describe('Tugas Akhir QA: Fitur Login, Forgot Password, & Dashboard', () => {
  
  beforeEach(() => {
    // INTERCEPT: Menangkap trafik data (Syarat Tugas)
    cy.intercept('GET', '**/action-summary').as('getDashboard');
    cy.intercept('GET', '**/directory/**').as('getDirectory');
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('TC-01: Login Berhasil & Intercept Dashboard', () => {
    orangePage.login('Admin', 'admin123');
    cy.wait('@getDashboard'); // Menunggu respon server
    cy.url().should('include', '/dashboard');
  });

  it('TC-02: Fitur Forgot Password', () => {
    cy.get(orangePage.forgotPasswordLink).click();
    cy.url().should('include', '/requestPasswordResetCode');
    cy.get('.orangehrm-forgot-password-title').should('be.visible');
  });

  it('TC-03: Akses Menu Dashboard (Directory) & Intercept', () => {
    orangePage.login('Admin', 'admin123');
    cy.wait('@getDashboard');
    
    cy.get(orangePage.menuDirectory).click();
    cy.wait('@getDirectory'); // Menunggu data directory muncul
    cy.get('.oxd-topbar-header-title').should('contain', 'Directory');
  });
});