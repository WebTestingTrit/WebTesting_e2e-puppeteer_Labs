import { given, then, when } from '../lib/bit.tester.js';

/**
 * tests the validity of the page
 * @param {*} pagePuppet puppeteer page
 * @param {*} inputPageUrl page url
 */
export default async function (pagePuppet, inputPageUrl) {
  await given(`A site url`, async () => {
    await when(`we scrap it for empty links`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.evaluate(() =>
        window.find(`a:is(:not([href]),[href=""],[href="#"])`)
      );
      const expected = false;
      then(`have no one`, actual, expected);
    });
  });
}
