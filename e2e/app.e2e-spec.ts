import { KukulekuPage } from './app.po';

describe('kukuleku App', () => {
  let page: KukulekuPage;

  beforeEach(() => {
    page = new KukulekuPage();
  });

  it('should display 13 md-grid-tile elements', () => {
    page.navigateTo();
    expect(page.getNofMdGridTiles()).toEqual(13);
  });
});
