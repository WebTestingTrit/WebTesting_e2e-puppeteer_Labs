import { given, then, when } from '../lib/bit.tester.js';

/**
 * tests the content of the page
 * @param {*} pagePuppet puppeteer page
 * @param {*} inputPageUrl page url
 */
export default async function (pagePuppet, inputPageUrl) {
  await given(`A the page at ${inputPageUrl}`, async () => {
    await when(`we get its title`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.title();
      const expected = `AIDD bot (español)`;
      then(`it is ${expected}`, actual, expected);
    });
    await when(`we download all the content`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `networkidle2` });
      const content = await pagePuppet.content();
      const kiloByte = 1024;
      const maximumKiloBytes = 200;
      const maximunExpected = kiloByte * maximumKiloBytes;
      const actual = content.length < maximunExpected;
      const expected = true;
      then(`it is smaller than ${maximunExpected} bytes`, actual, expected);
    });
  });
}
