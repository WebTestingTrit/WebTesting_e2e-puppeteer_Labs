import { given, then, when } from '../lib/bit.tester.js';
/**
 * checks if a site exists
 * @param {*} pagePuppet a browser page managed by puppeteer
 * @param {*} inputPageUrl the url to check
 */
export default async function (pagePuppet, inputPageUrl) {
  await given(`A the url ${inputPageUrl}`, async () => {
    await when(`we visit it`, async () => {
      const response = await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = response.ok();
      const expected = true;
      then(`respond with an ok status code`, actual, expected);
    });
  });
}
