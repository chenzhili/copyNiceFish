import { CopyNiceFishPage } from './app.po';

describe('copy-nice-fish App', () => {
  let page: CopyNiceFishPage;

  beforeEach(() => {
    page = new CopyNiceFishPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
