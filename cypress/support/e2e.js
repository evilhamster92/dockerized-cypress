// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

export function compare( a, b ) {
    if ( a.a2 < b.b2 ){
      return -1;
    }
    if ( a.a2 > b.b2 ){
      return 1;
    }
    return 0;
  }
  