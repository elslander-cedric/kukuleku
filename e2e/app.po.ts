import { browser, by, element } from 'protractor';

export class KukulekuPage {
  navigateTo() {
    return browser.get('/');
  }

  getNofMdGridTiles() {
    return element.all(by.css('md-grid-tile')).count();
  }
}
