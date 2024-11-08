import { given, then, when } from '../lib/bit.tester.js';

const inputUserAgent =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';

/**
 * tests the emulation of the page
 * @param {*} pagePuppet puppeteer page
 * @param {*} inputPageUrl page url
 */
export default async function (pagePuppet, inputPageUrl) {
  await given(`Any page of my site`, async () => {
    await pagePuppet.setUserAgent(inputUserAgent);
    await pagePuppet.setViewport({ width: 375, height: 812 });
    await when(`we visit emulating an iPhone`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.evaluate(() => {
        // get content 'Newsletter' inside an a inside a nav
        const nav = document.querySelector(`nav`);
        const a = nav.querySelector(`a`);
        return a.textContent;
      });
      const expected = 'home';
      then(`it shows Newsletter`, actual, expected);
    });
  });
}
