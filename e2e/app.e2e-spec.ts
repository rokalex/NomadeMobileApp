import { NomadeMobileAppPage } from './app.po';

describe('nomade-mobile-app App', () => {
  let page: NomadeMobileAppPage;

  beforeEach(() => {
    page = new NomadeMobileAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
