import { SnehaResPage } from './app.po';

describe('sneha-res App', () => {
  let page: SnehaResPage;

  beforeEach(() => {
    page = new SnehaResPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
