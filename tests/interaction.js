import { given, then, when } from '../lib/bit.tester.js';

export default async function (pagePuppet) {
  await given(`A term to find on duckduckgo`, async () => {
    const inputPageUrl = `https://www.duckduckgo.com`;
    const inputTerm = `aiddbot`;
    await pagePuppet.goto(inputPageUrl, { waitUntil: `networkidle2` });
    await when(`we search ${inputTerm}`, async () => {
      // Start of Selection
      await pagePuppet.focus('input');
      await pagePuppet.keyboard.type(inputTerm);
      await pagePuppet.keyboard.press('Enter');
      await pagePuppet.waitForNavigation();
      const actual = await pagePuppet.evaluate(() => window.find(`aiddbot.com`));
      let expected = true;
      then(`the related site is found`, actual, expected);
    });
  });
}
