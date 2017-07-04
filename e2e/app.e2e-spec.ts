import { KukulekuPage } from './app.po';

describe('kukuleku App', () => {
  let page: KukulekuPage;

  beforeEach(() => {
    page = new KukulekuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
