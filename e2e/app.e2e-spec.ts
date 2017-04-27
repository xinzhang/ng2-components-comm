import { Ng2ComponentsCommPage } from './app.po';

describe('ng2-components-comm App', () => {
  let page: Ng2ComponentsCommPage;

  beforeEach(() => {
    page = new Ng2ComponentsCommPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
