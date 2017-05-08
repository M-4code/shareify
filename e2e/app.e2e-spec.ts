import { ShareifyPage } from './app.po';

describe('shareify App', () => {
  let page: ShareifyPage;

  beforeEach(() => {
    page = new ShareifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
