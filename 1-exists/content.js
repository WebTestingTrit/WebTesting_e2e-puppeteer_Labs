import { given, then, when } from '../lib/bit.tester.js';
/**
 * checks the content of a page
 * @param {*} pagePuppet a browser page managed by puppeteer
 * @param {*} inputPageUrl the url to check
 */
export default async function (pagePuppet, inputPageUrl, expectedTitle) {
  await given(`A the page at ${inputPageUrl}`, async () => {
    await when(`we get its title`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.title();
      then(`it is ${expectedTitle}`, actual, expectedTitle);
    });
  });
}
