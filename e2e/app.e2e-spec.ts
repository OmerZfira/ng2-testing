import { IntelligoTestPage } from './app.po';

describe('intelligo-test App', () => {
  let page: IntelligoTestPage;

  beforeEach(() => {
    page = new IntelligoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
