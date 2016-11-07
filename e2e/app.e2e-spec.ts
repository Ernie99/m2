import { M2Page } from './app.po';

describe('m2 App', function() {
  let page: M2Page;

  beforeEach(() => {
    page = new M2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
