import { IlpPortfolioPage } from './app.po';

describe('ilp-portfolio App', () => {
  let page: IlpPortfolioPage;

  beforeEach(() => {
    page = new IlpPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
