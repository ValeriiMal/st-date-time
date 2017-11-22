import { StaxterDatepickerPage } from './app.po';

describe('staxter-datepicker App', () => {
  let page: StaxterDatepickerPage;

  beforeEach(() => {
    page = new StaxterDatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
