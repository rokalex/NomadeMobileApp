import { browser, by, element } from 'protractor';

export class NomadeMobileAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
