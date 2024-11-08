import { given, then, when } from '../lib/bit.tester.js';

const inputSearchUrl = `https://www.duckduckgo.com`;

/**
 * tests the interaction with the page
 * @param {*} pagePuppet puppeteer page
 * @param {*} inputSearchTerm search term
 * @param {*} expectedContent expected content
 */
export default async function (pagePuppet, inputSearchTerm, expectedContent) {
  await given(`A term to find on duckduckgo`, async () => {
    await pagePuppet.goto(inputSearchUrl, { waitUntil: `networkidle2` });
    await when(`we search ${inputSearchTerm} expecting ${expectedContent}`, async () => {
      // Start of Selection
      await pagePuppet.focus('input');
      await pagePuppet.keyboard.type(inputSearchTerm);
      await pagePuppet.keyboard.press('Enter');
      await pagePuppet.waitForNavigation();
      const actual = await pagePuppet.evaluate(() => window.find(expectedContent));
      let expected = true;
      then(`the related site is found`, actual, expected);
    });
  });
}
