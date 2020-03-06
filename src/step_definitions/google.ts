import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { $ } from '../utils'; // $ -> means Selector

let t: TestController;

Given('I am open Google\'s search page', async function() {
  t = await this.waitForTestController();
  return  t.navigateTo('http://google.com');
});

When(/^I am typing my search request "(.*)" on Google$/, async (text) => {
  return t.typeText($('input[name="q"]'), text);
});

Then(/^I am pressing "(.*)" key on Google$/, async (text) => {
  const btnSelector = $('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b') 
  const click_btn = t.click(btnSelector);
  return click_btn;
  //return t.pressKey(text);
});

Then(/^I should see that the first Google's result is "(.*)"$/, async (text) => {
  const firstLink = $('#rso').find('a').find('h3');
  const found = await firstLink.innerText;

  expect(found).eql(text)
  //expect(found).to.include(text);
});
