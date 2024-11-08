import { given, then, when } from '../lib/bit.tester.js';

/**
 * tests the existence of the page
 * @param {*} pagePuppet puppeteer page
 * @param {*} inputPageUrl page url
 */
export default async function (pagePuppet, inputPageUrl) {
  await given(`A the url ${inputPageUrl}`, async () => {
    await when(`we visit it`, async () => {
      const response = await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      let actual = response.ok();
      let expected = true;
      then(`respond with an ok status code`, actual, expected);
    });
  });
}
